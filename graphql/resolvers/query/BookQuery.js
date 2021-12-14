const Book = require("../../../models/book.model");
const bookshelfsModel = require("../../../models/bookshelfs.model");

module.exports = {
  books: async (parents, { limit, offset }, ctx, info) => {
    try {
      const books = await Book.find({})
        .limit(parseInt(limit))
        .skip(parseInt(offset))
        .exec();

      return books;
    } catch (error) {
      throw error;
    }
  },

  getBookByYear: async (parents, { year }, ctx, info) => {
    try {
      const books = await Book.aggregate([
        {
          $project: {
            bookName: 1,
            year: 1,
            author: 1,
            yearGt: {
              $gt: ["$year", year],
            },
            _id: 0,
            authorOfBook: { $concat: ["$author", " - ", "$bookName"] },
          },
        },
        { $sort: { bookName: 1 } },
      ]);

      return books;
    } catch (error) {
      throw error;
    }
  },

  getBookByBookName: async (parent, { bookName }, ctx, info) => {
    try {
      const book = await Book.aggregate([{ $match: { bookName: bookName } }]);

      return book;
    } catch {
      throw error;
    }
  },

  joinBookAndBookShelf: async (parent, args, ctx, info) => {
    try {
      const shelfs = await BookShelfs.aggregate([
        {
          $lookup: {
            from: "Book",
            localField: "book",
            foreignField: "book",
            as: "fromBook",
          },
        },
        {
          $replaceRoot: {
            newRoot: {
              $mergeObjects: [
                {
                  $arrayElemAt: ["$fromBook", 0],
                },
                "$$ROOT",
              ],
            },
          },
        },
        { $project: { fromBook: 0 } },
      ]);

      return shelfs;
    } catch (error) {
      throw error;
    }
  },

  replaceIdBook: async (parent, args, ctx, info) => {
    try {
      const replaceId = await Book.aggregate([
        {
          $addFields: {
            _id: "$bookName",
            bookName: "book_title",
          },
        },
      ]);

      return replaceId;
    } catch (error) {
      throw error;
    }
  },
};
