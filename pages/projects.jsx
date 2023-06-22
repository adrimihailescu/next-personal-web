import { createClient } from "contentful";

export default function Projects(props) {
  const {
    projectsPage: {
      fields: { title, subtitle, projects },
    },
  } = props;
  console.log(props);
  return <div style={{ height: "100vh" }}>Projects</div>;
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
    props: {
      projectsPage: response.items[0],
    },
  };
}
