import { createClient } from "contentful";
import { formatData } from "@/utils";
import ProjectCard from "@/components/cards/ProjectCard";
import styles from "./page.module.css";
const getData = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const response = await client.getEntries({
    content_type: "projectsPage",
  });

  return formatData(response.items[0].fields);
};

export default async function Projects() {
  const data = await getData();

  return (
    <main className={styles.projectsPage}>
      <h1 className={styles.title}>{data.title}</h1>
      <h2 className={styles.subtitle}>{data.subtitle}</h2>
      <ul className={styles.cards}>
        {data.dataArray.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </ul>
    </main>
  );
}
