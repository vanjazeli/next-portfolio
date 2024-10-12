import Spacer from '@/components/ui/Spacer/Spacer';

type SectionTemplateProps = {
	children: React.ReactNode;
};

export default function SectionTemplate({ children }: SectionTemplateProps) {
	<>
		<section>{children}</section>;
		<Spacer />
	</>;
}
