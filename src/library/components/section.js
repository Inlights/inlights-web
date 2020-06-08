/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { useRef } from "react";
import { VideoPlayer } from "library/components";
import { useDimensions } from "library/hooks";

function Section(props) {
  const targetRef = useRef();
  const size = useDimensions(targetRef);

  const {
    backgroundColor,
    backgroundGradient,
    gradientFrom,
    gradientTo,
    textColor,
    spacing,
    children,
    backgroundVideo,
  } = props;

  const gradTo = `rgba(${gradientTo?.r}, ${gradientTo?.g}, ${gradientTo?.b}, ${gradientTo?.a})`;
  const gradFrom = `rgba(${gradientFrom?.r}, ${gradientFrom?.g}, ${gradientFrom?.b}, ${gradientFrom?.a})`;

  return (
    <Box
      ref={targetRef}
      as="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "auto",
        color: textColor ? textColor : "text",
      }}
    >
      <Box
        sx={{
          bg: backgroundColor ? backgroundColor : "background",
          background: backgroundGradient
            ? `linear-gradient(180deg, ${
                gradientFrom ? gradFrom : " rgba(255,255,255,0)"
              } 0%,${gradientTo ? gradTo : " rgba(255,255,255,0)"} 90%)`
            : null,
          position: "absolute",
          zIndex: -1,
          height: 0,
          pt: size.width * 0.5625,
          minHeight: "100%",
          pl: size.height * 1.7777,
          minWidth: "100%",
          overflow: "hidden",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%) scale(1.01)",
          iframe: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: 0,
          },
        }}
      >
        {backgroundVideo ? <VideoPlayer url={backgroundVideo} /> : null}
      </Box>
      <Box
        sx={{
          zIndex: 1,
          py:
            spacing == "large"
              ? 7
              : spacing == "medium"
              ? 6
              : spacing == "small"
              ? 5
              : 0,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Section;
