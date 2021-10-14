export default {
  type: "document",
  name: "job",
  title: "Jobs",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "company",
      type: "company",
    },
    {
      name: "roles",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "start",
      type: "number",
    },
    {
      name: "end",
      type: "number",
    },
  ],
};
