import Chip from '@/components/ui/Chip/Chip';
import classNames from 'classnames';
import type { InfiniteSlidesContentT } from './InfiniteSlides.types';
import { ChipColorsT } from '@/components/ui/Chip/Chip.types';

type InfiniteSlidesProps = {
	content?: InfiniteSlidesContentT;
};

export default function InfiniteSlides({ content }: InfiniteSlidesProps) {
	if (!content) return null;

	const { sliders } = content;

	return (
		<section className="flex flex-col gap-2">
			{sliders && (
				<ul className="flex gap-4">
					{sliders.map(({ name, color }, sliderIndex) => (
						<li className="flex items-center gap-2" key={sliderIndex}>
							<span className="h-2 w-2 rounded-full">{color}</span>
							<span className="text-slate-400">{name}</span>
						</li>
					))}
				</ul>
			)}
			{sliders && (
				<div className="-translate-x-4 md:translate-x-0 w-[calc(100%+2rem)] md:w-auto flex flex-col gap-2 mb-4 last:mb-0">
					{sliders.map((slider, sliderIndex) => (
						<div className="pb-px flex overflow-hidden relative lg:max-w-md before:bg-gradient-to-r before:from-slate-900 before:to-transparent before:h-full before:w-8 before:absolute before:top-0 before:left-0 before:z-10 after:bg-gradient-to-l after:from-slate-900 after:to-transparent after:h-full after:w-8 after:absolute after:top-0 after:right-0 after:z-10" key={sliderIndex}>
							<ul className="animate-negative-infinite pl-2 flex flex-nowrap gap-2">
								{slider.slides &&
									slider.slides.map((item, itemIndex) => (
										<li key={itemIndex}>
											<Chip color={slider.color} text={item.text} />
										</li>
									))}
							</ul>
							<ul className="animate-negative-infinite pl-2 flex flex-nowrap gap-2" aria-hidden="true">
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
