/** @jsx jsx */
import { jsx, Alert, Close, Flex, Text } from "theme-ui";
import { useState, useEffect } from "react";
import Iubenda from "react-iubenda-policy";

export default function PrivacyNotice() {
  const [hide, setHide] = useState(false);
  const handleClick = () => setHide(true);
  useEffect(() => {
    const data = localStorage.getItem("hide");
    if (data) {
      setHide(JSON.parse(data));
    }
  }, []);
  useEffect(() => localStorage.setItem("hide", JSON.stringify(hide), [hide]));

  return (
    <Flex
      sx={{
        display: hide ? "none" : "flex",
        left: 0,
        right: 0,
        my: "auto",
        mb: [0, 5],
        bottom: 0,
        zIndex: "alert",
        position: "fixed",
        justifyContent: "center",
      }}
    >
      <Alert
        sx={{
          width: ["100%", "auto"],
          bg: "text",
          borderRadius: [0, 2],
          boxShadow: (theme) => `${theme.shadows.large}`,
          color: "background",
          bottom: 0,
          py: [2, 1],
          zIndex: "alert",
          px: 1,
          justifyContent: ["space-between", "center"],
        }}
      >
        <Text pl={4} sx={{ fontSize: 0, fontWeight: "500" }}>
          By using our site you agree to our&nbsp;
          <Iubenda id={88825446} />
        </Text>
        <Flex
          sx={{ ml: [0, 3], width: [28, 40], alignSelf: ["right", "none"] }}
        >
          <Close onClick={handleClick} sx={{ width: "100%" }} />
        </Flex>
      </Alert>
    </Flex>
  );
}
