export type MultipleParagraphsContentT = {
	heading: string;
	paragraphs: {
		text: string;
	}[];
	link: {
		url: string;
		text: string;
		target: string;
	};
};
