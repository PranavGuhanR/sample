// Using express
const express = require('express');

//an instance of express
const app = express();

// define a route
app.get('/', (req, res) => {
  res.send('Hello World')
})

// start the server
const port=3000;
app.listen(port, () => {
  console.log('Server started on port'+port);
})
