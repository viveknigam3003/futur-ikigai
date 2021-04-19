import { Box } from "@chakra-ui/layout";
import React from "react";
import Author from "./Author";

const Footer = ({ author, authorImage, twitter }) => {
  return (
    <Box
      display="grid"
      alignItems="flex-start"
      justifyContent="space-between"
      width="100%"
      bg="blue"
      p="5"
    >
      <Author name={author} image={authorImage} twitter={twitter} />
      <Box aria-label="Links"></Box>
      <Box aria-label=""></Box>
    </Box>
  );
};

Footer.defaultProps = {
  author: "Vivek Nigam",
  authorImage:
    "https://www.gravatar.com/avatar/516fd0624a35f74e54802fea778abf41",
  twitter: "_viveknigam_",
};

export default Footer;
