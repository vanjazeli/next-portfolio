import { ChipColorsT } from '@/components/ui/Chip/Chip.tyles';

export type InfiniteSlidesContentT = {
	sliders: Array<{
		name: string;
		color: ChipColorsT;
		slides: Array<{
			text: string;
		}>;
	}>;
};
