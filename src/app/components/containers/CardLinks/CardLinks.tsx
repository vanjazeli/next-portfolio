import Image from 'next/image';
import ArrowLink from '../../ui/ArrowLink/ArrowLink';

export default function CardLinks() {
	return (
		<ul>
			<li>
				<div className="group isolate flex gap-4 lg:p-4 relative before:absolute before:top-0 before:left-0 before:right-0 before:-z-10 before:bottom-0 before:bg-white before:rounded-md before:opacity-0 before:transition-opacity hover:before:opacity-5">
					<div className="w-1/4">
						<Image className='border border-slate-800 rounded-md overflow-hidden transition-all group-hover:border-teal-300' src="/wunder-wasabi.png" alt="testing alt" width={1920} height={1080} />
					</div>
					<div className="w-3/4">
						<ArrowLink className="mb-2" href="/" variant="regular" text="Wunder and Wasabi - Crypto & NFT" target="" />
						<p className="text-slate-400 mb-3">My approach to the front-end code of the "Wunder and Wasabi - Crypto & NFT" website.</p>
						<div className="flex gap-4 flex-wrap">
							<span className='bg-teal-900 border border-teal-800 text-teal-300 bg-opacity-20 px-2 py-1 rounded-full text-xs'>JavaScirpt</span>
							<span className='bg-teal-900 border border-teal-800 text-teal-300 bg-opacity-20 px-2 py-1 rounded-full text-xs'>Animation</span>
							<span className='bg-teal-900 border border-teal-800 text-teal-300 bg-opacity-20 px-2 py-1 rounded-full text-xs'>GSAP</span>
							<span className='bg-teal-900 border border-teal-800 text-teal-300 bg-opacity-20 px-2 py-1 rounded-full text-xs'>SCSS</span>
						</div>
					</div>
				</div>
			</li>
		</ul>
	);
}
