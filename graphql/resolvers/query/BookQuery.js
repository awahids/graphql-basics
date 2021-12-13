const Book = require('../../../models/bookSchema');
const bookshelfsModel = require('../../../models/bookshelfs.model');

module.exports = {
    books: async (parents, {limit, offset}, ctx, info) => {
        try {
            const books = await Book.find({}).limit(parseInt(limit)).skip(parseInt(offset)).exec()

            return books
        } catch (error) {
            throw error
        }
    },

    getBookByYear: async (parents, {year}, ctx, info) => {
        try {
            const books = await Book.aggregate([
                {
                    $project: {
                        bookName: 1,
                        year: 1,
                        author: 1,
                        yearGt: {
                            $gt: ["$year", year]
                        },
                        _id: 0,
                        authorOfBook: {$concat: ["$author", " - ", "$bookName"]}
                    },
                },
                {$sort: {bookName: 1}}
            ])
            
            return books
        } catch (error) {
            throw error
        }
    },

    getBookByBookName: async (parent, {bookName}, ctx, info) => {
        try {
            const book = await Book.aggregate([
                {$match: {bookName: bookName}}
            ])

            return book
        } catch {
            throw error
        }
    }
}