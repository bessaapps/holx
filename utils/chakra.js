import { extendTheme } from "@chakra-ui/react";
import { Manrope } from "next/font/google";

// https://tintsshades.netlify.app (Weight 10)

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const theme = extendTheme({
  config: { initialColorMode: "light", useSystemColorMode: false },
  colors: {
    black: "#000000",
    gray: {
      50: "#fcfcfc",
      100: "#f8f8f9",
      200: "#f1f1f3",
      300: "#eaeaec",
      400: "#e3e3e6",
      500: "#dcdce0",
      600: "#b0b0b3",
      700: "#848486",
      800: "#58585a",
      900: "#2c2c2d",
    },
    primary: {
      50: "#f7ecfc",
      100: "#eed9f9",
      200: "#ddb2f2",
      300: "#cd8cec",
      400: "#bc65e5",
      500: "#ab3fdf",
      600: "#8932b2",
      700: "#672686",
      800: "#441959",
      900: "#220d2d",
    },
    secondary: {
      50: "#fcecfc",
      100: "#f9d9f9",
      200: "#f3b2f3",
      300: "#ec8cec",
      400: "#e665e6",
      500: "#e03fe0",
      600: "#b332b3",
      700: "#862686",
      800: "#5a195a",
      900: "#2d0d2d",
    },
  },
  styles: {
    global: () => ({
      "html, body": {
        bg: "gray.100",
        color: "gray.900",
        lineHeight: 2,
      },
      // Minor Third
      // https://typescale.com
      h1: { fontSize: "2.986rem !important" },
      h2: { fontSize: "2.488rem !important" },
      h3: { fontSize: "2.074rem !important" },
    }),
  },
  fonts: {
    heading: manrope.style.fontFamily,
    body: manrope.style.fontFamily,
  },
  components: {
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: "none",
        },
      },
    },
  },
});

export default theme;
