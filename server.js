// Using express
const express = require('express');

//an instance of express
const app = express();
app.use(express.json())

//sample in-memory storage for todo items
let todo=[];

//create a new todo item
app.post('/todos', (req, res) => {
  const {title, description} = req.body;
    const newTodo = {
      id: todos.length + 1,
      title,
      description
    };
    todos.push(newTodo);
    console.log(todos);
    res.status(201).json(newTodo);
})

// start the server
const port=3000;
app.listen(port, () => {
  console.log('Server started on port:'+port);
})
