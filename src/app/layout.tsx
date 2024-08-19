import type { Metadata } from 'next';
import SmoothScroller from '@/components/client/SmoothScroller/SmoothScroller';
import './globals.css';

export const metadata: Metadata = {
	title: 'Vanja Želi - Portfolio Website',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<SmoothScroller>{children}</SmoothScroller>
			</body>
		</html>
	);
}
