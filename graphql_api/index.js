// index.js
const { ApolloServer, gql } = require('apollo-server');

// Definir esquema
const typeDefs = gql`
    type Query {
        hello: String
    }
`;

// Resolver para el esquema
const resolvers = {
    Query: {
        hello: () => "¡Hola Mundo desde GraphQL!",
    },
};

// Configurar servidor
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Servidor listo en ${url}`);
});
