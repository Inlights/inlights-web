const headingStyles = {
  lineHeight: "heading",
  letterSpacing: "normal",
  fontWeight: "400",
  mt: 0,
};

const headings = {
  heading1: {
    ...headingStyles,
    fontSize: [5, null, null, 6],
  },
  heading2: {
    ...headingStyles,
    fontSize: [4, 5],
  },
  heading3: {
    ...headingStyles,
    fontSize: [3, 4],
  },
  heading4: {
    ...headingStyles,
    fontSize: [3],
  },
  heading5: {
    ...headingStyles,
    fontSize: [1, 2],
  },
};

export default {
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
  },
};
