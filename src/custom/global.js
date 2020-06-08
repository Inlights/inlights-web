/** @jsx jsx */
import { jsx } from "theme-ui";
import { css, Global } from "@emotion/core";

const globalStyles = (theme) => css`
  @font-face {
    font-family: "Termina";
    src: url("/fonts/Termina-Medium.woff2") format("woff2"),
      url("/fonts/Termina-Medium.woff") format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "BW Nista";
    src: url("/fonts/BwNistaGrotesk-Light.woff2") format("woff2"),
      url("/fonts/BwNistaGrotesk-Light.woff") format("woff");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "BW Nista";
    src: url("/fonts/BwNistaGrotesk-Bold.woff2") format("woff2"),
      url("/fonts/BwNistaGrotesk-Bold.woff") format("woff");
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  ::selection {
    color: ${theme.colors.background};
    background: ${theme.colors.text};
  }
`;
const GlobalStyles = () => <Global styles={globalStyles} />;

export default GlobalStyles;
