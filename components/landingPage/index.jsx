import React from "react";
import { useRouter } from "next/navigation";
import styles from "./index.module.css";

const HomePage = () => {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h2 className={styles.header}>Adriana Mihailescu</h2>
        <h2 className={styles.subtitle}>Frontend Developer</h2>
        <button className={styles.button} onClick={() => router.push("/about")}>
          See more
        </button>
      </div>
    </main>
  );
};

export default HomePage;
