/** @jsx jsx */
import { jsx, Box, Flex, Heading } from "theme-ui";
import { Section, RichText, Media, VideoPlayer } from "library";

function HeroSection(props) {
  const { heading, subheading, media, appearance, video } = props;
  const x1 = 750;
  const x2 = 1500;
  return (
    <Section
      backgroundColor={appearance.backgroundColor}
      backgroundGradient={appearance.backgroundGradient}
    >
      <Flex
        sx={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "auto",
        }}
      >
        {video ? (
          <Box
            sx={{
              position: "absolute",
              zIndex: "0",
              height: "100%",
              width: "100%",
              minHeight: "100%",
              maxHeight: ["none", null, "700px"],
            }}
          >
            <VideoPlayer url={video} />
          </Box>
        ) : null}

        <Flex
          sx={{
            maxWidth: "1200px",
            m: "0 auto",
            flexDirection: ["column", null, "row"],
            position: "relative",
            zIndex: "1",
            alignContent: "center",
            justifyContent: ["flex-start", null, "center"],
            height: "100%",
            width: "100%",
          }}
        >
          <Flex
            sx={{
              width: ["100%", null, "60%", "55%"],
              px: 5,
              alignItems: ["space-between", null, "center"],
            }}
          >
            <Flex
              sx={{
                flexDirection: "column",
                pt: [7, null, 0],
              }}
            >
              <Heading as="h1" variant="heading1">
                {heading}
              </Heading>
              {subheading ? (
                <Box sx={{ fontSize: [2, null, 3] }}>
                  <RichText content={subheading} />
                </Box>
              ) : null}
            </Flex>
          </Flex>
          <Flex
            sx={{
              minHeight: "700px",
              width: ["100%", null, "50%", "45%"],
            }}
          >
            {media?.map((item, index) => {
              return (
                <Media
                  key={index}
                  image={item.image}
                  alt={item.alt}
                  data={item.data}
                  x1={x1}
                  x2={x2}
                />
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </Section>
  );
}

export default HeroSection;
