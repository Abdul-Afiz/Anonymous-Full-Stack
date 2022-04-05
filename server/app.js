const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

const apiRouter = require("./app.router");
app.use("/v1", apiRouter);

app.get("/", (req, res) => {
  res.json({ message: "hurray the server is up and running" });
});

app.all("*", (req, res) => {
  res.status(404).json({
    message: "invalid route",
  });
});

module.exports = app;
