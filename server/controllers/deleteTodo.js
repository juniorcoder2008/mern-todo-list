import Todo from '../models/todoSchema.js';

export const deleteTodo = async (req, res) => {
  const data = req.body;

  await Todo.findByIdAndDelete(data.id);
}