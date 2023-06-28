import Image from "next/image";
import styles from "./page.module.css";

export default function ProjectCard({ project }) {
  const { title, image, links, tools } = project;
  return (
    <li className={styles.card}>
      <h3 className={styles.projectTitle}>{project.title}</h3>
      <Image
        src={"https:" + project.image.src}
        alt={project.image.alt}
        width="350"
        height="350"
        layout="responsive"
        className={styles.image}
      />
      {Object.keys(project.links).map((link, key) => (
        <a
          key={key}
          href={project.links[link]}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          {link}
        </a>
      ))}
      <span className={styles.tools}>{project.tools.join("|")}</span>
    </li>
  );
}
