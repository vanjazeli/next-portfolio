type SpacerProps = {
	isSmall?: boolean;
};

export default function Spacer({ isSmall }: SpacerProps) {
	return <div className={`${isSmall ? 'h-6 md:h-10 lg:h-16' : 'h-12 md:h-20 lg:h-32'}`}></div>;
}
