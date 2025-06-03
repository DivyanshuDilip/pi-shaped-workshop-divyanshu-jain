const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello, World! This is a Node.js app running in Docker.');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});