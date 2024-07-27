import Link from 'next/link';
import Icon from '../Icon/Icon';
import classNames from 'classnames';

type ArrowLinkProps = {
	href: string;
	text: string;
	target: string;
	className?: string;
};

export default function ArrowLink({ href, text, target, className }: ArrowLinkProps) {
	return (
		<Link className={classNames('group flex align-center gap-1 text-slate-200 hover:text-blue-500 transition-colors w-fit', className)} href={href} target={target}>
			<span className="font-bold">{text}</span>
			<Icon className="w-4 group-hover:rotate-45 transition-transform" variant="arrow-top-right" />
		</Link>
	);
}
