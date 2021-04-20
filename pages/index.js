import { Box, Text } from "@chakra-ui/layout";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Meta from "../components/Meta";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Meta title="Find your Ikigai" />
      <Navbar />
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
          />
          <Card
            overline="Step 2"
            title="Finding Ikigai"
            body="Crafting ideas and extracting ultimate creativity for finding your Ikigai"
            color="orange.500"
            backgroundColor="orange.50"
          />
        </Box>
      </main>

      <Footer />
    </div>
  );
}
