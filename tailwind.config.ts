import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'brand': {
          'orange': '#f65843',
          'blue': '#3fb5bf',
          'yellow': '#f7d11e',
          'purple': '#570026',
        },
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'float-medium': 'float-medium 5s ease-in-out infinite',
        'float-fast': 'float-fast 4s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-medium': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'float-fast': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 3rem))' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
