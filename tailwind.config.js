/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
			},
		},
		screens: {
			xs: '360px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			colors: {
				primary: {
					light: '#EBE5FC',
					DEFAULT: '#7749F8',
					dark: '#5227CC',
				},
				secondary: {
					light: '#ABB5BE',
					DEFAULT: '#6C757D',
					dark: '#54595E',
				},
				success: {
					DEFAULT: '#28A745',
					dark: '#218838',
				},
				warning: {
					DEFAULT: '#FFC107',
					dark: '#E0A800',
				},
				danger: {
					DEFAULT: '#DC3545',
					dark: '#C82333',
				},
				info: {
					DEFAULT: '#17A2B8',
					dark: '#138496',
				},
				light: {
					DEFAULT: '#F8F9FA',
					700: '#E2E6EA',
				},
				dark: {
					DEFAULT: '#343A40',
					700: '#23272B',
				},
			},
			fontFamily: {
				default: ['Poppins', 'sans-serif'],
			},
			boxShadow: {
				'mui-button':
					'0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
				'mui-button-hover':
					'0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
				'mui-button-active':
					'0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)',
			},
			transitionProperty: {
				outline: 'outline',
			},
			animation: {
				ripple: 'ripple 600ms linear',
			},
			keyframes: {
				ripple: {
					to: { transform: 'scale(4)', opacity: 0 },
				},
			},
		},
	},
	plugins: [],
};
