const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");

const { MONGODB } = require("./utils/config");

const app = express();

mongoose.connect(MONGODB).then(() => {
  console.log("connected successfully");
});

app.use(express.json());
app.use(helmet());
app.use(cors());

const apiRouter = require("./app.router");
app.use("/v1", apiRouter);

const { router } = require("./components/auth/auth.routes");

app.get("/", (req, res) => {
  res.json({ message: "hurray the server is up and running" });
});

app.all("*", (req, res) => {
  res.status(404).json({
    message: "invalid route",
  });
});

module.exports = app;
