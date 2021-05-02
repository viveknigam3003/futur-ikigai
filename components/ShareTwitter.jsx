import React from "react";
import { TwitterShareButton } from "react-twitter-embed";

const ShareTwitter = () => (
  <TwitterShareButton
    url={"https://futur-ikigai.vercel.app"}
    options={{
      text:
        "Found this interesting app to find my Ikigai with @thefuturishere & @theChrisDo method! ✨",
      via: "_viveknigam_",
      hashtags: "FuturIkigai,1BminusOne",
      size: "large",
    }}
  />
);

export default ShareTwitter;
