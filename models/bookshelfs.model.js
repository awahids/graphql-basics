const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const BookShelfSchema = new Schema({
  shelfName: {
    type: String,
    required: true,
  },

  bookId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Books",
    },
  ],
});

module.exports = BookShelf = Mongoose.model("BookShelf", BookShelfSchema);
