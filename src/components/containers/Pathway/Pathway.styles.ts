export const styles = {
	section: 'isolate',
	list: 'flex flex-col',
	item: 'flex gap-4',
	lineHolder: 'w-1/12 relative',
	bullet: 'absolute h-4 w-4 bg-slate-900 top-4 left-1/2 -translate-x-1/2 rounded-full outline outeline-4 outline-slate-900 border-4 border-slate-400',
	line: 'absolute -z-10 left-1/2 -translate-x-1/2 top-4 h-[calc(100%-1rem)] w-px bg-slate-400 rounded-t-full',
	contentHolder: 'w-11/12',
	headingHolder: 'flex justify-between items-center gap-4',
	link: 'text-lg md:text-xl',
	period: 'text-xs text-slate-400',
	timeframe: 'text-slate-400 mb-2',
	description: 'text-slate-400 mb-3',
	additionalInfo: 'flex gap-2 flex-wrap',
};

export const modifiers = {
	contentHolderMod: 'mt-16',
	lineMod: 'top-0 h-20',
	bulletMod: 'top-20',
	lineFullMod: 'top-0 h-full',
};
