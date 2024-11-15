import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/contexts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      grey: "#727272",
      primary: {
        DEFAULT: "#00BDFF",
        100: "#00A6E0",
      },
      secondary: {
        DEFAULT: "#64C107",
        50: "#77D31B",
        100: "#54A206",
      },
      light: {
        DEFAULT: "#F2F2F2",
        blue: "#F1F6FF",
      },
      dark: {
        DEFAULT: "#183563",
        100: "#091222",
      },
      bonus: {
        1: "#C681D4",
        2: "#64D5CB",
        3: "#6D89D8",
        4: "#F9CE60",
        5: "#F57979",
      },
    },
    extend: {
      screens: {
        xs: "480px",
        mdl: "821px",
        mdlg: "890px",
        lg: "1080px",
        "1xl": "1365px",
        "2xl": "1440px",
        "3xl": "1700px",
      },
      lineHeight: {
        mini: "0.75",
        small: "0.8",
        tight: "1.2",
        snug: "1.3",
        relaxed: "1.8",
      },
      fontSize: {
        "12xl": "8rem",
        "11xl": "6.25rem",
        "10xl": "6rem",
        "9xl": "4rem",
        "8xl": "3.5rem",
        "7xl": "3rem",
        "6xl": "2.5rem",
        "5xl": "2.25rem",
        "4xl": "2rem",
        "3xl": "1.75rem",
        "2xl": "1.5rem",
        xl: "1.25rem",
        lg: "1.125rem",
        base: "1rem",
        sm: "0.875rem",
        xs: "0.75rem",
      },
      transitionProperty: {
        lang: "max-height, padding-top, padding-bottom",
        "bar-x": "transform, background-color",
        "bar-middle": "opacity, background-color",
        header: "padding, background-color",
      },
      gridTemplateColumns: {
        bonuses: "repeat(auto-fill, minmax(min(26rem, 100%), 1fr))",
      },
    },
  },
  plugins: [
    plugin(function ({
      addVariant,
    }: {
      addVariant: (name: string, value: string) => void;
    }) {
      addVariant("en", "&:lang(en)");
      addVariant("es", "&:lang(es)");
    }),
  ],
} satisfies Config;
