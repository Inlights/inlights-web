const headingStyles = {
  lineHeight: "heading",
  letterSpacing: "normal",
  fontWeight: "400",
  mt: 0,
};

const headings = {
  heading1: {
    ...headingStyles,
    fontSize: 5,
    mb: 5,
  },
  heading2: {
    ...headingStyles,
    fontSize: [4, 5],
    mb: 4,
  },
  heading3: {
    ...headingStyles,
    fontSize: [3, 4],
    mb: 4,
  },
};

const bodyStyles = {
  large: {
    fontSize: 3,
    mb: 5,
  },
  overline: {
    fontSize: 0,
    lineHeight: "body",
    textTransform: "uppercase",
    letterSpacing: "loose",
    fontFamily: "heading",
    mb: 2,
  },
};

export default {
  fontSizes: [14, 16, 18, 22, 32, 46, 58, 64],
  lineHeights: {
    normal: "normal",
    none: 1,
    body: 1.4,
    heading: 1.1,
  },
  letterSpacings: {
    normal: "normal",
    tight: -0.8,
    loose: 1.3,
  },
  text: {
    ...headings,
    ...bodyStyles,
  },
};
