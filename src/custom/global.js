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
    font-family: "Inter";
    src: url("/fonts/Inter-Regular.woff2") format("woff2"),
      url("/fonts/Inter-Regular.woff") format("woff");
    font-weight: 500;
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
