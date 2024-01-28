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
      fontFamily: {
        poppins: ['var(--poppins)'],
        pacifico: ['var(--pacifico)'],
      },
      colors: {
        "theme-first-color-alt": "#2B1712",
        "theme-first-color": "#492D26",
        "theme-first-color-light": "#65463E",
        "theme-second-color": "#DDB66F",
        "theme-title-color": "#2E2624",
        "theme-text-color": "#5B4C48",
        "theme-text-color-light": "#847571",
      },
    },
  },
  plugins: [],
};
export default config;