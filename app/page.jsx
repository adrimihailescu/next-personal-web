"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  // console.log(about);
  const router = useRouter();
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        {/* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
        <h2 className={styles.header}>Adriana Mihailescu</h2>
        <h2 className={styles.subtitle}>Frontend Developer</h2>
        <button className={styles.button} onClick={() => router.push("/about")}>
          See more
        </button>
      </div>
    </main>
  );
}
