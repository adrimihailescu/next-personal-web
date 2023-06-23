import { createClient } from "contentful";
import { formatData } from "@/utils";
import ProjectCard from "@/components/cards/ProjectCard";

export default function Projects(props) {
  console.log(props);
  return (
    <div style={{ height: "100vh" }}>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <ul>
        {props.dataArray.map((project, index) => (
          <ProjectCard key={index} project={project} />
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
