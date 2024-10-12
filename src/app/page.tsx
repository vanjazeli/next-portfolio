import Header from '@/components/containers/Header/Header';
import { headerContent } from '@/components/containers/Header/Header.content';
import SectionTemplate from '@/components/containers/SectionTemplate/SectionTemplate';
import MultipleParagraphs from '@/components/containers/MultipleParagraphs/MultipleParagraphs';
import { summaryContent, skillsContent, careerContent, clientsAndProjectsContent, miniLibrariesContent } from '@/components/containers/MultipleParagraphs/MultipleParagraphs.content';
import CardLinks from '@/components/containers/CardLinks/CardLinks';
import { projectLinksContent, playgroundContent } from '@/components/containers/CardLinks/CardLinks.content';
import InfiniteSlide from '@/components/containers/InfiniteSlide/InfiniteSlides';
import { skillsSliderContent } from '@/components/containers/InfiniteSlide/InfiniteSlides.content';
import Pathway from '@/components/containers/Pathway/Pathway';
import { careerListContent } from '@/components/containers/Pathway/Pathway.content';
import Footer from '@/components/containers/Footer/Footer';
import { footerContent } from '@/components/containers/Footer/Footer.content';
import Spacer from '../components/ui/Spacer/Spacer';
import { styles } from './page.styles';
import LoadingOverlay from '@/components/client/LoadingOverlay/LoadingOverlay';

export default function Home() {
	return (
		<>
			<LoadingOverlay />
			<div className={styles.pageWrap}>
				<div className={styles.container}>
					<div className={styles.contentWrap}>
						<div className={styles.sidebar}>
							<Header content={headerContent} />
						</div>
						<div className={styles.mainContent}>
							<main>
								<SectionTemplate>
									<MultipleParagraphs content={summaryContent} />
								</SectionTemplate>

								<SectionTemplate>
									<MultipleParagraphs content={skillsContent} />
									<Spacer isSmall />
									<InfiniteSlide content={skillsSliderContent} />
								</SectionTemplate>

								<SectionTemplate>
									<MultipleParagraphs content={careerContent} />
									<Spacer isSmall />
									<Pathway content={careerListContent} />
								</SectionTemplate>

								<SectionTemplate>
									<MultipleParagraphs content={clientsAndProjectsContent} />
									<Spacer isSmall />
									<CardLinks content={projectLinksContent} />
								</SectionTemplate>

								<SectionTemplate>
									<MultipleParagraphs content={miniLibrariesContent} />
									<Spacer isSmall />
									<CardLinks content={playgroundContent} />
								</SectionTemplate>
							</main>
							<Footer content={footerContent} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
