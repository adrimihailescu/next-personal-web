export const formatData = (object) => {
  const dataArray = [];

  if (object.projects) {
    object.projects.map((project) =>
      dataArray.push({
        title: project.fields.title,
        links: project.fields.content.links,
        tools: project.fields.content.tools,
        image: {
          src: project.fields.image.fields.file.url,
          alt: project.fields.image.fields.title,
        },
      })
    );
  }

  if (object.content) {
    object.content.content.map((contentItem) =>
      dataArray.push(contentItem.content[0].value)
    );
  }

  return {
    title: object.title,
    subtitle: object.subtitle,
    dataArray,
  };
};
