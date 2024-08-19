'use client';

import ReactLenis from '@studio-freight/react-lenis';

type SmoothScrollerProps = {
	children: React.ReactNode;
};

export default function SmoothScroller({ children }: SmoothScrollerProps) {
	return <ReactLenis root>{children}</ReactLenis>;
}
