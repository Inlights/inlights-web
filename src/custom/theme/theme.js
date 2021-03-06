import { merge } from "theme-ui";
import { baseTheme, defaultColors } from "library";
import { default as customColors } from "./colors";
import { default as fonts } from "./fonts";
import { default as typography } from "./typography";

const colors = merge(defaultColors, customColors);

export const uiColors = {
  background: colors.black,
  text: colors.white,
};

export const initialColorMode = "default";

export const modes = {
  yellow: {
    text: colors.black,
    background: colors.yellow,
    logoDark: "#000000",
    logoMid: "#121212",
    logoLight: "#282828",
  },
  green: {
    text: colors.black,
    background: colors.green,
    logoDark: "#000000",
    logoMid: "#121212",
    logoLight: "#282828",
  },
  blue: {
    text: colors.black,
    background: colors.blue,
    logoDark: "#000000",
    logoMid: "#121212",
    logoLight: "#282828",
  },
};

export default merge(baseTheme, {
  initialColorModeName: initialColorMode,
  colors: { ...customColors, ...uiColors, modes },
  fonts,
  ...typography,
});
