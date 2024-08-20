'use client';

import { useEffect, useRef, useState } from 'react';

export default function LoadingOverlay() {
	const [isOpen, setIsOpen] = useState(true);

	const overlay = useRef<HTMLDivElement>(null);

	const hideOverlay = () => {
		setIsOpen(false);
	};

	useEffect(() => {
		if (overlay.current) {
			overlay.current.style.opacity = '0';
			overlay.current.style.backdropFilter = 'blur(0px)';
		}
	}, []);

	return isOpen && <div className="fixed inset-0 bg-slate-900 z-50 backdrop-blur-3xl transition-all duration-500" ref={overlay} onTransitionEnd={hideOverlay}></div>;
}
