import { merge } from "theme-ui";
import { baseTheme, defaultColors } from "library";
import { default as customColors } from "./colors";
import { default as fonts } from "./fonts";
import { default as typography } from "./typography";

const colors = merge(defaultColors, customColors);

export const uiColors = {
  background: colors.black,
  text: colors.white,
  logo: colors.white,
  logoDark: colors.black,
};

export const initialColorMode = "default";

export const modes = {};

export default merge(baseTheme, {
  initialColorModeName: initialColorMode,
  colors: { ...customColors, ...uiColors, modes },
  fonts,
  ...typography,
  shadows: {
    large: "8px 8px 23px -8px rgba(0,0,0,0.71)",
  },
  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      bg: "background",
      lineHeight: "body",
      fontWeight: "300",
    },
  },
});
