import { createClient } from "contentful";

export default function About(props) {
  const {
    about: {
      fields: {
        title,
        subtitle,
        content: { content: contentData },
      },
    },
  } = props;
  console.log(props);
  return (
    <div style={{ height: "100vh" }}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      {contentData.map((item, index) =>
        item.content.map((subItem, subIndex) => (
          <p key={`${index}-${subIndex}`}>{item.content[0].value}</p>
        ))
      )}
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
    props: {
      about: response.items[0],
    },
  };
}
