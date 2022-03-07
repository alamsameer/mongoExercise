const express = require('express')
const morgan = require('morgan')
const connect = require('../connect')
const {json, urlencoded} = require('body-parser')
const app = express()
const Todo = require('./todo')

app.use(morgan('dev'))
app.use(urlencoded({extended: true}))
app.use(json())

app.get('/todo/:id', async (req, res) => {
  const todoId = req.params.id
   try{
    const todoList=await Todo.findById(todoId).lean()
   
    res.status(200).json(todoList)
   }
   catch{
     res.status(501).send()
   }
})
app.get('/todos', async (req, res) => {
  const todoList=await Todo.find({}).lean()
  res.json(todoList)
})

app.post('/todo', async () => {
  const todoToCreate = req.body.todo
  try{
const todo =await Todo.create(todoToCreate)
res.status(201).send(todo.toObject())
  
  }
  catch{
    res.status(501).send()
  }
})

connect('mongodb://127.0.0.1:27017/notes')
  .then(() => app.listen(4000, () => {
    console.log('server on http://localhost:4000')
  }))
  .catch(e => console.error(e))
