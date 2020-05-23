//Require the Express server setup
const server = require("./server");

//Expose the specified port or default port
const port = process.env.NODE_ENV || 8080;

//Start up the server
server.listen(port, () => {
  console.log(`Server now listening on ${port}`);
});
