import Link from 'next/link';
import Icon from '../Icon/Icon';
import classNames from 'classnames';
import type { ArrowLinkVariantT } from './ArrowLink.types';
import type { LinkT } from '@/app/types/Link.types';
import { styles } from './ArrowLink.styles';

type ArrowLinkProps = LinkT & {
	variant?: ArrowLinkVariantT;
	className?: string;
};

export default function ArrowLink({ href, text, target, variant = 'regular', className }: ArrowLinkProps) {
	if (variant === 'regular') {
		return (
			<Link className={classNames(styles.regularLink, className)} href={href} target={target}>
				<span className={styles.text}>{text}</span>
				<Icon className={styles.regularIcon} variant="arrow-top-right" />
			</Link>
		);
	}
	if (variant === 'underline') {
		return (
			<Link className={classNames(styles.underlineLink, className)} href={href} target={target}>
				<span className={styles.text}>{text}</span>
				<Icon className={styles.underlineIcon} variant="arrow-right" />
				<span className={styles.underlineLine}></span>
			</Link>
		);
	}
}
