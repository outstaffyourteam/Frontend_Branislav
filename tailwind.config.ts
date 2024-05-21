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
      colors: {
        "soft-peach": "#EFEFEF",
        "orange-peel": "#FCA000",
        "davy-grey": "#4F5962",
        "dark-slate-gray": "#273341",
        "aque-squeeze": "#E8F5ED",
        "paris-green": "#41D77C",
        "carmine-pink": "#EE4C4C",
        aluminium: "#A9ADB3",
        "dawn-pink": "#F8E9E8",
        "sweet-pink": "#F3A3A3",
      },
    },
  },
  plugins: [],
};
export default config;
