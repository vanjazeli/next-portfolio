export const styles = {
	list: 'flex flex-col gap-8',
	listItem: 'lg:-translate-x-4 lg:w-[calc(100%+2rem)]',
	clickableWrap: 'group isolate flex gap-4 lg:p-4 relative overflow-hidden rounded-lg',
	overlay: 'hidden lg:block absolute top-0 left-0 opacity-0 group-hover:opacity-10 w-full h-full bg-white transition-opacity -z-10',
	imageHolder: 'w-1/4',
	imageWrap: 'aspect-square relative border border-slate-800 rounded-md overflow-hidden transition-colors lg:group-hover:border-blue-500',
	image: 'absolute top-0 left-0 w-full h-full object-cover',
	textContainer: 'w-3/4',
	link: 'text-lg md:text-xl mb-1 last:mb-0',
	description: 'text-slate-400 mb-2 last:mb-0',
	externalLinksWrap: 'flex gap-x-2 gap-y-1 flex-wrap mb-3 last:mb-0',
	additionalItemsWrap: 'flex gap-2 flex-wrap',
	additionalItem: 'bg-blue-900 border border-blue-800 text-blue-500 bg-opacity-20 px-2 py-1 rounded-full text-xs',
	nonClickableWrap: 'flex gap-4 lg:p-4',
	nonClickableImageWrap: 'border border-blue-500 rounded-md aspect-square flex justify-center items-center',
	nonClickableImageText: 'text-xl sm:text-4xl lg:text-xl xl:text-4xl font-bold text-slate-400',
	heading: 'text-lg md:text-xl font-bold text-slate-200 mb-1 last:mb-0',
	locationWrap: 'flex align-center gap-2 text-slate-200 mb-4 last:mb-0',
	locationIcon: 'w-4 text-slate-400',
	locationTextWrap: 'flex flex-col md:flex-row md:gap-2',
	locationDescription: 'text-slate-400',
	locationText: 'font-bold',
};
