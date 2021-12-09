const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const BookSchema = new Schema({
  bookName: {
    type: String,
    required: true,
    unique: true,
  },

  author: {
    type: String,
    required: true,
  },

  year: {
    type: Number,
    required: true,
  },
});

module.exports = Book = Mongoose.model("Book", BookSchema);
