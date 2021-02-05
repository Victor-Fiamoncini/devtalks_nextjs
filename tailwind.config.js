const colors = require('tailwindcss/colors')

module.exports = {
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			purple: colors.violet,
			white: colors.white,
			gray: colors.gray,
			green: colors.green,
			yellow: colors.yellow,
			blue: colors.blue,
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		extend: {
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
			translate: ['active', 'hover', 'group-hover'],
		},
	},
}
