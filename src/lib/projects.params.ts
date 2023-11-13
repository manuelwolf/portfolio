import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

import zimesp from './md/zim-esp.md?raw';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'slick-portfolio-angular',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Slick Portfolio',
		period: {
			from: new Date()
		},
		skills: getSkills('angular', 'ts', 'tailwind'),
		type: 'Website Template'
	},
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		shortDescription:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Slick Portfolio',
		period: {
			from: new Date()
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Website Template',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	},
	{
		slug: 'zim-esp',
		color: '#5e95e3',
		logo: Assets.Unknown,
		name: "Research project securing legacy devices in industrial and medical contexts",
		type: 'Embedded Linux, Web Application, DevOps, Security, Zero Trust, Secure Software Development',
		shortDescription:
			"Legacy devices with unpatchable software are a major security challenge \
			in the industrial and medical domain. Funded by the German government this project's \
			goal is to develop an additional security device which protects the legacy device from \
			threats coming from the network. Zero-Trust, Secure Software Development, Identity Management \
			",
		description: zimesp,
		links: [
		],
		period: {
			from: new Date(2022, 0, 1)
		},
		skills: getSkills('linux', 'javascript', 'bash', 'python', 'wireguard', 'oauth2'),
	},
	{
		slug: 'embedded-linux',
		color: '#5e95e3',
		logo: Assets.Unknown,
		name: "Support industrial customers 'operating system'-team to maintain custom embedded Linux image",
		description:
			'',
		shortDescription:
			"TDB",
		links: [
		],
		period: {
			from: new Date(2022, 2, 1),
			to: new Date(2023, 0, 31)
		},
		skills: getSkills('linux', 'bash', 'python'),
		type: 'Embedded Linux'
	},
	{
		slug: 'zim-vdm',
		color: '#5e95e3',
		logo: Assets.Unknown,
		name: "Research project securing high-sensitive medical data",
		description:
			'',
		shortDescription:
			"TDB",
		links: [
		],
		period: {
			from: new Date(2021, 2, 1),
			to: new Date(2022, 9, 31)
		},
		skills: getSkills('js', 'cpp', 'node.js', 'python'),
		type: 'Web Application'
	},
	{
		slug: 'qt-application',
		color: '#5e95e3',
		logo: Assets.Unknown,
		name: "Qt Windows application C++",
		description:
			'',
		shortDescription:
			"TDB",
		links: [
		],
		period: {
			from: new Date(2021, 2, 1)
		},
		skills: getSkills('qt', 'js', 'cpp', 'c'),
		type: 'Windows desktop application'
	},
	{
		slug: 'ecf-2018',
		color: '#5e95e3',
		logo: Assets.Fuseco2018,
		name: "TSN + OPC UA demonstrator at 'Edge Computing & Industrial IoT Forum 2018'",
		description:
			'',
		shortDescription:
			"TDB",
		links: [
			{
				to: 'https://www.fokus.fraunhofer.de/en/edge_computing_forum_2018',
				label: 'Edge Computing Forum 2018' 
			},

			{
				to: 'https://www.fokus.fraunhofer.de/ngni/events/fuseco_forum_2018',
				label: 'FUSECO Forum 2018'
			}
		],
		period: {
			from: new Date(2018, 4, 1),
			to: new Date(2018, 10, 15)
		},
		skills: getSkills('reactjs', 'js', 'python', 'flask'),
		type: 'Web Application'
	},
	{
		slug: 'hannover-messe-2018',
		color: '#5e95e3',
		description:
			'Hannover-Messe Development of a demonstrator for time sensitive networking',
		shortDescription:
			'With a team of 15 people coming from marketing, software development, electrical and mechanical engineering we developed within a period of 5 months an industrial-grade 3-axis portal sketching machine from scratch.',
		links: [{ to: 'https://www.fokus.fraunhofer.de/c8b99d468929dffa', label: 'Fraunhofer FOKUS News (2018)' }],
		logo: Assets.HM,
		name: "Technical Demonstrator 'Industrie 4.0' for Hannover Messe 2018",
		period: {
			from: new Date(2017, 11, 1),
			to: new Date(2018, 3, 24)
		},
		skills: getSkills('reactjs', 'js', 'python','flask', 'bash', 'linux'),
		type: 'Web Application'
	},
	{
		slug: 'ecf-2017',
		color: '#5e95e3',
		description:
			'',
		shortDescription:
			"As a team of 3 software developers we migrated a Java based application for 'Enterprise design, Analysis and Operation' used in process modeling towards a modern web application.",
		links: [
			{
				to: 'https://www.fokus.fraunhofer.de/ecf2017',
				label: 'Edge Computing Forum 2017' },
			{
				to: 'https://youtu.be/V843KwUxa7U?si=0CtfcUTMjlVMXcCh&t=20',
				label: 'Impressions - Robot picking chocolate bar'
			}
		],
		logo: Assets.IIoTForum,
		name: "TSN enabled Edge Intelligence Demonstrator for inhouse congress 'Edge Computing & Industrial IoT Forum 2017'",
		period: {
			from: new Date(2017, 8, 1),
			to: new Date(2017, 10, 15)
		},
		skills: getSkills('reactjs', 'js', 'python', 'flask'),
		type: 'Web Application'
	},
	{
		slug: 'moogo',
		color: '#5e95e3',
		description:
			'',
		shortDescription:
			"As a team of 3 software developers we migrated a Java based application for 'Enterprise design, Analysis and Operation' used in process modeling towards a modern web application.",
		links: [{ to: 'https://moogo.ipk.fraunhofer.de/', label: 'Fraunhofer IPK MO²GO' }],
		logo: Assets.Unknown,
		name: "Migration from a Java based UI towards a web application",
		period: {
			from: new Date(2016, 8, 1),
			to: new Date(2017, 7, 31)
		},
		skills: getSkills('reactjs', 'js', 'java'),
		type: 'Web Application'
	},
];

export default MY_PROJECTS;
