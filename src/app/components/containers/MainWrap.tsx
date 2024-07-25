import { ReactNode } from 'react';

type MainWrapProps = {
	children?: ReactNode;
};

export default function MainWrap({ children }: MainWrapProps) {
	return (
		<div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
			<div className="lg:flex lg:justify-between lg:gap-4">{children}</div>
		</div>
	);
}
