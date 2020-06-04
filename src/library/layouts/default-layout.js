/** @jsx jsx */
import { Fragment } from "react";
import { jsx, Box } from "theme-ui";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import * as defaultSections from ".";
import { Header, Banner } from "../components";

const modelToViewName = (modelName) =>
  modelName.replace(/^([a-z])/, (first) => first.toUpperCase());

export default function Page({
  data,
  settings,
  logo,
  modes,
  customSections,
  colorModeSwitchIcon,
  colorModeSwitch,
}) {
  const sections = { ...defaultSections, ...customSections };
  const banner = settings?.banner.show == true;
  const router = useRouter();
  if (!router.isFallback && !data?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  process.browser && console.log(data);
  return (
    <Fragment>
      <Head>
        <title>
          {data?.title} | {settings?.name}
        </title>
        <meta name="description" content={data?.description} />
      </Head>
      {router.isFallback ? (
        <p>Loading…</p>
      ) : (
        <>
          {banner ? <Banner text={settings.banner.text} /> : null}
          <Header
            logo={logo}
            colorModeSwitchIcon={colorModeSwitchIcon}
            colorModeSwitch={colorModeSwitch}
            modes={modes}
          />
          <Box>
            {data.content?.map((section, index) => {
              const sectionName = modelToViewName(section._type);
              if (sections[sectionName]) {
                const Section = sections[sectionName];
                return <Section key={index} {...section} />;
              }
            })}
          </Box>
        </>
      )}
    </Fragment>
  );
}
