import Meta from "../Component/meta";
import styles from "../styles/Home.module.css";
import Sampleapi from "../Component/Sampleapi";

export default function Home({ article }) {
  return (
    <div className={styles.container}>
      <Meta title='Kirshi' />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Kirshi!</a>
        </h1>
      </main>
      <Sampleapi article={article} />
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=30"
  );

  const article = await response.json();
  return {
    props: { article },
  };
};
