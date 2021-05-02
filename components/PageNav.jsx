import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import Link from "next/link";
import React from "react";

const PageNav = ({
  prevProps = { link: "", color: "", text: "" },
  nextProps = { link: "", color: "", text: "" },
}) => {
  return (
    <Box
      p={{ base: "2rem", lg: "3rem 8rem" }}
      mt={{ base: "2rem", lg: "4rem" }}
      display="flex"
      alignItems="center"
      justifyContent={{ base: "center" }}
      width="100%"
      flexWrap="wrap-reverse"
    >
      {prevProps.text && <Link href={prevProps.link}>
        <Button size="lg" m="2" colorScheme={prevProps.color}>
          {prevProps.text}
        </Button>
      </Link>}
      {nextProps.text && <Link href={nextProps.link}>
        <Button size="lg" colorScheme={nextProps.color} m="2">
          {nextProps.text}
        </Button>
      </Link>}
    </Box>
  );
};

export default PageNav;
