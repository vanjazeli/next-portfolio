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
				timeframe: 'Full-time',
				period: 'May 2022 - Present',
			},
			description: 'I contributed to many different projects, working on tasks such as animations, creating modules from scratch, and debugging existing codebases, with a primary focus on React and CSS.',
			location: '<span class="font-bold">Novi Sad, Serbia</span><span class="text-slate-400"> - On Site</span>',
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
				period: 'Feb 2022',
			},
			description: 'Main focus was setting up project starters using gulp.js, and then utilizing the same foundation to turn designs into functional pages.',
			location: '<span class="font-bold">Novi Sad, Serbia</span><span class="text-slate-400"> - Remote</span>',
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
		{
			link: {
				href: 'https://www.fiverr.com/',
				text: 'Music Producer - Fiverr',
				target: '_blank',
			},
			time: {
				timeframe: 'Part-time',
				period: 'Jul 2018 - Mar 2020',
			},
			description: 'Collaborated with the lead producer on mixing and mastering as the final stage of his work.',
			location: '<span class="font-bold">Novi Sad, Serbia</span><span class="text-slate-400"> - Remote</span>',
			additionalInfo: [{ text: 'Audio Mixing' }, { text: 'Mastering' }, { text: 'Sound Design' }],
		},
	],
};
