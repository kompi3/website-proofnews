// Decodes the base64 image files in image-data/ into public/img/.
// Images are stored as base64 text in the repo because the deployment
// pipeline only handles text files; the real binaries are produced here
// at build time (locally and on GitHub Pages) before Astro runs.
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, basename } from 'node:path';

const srcDir = new URL('../image-data/', import.meta.url).pathname;
const outDir = new URL('../public/img/', import.meta.url).pathname;
mkdirSync(outDir, { recursive: true });

let n = 0;
for (const f of readdirSync(srcDir)) {
	if (!f.endsWith('.b64')) continue;
	const outName = basename(f, '.b64');
	const outPath = join(outDir, outName);
	try {
		const buf = Buffer.from(readFileSync(join(srcDir, f), 'utf8').trim(), 'base64');
		writeFileSync(outPath, buf);
		n += 1;
	} catch (e) {
		console.error(`[decode-images] failed on ${f}: ${e.message}`);
		process.exit(1);
	}
}
console.log(`[decode-images] ${n} images decoded to public/img/.`);
