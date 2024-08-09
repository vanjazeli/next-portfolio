import Header from './components/containers/Header/Header';
import { content as headerContent } from './components/containers/Header/Header.content';
import MultipleParagraphs from './components/containers/MultipleParagraphs/MultipleParagraphs';
import { summaryContent, clientsAndProjectsContent } from './components/containers/MultipleParagraphs/MultipleParagraphs.content';
import Spacer from './components/ui/Spacer/Spacer';
import CardLinks from './components/containers/CardLinks/CardLinks';
import ExternalLink from './components/ui/ExternalLink/ExternalLink';

export default function Home() {
	return (
		<div className="bg-slate-900 text-slate-200 leading-relaxed font-inter selection:bg-teal-300 selection:text-teal-900">
			<div className="container px-6 mx-auto lg:px-40">
				<div className="lg:w-full lg:flex lg:gap-5 oultine-1 min-h-dvh">
					<div className="lg:w-2/5">
						<Header content={headerContent} />
					</div>
					<div className="lg:w-3/5">
						<main className="lg:py-[14vh]">
							<MultipleParagraphs content={summaryContent} />
							<Spacer isSmall />
							<MultipleParagraphs content={clientsAndProjectsContent} />
							<Spacer isSmall />
							<CardLinks />
							<ExternalLink href="/" text="Github" target="" />
						</main>
					</div>
				</div>
			</div>
		</div>
	);
}
