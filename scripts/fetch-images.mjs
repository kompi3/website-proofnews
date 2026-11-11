// One-time (and repeatable) image pipeline: downloads every Unsplash photo used
// by the site and generates self-hosted, properly-sized AVIF + WebP variants.
// Run: node ./scripts/fetch-images.mjs
// Output: public/img/<id>-1000.avif and <id>-700.avif|webp
// The generated binaries are then base64-encoded into image-data/*.b64, which
// is what actually ships in the repo (see scripts/decode-images.mjs).

import { existsSync, mkdirSync } from 'node:fs';
import sharp from 'sharp';

const IDS = [
	'1419242902214-272b3f66ee7a',
	'1446776811953-b23d57bd21aa',
	'1447433589675-4aaa569f3e05',
	'1454789548928-9efd52dc4031',
	'1462331940025-496dfbfc7564',
	'1465101162946-4377e57745c3',
	'1502134249126-9f3755a50d78',
	'1517976487492-5750f3195933',
	'1505751172876-fa1923c5c528',
	'1576091160550-2173dba999ef',
	'1512621776951-a57141f2eefd',
	'1584036561566-baf8f5f1b144',
	'1518770660439-4636190af475',
	'1526374965328-7f61d4dc18c5',
	'1550751827-4bd374c3f58b',
	'1677442136019-21780ecad995',
	'1511707171634-5f897ff02aa9',
	'1594663653925-365bcbf7ef86',
	'1451187580459-43490279c0fa',
	'1526304640581-d334cdbbf45e',
	'1534616042650-80f5c9b61f09',
	'1520942702018-0862200e6873',
	'1559757175-5700dde675bc',
	// Tahap C expansion (2026-11-11) — topic notes for photo selection:
	'1576091160399-112ba8d25d1d', // doctor with stethoscope holding a smartphone (telemedicine)
	'1550831107-1553da8c8464', // surgeon in scrubs and mask, operating room
	'1631815589968-fdb09a223b1e', // blood-pressure check, nurse with patient
	'1584515933487-779824d29309', // clasped hands, elderly care / caregiving
	'1579154204601-01588f351e67', // research laboratory interior with benches and analysers
	'1507413245164-6160d8298b31', // neuron illustration, purple/pink (brain science)
	'1498837167922-ddd27525d352', // healthy food spread: salads, grains, fish, vegetables
	'1546182990-dffeafbe841d', // lion walking on grassland
	'1470093851219-69951fcbb533', // arctic fox sitting in snow
	'1437622368342-7a3d73a34c8f', // sea turtle swimming underwater
	'1563986768609-322da13575f3', // person working with laptop and phone (remote work / tech)
	'1512941937669-90a1b58e7e9c', // smartphone home screen with social media apps, close-up
	'1541781774459-bb2af2f05b55', // cat sleeping under a blanket (sleep / pets)
	'1504608524841-42fe6f032b4b', // dramatic sunset clouds seen from above
	'1534088568595-a066f410bcda', // dark storm clouds (weather / climate)
	'1554224155-6726b3ff858f', // paperwork, receipts and calculator flat-lay (money / taxes / scams)
	'1495197359483-d092478c170a', // woman lying face-down on a bed, exhausted (sleep / fatigue)
];

const OUT = new URL('../public/img/', import.meta.url).pathname;
mkdirSync(OUT, { recursive: true });

// 16:9 crops matching the site's CSS (aspect-ratio: 16/9 + object-fit: cover),
// so no layout shift and no wasted pixels. Kept compact (each file < ~70KB)
// so they can be deployed through the repo.
const VARIANTS = [
	{ suffix: '1000', width: 1000, height: 563 }, // article body (720px column)
	{ suffix: '700', width: 700, height: 394 }, // cards / thumbnails
];

for (const id of IDS) {
	const url = `https://images.unsplash.com/photo-${id}?q=85&w=1600&auto=format&fit=crop`;
	const res = await fetch(url);
	if (!res.ok) {
		console.error(`FAILED ${id}: HTTP ${res.status}`);
		continue;
	}
	const buf = Buffer.from(await res.arrayBuffer());
	for (const v of VARIANTS) {
		const base = `${OUT}${id}-${v.suffix}`;
		if (existsSync(`${base}.avif`) && existsSync(`${base}.webp`)) {
			continue; // already generated
		}
		const pipeline = sharp(buf).resize(v.width, v.height, { fit: 'cover' });
		await pipeline.clone().avif({ quality: 52 }).toFile(`${base}.avif`);
		await pipeline.clone().webp({ quality: 68 }).toFile(`${base}.webp`);
	}
	console.log(`done ${id}`);
}
console.log('All images processed.');
