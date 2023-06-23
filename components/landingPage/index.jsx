import React from "react";
import { useRouter } from "next/navigation";
import styles from "./index.module.css";
import Blob from "../blob/Blob";

const HomePage = () => {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <Blob className={styles.blob} />
      <div className={styles.center}>
        <h1 className={styles.header}>Adriana Mihailescu</h1>
        <h2 className={styles.subtitle}>Frontend Developer</h2>
        <button className={styles.button} onClick={() => router.push("/about")}>
          See more
        </button>
      </div>
    </main>
  );
};

export default HomePage;
