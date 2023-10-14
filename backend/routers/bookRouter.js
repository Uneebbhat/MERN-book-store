import express from "express";
const router = express.Router();
import { Book } from "../models/bookModel.js";

// Post new book
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      res.status(400).send({ message: "All fields are required" });
    }

    const newBook = new Book({
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    });

    const book = Book.create(newBook);
    res.send(book);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
});

// Get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    if (!books) {
      res.send("No books found");
    }
    res.send({
      count: books.length,
      data: books,
    });
  } catch (err) {
    console.log(`Error: ${err}`);
  }
});

// Get book by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (!book) {
      res.send(`No book found with this id: ${id}`);
    }
    res.send(book);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
});

// Update book by id
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateBook = await Book.findByIdAndUpdate(id, req.body);
    if (!updateBook) {
      res.status(404).send({ message: "Book not found to update" });
    }
    res.send(updateBook);
  } catch (err) {
    console.log(`Error updating book: ${err}`);
  }
});

// Delete book by id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.findByIdAndDelete(id);
    if (!deleteBook) {
      res.status(404).send({ message: "Book not found to delete" });
    }
    res.send(deleteBook);
  } catch (err) {
    console.log(`Error occurred while deleting book ${err}`);
  }
});

export default router;
