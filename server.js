// Using express
const express = require('express');
const mongoose = require('mongoose');

//an instance of express
const app = express();
app.use(express.json())

//sample in-memory storage for todo items
//let todos=[];

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/mern-app')
.then(() => {console.log('Connected to MongoDB')
})
.catch((err) => {console.log( err)
})

//creating schema
const todoModel =mongoose.model('Todo', todoSchema);

//create a new todo item
app.post('/todos', async(req, res) => {
  const {title, description} = req.body;
    //const newTodo = {
    //  id: todos.length + 1,
    //  title,
    //  description
    //};
    //todos.push(newTodo);
    //console.log(todos);
    try{
        const newTodo = new todoModel({title,description });
        await newTodo.save();
        res.status(201).json(newTodo);
    }catch(error){
        console.log(error)
        res.status(500);
    }
})

//get all items

app.get('/todos', (req, res) => {
    res.json(todos);
})    

// start the server
const port=3000;
app.listen(port, () => {
  console.log('Server started on port:'+port);
})
