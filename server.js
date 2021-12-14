const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const { createServer } = require("http");
const cors = require("cors");
const db = require("./config/db");
const schema = require("./graphql/index");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(cors());
db();

const server = new ApolloServer({
  schema,
  playground: true,
});

server.applyMiddleware({ app, path: "/" });

const webSocketServer = createServer(app);

server.installSubscriptionHandlers(webSocketServer);

webSocketServer.listen(PORT, () => {
  console.log(`🚀🚀🚀🚀🚀🚀🚀 Server ready at http://localhost:${PORT}`);
});
