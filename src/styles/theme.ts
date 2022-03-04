import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: { heading: "Poppins", body: "Poppins" },
  colors: {
    highlight: "#FFBA08",
    text: "#47585B",
    info: "#999999",
    "text.light": "#F5F8FA",
    "info.light": "#DADADA",
  },
  styles: {
    global: {
      body: {
        bg: "text.light",
        color: "text",
      },
    },
  },
});
