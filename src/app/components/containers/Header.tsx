import Link from 'next/link';
import Image from 'next/image';

import Icon from '../ui/Icon';

export default function Header() {
	return (
		<header className="h-full lg:flex lg:flex-col lg:justify-between lg:py-24 lg:sticky lg:top-0 lg:max-h-dvh">
			<div>
				<div>
					<div className="mb-4 w-52 h-52 rounded-full overflow-hidden">
						<Image src="/vanja-zeli.png" alt="Photo of an amazing developer. A photo of me ofc :)" height={208} width={208} />
					</div>
					<h1 className="text text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
						<Link href="/">Vanja Želi</Link>
					</h1>
				</div>
				<h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Mid-level Front-end Engineer</h2>
				<p className="mt-4 max-w-xs leading-normal text-slate-400">A self-taught front-end developer, big time fast food junkie and just a typical nerd who's nuts for technology.</p>
			</div>
			<ul className="flex gap-4">
				<li className="w-8">
					<Icon variant="phone" />
				</li>
				<li className="w-8">
					<Icon variant="email" />
				</li>
				<li className="w-8">
					<Icon variant="linkedin" />
				</li>
				<li className="w-8">
					<Icon variant="github" />
				</li>
			</ul>
		</header>
	);
}
