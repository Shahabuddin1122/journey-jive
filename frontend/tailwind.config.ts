import type { Config } from "tailwindcss";

const config: {
  plugins: any[];
  theme: { extend: { backgroundImage: { "gradient-conic": string; "gradient-radial": string }; colors: {"primary": string,secondary:string,tertiary:string} } };
  content: string[]
} = {
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
        primary: '#C7923E',
        secondary: '#27343F',
        tertiary: '#1A242D',
      },
    },
  },
  plugins: [],
};
export default config;
