const BookShelf = require('../../../models/bookshelfs.model');

module.exports = {
    shelfs: async (parents, args, ctx, info) => {
        try {
            const shelfs = await BookShelf.find().exec()

            return shelfs
        } catch (error) {
            throw error
        }
    },

    // getBookByYear: async (parents, {year}, ctx, info) => {
    //     try {
    //         const books = await Book.find({ year: { $gt: year}})
            
    //         return books
    //     } catch (error) {
    //         throw error
    //     }
    // }
}