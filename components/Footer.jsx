import { Box, Flex, HStack, Link, Spacer } from "@chakra-ui/layout";
import React from "react";
import { FooterLinks } from "../data/Links";
import Author from "./Author";

const Footer = ({ author, authorImage, twitter }) => {
  return (
    <Flex width="100%" p="8" flexWrap="wrap" background="blue">
      <Author name={author} image={authorImage} twitter={twitter} />
      <Spacer />
      <Links />
      <Box aria-label=""></Box>
    </Flex>
  );
};

const Links = () => (
  <HStack aria-label="Links">
    {FooterLinks.map((item) => (
      <Link
        color="blue.100"
        fontSize="md"
        fontWeight="medium"
        isExternal
        href={item.link}
      >
        {item.label}
      </Link>
    ))}
  </HStack>
);

Footer.defaultProps = {
  author: "Vivek Nigam",
  authorImage:
    "https://www.gravatar.com/avatar/516fd0624a35f74e54802fea778abf41",
  twitter: "_viveknigam_",
};

export default Footer;
