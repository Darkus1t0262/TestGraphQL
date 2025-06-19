// index.js
const { ApolloServer, gql } = require('apollo-server');

// 1️⃣  GraphQL schema
const typeDefs = gql`
  type Query {
    hello(name: String = "World"): String!
  }
`;

// 2️⃣  Resolvers
const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello, ${name}!`,
  },
};

// 3️⃣  Start the server
async function start() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await server.listen({ port: 4000 });
  console.log(`🚀  GraphQL ready at ${url}`);
}

start();
