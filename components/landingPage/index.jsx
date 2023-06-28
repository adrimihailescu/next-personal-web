import React from "react";
import { useRouter } from "next/navigation";
import Blob from "../blob/Blob";
import styles from "./page.module.css";

const HomePage = () => {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <Blob className={styles.blob} />
      <div className={styles.content}>
        <h1 className={styles.title}>Adriana Mihailescu</h1>
        <h2 className={styles.subtitle}>Frontend Developer</h2>
        <button className={styles.button} onClick={() => router.push("/about")}>
          See more
        </button>
      </div>
    </main>
  );
};

export default HomePage;
