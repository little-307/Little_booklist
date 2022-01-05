import express from 'express';
import { getBooks, createBook } from '../controllers/books.js';

const router = express.Router();

router.get('/get', getBooks);

router.post('/post', createBook);

export default router;