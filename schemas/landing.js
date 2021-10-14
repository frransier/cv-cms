export default {
  type: "document",
  name: "landing",
  title: "Start Page",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "description",
      type: "string",
    },
    {
      name: "details",
      type: "details",
    },
    {
      name: "about",
      type: "text",
    },
    {
      name: "stack",
      type: "array",
      of: [{ type: "stack" }],
    },
    {
      name: "jobs",
      type: "array",
      of: [{ type: "reference", to: { type: "job" } }],
    },
    {
      name: "education",
      type: "array",
      of: [{ type: "reference", to: { type: "education" } }],
    },
    {
      name: "projects",
      type: "array",
      of: [{ type: "reference", to: { type: "project" } }],
    },
  ],
};
