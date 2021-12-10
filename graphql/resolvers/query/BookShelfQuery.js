const BookShelfs = require('../../../models/bookshelfs.model');

module.exports = {
    shelfs: async (parents, args, ctx, info) => {
        try {
            const shelfs = await BookShelfs.find().exec()

            return shelfs
        } catch (error) {
            throw error
        }
    },

    addBookIdByAddFields: async (parent, {_id, data}, ctx, info) => {
        try {
            const findShelf = await BookShelfs.find({ _id })
            
            await BookShelfs.aggregate([
                { $match: { _id: findShelf } },
                {
                    $addFields: {
                        // "bookId": args.data.bookId
                        bookId: {
                            $concatArrays: ["$bookId", [...data]]
                        }
                    }
                }
            ])

            return {
                _id,
                ...data
            }
        } catch (error) {
            throw error
        }
    },

    splitBookAtBookShelfs: async (parent, args, ctx, info) => {
        try {
            const splitBook = await BookShelfs.aggregate([
                { $unwind: "$bookName" }
            ])
            
            return splitBook
        } catch (error) {
            throw error
        }
    }
}