import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  name: String
});

const Todo = mongoose.model('TodoSchema', todoSchema);

export default Todo;