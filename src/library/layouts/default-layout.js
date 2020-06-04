/** @jsx jsx */
import { Fragment } from "react";
import { jsx, Box } from "theme-ui";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import * as sections from ".";
import { Header } from "library/components";

const modelToViewName = (modelName) =>
  modelName.replace(/^([a-z])/, (first) => first.toUpperCase());

export default function Page({ data, settings }) {
  const router = useRouter();
  // const banner = settings.banner.show == true;
  if (!router.isFallback && !data?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  process.browser && console.log(data);
  return (
    <Fragment>
      {/* {banner ? <Banner text={settings.banner.text} /> : null} */}
      <Header />
      {router.isFallback ? (
        <p>Loading…</p>
      ) : (
        <Box>
          <Head>
            <title>
              {data.title} | {settings.name}{" "}
            </title>
            <meta name="description" content={data.description} />
          </Head>
          {data.content?.map((section, index) => {
            const sectionName = modelToViewName(section._type);

            if (sections[sectionName]) {
              const Section = sections[sectionName];
              return <Section key={index} {...section} />;
            }
          })}
        </Box>
      )}
    </Fragment>
  );
}
