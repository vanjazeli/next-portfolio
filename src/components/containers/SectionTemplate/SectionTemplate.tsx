import Spacer from '@/components/ui/Spacer/Spacer';

type SectionTemplateProps = {
	children: React.ReactNode;
};

export default function SectionTemplate({ children }: SectionTemplateProps) {
	return (
		<>
			<section>{children}</section>
			<Spacer />
		</>
	);
}
