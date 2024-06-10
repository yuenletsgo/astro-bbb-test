const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	corePlugins: {
		preflight: false,
	},
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontSize: {
				'clamp': 'clamp(2rem,3vw,10vw)',
			},
		},
	},
	plugins: [
		plugin(function({ addBase, theme }) {
			addBase({
				'h1': { fontSize: 'clamp(1.5rem,3vw,4rem)', lineHeight: '95%', fontWeight: '500', },
				'h2': { fontSize: 'clamp(1rem,1.5vw,3rem)', lineHeight: '95%', fontWeight: '300', letterSpacing: '0.035rem' },
				'h3': { fontSize: 'clamp(1rem,1.5vw,3rem)', lineHeight: '95%', fontWeight: '300', letterSpacing: '0.035rem' },
				'h4': { fontSize: 'clamp(.8rem,1.25vw,1.625rem)', lineHeight: '0' },
				'h5': { fontSize: 'clamp(.825rem,1.1vw,1.07rem)', lineHeight: '135%' },
				'p': { fontSize: '1rem' },
			})
		})
	],
}
