import React from "react";
import { NextSeo } from "next-seo";

const SEO = ({
  title,
  type,
  author,
  image,
  copyright,
  favicon,
  url,
  description,
  siteName,
  twitter,
}) => {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
        site_name: siteName,
      }}
      twitter={{
        handle: twitter,
        site: twitter,
        cardType: "summary_large_image",
      }}
    />
  );
};

SEO.defaultProps = {
  title: "Find your Ikigai (The Futur X VN)",
  type: "website",
  author: "Vivek Nigam",
  image: "/Thumbnail.png",
  copyright: "Vivek Nigam",
  favicon: "/favicon.ico",
  url: "https://futur-ikigai.vercel.app/",
  description:
    "Find your Ikigai with the Chris Do (The Futur) method. This is a helper tool for following along with the Ikigai workshop by The Futur on Youtube.",
  siteName: "Find your Ikigai",
  twitter: "@_viveknigam_",
};

export default SEO;
