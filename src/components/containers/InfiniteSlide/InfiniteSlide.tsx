import Chip from '@/components/ui/Chip/Chip';

export default function InfiniteSlide() {
	return (
		<section>
			<div className="pb-px flex overflow-hidden relative lg:max-w-md before:bg-gradient-to-r before:from-slate-900 before:to-transparent before:h-full before:w-8 before:absolute before:top-0 before:left-0 before:z-10 after:bg-gradient-to-l after:from-slate-900 after:to-transparent after:h-full after:w-8 after:absolute after:top-0 after:right-0 after:z-10">
				<ul className="animate-negative-infinite pl-2 flex flex-nowrap gap-2">
					<li>
						<Chip variant="main" text="HTML" />
					</li>
					<li>
						<Chip variant="main" text="CSS" />
					</li>
					<li>
						<Chip variant="main" text="SCSS" />
					</li>
					<li>
						<Chip variant="main" text="BEM" />
					</li>
					<li>
						<Chip variant="main" text="Tailwind CSS" />
					</li>
					<li>
						<Chip variant="main" text="JavaScript" />
					</li>
					<li>
						<Chip variant="main" text="TypeScript" />
					</li>
					<li>
						<Chip variant="main" text="React" />
					</li>
				</ul>
				<ul className="animate-negative-infinite pl-2 flex flex-nowrap gap-2" aria-hidden="true">
					<li>
						<Chip variant="main" text="HTML" />
					</li>
					<li>
						<Chip variant="main" text="CSS" />
					</li>
					<li>
						<Chip variant="main" text="SCSS" />
					</li>
					<li>
						<Chip variant="main" text="BEM" />
					</li>
					<li>
						<Chip variant="main" text="Tailwind CSS" />
					</li>
					<li>
						<Chip variant="main" text="JavaScript" />
					</li>
					<li>
						<Chip variant="main" text="TypeScript" />
					</li>
					<li>
						<Chip variant="main" text="React" />
					</li>
				</ul>
			</div>
		</section>
	);
}
