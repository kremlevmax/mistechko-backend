require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

//Error handlers
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
app.use(express.json());

//connect to DB
const connectToDB = require("./db/connect");

//Routers
const authRouter = require("./routes/auth");
const adsRouter = require("./routes/ads");

//Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/ads", adsRouter);

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
