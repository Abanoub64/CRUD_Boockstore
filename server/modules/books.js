const mongoos = require("mongoose");
const { Schema } = mongoos;

const booksSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    auther: {
      type: String,
      require: true,
    },
    Pubyear: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const BooksModle = mongoos.model("books", booksSchema);

module.exports = BooksModle;
