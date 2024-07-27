import Link from 'next/link';
import Image from 'next/image';
import Icon from '../../ui/Icon/Icon';
import { content } from './Header.content';

export default function Header() {
	const { topInfo, bottomLinks } = content;
	const { image, headingLink, position, description } = topInfo;

	return (
		<header className="h-full lg:flex lg:flex-col lg:justify-between lg:py-24 lg:sticky lg:top-0 lg:max-h-dvh">
			{topInfo && (
				<div>
					{image && (
						<div className="mb-4 w-52 h-52 rounded-full overflow-hidden">
							<Image src={image.url} alt={image.alt} height={image.height} width={image.width} priority />
						</div>
					)}
					{headingLink && (
						<h1 className="mb-3 text text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
							<Link className="hover:opacity-70 transition-opacity" href={headingLink.url}>
								{headingLink.text}
							</Link>
						</h1>
					)}
					{position && <h2 className="mb-4 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">{position}</h2>}
					{description && <p className="mb-4 max-w-xs leading-normal text-slate-400" dangerouslySetInnerHTML={{ __html: description }} />}
				</div>
			)}
			{bottomLinks && (
				<ul className="flex gap-4 text-slate-400">
					{bottomLinks.map((bottomLink, index) => (
						<li className="w-8" key={index}>
							<Link className="hover:opacity-70 transition-opacity" href={bottomLink.url} target={bottomLink.target}>
								<Icon variant={bottomLink.iconVariant} />
							</Link>
						</li>
					))}
				</ul>
			)}
		</header>
	);
}
