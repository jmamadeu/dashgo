import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./styles";

export const COLORS = {
  highlight: "#FF57B2",
  heading: "#F8F8F8",
  background: "#1A1D23",
  info: "#BBBBBB",
  body: "#D7D7D7"
};

export const FONTS = {
  body: "Inter"
};

const overrides = {
  colors: COLORS,
  fonts: FONTS,
  ...globalStyles,
  components: {}
};

export default extendTheme(overrides);
