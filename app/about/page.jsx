import { createClient } from "contentful";
import { formatData } from "@/utils";

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
    <div style={{ height: "100vh" }}>
      <h1>{data.title}</h1>
      <h2>{data.subtitle}</h2>
      {data.dataArray.map((contentItem, index) => (
        <p key={index}>{contentItem}</p>
      ))}
    </div>
  );
}
