import { ArrowLinkVariantT } from '../../ui/ArrowLink/ArrowLink.types';
import { LinkT } from '@/app/types/Link.types';

export type ArrowLinkT = LinkT & {
	variant?: ArrowLinkVariantT;
};

export type MultipleParagraphsContentT = {
	heading?: string;
	paragraphs?: Array<{
		text: string;
	}>;
	link?: {
		url: string;
		text: string;
		target: string;
		variant?: ArrowLinkVariantT;
	};
};
