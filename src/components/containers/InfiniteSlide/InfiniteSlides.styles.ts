export const styles = {
	section: 'flex flex-col gap-2',
	legendList: 'flex gap-4',
	legendItem: 'flex items-center gap-2',
	legendBullet: 'h-2 w-2 rounded-full',
	legendText: 'text-slate-400',
	slidesWrap: '-translate-x-4 md:translate-x-0 w-[calc(100%+2rem)] md:w-auto flex flex-col gap-2 mb-4 last:mb-0',
	slideHolder: 'pb-px flex overflow-hidden relative lg:max-w-md before:bg-gradient-to-r before:from-slate-900 before:to-transparent before:h-full before:w-8 before:absolute before:top-0 before:left-0 before:z-10 after:bg-gradient-to-l after:from-slate-900 after:to-transparent after:h-full after:w-8 after:absolute after:top-0 after:right-0 after:z-10',
	slide: 'animate-negative-infinite pl-2 flex flex-nowrap gap-2',
};

export const modifiers = {
	slate: 'bg-slate-500',
	gray: 'bg-gray-500',
	teal: 'bg-teal-500',
	cyan: 'bg-cyan-500',
	sky: 'bg-sky-500',
	blue: 'bg-blue-500',
};
