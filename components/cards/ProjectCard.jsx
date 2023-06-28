import Image from "next/image";

export default function ProjectCard({ project }) {
  const { title, image, links, tools } = project;
  return (
    <li className="card">
      <h3 className="projectTitle">{project.title}</h3>
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
          className="link"
        >
          {link}
        </a>
      ))}
      <span className="tools">{project.tools.join("|")}</span>
    </li>
  );
}
