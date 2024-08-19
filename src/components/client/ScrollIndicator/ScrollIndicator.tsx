'use client';

import { useState, useEffect } from 'react';
import { styles } from './ScrollIndicator.styles';

export default function ScrollIndicator() {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
			const currentScroll = window.scrollY;
			const scrollPercentage = (currentScroll / totalHeight) * 100;
			setScrollPosition(scrollPercentage);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className={styles.scrollIndicator}>
			<div className={styles.line} style={{ width: `${scrollPosition}%` }}></div>
		</div>
	);
}
