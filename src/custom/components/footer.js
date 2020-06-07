/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui";
import { Logo } from "./svg";
import { IconButton, Twitter, Instagram, Facebook } from "library";

const Footer = ({ socials }) => {
  return (
    <Box
      as="header"
      sx={{
        bg: "background",
        text: "text",
        width: "100%",
        pt: [0, null, 4],
      }}
    >
      <Flex
        sx={{
          width: "100%",
          px: [4, 5],
          py: 4,
          maxWidth: "1200px",
          margin: "0 auto",
          alignItems: "left",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ height: [28, null, 32], pl: 2, mt: [16, null, 0] }}>
          <Logo />
        </Box>
        <Box>
          {socials.instagram ? (
            <IconButton
              icon={<Instagram />}
              link={`https://www.instagram.com/${socials.instagram}`}
            />
          ) : null}
          {socials.twitter ? (
            <IconButton
              icon={<Twitter />}
              link={`https://twitter.com/${socials.twitter}`}
            />
          ) : null}
          {socials.facebook ? (
            <IconButton
              icon={<Facebook />}
              link={`https://facebook.com/${socials.facebook}`}
            />
          ) : null}
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
