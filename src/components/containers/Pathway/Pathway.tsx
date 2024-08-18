import ArrowLink from '@/components/ui/ArrowLink/ArrowLink';
import Chip from '@/components/ui/Chip/Chip';
import { styles, modifiers } from './Pathway.styles';
import cn from '@/utilities/cn';
import type { PathwayContentT } from './Pathway.types';

type PathwayProps = {
	content?: PathwayContentT;
};

function getModifiers(itemIndex: number, itemsLength: number) {
	if (itemsLength === 1) {
		return {};
	}
	if (itemIndex === 0) {
		return {};
	}
	if (itemIndex === itemsLength - 1) {
		return {
			bulletMod: modifiers.bulletMod,
			lineMod: modifiers.lineMod,
			contentHolderMod: modifiers.contentHolderMod,
		};
	}
	return {
		bulletMod: modifiers.bulletMod,
		lineMod: modifiers.lineFullMod,
		contentHolderMod: modifiers.contentHolderMod,
	};
}

export default function Pathway({ content }: PathwayProps) {
	if (!content) return null;

	const { items } = content;

	return (
		<section className={styles.section}>
			{items && (
				<ul className={styles.list}>
					{items.map((item, itemIndex) => {
						const { top, timeframe, description, additionalInfo } = item;
						const mods = getModifiers(itemIndex, items.length);

						return (
							<li className={styles.item} key={itemIndex}>
								<div className={styles.lineHolder}>
									<div className={cn(styles.bullet, mods.bulletMod)}></div>
									{(mods.lineMod || items.length > 1) && <div className={cn(styles.line, mods.lineMod)}></div>}
								</div>
								<div className={cn(styles.contentHolder, mods.contentHolderMod)}>
									{top && (
										<div className={styles.headingHolder}>
											{top.link && <ArrowLink className={styles.link} href={top.link.href} text={top.link.text} target={top.link.target} />}
											{top.period && <span className={styles.period}>{top.period}</span>}
										</div>
									)}
									{timeframe && <p className={styles.timeframe}>{timeframe}</p>}
									{description && <p className={styles.description}>{description}</p>}
									{additionalInfo && (
										<div className={styles.additionalInfo}>
											{additionalInfo.map((info, infoIndex) => (
												<Chip text={info.text} color="teal" key={infoIndex} />
											))}
										</div>
									)}
								</div>
							</li>
						);
					})}
				</ul>
			)}
		</section>
	);
}
