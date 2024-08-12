import { ImageT } from '@/app/types/Image.types';
import { IconVariantsT } from '../../ui/Icon/Icon.types';
import { IconLinkT } from '../../ui/Icon/Icon.types';

export type HeaderContentT = {
	topInfo: {
		image: ImageT;
		headingLink: {
			url: string;
			text: string;
		};
		position: string;
		description: string;
		additionalInfo: Array<{
			iconVariant: IconVariantsT;
			text: string;
		}>;
	};
	bottomLinks: Array<IconLinkT>;
};
