import { merge } from "theme-ui";
import { systemFonts, monoFonts, defaultFonts } from "library";

const customHeadingFont = "Termina";
const customBodyFont = "Inter";

const fonts = merge(defaultFonts, {
  body: `"${customBodyFont}", ${systemFonts}`,
  heading: `"${customHeadingFont}", ${systemFonts}`,
  monospace: `${monoFonts}`,
});

export default {
  ...fonts,
};
