import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				viking: {
					primario: '#424661',
					secundario: '#a7cca4',
					terciario: '#5d4a3c',
					resaltado: '#ab6c39',
					fondo: '#e7c7a2',
				},
				gunpowder: {
					'50': '#f5f6f9',
					'100': '#e7ebf2',
					'200': '#d5dbe8',
					'300': '#b8c3d8',
					'400': '#96a5c4',
					'500': '#7d8bb4',
					'600': '#6b75a5',
					'700': '#5f6696',
					'800': '#51557c',
					'900': '#424661', //primario
					'950': '#2c2f3f',
				},
				springrain: {
					'50': '#f4f9f4',
					'100': '#e7f2e6',
					'200': '#d0e4ce',
					'300': '#a7cca4', //secundario
					'400': '#7daf79',
					'500': '#5a9156',
					'600': '#467643',
					'700': '#395e37',
					'800': '#314c2f',
					'900': '#293f28',
					'950': '#132112',
				},
				millbrook: {
					'50': '#f6f4f0',
					'100': '#e8e5d9',
					'200': '#d3cdb5',
					'300': '#baae8a',
					'400': '#a69469',
					'500': '#97825b',
					'600': '#816b4d',
					'700': '#69543f',
					'800': '#5d4a3c', //terciario
					'900': '#4e3e35',
					'950': '#2c211c',
				},
				copper: {
					'50': '#f9f4ed',
					'100': '#f0e4d1',
					'200': '#e3c9a5',
					'300': '#d3a571',
					'400': '#c5864a',
					'500': '#ab6c39', //resaltado
					'600': '#9c5932',
					'700': '#7d422b',
					'800': '#69382a',
					'900': '#5b3028',
					'950': '#341814',
				},
				pancho: {
					'50': '#fbf7f1',
					'100': '#f7eddd',
					'200': '#edd7bb',
					'300': '#e7c7a2', //fondo
					'400': '#d59962',
					'500': '#cc7e43',
					'600': '#be6938',
					'700': '#9e5330',
					'800': '#7f432d',
					'900': '#673927',
					'950': '#371c13',
				},
				principal: {
					100: '#2C3E50',
					200: '#57687c',
					300: '#b4c7dd',
				},
				acento: {
					100: '#F7CAC9',
					200: '#926b6a',
				},
				texto: {
					100: '#333333',
					200: '#5c5c5c',
				},
				fondo: {
					100: '#F2F2F2',
					200: '#e8e8e8',
					300: '#bfbfbf',
				},
			},
			animation: {
				marquee: 'marquee 25s linear infinite',
				marquee2: 'marquee2 25s linear infinite',
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				marquee2: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0%)' },
				},
			},
			aspectRatio: {
				'4/5': '4 / 5',
			},
		},
	},
	plugins: [],
};
export default config;
