import React from "react";
import Head from "next/head";

const Meta = () => {
  const SEO = {
    title: "Find your Ikigai (The Futur X VN)",
    type: "website",
    author: "Vivek Nigam",
    image: "/Thumbnail.png",
    copyright: "Vivek Nigam",
    isCrawlable: true,
    favicon: "/favicon.ico",
    url: "https://futur-ikigai.vercel.app/",
    description:
      "Find your Ikigai with the Chris Do (The Futur) method. This is a helper tool for following along with the Ikigai workshop by The Futur on Youtube.",
    siteName: "Find your Ikigai",
    twitter: "@_viveknigam_",
  };

  return (
    <Head>
      {/* //Primary Meta Tags */}
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{SEO.title}</title>
      <meta name="title" content={SEO.title} />
      <meta name="description" content={SEO.description} />
      <link rel="icon" href={SEO.favicon} />
      <meta name="author" content={SEO.author} />
      <meta name="copyright" content={SEO.copyright} />
      <meta name="robots" content={SEO.isCrawlable ? "follow" : "noindex"} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={SEO.type} />
      <meta property="og:url" content={SEO.url} />
      <meta property="og:title" content={SEO.title} />
      <meta property="og:description" content={SEO.description} />
      <meta property="og:image" content={SEO.image} />
      <meta property="og:site_name" content={SEO.siteName} />

      {/* Twitter  */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={SEO.url} />
      <meta name="twitter:title" content={SEO.title} />
      <meta name="twitter:description" content={SEO.description} />
      <meta name="twitter:image" content={SEO.image} />
      <meta name="twitter:site" content={SEO.twitter} />
      <meta name="twitter:creator" content={SEO.twitter} />
    </Head>
  );
};

// Meta.defaultProps = {
//   title: "Find your Ikigai (The Futur X VN)",
//   type: "website",
//   author: "Vivek Nigam",
//   image: "/Thumbnail.png",
//   copyright: "Vivek Nigam",
//   isCrawlable: true,
//   favicon: "/favicon.ico",
//   url: "https://futur-ikigai.vercel.app/",
//   description:
//     "Find your Ikigai with the Chris Do (The Futur) method. This is a helper tool for following along with the Ikigai workshop by The Futur on Youtube.",
//   siteName: "Find your Ikigai",
//   twitter: "@_viveknigam_",
// };

export default Meta;
