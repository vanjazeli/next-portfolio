import ArrowLink from '@/components/ui/ArrowLink/ArrowLink';
import Chip from '@/components/ui/Chip/Chip';
import { styles, modifiers } from './Pathway.styles';
import cn from '@/utilities/cn';
import type { PathwayContentT } from './Pathway.types';
import Icon from '@/components/ui/Icon/Icon';
import { ChipColorsE } from '@/components/ui/Chip/Chip.enums';
import { removeScriptTags } from '@/utilities/removeScriptTags';

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
		<div className={styles.section}>
			{items && (
				<ul className={styles.list}>
					{items.map((item, itemIndex) => {
						const { link, time, description, location, additionalInfo } = item;
						const mods = getModifiers(itemIndex, items.length);

						return (
							<li className={styles.item} key={itemIndex}>
								<div className={styles.lineHolder}>
									<div className={cn(styles.bullet, mods.bulletMod)}></div>
									{(mods.lineMod || items.length > 1) && <div className={cn(styles.line, mods.lineMod)}></div>}
								</div>
								<div className={cn(styles.contentHolder, mods.contentHolderMod)}>
									{link && <ArrowLink className={styles.link} href={link.href} text={link.text} target={link.target} />}
									{time && (
										<div className={styles.time}>
											{time.timeframe && <p>{time.timeframe}</p>}
											{time.timeframe && time.period && <span>·</span>}
											{time.period && <span>{time.period}</span>}
										</div>
									)}
									{description && <p className={styles.description}>{description}</p>}
									{location && (
										<div className={styles.locationWrap}>
											<Icon className={styles.locationIcon} variant="location" />
											<span dangerouslySetInnerHTML={{ __html: removeScriptTags(location) }} />
										</div>
									)}
									{additionalInfo && (
										<div className={styles.additionalInfo}>
											{additionalInfo.map((info, infoIndex) => (
												<Chip text={info.text} color={ChipColorsE.cyan} key={infoIndex} />
											))}
										</div>
									)}
								</div>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}
