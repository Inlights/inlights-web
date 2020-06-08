/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { DefaultLayout, Drop } from "library";
import * as sections from ".";
import { initialColorMode, modes as extraModes } from "custom";
import { Logo, PrivacyNotice, Footer } from "../components";
import firebase from "../firebase";

export default function Page({ data, settings }) {
  console.log(firebase);
  const modes = [initialColorMode, ...Object.keys(extraModes)];
  const socials = {
    instagram: settings?.instagram,
    twitter: settings?.twitter,
    facebook: settings?.facebook,
  };
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
      <Footer socials={socials} />
      <PrivacyNotice />
    </DefaultLayout>
  );
}
