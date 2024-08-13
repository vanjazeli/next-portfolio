import { ChipVariantsT } from '@/components/ui/Chip/Chip.tyles';

export type InfiniteSlidesContentT = {
	sliders: Array<{
		name: string;
		isDirectionNegative: boolean;
		variant: ChipVariantsT;
		slides: Array<{
			text: string;
		}>;
	}>;
};
