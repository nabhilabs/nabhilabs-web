const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.join(__dirname, "..", "public");
const EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);

async function walk(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (EXTENSIONS.has(ext)) {
      files.push(fullPath);
    }
  }

  return files;
}

async function convert(filePath) {
  const outPath = filePath.replace(/\.(png|jpe?g)$/i, ".webp");
  const input = sharp(filePath);
  const meta = await input.metadata();

  await input
    .webp({
      quality: meta.hasAlpha ? 85 : 82,
      effort: 4,
    })
    .toFile(outPath);

  const before = (await fs.promises.stat(filePath)).size;
  const after = (await fs.promises.stat(outPath)).size;
  const rel = path.relative(ROOT, outPath).replace(/\\/g, "/");

  return { rel, before, after };
}

async function main() {
  const files = await walk(ROOT);
  let converted = 0;
  let saved = 0;

  for (const filePath of files) {
    const result = await convert(filePath);
    converted += 1;
    saved += result.before - result.after;
    console.log(
      `${result.rel} (${Math.round(result.before / 1024)}KB -> ${Math.round(result.after / 1024)}KB)`,
    );
  }

  console.log(`\nConverted ${converted} images. Saved ~${Math.round(saved / 1024)}KB total.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
