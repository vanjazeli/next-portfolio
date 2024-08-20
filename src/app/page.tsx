import Header from '@/components/containers/Header/Header';
import { headerContent } from '@/components/containers/Header/Header.content';
import MultipleParagraphs from '@/components/containers/MultipleParagraphs/MultipleParagraphs';
import { summaryContent, skillsContent, careerContent, clientsAndProjectsContent, miniLibrariesContent } from '@/components/containers/MultipleParagraphs/MultipleParagraphs.content';
import CardLinks from '@/components/containers/CardLinks/CardLinks';
import { projectLinksContent, playgroundContent } from '@/components/containers/CardLinks/CardLinks.content';
import InfiniteSlide from '@/components/containers/InfiniteSlide/InfiniteSlides';
import { skillsSliderContent } from '@/components/containers/InfiniteSlide/InfiniteSlides.content';
import Pathway from '@/components/containers/Pathway/Pathway';
import { careerListContent } from '@/components/containers/Pathway/Pathway.content';
import Spacer from '../components/ui/Spacer/Spacer';
import BlurWrap from '@/components/client/BlurWrap/BlurWrap';
import { styles } from './page.styles';
import { DevicesE } from '@/components/client/BlurWrap/BlurWrap.enums';
import LoadingOverlay from '@/components/client/LoadingOverlay/LoadingOverlay';

export default function Home() {
	return (
		<BlurWrap widthQuery={DevicesE.mobile}>
			<LoadingOverlay />
			<div className={styles.pageWrap}>
				<div className={styles.container}>
					<div className={styles.contentWrap}>
						<div className={styles.sidebar}>
							<Header content={headerContent} />
						</div>
						<div className={styles.mainContent}>
							<main className={styles.mainSection}>
								<BlurWrap widthQuery={DevicesE.desktop}>
									<MultipleParagraphs content={summaryContent} />
									<Spacer />

									<MultipleParagraphs content={skillsContent} />
									<Spacer isSmall />
									<InfiniteSlide content={skillsSliderContent} />
									<Spacer />

									<MultipleParagraphs content={careerContent} />
									<Spacer isSmall />
									<Pathway content={careerListContent} />
									<Spacer />

									<MultipleParagraphs content={clientsAndProjectsContent} />
									<Spacer isSmall />
									<CardLinks content={projectLinksContent} />
									<Spacer />

									<MultipleParagraphs content={miniLibrariesContent} />
									<Spacer isSmall />
									<CardLinks content={playgroundContent} />
									<Spacer />
								</BlurWrap>
							</main>
						</div>
					</div>
				</div>
			</div>
		</BlurWrap>
	);
}
