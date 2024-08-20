'use client';

import { useEffect, useRef, useState } from 'react';
import { styles } from './LoadingOverlay.styles';

export default function LoadingOverlay() {
	const [isOpen, setIsOpen] = useState(true);

	const overlay = useRef<HTMLDivElement>(null);

	const hideOverlay = () => {
		setIsOpen(false);
	};

	useEffect(() => {
		if (overlay.current) {
			overlay.current.style.opacity = '0';
		}
	}, []);

	return isOpen && <div className={styles.overlay} ref={overlay} onTransitionEnd={hideOverlay}></div>;
}
