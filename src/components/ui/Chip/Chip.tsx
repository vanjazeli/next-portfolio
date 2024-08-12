import { styles } from './Chip.styles';
import { ChipVariantsT } from './Chip.tyles';

type ChipProps = {
	text: string;
	variant: ChipVariantsT;
};

export default function Chip({ text, variant }: ChipProps) {
	if (variant === 'main') return <span className={styles.main}>{text}</span>;
	if (variant === 'other') return <span className={styles.other}>{text}</span>;
}
