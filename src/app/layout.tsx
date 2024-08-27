import type { Metadata } from 'next';
import SmoothScroller from '@/components/client/SmoothScroller/SmoothScroller';
import './globals.css';
import ScrollIndicator from '@/components/client/ScrollIndicator/ScrollIndicator';
import { styles } from './layout.styles';

export const metadata: Metadata = {
	title: 'Vanja Želi - Portfolio Website',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={styles.document}>
			<body>
				<ScrollIndicator />
				<SmoothScroller>{children}</SmoothScroller>
			</body>
		</html>
	);
}
