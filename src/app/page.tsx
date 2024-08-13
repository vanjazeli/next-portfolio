import Header from '@/components/containers/Header/Header';
import { headerContent } from '@/components/containers/Header/Header.content';
import MultipleParagraphs from '@/components/containers/MultipleParagraphs/MultipleParagraphs';
import { summaryContent, skillsContent, clientsAndProjectsContent, miniLibrariesContent } from '@/components/containers/MultipleParagraphs/MultipleParagraphs.content';
import CardLinks from '@/components/containers/CardLinks/CardLinks';
import { projectLinksContent, playgroundContent } from '@/components/containers/CardLinks/CardLinks.content';
import InfiniteSlide from '@/components/containers/InfiniteSlide/InfiniteSlides';
import { skillsSliderContent } from '@/components/containers/InfiniteSlide/InfiniteSlides.content';

import Spacer from '../components/ui/Spacer/Spacer';
import { styles } from './page.styles';

export default function Home() {
	return (
		<div className={styles.pageWrap}>
			<div className={styles.container}>
				<div className={styles.contentWrap}>
					<div className={styles.sidebar}>
						<Header content={headerContent} />
					</div>
					<div className={styles.mainContent}>
						<main className={styles.mainSection}>
							<MultipleParagraphs content={summaryContent} />
							<Spacer />

							<MultipleParagraphs content={skillsContent} />
							<Spacer isSmall />
							<InfiniteSlide content={skillsSliderContent} />
							<Spacer />

							<MultipleParagraphs content={clientsAndProjectsContent} />
							<Spacer isSmall />
							<CardLinks content={projectLinksContent} />
							<Spacer />

							<MultipleParagraphs content={miniLibrariesContent} />
							<Spacer isSmall />
							<CardLinks content={playgroundContent} />
							<Spacer />
						</main>
					</div>
				</div>
			</div>
		</div>
	);
}
