export const styles = {
	section: 'isolate',
	list: 'flex flex-col',
	item: 'flex gap-4',
	lineHolder: 'w-1/12 relative',
	bullet: 'absolute h-4 w-4 bg-slate-900 top-4 left-1/2 -translate-x-1/2 rounded-full outline outeline-4 outline-slate-900 border-4 border-slate-400',
	line: 'absolute -z-10 left-1/2 -translate-x-1/2 top-4 h-[calc(100%-1rem)] w-px bg-slate-400 rounded-t-full',
	contentHolder: 'w-11/12',
	link: 'text-lg md:text-xl mb-1 last:mb-0',
	time: 'text-xs md:text-base text-slate-400 mb-2 last:mb-0 flex gap-2',
	description: 'text-slate-400 mb-2 last:mb-0',
	locationWrap: 'flex align-center gap-2 text-slate-200 mb-3 last:mb-0',
	locationIcon: 'w-4 text-slate-400',
	locationText: 'font-bold',
	additionalInfo: 'flex gap-2 flex-wrap',
};

export const modifiers = {
	contentHolderMod: 'mt-8 lg:mt-16',
	lineMod: 'top-0 h-12 lg:h-20',
	bulletMod: 'top-12 lg:top-20',
	lineFullMod: 'top-0 h-full',
};
