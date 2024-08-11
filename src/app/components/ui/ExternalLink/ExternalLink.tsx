import Link from 'next/link';
import Icon from '../Icon/Icon';
import { LinkT } from '@/app/types/Link.types';
import { styles } from './ExternalLink.styles';

type ExternalLinkProps = LinkT;

export default function ExternalLink({ href, text, target }: ExternalLinkProps) {
	return (
		<Link className={styles.link} href={href} target={target}>
			<Icon className={styles.icon} variant="external-link" />
			<span className={styles.text}>{text}</span>
		</Link>
	);
}
