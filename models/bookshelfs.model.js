const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const BookShelfsSchema = new Schema({
  shelfName: {
    type: String,
    required: true,
  },

  bookId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

module.exports = BookShelfs = Mongoose.model("BookShelfs", BookShelfsSchema);
