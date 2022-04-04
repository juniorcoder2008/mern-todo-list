import express from "express";
import { createTodo } from '../controllers/createTodo.js';

const router = express.Router();
router.post('/', createTodo);

export default router;