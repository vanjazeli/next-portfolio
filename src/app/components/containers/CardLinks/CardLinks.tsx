import Image from 'next/image';
import ArrowLink from '../../ui/ArrowLink/ArrowLink';
import ExternalLink from '../../ui/ExternalLink/ExternalLink';
import Icon from '../../ui/Icon/Icon';

export default function CardLinks() {
	return (
		<ul className="flex flex-col gap-10">
			<li>
				<div className="group isolate flex gap-4 lg:p-4 relative before:absolute before:top-0 before:left-0 before:right-0 before:-z-10 before:bottom-0 before:bg-white before:rounded-md before:opacity-0 before:transition-opacity hover:before:opacity-5">
					<div className="w-1/4">
						<Image className="border border-slate-800 rounded-md overflow-hidden transition-colors group-hover:border-teal-300" src="/wunder-wasabi.png" alt="testing alt" width={1920} height={1080} />
					</div>
					<div className="w-3/4">
						<ArrowLink className="mb-1" href="/" variant="regular" text="Wunder and Wasabi - Crypto & NFT" target="" />
						<p className="text-slate-400 mb-3">My approach to the front-end code of the "Wunder and Wasabi - Crypto & NFT" website.</p>
						<div className="flex gap-3 flex-wrap mb-3">
							<ExternalLink href="/" text="Github Repo" target="_blank" />
							<ExternalLink href="/" text="Created Using" target="_blank" />
						</div>
						<div className="flex gap-2 flex-wrap">
							<span className="bg-teal-900 border border-teal-800 text-teal-300 bg-opacity-20 px-2 py-1 rounded-full text-xs">JavaScirpt</span>
							<span className="bg-teal-900 border border-teal-800 text-teal-300 bg-opacity-20 px-2 py-1 rounded-full text-xs">GSAP</span>
							<span className="bg-teal-900 border border-teal-800 text-teal-300 bg-opacity-20 px-2 py-1 rounded-full text-xs">SCSS</span>
							<span className="bg-teal-900 border border-teal-800 text-teal-300 bg-opacity-20 px-2 py-1 rounded-full text-xs">Scrolling Animation</span>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div className="group isolate flex gap-4 lg:p-4 relative before:absolute before:top-0 before:left-0 before:right-0 before:-z-10 before:bottom-0 before:bg-white before:rounded-md before:opacity-0 before:transition-opacity hover:before:opacity-5">
					<div className="w-1/4">
						<Image className="border border-slate-800 rounded-md overflow-hidden transition-colors group-hover:border-teal-300" src="/raiffeisen-bank-serbia.png" alt="testing alt" width={1920} height={1080} />
					</div>
					<div className="w-3/4">
						<ArrowLink className="mb-1" href="/" variant="regular" text="Raiffeisen Bank - Serbia" target="" />
						<p className="text-slate-400 mb-3">My approach to the front-end code of the "Raiffeisen Bank Serbia" website.</p>
						<div className="flex gap-3 flex-wrap mb-3">
							<ExternalLink href="/" text="Github Repo" target="_blank" />
							<ExternalLink href="/" text="Created Using" target="_blank" />
						</div>
						<div className="flex gap-2 flex-wrap">
							<span className="bg-teal-900 border border-teal-800 text-teal-300 bg-opacity-20 px-2 py-1 rounded-full text-xs">JavaScirpt</span>
							<span className="bg-teal-900 border border-teal-800 text-teal-300 bg-opacity-20 px-2 py-1 rounded-full text-xs">GSAP</span>
							<span className="bg-teal-900 border border-teal-800 text-teal-300 bg-opacity-20 px-2 py-1 rounded-full text-xs">SCSS</span>
							<span className="bg-teal-900 border border-teal-800 text-teal-300 bg-opacity-20 px-2 py-1 rounded-full text-xs">Parallax Animation</span>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div className="group isolate flex gap-4 lg:p-4 relative before:absolute before:top-0 before:left-0 before:right-0 before:-z-10 before:bottom-0 before:bg-white before:rounded-md before:opacity-0 before:transition-opacity hover:before:opacity-5">
					<div className="w-1/4">
						{/* <Image className="border border-slate-800 rounded-md overflow-hidden transition-colors group-hover:border-teal-300" src="/raiffeisen-bank-serbia.png" alt="testing alt" width={1920} height={1080} /> */}
						<div className="border border-slate-800 rounded-md transition-colors aspect-video flex justify-center items-center group-hover:border-teal-300">
							<span className="text-4xl font-bold text-slate-400 group-hover:text-teal-300 transition-colors">NDA</span>
						</div>
					</div>
					<div className="w-3/4">
						<ArrowLink className="mb-1" href="/" variant="regular" text="Blockchain Document Transfer Application" target="" />
						<p className="text-slate-400 mb-3">By utilizing blockchain for document validation, this app provides a reliable and immutable method for the shipping industry to authenticate and track essential paperwork, reducing the risk of fraud and errors.</p>
						{/* <div className="flex gap-3 flex-wrap mb-3">
							<ExternalLink href="/" text="Github Repo" target="_blank" />
							<ExternalLink href="/" text="Created Using" target="_blank" />
						</div> */}
						<div className="flex align-center gap-2 text-slate-200 mb-3">
							<Icon className="w-4" variant="location" />
							<span className="font-bold">Client location:</span>
							<span>Israel</span>
						</div>
						<div className="flex gap-2 flex-wrap">
							<span className="bg-teal-900 border border-teal-800 text-teal-300 bg-opacity-20 px-2 py-1 rounded-full text-xs">React</span>
							<span className="bg-teal-900 border border-teal-800 text-teal-300 bg-opacity-20 px-2 py-1 rounded-full text-xs">TypeScript</span>
							<span className="bg-teal-900 border border-teal-800 text-teal-300 bg-opacity-20 px-2 py-1 rounded-full text-xs">Zustand</span>
							<span className="bg-teal-900 border border-teal-800 text-teal-300 bg-opacity-20 px-2 py-1 rounded-full text-xs">React Hook Form</span>
							<span className="bg-teal-900 border border-teal-800 text-teal-300 bg-opacity-20 px-2 py-1 rounded-full text-xs">Material UI</span>
							<span className="bg-teal-900 border border-teal-800 text-teal-300 bg-opacity-20 px-2 py-1 rounded-full text-xs">Storybook</span>
							<span className="bg-teal-900 border border-teal-800 text-teal-300 bg-opacity-20 px-2 py-1 rounded-full text-xs">Tanstack Query</span>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div className="group isolate flex gap-4 lg:p-4 relative before:absolute before:top-0 before:left-0 before:right-0 before:-z-10 before:bottom-0 before:bg-white before:rounded-md before:opacity-0 before:transition-opacity hover:before:opacity-5">
					<div className="w-1/4">
						{/* <Image className="border border-slate-800 rounded-md overflow-hidden transition-all group-hover:border-teal-300" src="/raiffeisen-bank-serbia.png" alt="testing alt" width={1920} height={1080} /> */}
						<div className="border border-slate-800 rounded-md transition-colors aspect-video flex justify-center items-center group-hover:border-teal-300">
							<span className="text-4xl font-bold text-slate-400 group-hover:text-teal-300 transition-colors">NDA</span>
						</div>
					</div>
					<div className="w-3/4">
						<ArrowLink className="mb-1" href="/" variant="regular" text="World-Renowned Clothing Brand Website" target="" />
						<p className="text-slate-400 mb-3">A project created for a world-renowned clothing brand, featuring an intricate design and numerous animations. The project was used as a sponsorship platform during a global sporting event, amplifying brand presence and audience interaction.</p>
						{/* <div className="flex gap-3 flex-wrap mb-3">
							<ExternalLink href="/" text="Github Repo" target="_blank" />
							<ExternalLink href="/" text="Created Using" target="_blank" />
						</div> */}
						<div className="flex align-center gap-2 text-slate-200 mb-3">
							<Icon className="w-4" variant="location" />
							<span className="font-bold">Client location:</span>
							<span>The Netherlands</span>
						</div>
						<div className="flex gap-2 flex-wrap">
							<span className="bg-teal-900 border border-teal-800 text-teal-300 bg-opacity-20 px-2 py-1 rounded-full text-xs">Next.js</span>
							<span className="bg-teal-900 border border-teal-800 text-teal-300 bg-opacity-20 px-2 py-1 rounded-full text-xs">TypeScript</span>
							<span className="bg-teal-900 border border-teal-800 text-teal-300 bg-opacity-20 px-2 py-1 rounded-full text-xs">Atomic Design</span>
							<span className="bg-teal-900 border border-teal-800 text-teal-300 bg-opacity-20 px-2 py-1 rounded-full text-xs">SCSS</span>
							<span className="bg-teal-900 border border-teal-800 text-teal-300 bg-opacity-20 px-2 py-1 rounded-full text-xs">GSAP</span>
							<span className="bg-teal-900 border border-teal-800 text-teal-300 bg-opacity-20 px-2 py-1 rounded-full text-xs">Storybook</span>
						</div>
					</div>
				</div>
			</li>
		</ul>
	);
}
