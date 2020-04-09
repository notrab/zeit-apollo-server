const { gql } = require("apollo-server-micro");

const typeDefs = gql`
  type Query {
    todos: [Todo!]!
  }

  type Todo {
    id: ID!
    description: String
  }
`;

module.exports = typeDefs;
