// import mongoose from 'mongoose';

import Books from '../models/books.js';

// GET
export const getBooks = async (req, res) => {
    try {
        const books = await Books.find();

        res.status(200).json(books);
    } catch (e) {
        res.status(400).json({ message: e });
    }
}

//POST
export const createBook = async (req, res) => {
    const post = req.body;

    const newBooks = new Books({ ...post });

    try {
        await newBooks.save();

        res.status(201).json(newBooks);
    } catch (e) {
        res.status(409).json({ message: e });
    }
}