const Book = require('../../../models/bookSchema');

module.exports = {
    books: async (parents, args, ctx, info) => {
        try {
            const books = await Book.find().exec()

            return books
        } catch (error) {
            throw error
        }
    },

    getBookByYear: async (parents, {year}, ctx, info) => {
        try {
            const books = await Book.find({ year: { $gt: year}})
            
            return books
        } catch (error) {
            throw error
        }
    }
}