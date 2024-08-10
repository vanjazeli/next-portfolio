import Link from 'next/link';
import Icon from '../Icon/Icon';
import { LinkT } from '@/app/types/Link.types';

type ExternalLinkProps = LinkT;

export default function ExternalLink({ href, text, target }: ExternalLinkProps) {
	return (
		<Link className="flex align-center gap-1 text-slate-200 hover:text-teal-300 w-fit transition-colors" href={href} target={target}>
			<Icon className="w-4" variant="external-link" />
			<span className="font-bold">{text}</span>
		</Link>
	);
}
