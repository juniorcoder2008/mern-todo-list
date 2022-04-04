import Todo from "../models/todoSchema.js";

export const createTodo = (req, res) => {
  const data = req.body;

  const newTodo = new Todo(data);

  try {
    newTodo.save();

    res.json({ status: 'ok' });
  } catch (error) {
    res.json({ error: error.message })
  }
}