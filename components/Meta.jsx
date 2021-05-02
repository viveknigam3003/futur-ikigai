import React from "react";
import Head from "next/head";

const Meta = ({
  title,
  type = "website",
  image,
  author = "Vivek Nigam",
  copyright = "Vivek Nigam",
  isCrawlable = true,
  favicon = "/favicon.ico",
  url,
  description = "Find your Ikigai with the Chris Do (The Futur) method.",
  siteName = "Find your Ikigai",
  twitter = "@_viveknigam_",
}) => {
  return (
    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <link rel="icon" href={favicon} />
      <meta name="author" content={author} />
      <meta name="copyright" content={copyright} />
      <meta name="robots" content={isCrawlable ? "follow" : "noindex"} />
      <meta name="description" content={description} />
      <meta property="og:type" content={type} key="type" />
      <meta property="og:title" content={title} key="title" />
      <meta property="og:description" content={description} key="description" />
      <meta property="og:image" content={image} key="image" />
      <meta property="og:url" content={url} key="url" />
      <meta property="og:site_name" content={siteName} key="site_name" />
      <meta name="twitter:title" content={title} key="title" />
      <meta
        name="twitter:description"
        content={description}
        key="description"
      />
      <meta name="twitter:image" content={image} key="image" />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
    </Head>
  );
};

// const OGMeta = (type, title, description, image, url, siteName) => {
//   <>
//     <meta property="og:type" content={type} key="type" />
//     <meta property="og:title" content={title} key="title" />
//     <meta property="og:description" content={description} key="description" />
//     <meta property="og:image" content={image} key="image" />
//     <meta property="og:url" content={url} key="url" />
//     <meta property="og:site_name" content={siteName} key="site_name" />
//   </>;
// };

// const TwitterTags = ({ username, title, description, image }) => (
//   <>
//     <meta name="twitter:title" content={title} key="title" />
//     <meta name="twitter:description" content={description} key="description" />
//     <meta name="twitter:image" content={image} key="image" />
//     <meta name="twitter:site" content={username} />
//     <meta name="twitter:creator" content={username} />
//   </>
// );

export default Meta;
