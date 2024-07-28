import type { MultipleParagraphsContentT } from './MultipleParagraphs.types';
import ArrowLink from '../../ui/ArrowLink/ArrowLink';

type MultipleParagraphsProps = {
	content: MultipleParagraphsContentT;
};

export default function MultipleParagraphs({ content }: MultipleParagraphsProps) {
	const { heading, paragraphs, link } = content;
	const { url, text, target, variant } = link;

	return (
		<section>
			{heading && <h2 className="text-3xl font-bold tracking-tight mb-4">{heading}</h2>}
			{paragraphs && (
				<div className="flex flex-col gap-3">
					{paragraphs.map(({ text }, index) => (
						<p className="text-slate-400" dangerouslySetInnerHTML={{ __html: text }} key={index} />
					))}
				</div>
			)}
			{link && <ArrowLink className="mt-16" href={url} text={text} target={target} variant={variant} />}
		</section>
	);
}
