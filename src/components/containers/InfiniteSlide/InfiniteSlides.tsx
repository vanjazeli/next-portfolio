import Chip from '@/components/ui/Chip/Chip';
import type { InfiniteSlidesContentT } from './InfiniteSlides.types';
import { styles, modifiers } from './InfiniteSlides.styles';
import cn from '@/utilities/cn';

type InfiniteSlidesProps = {
	content?: InfiniteSlidesContentT;
};

export default function InfiniteSlides({ content }: InfiniteSlidesProps) {
	if (!content) return null;

	const { sliders } = content;

	return (
		<section className={styles.section}>
			{sliders && (
				<ul className={styles.legendList}>
					{sliders.map(({ name, color }, sliderIndex) => (
						<li className={styles.legendItem} key={sliderIndex}>
							<span className={cn(styles.legendBullet, modifiers[color])}></span>
							<span className={styles.legendText}>{name}</span>
						</li>
					))}
				</ul>
			)}
			{sliders && (
				<div className={styles.slidesWrap}>
					{sliders.map((slider, sliderIndex) => (
						<div className={styles.slideHolder} key={sliderIndex}>
							<ul className={styles.slide}>
								{slider.slides &&
									slider.slides.map((item, itemIndex) => (
										<li key={itemIndex}>
											<Chip color={slider.color} text={item.text} />
										</li>
									))}
							</ul>
							<ul className={styles.slide} aria-hidden="true">
								{slider.slides &&
									slider.slides.map((item, itemIndex) => (
										<li key={itemIndex}>
											<Chip color={slider.color} text={item.text} />
										</li>
									))}
							</ul>
						</div>
					))}
				</div>
			)}
		</section>
	);
}
