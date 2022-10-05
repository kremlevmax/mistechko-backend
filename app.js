require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

const connectToDB = require("./db/connect");

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("users api");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 4000;
const start = () => {
  connectToDB(process.env.MONGO_URI);
  app.listen(PORT, () => {
    console.log(`Server is listening on a port ${PORT}...`);
  });
};

start();
