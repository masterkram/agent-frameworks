const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        sans: ['Gabarito'],
      },
			colors: {
				primary: colors.sky,
				gray: colors.zinc,
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
