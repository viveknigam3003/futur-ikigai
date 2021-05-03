import React from "react";
import Head from "next/head";

const Meta = () => {
  // const SEO = {
  //   title: "Find your Ikigai (The Futur X VN)",
  //   type: "website",
  //   author: "Vivek Nigam",
  //   image: "/Thumbnail.png",
  //   copyright: "Vivek Nigam",
  //   favicon: "/favicon.ico",
  //   url: "https://futur-ikigai.vercel.app/",
  //   description:
  //     "Find your Ikigai with the Chris Do (The Futur) method. This is a helper tool for following along with the Ikigai workshop by The Futur on Youtube.",
  //   siteName: "Find your Ikigai",
  //   twitter: "@_viveknigam_",
  // };

  return (
    <Head>
      {/* //Primary Meta Tags */}
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Find your Ikigai (The Futur X VN)</title>
      <meta name="title" content="Find your Ikigai (The Futur X VN)" />
      <meta
        name="description"
        content="Find your Ikigai with the Chris Do (The Futur) method. This is a helper tool for following along with the Ikigai workshop by The Futur on Youtube."
      />
      <link rel="icon" href="https://futur-ikigai.vercel.app/favicon.ico" />
      <meta name="author" content="Vivek Nigam" />
      <meta name="copyright" content="Vivek Nigam" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://futur-ikigai.vercel.app" />
      <meta property="og:title" content="Find your Ikigai (The Futur X VN)" />
      <meta
        property="og:description"
        content="Find your Ikigai with the Chris Do (The Futur) method. This is a helper tool for following along with the Ikigai workshop by The Futur on Youtube."
      />
      <meta
        property="og:image"
        content="https://futur-ikigai.vercel.app/Thumbnail.png"
      />
      <meta property="og:site_name" content="Find your Ikigai" />

      {/* Twitter  */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://futur-ikigai.vercel.app" />
      <meta name="twitter:title" content="Find your Ikigai (The Futur X VN)" />
      <meta
        name="twitter:description"
        content="Find your Ikigai with the Chris Do (The Futur) method. This is a helper tool for following along with the Ikigai workshop by The Futur on Youtube."
      />
      <meta
        name="twitter:image"
        content="https://futur-ikigai.vercel.app/Thumbnail.png"
      />
      <meta name="twitter:site" content="@_viveknigam_" />
      <meta name="twitter:creator" content="@_viveknigam_" />
    </Head>
  );
};

export default Meta;
