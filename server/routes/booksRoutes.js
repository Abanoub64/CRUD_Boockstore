const express = require("express");
const router = express.Router();
const Books = require("../modules/books");

//Route for post a new book
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.auther || !req.body.Pubyear) {
      res.status(400).json({ error: "requred data is missing" });
    }
    const { title, auther, Pubyear } = req.body;
    const newBook = { title, auther, Pubyear };
    const book = await Books.create(newBook);
    return res.status(200).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Route to get all books
router.get("/", async (req, res) => {
  try {
    const books = await Books.find({});
    res.status(200).send({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for one book

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Books.findById(id);
    res.status(200), json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Route to update a book
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.auther || !req.body.Pubyear) {
      res.status(400).json({ error: "requred data is missing" });
    }
    const { id } = req.params;
    const result = await Books.findByIdAndUpdate(id, req.body);
    if (!result) {
      res.status(400).json({ error: "There is no such a book" });
    }
    res.status(200).json({ message: "Book updated" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Routeto delete a book

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Books.findByIdAndDelete(id);
    if (!result) {
      res.status(400).json({ error: "There is no such a book" });
    }
    res.status(200).json({ message: "Book Deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
