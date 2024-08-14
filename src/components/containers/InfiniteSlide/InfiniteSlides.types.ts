import { ChipColorsT } from '@/components/ui/Chip/Chip.types';

export type InfiniteSlidesContentT = {
	sliders: Array<{
		name: string;
		color: ChipColorsT;
		slides: Array<{
			text: string;
		}>;
	}>;
};
