/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { DefaultLayout, Drop } from "library";
import * as sections from ".";
import { initialColorMode, modes as extraModes } from "custom";
import { Logo, PrivacyNotice, Footer } from "../components";

export default function Page({ data, settings }) {
  const modes = [initialColorMode, ...Object.keys(extraModes)];
  return (
    <DefaultLayout
      data={data}
      settings={settings}
      logo={
        <Box sx={{ height: [28, null, 32], pl: [4, 2], mt: [16, null, 0] }}>
          <Logo />
        </Box>
      }
      modes={modes}
      colorModeSwitch={true}
      colorModeSwitchIcon={<Drop />}
      customSections={sections}
      bannerBackgroundGrad={true}
    >
      <Footer />
      <PrivacyNotice />
    </DefaultLayout>
  );
}
