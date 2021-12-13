const Book = require('../../../models/bookSchema');
const BookShelfs = require('../../../models/bookshelfs.model');

module.exports = {
    createBook: async (parent, { _id, bookName, data }, ctx, info) => {
        try {
            const findShelf = await BookShelfs.findById({_id}).exec()

            if (!findShelf) {
                throw new Error("Cannot find bookshelf")
            }

            const findBook = await Book.findOne({ bookName })
            
            if (findBook) {
                throw new Error("book already exists")
            }
            
            const addBook = await Book.create({shelfId: _id, ...data})
            await BookShelfs.updateOne(
                { _id: findShelf },
                {
                    $push: {
                        bookId: addBook._id
                    }
                }
            )

            return {
                _id,
                ...data
            }
        } catch (error) {
            return error.message
        }
    },

    updateBook: async (parent, { _id, data }, ctx, info) => {
        try {
            await Book.updateOne(
                { _id: _id }, { $set: { ...data } }, {new: true}
            ).exec()

            return {
                _id,
                ...data
            }
        } catch (error) {
            throw error
        }
    },

    deleteBook: async (parent, { id }, ctx, info) => {
        try {
            await Book.deleteOne({ _id: id })
            
            return {
                id
            }
        } catch (error) {
            throw error
        }
    }
}