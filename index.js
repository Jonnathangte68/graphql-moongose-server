const express               = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
require('./config');

const typeDefs = require('./src/schema');
const resolvers = require('./src/resolvers');
const UserAPI = require('./src/datasources/user');

const dataSources = () => ({
    userAPI: new UserAPI(),
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);