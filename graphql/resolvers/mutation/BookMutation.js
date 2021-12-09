const Book = require('../../../models/bookSchema');

module.exports = {
    createBook: async (parent, args, ctx, info) => {
        try {            
            const addBook = new Book({
                bookName: args.data.bookName,
                author: args.data.author,
                year: args.data.year
            })

            const saveBook = await addBook.save()
            console.log("🚀 ~ file: BookMutation.js ~ line 13 ~ createBook: ~ saveBook", saveBook)

            return saveBook
        } catch (error) {
            return error.message
        }
    },

    updateBook: async (parent, { id, data }, ctx, info) => {
        try {
            await Book.updateOne(
                { _id: id }, { $set: { ...data } }, {new: true}
            ).exec()

            return {
                id,
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