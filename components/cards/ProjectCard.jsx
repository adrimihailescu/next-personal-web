import Image from "next/image";

export default function ProjectCard({ project }) {
  const { title, image, links, tools } = project;
  return (
    <li>
      <h3>{project.title}</h3>
      <Image
        src={"https:" + project.image.src}
        alt={project.image.alt}
        width="500"
        height="350"
      />
      {Object.keys(project.links).map((link, key) => (
        <a
          key={key}
          href={project.links[link]}
          target="_blank"
          rel="noreferrer"
        >
          {link}
        </a>
      ))}
      <span>{project.tools.join("|")}</span>
    </li>
  );
}
