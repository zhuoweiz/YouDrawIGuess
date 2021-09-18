// const { ApolloServer } = require('apollo-server');
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const models = require('../models');

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { models },
  });
  await server.start();
  
  const app = express();
  server.applyMiddleware({ app });
  const port = process.env.PORT || 4000;
  await new Promise((resolve) => app.listen({ port }, resolve));
  console.log(`Apollo Server 3 listening on port ${port}`);
}

startApolloServer();
// server
//   .listen({port: process.env.PORT || 4000})
//   .then(({ url }) => console.log('Server is running on localhost:4000'));