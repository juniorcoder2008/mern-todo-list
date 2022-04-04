import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import getTodosRouter from './routes/getTodos.js';
import createTodoRouter from './routes/createTodo.js';
import deleteTodoRouter from './routes/deleteTodo.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI);

app.use(cors());
app.use(bodyParser({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use('/get-todos', getTodosRouter);
app.use('/create-todo', createTodoRouter);
app.use('/delete-todo', deleteTodoRouter);

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});


app.listen(PORT, () => console.log(`Backend is running on http://localhost:${PORT}`));