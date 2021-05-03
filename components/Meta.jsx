import React from "react";
import Head from "next/head";

const Meta = ({
  title,
  type,
  author,
  copyright,
  image,
  favicon,
  isCrawlable,
  url,
  description,
  siteName,
  twitter,
}) => {
  return (
    <Head>
      {/* //Primary Meta Tags */}
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="icon" href={favicon} />
      <meta name="author" content={author} />
      <meta name="copyright" content={copyright} />
      <meta name="robots" content={isCrawlable ? "follow" : "noindex"} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter  */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
    </Head>
  );
};

Meta.defaultProps = {
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

export const getServerSideProps = () => {
  return {
    props: {
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
    },
  };
};

export default Meta;
