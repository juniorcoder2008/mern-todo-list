import Todo from '../models/todoSchema.js';

export const getTodos = async (req, res) => {
  const todos = await Todo.find();

  res.json(todos);
};