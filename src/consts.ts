// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'ProofNews';
export const SITE_DESCRIPTION =
	'Evidence-based fact-checking: we investigate viral claims, health myths, and tech rumors — and show our work.';
export const SITE_OG_IMAGE =
	'https://ProofNews.biz.id/img/1446776811953-b23d57bd21aa-700.webp';
export const CONTACT_EMAIL = 'contact@ProofNews.biz.id';

// Verdict metadata shared by badges, cards, and structured data.
export const VERDICTS = {
	True: { color: '#15803d', rating: 5, blurb: 'Accurate as stated.' },
	'Mostly True': { color: '#65a30d', rating: 4, blurb: 'Accurate overall, with minor caveats.' },
	Misleading: { color: '#d97706', rating: 2, blurb: 'Contains truth but misleads.' },
	False: { color: '#dc2626', rating: 1, blurb: 'Not supported by the evidence.' },
	Unproven: { color: '#6b7280', rating: 3, blurb: 'Not enough evidence either way.' },
} as const;

export type Verdict = keyof typeof VERDICTS;
