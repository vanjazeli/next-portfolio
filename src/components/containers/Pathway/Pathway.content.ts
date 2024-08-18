import { PathwayContentT } from './Pathway.types';

export const careerListContent: PathwayContentT = {
	items: [
		{
			link: {
				href: 'https://www.vegaitglobal.com/',
				text: 'Front-end Engineer - Vega IT',
				target: '_blank',
			},
			time: {
				timeframe: 'Fulltime',
				period: 'May 2022 - Present',
			},
			description: 'I contributed to many different projects, working on tasks such as animations, creating modules from scratch, and debugging existing codebases, with a primary focus on React and CSS.',
			location: 'Novi Sad, Serbia',
			additionalInfo: [
				{
					text: 'React',
				},
				{
					text: 'Next.js',
				},
				{
					text: 'JavaScript',
				},
				{
					text: 'TypeScript',
				},
				{
					text: 'SCSS',
				},
			],
		},
		{
			link: {
				href: 'https://www.vegaitglobal.com/',
				text: 'Front-end Developer - Vega IT',
				target: '_blank',
			},
			time: {
				timeframe: 'Internship',
				period: 'Feb 2022 - Apr 2022',
			},
			description: 'Main focus was setting up project starters using gulp.js, and then utilizing the same foundation to turn designs into functional pages.',
			location: 'Novi Sad, Serbia',
			additionalInfo: [
				{
					text: 'Umbraco',
				},
				{
					text: 'Wordpress',
				},
				{
					text: 'HTML',
				},
				{
					text: 'SCSS',
				},
				{
					text: 'Pixel Perfect',
				},
				{
					text: 'JavaScript',
				},
				{
					text: 'gulp.js',
				},
			],
		},
	],
};
