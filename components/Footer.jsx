import { Image } from "@chakra-ui/image";
import { Box, Flex, HStack, Link, Text } from "@chakra-ui/layout";
import React from "react";
import { FooterLinks } from "../data/Links";
import styles from "../styles/Footer.module.css";
import Author from "./Author";

const Footer = ({ author, authorImage, twitter }) => {
  return (
    <Flex
      width="100%"
      alignItems="center"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-between"
      p={{ base: "4" }}
      px={{ md: "12", lg: "16", xl: "32" }}
      flexWrap="wrap"
      background="blue"
    >
      <Author name={author} image={authorImage} twitter={twitter} />
      <Links />
      <Attribution />
    </Flex>
  );
};

const Links = () => (
  <HStack spacing="4" className={styles.list} aria-label="Links" isInline>
    {FooterLinks.map((item) => (
      <Link
        key={item.label}
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

const Attribution = () => (
  <Box py="2" aria-label="" display="flex" alignItems="center">
    <Text fontSize="md" color="blue.100">
      Method by
    </Text>
    <Link isExternal href="https://thefutur.com">
      <Image mx="2" w="16" opacity="0.8" src="/thefutur_white.svg" />
    </Link>
  </Box>
);

Footer.defaultProps = {
  author: "Vivek Nigam",
  authorImage:
    "https://www.gravatar.com/avatar/516fd0624a35f74e54802fea778abf41",
  twitter: "_viveknigam_",
};

export default Footer;
