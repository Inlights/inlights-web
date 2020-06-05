/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui";
import { Logo } from "./svg";

const Footer = () => {
  return (
    <Box
      as="header"
      sx={{
        bg: "text",
        text: "background",
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
          <Logo isDark />
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
