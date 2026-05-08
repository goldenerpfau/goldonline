const functions = require("firebase-functions");
const { default: next } = require("next");
const express = require("express");
const cors = require("cors");

const app = next({
  dev: false,
  conf: {
    distDir: "./next"
  }
});

const handle = app.getRequestHandler();

const server = express();
server.use(cors({ origin: true }));

app.prepare().then(() => {
  server.all("*", (req, res) => {
    return handle(req, res);
  });
});

exports.nextApp = functions.https.onRequest(server);
