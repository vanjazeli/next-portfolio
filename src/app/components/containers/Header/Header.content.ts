import type { HeaderContentT } from './Header.types';

export const content: HeaderContentT = {
	topInfo: {
		image: {
			url: '/vanja-zeli.png',
			alt: "Photo of a very cool front-end developer. Of course it's me. :)",
			width: 208,
			height: 208,
		},
		headingLink: {
			url: '/',
			text: 'Vanja Želi',
		},
		position: 'Mid-level Front-end Engineer',
		description: `A self-taught front-end developer, a big time <span class="font-bold text-white">fast food junkie</span> and just a typical nerd who's <span class="font-bold text-white">nuts for technology</span>.`,
	},
	bottomLinks: [
		{
			url: 'tel:+381363982390',
			iconVariant: 'phone',
			target: '_blank',
		},
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
