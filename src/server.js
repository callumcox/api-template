const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const glob = require("glob");

const server = express();

//Add some basic security to the application
//E.g. remove headers that can be used to identify attack vectors
server.use(helmet());

//Parse application/json
server.use(bodyParser.json());

//Process through the routes directory and add in any routes that are present
glob
  .sync("**/*[^test.].js", { cwd: `${__dirname}/routes/`, nodir: true })
  .forEach((file) => {
    server.use(require(`${__dirname}/routes/${file}`));
  });

module.exports = server;
