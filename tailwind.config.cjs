/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				body: "rgb(var(--color-bg))",
				"box-bg": "rgb(var(--color-box))",
				"box-shadow": "rgb(var(--box-sd))",
				"box-border": "rgb(var(--box-border))",
				primary: "#1d4ed8",
				"heading-1": "rgb(var(--heading-1))",
				"heading-2": "rgb(var(--heading-2))",
				"heading-3": "rgb(var(--heading-3))",
			},
			screens:{
				midmd:"880px"
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg) scale(1)' },
					'25%': { transform: 'translateY(-8px) rotate(0.5deg) scale(1.02)' },
					'50%': { transform: 'translateY(-4px) rotate(-0.5deg) scale(1.01)' },
					'75%': { transform: 'translateY(-12px) rotate(0.25deg) scale(1.03)' },
				}
			},
			animation: {
				'float': 'float 4s ease-in-out infinite',
			}
		},
	},
	plugins: [],
}
