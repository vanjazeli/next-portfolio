import Link from 'next/link';
import Image from 'next/image';
import Icon from '../../ui/Icon/Icon';
import { HeaderContentT } from './Header.types';
import { styles } from './Header.styles';
import { removeScriptTags } from '@/utilities/removeScriptTags';

type HeaderProps = {
	content?: HeaderContentT;
};

export default function Header({ content }: HeaderProps) {
	if (!content) return null;

	const { topInfo, bottomLinks } = content;
	const { image, headingLink, position, description, additionalInfo } = topInfo;

	return (
		<header className={styles.header}>
			{topInfo && (
				<div className={styles.topInfo}>
					{/* {image && (
						<div className={styles.imageWrap}>
							<Image className={styles.image} src={image.url} alt={image.alt} height={image.height} width={image.width} priority />
						</div>
					)} */}
					{headingLink && (
						<h1 className={styles.heading}>
							<Link className={styles.headingLink} href={headingLink.url}>
								{headingLink.text}
							</Link>
						</h1>
					)}
					{position && <h2 className={styles.position}>{position}</h2>}
					{description && <p className={styles.description} dangerouslySetInnerHTML={{ __html: removeScriptTags(description) }} />}
					{additionalInfo && (
						<ul className={styles.additionalList}>
							{additionalInfo.map(({ iconVariant, text }, index) => (
								<li className={styles.item} key={index}>
									<Icon className={styles.additionalIcon} variant={iconVariant} />
									<span>{text}</span>
								</li>
							))}
						</ul>
					)}
				</div>
			)}
			{bottomLinks && (
				<ul className={styles.bottomList}>
					{bottomLinks.map((bottomLink, index) => (
						<li className={styles.bottomItem} key={index}>
							<Link className={styles.bottomLink} href={bottomLink.url} target={bottomLink.target}>
								<Icon variant={bottomLink.iconVariant} />
							</Link>
						</li>
					))}
				</ul>
			)}
		</header>
	);
}
