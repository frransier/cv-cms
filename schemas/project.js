export default {
  type: "document",
  name: "project",
  title: "Projects",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "status",
      type: "string",
    },
    {
      name: "url",
      type: "string",
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "stack",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "roles",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
  ],
};
