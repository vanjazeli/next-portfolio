import { CardLinksT } from './CardLinks.types';

export const projectLinksContent: CardLinksT = [
	{
		variant: 'clickable',
		image: {
			url: '/wunder-wasabi.png',
			alt: 'Wunder and Wasabi - Crypto & NFT - Preview image',
			width: 1920,
			height: 1080,
		},
		link: {
			href: 'https://vanjazeli.github.io/wunder-and-wasabi/',
			text: 'Wunder and Wasabi - Crypto & NFT',
			target: '_blank',
		},
		description: 'My approach to the front-end code of the "Wunder and Wasabi - Crypto & NFT" website.',
		externalLinks: [
			{
				href: 'https://github.com/vanjazeli/wunder-and-wasabi',
				text: 'Github Repo',
				target: '_blank',
			},
			{
				href: 'https://github.com/vanjazeli/gulp-vanilla-starter',
				text: 'Created Using',
				target: '_blank',
			},
		],
		additionalItems: ['JavaScript', 'GSAP', 'SCSS', 'Scrolling Animation'],
	},
	{
		variant: 'clickable',
		image: {
			url: '/raiffeisen-bank-serbia.png',
			alt: 'Raiffeisen Bank - Serbia - Preview image',
			width: 1920,
			height: 1080,
		},
		link: {
			href: 'https://vanjazeli.github.io/raiffeisen-bank-serbia/',
			text: 'Raiffeisen Bank - Serbia',
			target: '_blank',
		},
		description: 'My approach to the front-end code of the "Raiffeisen Bank Serbia" website.',
		externalLinks: [
			{
				href: 'https://github.com/vanjazeli/raiffeisen-bank-serbia',
				text: 'Github Repo',
				target: '_blank',
			},
			{
				href: 'https://github.com/vanjazeli/gulp-vanilla-starter',
				text: 'Created Using',
				target: '_blank',
			},
		],
		additionalItems: ['JavaScript', 'GSAP', 'SCSS', 'Parallax Animation'],
	},
	{
		variant: 'nonClickable',
		heading: 'Blockchain Document Transfer Application',
		description: 'By utilizing blockchain for document validation, this app provides a reliable and immutable method for the shipping industry to authenticate and track essential paperwork, reducing the risk of fraud and errors.',
		location: 'Israel',
		additionalItems: ['React', 'TypeScript', 'Zustand', 'React Hook Form', 'Material UI', 'Storybook', 'Tanstack Query'],
	},
	{
		variant: 'nonClickable',
		heading: 'World-Renowned Clothing Brand Website',
		description: 'A project created for a world-renowned clothing brand, featuring an intricate design and numerous animations. The project was used as a sponsorship platform during a global sporting event, amplifying brand presence and audience interaction.',
		location: 'The Netherlands',
		additionalItems: ['Next.js', 'TypeScript', 'Atomic Design', 'SCSS', 'GSAP', 'Storybook'],
	},
];

export const playgroundContent: CardLinksT = [
	{
		variant: 'clickable',
		image: {
			url: '/image-reveal-animations.png',
			alt: 'Image Reveal Animations - Preview image',
			width: 1920,
			height: 1080,
		},
		link: {
			href: 'https://vanjazeli.github.io/image-reveal-animations/',
			text: 'Image Reveal Animations - Demo',
			target: '_blank',
		},
		description: 'A JavaScript library which uses GSAP to create some image reveal animations that trigger on HTML element hover.',
		externalLinks: [
			{
				href: 'https://github.com/vanjazeli/image-reveal-animations',
				text: 'Github Repo',
				target: '_blank',
			},
			{
				href: 'https://gsap.com/',
				text: 'GSAP',
				target: '_blank',
			},
			{
				href: 'https://openai.com/index/dall-e-2/',
				text: 'DALL·E 3',
				target: '_blank',
			},
		],
		additionalItems: ['Vite', 'JavaScript', 'GSAP', 'SCSS', 'Mask Animation'],
	},
	{
		variant: 'clickable',
		image: {
			url: '/fading-backgrounds-1.jpg',
			alt: 'testing alt',
			width: 1920,
			height: 1080,
		},
		link: {
			href: 'https://vanjazeli.github.io/fading-backgrounds/',
			text: 'Fading Backgrounds - Demo',
			target: '_blank',
		},
		description: 'A JavaScript library which allows you to add fading images with random positions in the back of an HTML element.',
		externalLinks: [
			{
				href: 'https://github.com/vanjazeli/fading-backgrounds',
				text: 'Github Repo',
				target: '_blank',
			},
			{
				href: 'https://pixabay.com/',
				text: 'Pixabay',
				target: '_blank',
			},
		],
		additionalItems: ['Vite', 'JavaScript', 'GSAP', 'SCSS', 'CSS Animation'],
	},
];
