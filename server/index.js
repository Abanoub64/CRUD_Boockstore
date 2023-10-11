const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const Books = require("../server/modules/books");
const cors = require("cors");
const BooksRoutes = require("../server/routes/booksRoutes");

const app = express();

//middleware
app.use(express.json());
app.use("/books", BooksRoutes);

//connect to DB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to DB");
    app.listen(process.env.PORT, () => {
      console.log("App is listening to port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
