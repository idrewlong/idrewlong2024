/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
    extend: {
      colors: {
				giants_orange: '#FF5823',
				out_orange: '#FE7445',
				tangerine: '#FFA484',
				yel_orange: '#FBB131',
				crayola: '#FFC766',
				awesome: '#FF234B',
				plat: '#999999'
			}
    }
  },
  plugins: []
};
