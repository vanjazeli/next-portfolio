import type { HeaderContentT } from './Header.types';

export const headerContent: HeaderContentT = {
	topInfo: {
		image: {
			url: '/images/portrait.png',
			alt: "Photo of a very cool front-end developer. Of course it's me. :)",
			width: 160,
			height: 160,
		},
		headingLink: {
			url: '/',
			text: 'Vanja Želi',
		},
		position: 'Mid-level Front-end Engineer',
		description: `A self-taught front-end developer, a big time fast food junkie and just a typical nerd who's nuts for technology.`,
		additionalInfo: [
			{
				iconVariant: 'location',
				text: 'Novi Sad, Serbia',
			},
			{
				iconVariant: 'job',
				text: 'Vega IT',
			},
			{
				iconVariant: 'education',
				text: 'Mechatronics',
			},
		],
	},
	bottomLinks: [
		{
			url: 'mailto:vanjazeli@gmail.com',
			iconVariant: 'email',
			target: '_blank',
		},
		{
			url: 'https://www.linkedin.com/in/vanja-zeli',
			iconVariant: 'linkedin',
			target: '_blank',
		},
		{
			url: 'https://www.github.com/vanjazeli ',
			iconVariant: 'github',
			target: '_blank',
		},
	],
};
