import { createClient } from "contentful";
import { formatData } from "@/utils";

export default function About(props) {
  // const {
  //   about: {
  //     fields: {
  //       title,
  //       subtitle,
  //       content: { content: contentData },
  //     },
  //   },
  // } = props;
  console.log(props);
  return (
    <div style={{ height: "100vh" }}>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      {/* {contentData.map((item, index) =>
        item.content.map((subItem, subIndex) => (
          <p key={`${index}-${subIndex}`}>{item.content[0].value}</p>
        ))
      )} */}
      <p>{props.dataArray}</p>
    </div>
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
