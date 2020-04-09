const { ApolloServer } = require("apollo-server-micro");

const typeDefs = require("./_typeDefs");
const resolvers = require("./_resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

exports.config = {
  api: {
    bodyParser: false,
  },
};

module.exports = (req, res, ...args) => {
  if (req.method === "OPTIONS") return res.status(200).send();

  const handler = server.createHandler();

  return handler(req, res, ...args);
};
