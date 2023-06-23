import { createClient } from "contentful";
import { formatData } from "@/utils";
import Layout from "@/components/layout/layout";

export default function About(props) {
  console.log(props);
  return (
    <Layout>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      {props.dataArray.map((contentItem, index) => (
        <p key={index}>{contentItem}</p>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const response = await client.getEntries({
    content_type: "about",
  });

  return {
    props: formatData(response.items[0].fields),
  };
}
