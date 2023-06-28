import { createClient } from "contentful";
import { formatData } from "@/utils";
import styles from "./page.module.css";

const getData = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const response = await client.getEntries({
    content_type: "about",
  });

  return formatData(response.items[0].fields);
};

export default async function About() {
  const data = await getData();

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{data.title}</h1>
      <h2 className={styles.subtitle}>{data.subtitle}</h2>
      <div className={styles.content}>
        {data.dataArray.map((contentItem, index) => (
          <p key={index} className={styles.contentItem}>
            {contentItem}
          </p>
        ))}
      </div>
    </main>
  );
}
