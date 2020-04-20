const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, '127.0.0.1', () => {
  console.log(`pd-app listening at http://localhost:${port}`);
});