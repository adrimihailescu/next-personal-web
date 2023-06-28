import { createClient } from "contentful";
import { formatData } from "@/utils";
import ProjectCard from "@/components/cards/ProjectCard";

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
    <main>
      <h1>{data.title}</h1>
      <h2>{data.subtitle}</h2>
      <ul>
        {data.dataArray.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </ul>
    </main>
  );
}
