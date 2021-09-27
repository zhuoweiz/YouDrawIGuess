// const { ApolloServer } = require('apollo-server');
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const models = require('../models');


const http = require('http');
const { Server } = require("socket.io");

const app = express();
const ioServer = http.createServer(app);
const io = new Server(ioServer);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    const msg = "some one left";
    io.emit('left', msg);
    console.log('some one left');
  });
  // socket.broadcast.emit('hi');

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});


async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { models },
  });
  await server.start();
  
  server.applyMiddleware({ app, path: '/graphql' , cors: false},);
  // const port = process.env.PORT || 4000;
  // await new Promise((resolve) => app.listen({ port }, resolve));
  // console.log(`Apollo Server 3 listening on port ${port}`);
}

startApolloServer();
ioServer.listen(3000, () => {
  console.log('listening on 3000');
});

// server
//   .listen({port: process.env.PORT || 4000})
//   .then(({ url }) => console.log('Server is running on localhost:4000'));