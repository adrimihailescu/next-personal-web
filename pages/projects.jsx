import { createClient } from "contentful";
import { formatData } from "@/utils";
import Image from "next/image";

export default function Projects(props) {
  console.log(props);
  return (
    <div style={{ height: "100vh" }}>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <ul>
        {props.dataArray.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <Image
              src={`https:${project.image.src}`}
              alt={project.image.alt}
              width="500"
              height="350"
            />
            {Object.keys(project.links).map((link, key) => (
              <a key={key} href={project.links[link]}>
                {link}
              </a>
            ))}
            <span>{project.tools.join("|")}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const response = await client.getEntries({
    content_type: "projectsPage",
  });

  return {
    props: formatData(response.items[0].fields),
  };
}
