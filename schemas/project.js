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
      name: "employer",
      type: "reference",
      to: [{ type: "job" }],
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
      type: "text",
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
