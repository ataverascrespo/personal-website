/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      xxs: '390px',
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        sans: ['"Hanken Grotesk"', 'sans-serif']
      },
      keyframes: { 
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'slideInUp': {
					"0%": { transform: ' translateY(100%)', opacity:0 },
					"100%": { transform: 'translateY(0)', }
        },
        'zoomIn': {
					"0%": { transform: 'scale(1.5, 1.5)', opacity: 0 },
					"100%": { transform: 'scale(1, 1)'}
				},
        
      },
      animation: {
        text: 'text 5s ease infinite',
        slideInUp: "slideInUp 1.5s forwards",
        zoomIn: "zoomIn 0.75s",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}