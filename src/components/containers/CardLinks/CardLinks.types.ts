import { LinkT } from '@/types/Link.types';
import { ImageT } from '@/types/Image.types';

export type ClickableCardT = {
	variant: 'clickable';
	image: ImageT;
	link: LinkT;
	description: string;
	externalLinks: Array<LinkT>;
	additionalItems: Array<string>;
};

export type NonClickableCardT = {
	variant: 'nonClickable';
	heading: string;
	description: string;
	location: string;
	additionalItems: Array<string>;
};

export type CardLinksContentT = Array<ClickableCardT | NonClickableCardT>;
