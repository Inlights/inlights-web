import { merge } from "theme-ui";
import { systemFonts, monoFonts, defaultFonts } from "library";

const customHeadingFont = "Termina";
const customBodyFont = "BW Nista";

const fonts = merge(defaultFonts, {
  body: `"${customBodyFont}", ${systemFonts}`,
  heading: `"${customHeadingFont}", ${systemFonts}`,
  monospace: `${monoFonts}`,
});

export default {
  ...fonts,
};
