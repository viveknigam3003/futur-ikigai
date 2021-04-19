import { Text } from "@chakra-ui/layout";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Meta from "../components/Meta";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Meta title="Find your Ikigai" />

      <main className={styles.main}>
        <Header overline="The Futur" title="Ikigai" subtitle="生きがい" />

        <Text align="center" fontSize="xl" pt="2" color="InactiveCaptionText">
          Ikigai stands for "a reason for being"
        </Text>

        <div className={styles.grid}>
          <Card
            title="Looking Inside"
            body="Discovering what you love, what you're good at, and what the world needs."
          />
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
