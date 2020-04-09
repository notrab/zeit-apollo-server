const cuid = require("cuid");

const resolvers = {
  Query: {
    todos: () => [
      {
        id: cuid(),
        description: "Stay home, Protect the NHS, Save lives.",
      },
    ],
  },
};

module.exports = resolvers;
