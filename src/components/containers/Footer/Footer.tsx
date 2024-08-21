import { FooterContentT } from './Footer.types';
import { removeScriptTags } from '@/utilities/removeScriptTags';

type FooterProps = {
	content?: FooterContentT;
};

export default function Footer({ content }: FooterProps) {
	if (!content) return null;

	const { listItems, copyrightHolder } = content;

	const year = new Date().getFullYear();

	return (
		<footer>
			<ul className="flex flex-col gap-4 max-w-lg">
				{listItems?.map(({ text }, itemIndex) => (
					<li key={itemIndex} dangerouslySetInnerHTML={{ __html: removeScriptTags(text) }} />
				))}
				<li>
					<p className="text-xs text-slate-400">Copyright &copy; {`${year} ${copyrightHolder}`} All Rights Reserved.</p>
				</li>
			</ul>
		</footer>
	);
}
