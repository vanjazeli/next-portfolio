import { MultipleParagraphsContentT } from './MultipleParagraphs.types';

export const summaryContent: MultipleParagraphsContentT = {
	heading: 'Brief Summary',
	paragraphs: [
		{
			text: `As a front-end developer, I officially began my career in Feb 2022 after a year-long period of dedicated selflearning. With a primary focus on <span class="font-bold text-slate-200">React</span> and <span class="font-bold text-slate-200">CSS</span>, I specialize in creating highly performant web applications and transforming complex designs into <span class="font-bold text-slate-200">pixel-perfect</span>, highly responsive, animated interfaces. My portfolio includes over 5 successful projects for various clients, showcasing my adaptability and exceptional problemsolving abilities. <span class="font-bold text-slate-200">Driven by a passion for continuous learning</span>, I'm commended by clients for my keen attention to detail and effective communication skills.`,
		},
		{
			text: 'Eager to <span class="font-bold text-slate-200">contribute while expanding my knowledge</span> of coding beyond the boundaries of comfort zone.',
		},
		{
			text: 'Feel free to browse through my résumé to find out more about me.',
		},
	],
	link: {
		url: 'https://vanjazeli.github.io/resume/',
		text: 'View Full Résumé',
		target: '_blank',
		variant: 'underline',
	},
};

export const clientsAndProjectsContent: MultipleParagraphsContentT = {
	heading: 'Clients & Projects',
	paragraphs: [
		{
			text: 'Successfully contributed with CSS, JavaScript and React to 5+ both collaborative and individual projects for 5+ clients from countries like UK, France, Germany, Singapore, Netherlands etc. Collaborated with industries specializing in shipping, real estate, e-commerce, clothing etc.',
		},
	],
};

export const miniLibrariesContent: MultipleParagraphsContentT = {
	heading: 'Wonders from My Code Playground',
	paragraphs: [
		{
			text: 'Dive into my collection of quirky and charming UI libraries. These mini marvels are my way of turning coding into a playground, where I’ve crafted everything from sleek effects and snazzy animations to some other types of fun projects.',
		},
		{
			text: 'Enjoy the fun and feel free to borrow a sprinkle of inspiration for your own projects!',
		},
	],
};
