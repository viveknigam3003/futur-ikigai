import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Text } from "@chakra-ui/layout";
import { MenuItem } from "@chakra-ui/menu";
import { useToast } from "@chakra-ui/toast";
import { Fragment } from "react";
import ActionModal from "../components/ActionModal";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Meta from "../components/Meta";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { IDEAS_KEY, LIST_KEY } from "../utils/constants";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleReset = () => {
    localStorage.removeItem(LIST_KEY);
    localStorage.removeItem(IDEAS_KEY);

    toast({
      title: "Application Reset Complete.",
      description: "You can now start over with Step 1",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <div className={styles.container}>
      <Meta title="Find your Ikigai" />
      <Navbar menuItems={<MenuItems openResetDialog={onOpen} />} />
      <main className={styles.main}>
        <Header overline="The Futur" title="Ikigai" subtitle="生きがい" />

        <Text align="center" fontSize="xl" pt="2" color="InactiveCaptionText">
          Ikigai stands for "a reason for being"
        </Text>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          maxWidth="64rem"
          mt="3rem"
        >
          <Card
            overline="Step 1"
            title="Looking Inside"
            body="Discovering what you love, what you're good at, and what the world needs."
            color="blue.500"
            backgroundColor="blue.50"
            path="/step1"
          />
          <Card
            overline="Step 2"
            title="Finding Ikigai"
            body="Crafting ideas and extracting ultimate creativity for finding your Ikigai"
            color="orange.500"
            backgroundColor="orange.50"
            path="/step2"
          />
        </Box>
        <ActionModal
          title="Are you sure you want to reset?"
          isOpen={isOpen}
          onClose={onClose}
          onClick={handleReset}
          buttonText="Confirm Reset"
        >
          Resetting the application will delete all its data on this device.
          This action is irreversible.<br/><br/> Do you wish to continue?
        </ActionModal>
      </main>

      <Footer />
    </div>
  );
}

const MenuItems = ({ openResetDialog }) => (
  <Fragment>
    <MenuItem as="a" href="https://youtu.be/BAzs3amtEFA" target="_blank">Know More</MenuItem>
    <MenuItem color="red.400" onClick={openResetDialog}>
      Reset App
    </MenuItem>
  </Fragment>
);
