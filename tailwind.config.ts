import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        'gradient-flow': {
          '0%, 100%': { 'background-position': '100% 50%' },
          '50%': { 'background-position': '0% 50%' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0, 255, 0, 0.5), 0 0 20px rgba(0, 255, 0, 0.4), 0 0 30px rgba(0, 255, 0, 0.3), 0 0 40px rgba(0, 255, 0, 0.2)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 255, 0, 0.7), 0 0 30px rgba(0, 255, 0, 0.6), 0 0 40px rgba(0, 255, 0, 0.5), 0 0 50px rgba(0, 255, 0, 0.4)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'gradient-flow': 'gradient-flow 3s ease infinite',
        'glow': 'glow 2s ease-in-out infinite',
        marquee: 'marquee 50s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
