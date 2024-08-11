import Image from 'next/image';
import ArrowLink from '../../ui/ArrowLink/ArrowLink';
import ExternalLink from '../../ui/ExternalLink/ExternalLink';
import Icon from '../../ui/Icon/Icon';
import { CardLinksContentT } from './CardLinks.types';
import { styles } from './CardLinks.styles';

type CardLinksProps = {
	content?: CardLinksContentT;
};

export default function CardLinks({ content }: CardLinksProps) {
	if (!content) return null;

	return (
		<ul className={styles.list}>
			{content.map((item, index) => {
				if (item.variant === 'clickable')
					return (
						<li key={index}>
							<div className={styles.clickableWrap}>
								<div className={styles.imageHolder}>
									<div className={styles.imageWrap}>{item.image && <Image className={styles.image} src={item.image.url} alt={item.image.alt} width={item.image.width} height={item.image.height} />}</div>
								</div>
								<div className={styles.textContainer}>
									{item.link && <ArrowLink className={styles.link} href={item.link.href} variant="regular" text={item.link.text} target={item.link.target} />}
									{item.description && <p className={styles.description}>{item.description}</p>}
									{item.externalLinks && (
										<div className={styles.externalLinksWrap}>
											{item.externalLinks.map((externalLink, externalLinkIndex) => (
												<ExternalLink key={externalLinkIndex} href={externalLink.href} text={externalLink.text} target={externalLink.target} />
											))}
										</div>
									)}
									{item.additionalItems && (
										<div className={styles.additionalItemsWrap}>
											{item.additionalItems.map((additionalItem, additionalItemIndex) => (
												<span key={additionalItemIndex} className={styles.additionalItem}>
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
							<div className={styles.nonClickableWrap}>
								<div className={styles.imageHolder}>
									<div className={styles.nonClickableImageWrap}>
										<span className={styles.nonClickableImageText}>NDA</span>
									</div>
								</div>
								<div className={styles.textContainer}>
									{item.heading && <h3 className={styles.heading}>{item.heading}</h3>}
									{item.description && <p className={styles.description}>{item.description}</p>}
									{item.location && (
										<div className={styles.locationWrap}>
											<Icon className={styles.locationIcon} variant="location" />
											<span className={styles.locationText}>Client location:</span>
											<span>{item.location}</span>
										</div>
									)}
									{item.additionalItems && (
										<div className={styles.additionalItemsWrap}>
											{item.additionalItems.map((additionalItem, additionalItemIndex) => (
												<span key={additionalItemIndex} className={styles.additionalItem}>
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
