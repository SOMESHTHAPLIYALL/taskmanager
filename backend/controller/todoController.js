const todoModel = require("../models/TodoModel");

const getAllTodo = async (req, res) => {
  try {
    const todos = await todoModel.find({ userid: req.body.userid });
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const postTodo = async (req, res) => {
  try {
    const newTodo = new todoModel(req.body);
    await newTodo.save();
    res.status(201).json({
      newTodo,
    });
  } catch (error) {
    console.log(error);
    res.send(500).send(error);
  }
};

const editTodo = async (req, res) => {
  try {
    await todoModel.findByIdAndUpdate(
      { _id: req.body.todoid },
      {
        title: req.body.title,
        description: req.body.description,
      }
    );
    res.status(200).send("Edited");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const deleteTodo = async (req, res) => {
  try {
    await todoModel.findByIdAndDelete({ _id: req.body.delid });
    res.status(200).send("Delted");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = { getAllTodo, postTodo, editTodo, deleteTodo };
