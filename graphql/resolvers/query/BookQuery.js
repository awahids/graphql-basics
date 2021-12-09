const Book = require('../../../models/bookSchema');

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
                        _id: 0
                    }
                }
            ])
                // .find({ year: { $gt: year } })
            
            return books
        } catch (error) {
            throw error
        }
    }
}