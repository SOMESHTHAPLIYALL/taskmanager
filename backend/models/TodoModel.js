const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const todoModel = mongoose.model("todos", todoSchema);
module.exports = todoModel;
