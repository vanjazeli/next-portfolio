'use client';

import { useEffect, useState } from 'react';

type BlurWrapProps = {
	children: React.ReactNode;
};

export default function BlurWrap({ children }: BlurWrapProps) {
	const [lastScrollTop, setLastScrollTop] = useState(0);
	const [lastTimestamp, setLastTimestamp] = useState(0);
	const [scaledValue, setScaledValue] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const currentTimestamp = Date.now();
			const deltaY = Math.abs(scrollTop - lastScrollTop);
			const deltaTime = currentTimestamp - lastTimestamp;

			if (deltaTime > 0) {
				const intensity = (deltaY / deltaTime) * 1000;

				const maxIntensity = 2000;
				const scaled = Math.min((intensity / maxIntensity) * 3, 3);
				setScaledValue(scaled);
			}

			setLastScrollTop(scrollTop);
			setLastTimestamp(currentTimestamp);
		};

		const resetIntensity = () => {
			setScaledValue(0);
		};

		window.addEventListener('scroll', handleScroll);

		const resetTimeout = setTimeout(resetIntensity, 50);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			clearTimeout(resetTimeout);
		};
	}, [lastScrollTop, lastTimestamp]);

	return (
		<div className="transition-all" style={{ filter: `blur(${Math.round(scaledValue)}px)` }}>
			{children}
		</div>
	);
}
