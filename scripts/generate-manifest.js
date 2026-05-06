const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/assets/images/portfolio');
const out = path.join(__dirname, '../src/app/content/portfolio-images.json');

const exts = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif']);

const files = fs.readdirSync(dir)
  .filter(f => exts.has(path.extname(f).toLowerCase()))
  .sort();

fs.writeFileSync(out, JSON.stringify(files, null, 2));
console.log(`Portfolio manifest: ${files.length} images written.`);
