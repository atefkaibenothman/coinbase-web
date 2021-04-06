const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Go to /home");
});

app.get("/home", (req, res) => {
  res.send("Welcome to Coinbase Dashboard 2.0");
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
