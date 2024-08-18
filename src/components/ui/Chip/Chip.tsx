import { styles } from './Chip.styles';
import { ChipColorsT } from './Chip.types';
import cn from '@/utilities/cn';

type ChipProps = {
	text: string;
	color: ChipColorsT;
};

export default function Chip({ text, color }: ChipProps) {
	return <span className={cn(styles.chip, styles[color])}>{text}</span>;
}
