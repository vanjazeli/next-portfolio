import { styles } from './Spacer.styles';

type SpacerProps = {
	isSmall?: boolean;
};

export default function Spacer({ isSmall }: SpacerProps) {
	return <div className={isSmall ? styles.small : styles.large}></div>;
}
