import { extendTheme } from "@chakra-ui/react";
import { Manrope } from "next/font/google";

// https://tintsshades.netlify.app (Weight 10)

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"]
});

const theme = extendTheme({
  config: { initialColorMode: "light", useSystemColorMode: false },
  styles: {
    global: () => ({
      "html, body": {
        fontSize: 18,
        bg: "gray.100",
        color: "gray.900",
        lineHeight: 2
      }
    })
  },
  fonts: {
    heading: manrope.style.fontFamily,
    body: manrope.style.fontFamily
  },
  components: {
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: "none"
        }
      }
    },
    Button: { baseStyle: { borderRadius: 99999 } },
    Card: { baseStyle: { container: { borderRadius: ".5rem" } } }
  }
});

export default theme;
