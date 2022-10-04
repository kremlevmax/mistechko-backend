const express = require("express");
const connectToDB = require("./db/connect");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 4000;
app.use(express.json());

const start = () => {
  connectToDB(process.env.MONGO_URI);
  app.listen(PORT, () => {
    console.log(`Server is listening on a port ${PORT}...`);
  });
};

start();
