import { styles } from './Chip.styles';
import { ChipColorsT } from './Chip.types';
import classNames from 'classnames';

type ChipProps = {
	text: string;
	color: ChipColorsT;
};

export default function Chip({ text, color }: ChipProps) {
	return <span className={classNames(styles.chip, styles[color])}>{text}</span>;
}
