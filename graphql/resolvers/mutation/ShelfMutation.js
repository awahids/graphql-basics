const BookShelfs = require('../../../models/bookshelfs.model');

module.exports = {
    createShelf: async (parent, args, ctx, info) => {
        try {
            const addShelf = new BookShelfs({
                shelfName: args.data.shelfName
            })

            const saveShelf = await addShelf.save()
            console.log("🚀 ~ file: ShelfMutation.js ~ line 11 ~ createShelf: ~ saveShelf", saveShelf)
    
            return saveShelf
        } catch (error) {
            throw error
        }
    },

    addBookIdByAddFields: async (parent, {_id, data}, ctx, info) => {
        // const {_id, ...data} = args
        try {
            const findShelf = await BookShelfs.find({_id})
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
            console.log("🚀 ~ file: ShelfMutation.js ~ line 25 ~ addBookIdByAddFields: ~ findShelf._id", findShelf)

            return {
                _id,
                ...data
            }
        } catch (error) {
            console.log("🚀 ~ file: ShelfMutation.js ~ line 34 ~ addBookIdByAddFields: ~ error", error)
            throw error
        }
    }
}