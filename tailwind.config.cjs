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
				},
				'wave-1': {
					'0%, 100%': { transform: 'translateX(0px)' },
					'50%': { transform: 'translateX(30px)' },
				},
				'wave-2': {
					'0%, 100%': { transform: 'translateX(0px)' },
					'50%': { transform: 'translateX(-25px)' },
				},
				'wave-3': {
					'0%, 100%': { transform: 'translateX(0px)' },
					'50%': { transform: 'translateX(20px)' },
				}
			},
			animation: {
				'float': 'float 4s ease-in-out infinite',
				'wave-1': 'wave-1 8s ease-in-out infinite',
				'wave-2': 'wave-2 12s ease-in-out infinite',
				'wave-3': 'wave-3 15s ease-in-out infinite',
			}
		},
	},
	plugins: [],
}
