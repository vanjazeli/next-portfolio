import { LinkT } from '@/app/types/Link.types';
import { ImageT } from '@/app/types/Image.types';

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

export type CardLinksT = Array<ClickableCardT | NonClickableCardT>;
