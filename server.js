// server.js
const http = require("http");

// Create server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Success
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello! Your Node.js server is running.\n");
});

// Start listening on port 3000
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
