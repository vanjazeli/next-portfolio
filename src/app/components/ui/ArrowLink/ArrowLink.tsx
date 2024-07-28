import Link from 'next/link';
import Icon from '../Icon/Icon';
import classNames from 'classnames';
import type { ArrowLinkVariantT } from './ArrowLink.types';

type ArrowLinkProps = {
	href: string;
	text: string;
	target: string;
	variant?: ArrowLinkVariantT;
	className?: string;
};

export default function ArrowLink({ href, text, target, variant = 'regular', className }: ArrowLinkProps) {
	if (variant === 'regular') {
		return (
			<Link className={classNames('group flex align-center gap-1 text-slate-200 hover:text-teal-300 transition-colors w-fit', className)} href={href} target={target}>
				<span className="font-bold">{text}</span>
				<Icon className="w-4 group-hover:rotate-45 transition-transform" variant="arrow-top-right" />
			</Link>
		);
	}
	if (variant === 'underline') {
		return (
			<Link className={classNames(`group flex align-center gap-1 text-slate-200 w-fit relative`, className)} href={href} target={target}>
				<span className="font-bold">{text}</span>
				<Icon className="w-4 group-hover:translate-x-1 transition-transform" variant="arrow-right" />
				<span className="absolute left-0 bottom-0 right-0 h-[2px] transition-all bg-slate-200 opacity-0 group-hover:bg-teal-300 group-hover:opacity-100"></span>
			</Link>
		);
	}
}
