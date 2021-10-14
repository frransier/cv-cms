export default {
  type: "object",
  name: "stack",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
  ],
};
