import Image from 'next/image';
import ArrowLink from '../../ui/ArrowLink/ArrowLink';
import ExternalLink from '../../ui/ExternalLink/ExternalLink';
import Icon from '../../ui/Icon/Icon';
import { CardLinksContentT } from './CardLinks.types';

type CardLinksProps = {
	content?: CardLinksContentT;
};

export default function CardLinks({ content }: CardLinksProps) {
	if (!content) return null;

	return (
		<ul className="flex flex-col gap-10">
			{content.map((item, index) => {
				if (item.variant === 'clickable')
					return (
						<li key={index}>
							<div className="group isolate flex gap-4 lg:p-4 relative before:absolute before:top-0 before:left-0 before:right-0 before:-z-10 before:bottom-0 before:bg-white before:rounded-md before:opacity-0 before:transition-opacity hover:before:opacity-5">
								<div className="w-1/4">
									<div className="aspect-square relative border border-slate-800 rounded-md overflow-hidden transition-colors group-hover:border-teal-300">{item.image && <Image className="absolute top-0 left-0 w-full h-full object-cover" src={item.image.url} alt={item.image.alt} width={item.image.width} height={item.image.height} />}</div>
								</div>
								<div className="w-3/4">
									{item.link && <ArrowLink className="mb-1" href={item.link.href} variant="regular" text={item.link.text} target={item.link.target} />}
									{item.description && <p className="text-slate-400 mb-3">{item.description}</p>}
									{item.externalLinks && (
										<div className="flex gap-3 flex-wrap mb-3">
											{item.externalLinks.map((externalLink, externalLinkIndex) => (
												<ExternalLink key={externalLinkIndex} href={externalLink.href} text={externalLink.text} target={externalLink.target} />
											))}
										</div>
									)}
									{item.additionalItems && (
										<div className="flex gap-2 flex-wrap">
											{item.additionalItems.map((additionalItem, additionalItemIndex) => (
												<span key={additionalItemIndex} className="bg-teal-900 border border-teal-800 text-teal-300 bg-opacity-20 px-2 py-1 rounded-full text-xs">
													{additionalItem}
												</span>
											))}
										</div>
									)}
								</div>
							</div>
						</li>
					);

				if (item.variant === 'nonClickable')
					return (
						<li key={index}>
							<div className="flex gap-4 lg:p-4">
								<div className="w-1/4">
									<div className="border border-teal-300 rounded-md aspect-square flex justify-center items-center">
										<span className="text-4xl font-bold text-teal-300">NDA</span>
									</div>
								</div>
								<div className="w-3/4">
									{item.heading && <h3 className="font-bold text-slate-200 mb-1">{item.heading}</h3>}
									{item.description && <p className="text-slate-400 mb-3">{item.description}</p>}
									{item.location && (
										<div className="flex align-center gap-2 text-slate-200 mb-3">
											<Icon className="w-4 text-slate-400" variant="location" />
											<span className="font-bold">Client location:</span>
											<span>{item.location}</span>
										</div>
									)}
									{item.additionalItems && (
										<div className="flex gap-2 flex-wrap">
											{item.additionalItems.map((additionalItem, additionalItemIndex) => (
												<span key={additionalItemIndex} className="bg-teal-900 border border-teal-800 text-teal-300 bg-opacity-20 px-2 py-1 rounded-full text-xs">
													{additionalItem}
												</span>
											))}
										</div>
									)}
								</div>
							</div>
						</li>
					);
			})}
		</ul>
	);
}
