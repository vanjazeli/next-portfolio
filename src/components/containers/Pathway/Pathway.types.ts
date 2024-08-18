import type { LinkT } from '@/types/Link.types';

export type PathwayContentT = {
	items: Array<{
		link?: LinkT;
		time?: {
			timeframe: string;
			period?: string;
		};
		description?: string;
		location?: string;
		additionalInfo?: Array<{ text: string }>;
	}>;
};
