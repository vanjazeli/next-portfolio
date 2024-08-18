import type { LinkT } from '@/types/Link.types';

export type PathwayContentT = {
	items: Array<{
		top?: {
			link?: LinkT;
			period?: string;
		};
		timeframe: string;
		description?: string;
		additionalInfo?: Array<{ text: string }>;
	}>;
};
