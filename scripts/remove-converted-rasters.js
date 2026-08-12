const fs = require("fs");
const path = require("path");

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

async function main() {
  const files = await walk(ROOT);
  let removed = 0;

  for (const filePath of files) {
    const webpPath = filePath.replace(/\.(png|jpe?g)$/i, ".webp");
    if (!fs.existsSync(webpPath)) {
      console.warn(`Skipping (no webp): ${path.relative(ROOT, filePath)}`);
      continue;
    }

    await fs.promises.unlink(filePath);
    removed += 1;
    console.log(`Removed ${path.relative(ROOT, filePath).replace(/\\/g, "/")}`);
  }

  console.log(`\nRemoved ${removed} raster originals.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
