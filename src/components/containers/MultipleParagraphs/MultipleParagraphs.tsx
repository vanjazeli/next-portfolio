import type { MultipleParagraphsContentT } from './MultipleParagraphs.types';
import ArrowLink from '../../ui/ArrowLink/ArrowLink';
import { styles } from './MultipleParagraphs.styles';
import { removeScriptTags } from '@/utilities/removeScriptTags';

type MultipleParagraphsProps = {
	content?: MultipleParagraphsContentT;
};

export default function MultipleParagraphs({ content }: MultipleParagraphsProps) {
	if (!content) return null;

	const { heading, paragraphs, link } = content;

	return (
		<div>
			{heading && <h2 className={styles.heading}>{heading}</h2>}
			{paragraphs && (
				<div className={styles.paragraphsContainer}>
					{paragraphs.map(({ text }, index) => (
						<p className={styles.paragraph} dangerouslySetInnerHTML={{ __html: removeScriptTags(text) }} key={index} />
					))}
				</div>
			)}
			{link && <ArrowLink href={link.url} text={link.text} target={link.target} variant={link.variant} />}
		</div>
	);
}
