/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        defaultColor: '#1D202C',
        btnColor: '#4863ED',
        whatsappColor: '#25D366',
      },
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
      center: true,
      screens: {
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
};
