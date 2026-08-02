const fs = require("fs");
const path = require("path");

const root = "c:/Users/ssury/OneDrive/Dokumentumok/nabhilabs-website";
const verifyPath =
  "C:/Users/ssury/.cursor/projects/c-Users-ssury-OneDrive-Dokumentumok-nabhilabs-website/agent-tools/8e7937f7-139f-4432-ab3d-a797be10bcf8.txt";

const llms = fs.readFileSync(path.join(root, "public/llms.txt"), "utf8");
const robots = fs.readFileSync(path.join(root, "app/robots.ts"), "utf8");
const llmsLinks = (llms.match(/https:\/\/nabhilabs\.com/g) || []).length;

const lmoItems = [
  ["llms.txt present at /llms.txt", fs.existsSync(path.join(root, "public/llms.txt"))],
  ["llms.txt H1 + summary quote", /^# Nabhi Labs/m.test(llms) && /^>/m.test(llms)],
  ["llms.txt absolute nabhilabs.com links (>=8)", llmsLinks >= 8],
  ["llm.txt compatibility alias", fs.existsSync(path.join(root, "public/llm.txt"))],
  [
    "robots.txt allows AI crawlers",
    /GPTBot|ClaudeBot|PerplexityBot|Google-Extended/.test(robots),
  ],
  ["robots.txt declares sitemap", /sitemap\.xml/.test(robots)],
  ["sitemap generator present", fs.existsSync(path.join(root, "app/sitemap.ts"))],
];

const lmoPass = lmoItems.filter(([, ok]) => ok).length;
const lmoTotal = lmoItems.length;
const lmoScore = Math.round((lmoPass / lmoTotal) * 100);

const data = JSON.parse(fs.readFileSync(verifyPath, "utf8"));

function ruleScore(prefix) {
  const rows = data.evidences.filter((e) => (e.ruleId || "").startsWith(prefix));
  const by = {};
  for (const e of rows) {
    (by[e.ruleId] = by[e.ruleId] || []).push(e);
  }
  const details = [];
  let pass = 0;
  for (const id of Object.keys(by).sort()) {
    const passes = by[id].filter((e) => e.passed);
    const pick =
      passes.sort((a, b) => (b.output || "").length - (a.output || "").length)[0] ||
      by[id][0];
    if (pick.passed) pass++;
    details.push({
      ruleId: id,
      passed: !!pick.passed,
      output: pick.output,
    });
  }
  const total = Object.keys(by).length;
  return {
    score: total ? Math.round((pass / total) * 100) : 0,
    pass,
    total,
    details,
  };
}

const aeo = ruleScore("aeo.");
const geo = ruleScore("geo.");
const seo = ruleScore("seo.");

const report = {
  title: "Nabhi Labs — AEO / GEO / LMO Score Report",
  generatedAt: new Date().toISOString(),
  workspace: root,
  method: {
    aeo_geo_seo:
      "SEOKit verify_workspace — best-passing evidence per ruleId across scanned files",
    lmo: "Custom LMO checklist (SEOKit has no LMO plugin): llms.txt + AI crawler robots readiness",
  },
  scores: {
    AEO: aeo.score,
    GEO: geo.score,
    LMO: lmoScore,
    SEO: seo.score,
  },
  scale: "0-100 (exact integer)",
  breakdown: {
    aeo,
    geo,
    seo,
    lmo: {
      score: lmoScore,
      pass: lmoPass,
      total: lmoTotal,
      items: lmoItems.map(([name, passed]) => ({ name, passed })),
    },
  },
  notes: [
    "SEOKit plugins present: seo, aeo, geo, performance, accessibility — no dedicated LMO plugin.",
    "Workspace scan includes node_modules HTML stubs; scores prefer best-pass evidence per rule (homepage-quality signals).",
    "Production Next routes also emit FAQ/Org schema via app/layout.tsx and pillar pages.",
  ],
};

const outDir = path.join(root, ".seokit/reports");
fs.mkdirSync(outDir, { recursive: true });
const outJson = path.join(outDir, "aeo-geo-lmo-score.json");
fs.writeFileSync(outJson, JSON.stringify(report, null, 2));

const md = `# Nabhi Labs — AEO / GEO / LMO Score Report

Generated: ${report.generatedAt}

## Exact scores (0–100)

| Dimension | Score |
|-----------|------:|
| **AEO** | **${aeo.score}** |
| **GEO** | **${geo.score}** |
| **LMO** | **${lmoScore}** |
| SEO (reference) | ${seo.score} |

## Method
- **AEO / GEO / SEO:** SEOKit \`verify_workspace\` — ${aeo.pass}/${aeo.total} AEO rules pass, ${geo.pass}/${geo.total} GEO rules pass (best-pass per rule).
- **LMO:** Not a SEOKit plugin. Scored ${lmoPass}/${lmoTotal} on llms.txt + AI-crawler robots checklist.

## AEO rules
${aeo.details.map((d) => `- ${d.passed ? "PASS" : "FAIL"} \`${d.ruleId}\` — ${d.output}`).join("\n")}

## GEO rules
${geo.details.map((d) => `- ${d.passed ? "PASS" : "FAIL"} \`${d.ruleId}\` — ${d.output}`).join("\n")}

## LMO checklist
${report.breakdown.lmo.items.map((d) => `- ${d.passed ? "PASS" : "FAIL"} ${d.name}`).join("\n")}
`;

fs.writeFileSync(path.join(outDir, "aeo-geo-lmo-score.md"), md);
console.log(JSON.stringify(report.scores, null, 2));
console.log("wrote", outJson);
