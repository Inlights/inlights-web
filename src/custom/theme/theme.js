import { merge } from "theme-ui";
import { baseTheme, defaultColors } from "library";
import { default as customColors } from "./colors";
import { default as fonts } from "./fonts";

const colors = merge(defaultColors, customColors);

export const uiColors = {
  background: colors.black,
  text: colors.white,
  logo: colors.white,
};

export const initialColorMode = "default";

export const modes = {};

export default merge(baseTheme, {
  initialColorModeName: initialColorMode,
  colors: { ...customColors, ...uiColors, modes },
  fonts,
});
