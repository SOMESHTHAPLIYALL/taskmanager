const express = require("express");
const {
  getAllTodo,
  postTodo,
  editTodo,
  deleteTodo,
} = require("../controller/todoController");
const router = express.Router();

//GET Todos
router.post("/getTodos", getAllTodo);

//POST Todos
router.post("/postTodos", postTodo);

//EDIT
router.post("/editTodos", editTodo);

//DELETR
router.post("/deleteTodos", deleteTodo);

module.exports = router;
