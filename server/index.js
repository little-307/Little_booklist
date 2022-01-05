import express from 'express';
import mongoose from 'mongoose';

import bookRoutes from './routes/books.js';

const app = express();

const PORT = 5000;

app.use(express.json())
// set up route
// GET

app.use('/books', bookRoutes);

// POST


mongoose.connect("mongodb://localhost:27017/test")
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))) 
    .catch((e) => console.log(e));