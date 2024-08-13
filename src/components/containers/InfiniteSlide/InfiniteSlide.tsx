import Chip from '@/components/ui/Chip/Chip';

export default function InfiniteSlide() {
	const mainSlides = [
		{
			text: 'HTML',
		},
		{
			text: 'CSS',
		},
		{
			text: 'SCSS',
		},
		{
			text: 'BEM',
		},
		{
			text: 'Tailwind CSS',
		},
		{
			text: 'JavaScript',
		},
		{
			text: 'TypeScript',
		},
		{
			text: 'GSAP',
		},
		{
			text: 'React',
		},
	];

	const otherSlides = [
		{
			text: 'Redux',
		},
		{
			text: 'Zustand',
		},
		{
			text: 'Material UI',
		},
		{
			text: 'Tanstack Query',
		},
		{
			text: 'Axios',
		},
		{
			text: 'React Router',
		},
		{
			text: 'Storybook',
		},
		{
			text: 'React Hook Form',
		},
		{
			text: 'Next.js',
		},
		{
			text: 'Yup',
		},
		{
			text: 'Accessibility',
		},
		{
			text: 'Atomic Design',
		},
	];

	return (
		<section>
			<div className="flex flex-col gap-2">
				<div className="pb-px flex overflow-hidden relative lg:max-w-md before:bg-gradient-to-r before:from-slate-900 before:to-transparent before:h-full before:w-8 before:absolute before:top-0 before:left-0 before:z-10 after:bg-gradient-to-l after:from-slate-900 after:to-transparent after:h-full after:w-8 after:absolute after:top-0 after:right-0 after:z-10">
					<ul className="animate-negative-infinite pl-2 flex flex-nowrap gap-2">
						{mainSlides &&
							mainSlides.map((item, itemIndex) => (
								<li key={itemIndex}>
									<Chip variant="main" text={item.text} />
								</li>
							))}
					</ul>
					<ul className="animate-negative-infinite pl-2 flex flex-nowrap gap-2" aria-hidden="true">
						{mainSlides &&
							mainSlides.map((item, itemIndex) => (
								<li key={itemIndex}>
									<Chip variant="main" text={item.text} />
								</li>
							))}
					</ul>
				</div>
				<div className="pb-px flex overflow-hidden relative lg:max-w-md before:bg-gradient-to-r before:from-slate-900 before:to-transparent before:h-full before:w-8 before:absolute before:top-0 before:left-0 before:z-10 after:bg-gradient-to-l after:from-slate-900 after:to-transparent after:h-full after:w-8 after:absolute after:top-0 after:right-0 after:z-10">
					<ul className="animate-positive-infinite pl-2 flex flex-nowrap gap-2">
						{otherSlides &&
							otherSlides.map((item, itemIndex) => (
								<li key={itemIndex}>
									<Chip variant="other" text={item.text} />
								</li>
							))}
					</ul>
					<ul className="animate-positive-infinite pl-2 flex flex-nowrap gap-2" aria-hidden="true">
						{otherSlides &&
							otherSlides.map((item, itemIndex) => (
								<li key={itemIndex}>
									<Chip variant="other" text={item.text} />
								</li>
							))}
					</ul>
				</div>
			</div>
		</section>
	);
}
