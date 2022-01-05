import express from 'express';

import bookRoutes from './routes/books.js';

const app = express();

const PORT = 5000;


// set up route
// GET

app.use('/books', bookRoutes);

// POST



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));