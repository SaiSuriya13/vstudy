import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'], // Enable dark mode based on class
  content: [
    './pages/**/*.{ts,tsx}', // Include all TypeScript files in pages
    './components/**/*.{ts,tsx}', // Include all TypeScript files in components
    './app/**/*.{ts,tsx}', // Include all TypeScript files in app
    './src/**/*.{ts,tsx}', // Include all TypeScript files in src
  ],
  prefix: '', // No prefix for Tailwind classes
  theme: {
    container: {
      center: true, // Center the container
      padding: '2rem', // Padding for the container
      screens: {
        '2xl': '1400px', // Custom screen size for 2xl
      },
    },
    extend: {
      colors: {
        dark: {
          1: '#1C1F2E',
          2: '#161925',
          3: '#252A41',
          4: '#1E2757',
        },
        blue: {
          1: '#0E78F9',
        },
        sky: {
          1: '#C9DDFF',
          2: '#ECF0FF',
          3: '#F5FCFF',
        },
        orange: {
          1: '#FF742E',
        },
        purple: {
          1: '#830EF9',
        },
        yellow: {
          1: '#F9A90E',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        hero: "url('/images/hero-background.png')", // Custom background image
      },
    },
  },
  plugins: [require('tailwindcss-animate')], // Include tailwindcss-animate plugin
};

export default config;
