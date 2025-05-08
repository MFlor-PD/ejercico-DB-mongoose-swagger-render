module.exports = {
    components: {
      schemas: {
        Task: {
          type: "object",
          properties: {
            _id: { type: "string" },
            title: { type: "string" },
            completed: { type: "boolean" },
            createdAt: { type: "string", format: "date-time" },
            updatedAt: { type: "string", format: "date-time" },
          },
        },
        TaskInput: {
          type: "object",
          required: ["title"],
          properties: {
            title: { type: "string" },
          },
        },
      },
    },
  };
  
  