const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const raw = fs
  .readFileSync(path.join(root, "nabhilabsKeysWord.txt"), "utf8")
  .replace(/\r\n/g, "\n")
  .replace(/\r/g, "\n");

function skipLine(line) {
  const t = line.trim();
  if (!t) return true;
  if (/^Cluster (Name|Priority)/i.test(t)) return true;
  if (/^Primary Keyword\s*:/i.test(t)) return true;
  if (/^Search Intent\s*:/i.test(t)) return true;
  if (/^These are /i.test(t)) return true;
  if (/^This cluster /i.test(t)) return true;
  if (/^⭐/.test(t)) return true;
  if (/^format\s*:/i.test(t)) return true;
  if (/^[│├└─]/.test(t)) return true;
  if (/^\|/.test(t)) return true;
  if (/^#+\s/.test(t)) return true;
  if (/^>\s/.test(t)) return true;
  if (/^---+$/.test(t)) return true;
  if (/^\*\*/.test(t)) return true;
  if (/^Since NABHI/i.test(t)) return true;
  if (/^I recommend/i.test(t)) return true;
  if (/^Don't create/i.test(t)) return true;
  if (/^Each page/i.test(t)) return true;
  if (/^Perfect\./i.test(t)) return true;
  if (/^Recommendation$/i.test(t)) return true;
  if (/^##\s/.test(t)) return true;
  if (t.length < 2 || t.length > 120) return true;
  return false;
}

const parts = raw.split(/\n(?=# Cluster |\> \*\*Cluster )/);
const clusters = [];
const all = new Set();

for (const part of parts) {
  // Prefer Cluster ID block: "Primary Keyword : Foo" / "Primary Keyword   : Foo"
  const primaryMatch =
    part.match(/Primary Keyword\s*:\s*([^\n`]+)/i) ||
    part.match(/# 1\. Primary Keyword\n+```text\n([^\n]+)/i);
  let primary = primaryMatch ? primaryMatch[1].trim() : null;
  if (!primary || primary === "|" || primary.length < 2) continue;

  const nameMatch = part.match(/Cluster Name\s*:\s*([^\n`]+)/i);
  const name = nameMatch ? nameMatch[1].trim() : primary;

  const blocks = [...part.matchAll(/```(?:text)?\n([\s\S]*?)\n```/g)];
  const kws = [];

  for (const m of blocks) {
    for (const line of m[1].split("\n")) {
      const t = line.replace(/^[\*\-•]\s*/, "").trim();
      if (skipLine(t)) continue;
      if (
        /^(Cluster Name|Primary Keyword|Cluster Priority|Search Intent)\b/i.test(
          t,
        )
      ) {
        continue;
      }
      kws.push(t);
      all.add(t);
    }
  }

  for (const line of part.split("\n")) {
    const m = line.match(/^\*\s+(.+)$/);
    if (!m) continue;
    const t = m[1].replace(/\*\*/g, "").trim();
    if (!skipLine(t) && t.length < 80) {
      kws.push(t);
      all.add(t);
    }
  }

  // Always include the primary itself
  kws.unshift(primary);
  all.add(primary);

  const uniq = [...new Set(kws.map((k) => k.trim()).filter(Boolean))];
  clusters.push({
    name: name || primary,
    primary,
    keywords: uniq,
  });
}

const out = {
  source: "nabhilabsKeysWord.txt",
  generatedAt: new Date().toISOString(),
  primaryCount: clusters.length,
  uniqueKeywordCount: all.size,
  clusters,
  allKeywords: [...all].sort((a, b) => a.localeCompare(b)),
};

const outPath = path.join(root, "lib", "keyword-bank.json");
fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
console.log(
  JSON.stringify(
    {
      wrote: outPath,
      clusters: out.primaryCount,
      unique: out.uniqueKeywordCount,
      primaries: clusters.map((c) => c.primary),
    },
    null,
    2,
  ),
);
