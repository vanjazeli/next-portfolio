import Link from 'next/link';
import Icon from '../Icon/Icon';

type ExternalLinkProps = {
	href: string;
	text: string;
	target: string;
};

export default function ExternalLink({ href, text, target }: ExternalLinkProps) {
	return (
		<Link className="flex align-center gap-1 text-slate-200 hover:text-teal-300 w-fit" href={href} target={target}>
			<Icon className="w-4" variant="external-link" />
			<span className="text-sm">{text}</span>
		</Link>
	);
}
