import { IconVariantsT } from '../../ui/Icon/Icon.types';

export type HeaderContentT = {
	topInfo: {
		image: {
			url: string;
			alt: string;
			width: number;
			height: number;
		};
		headingLink: {
			url: string;
			text: string;
		};
		position: string;
		description: string;
	};
	bottomLinks: {
		url: string;
		iconVariant: IconVariantsT;
		target: string;
	}[];
};
