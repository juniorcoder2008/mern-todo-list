import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import getTodosRouter from './routes/getTodos.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI);

app.use(bodyParser({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/get-todos', getTodosRouter);

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});


app.listen(PORT, () => console.log(`Backend is running on http://localhost:${PORT}`));