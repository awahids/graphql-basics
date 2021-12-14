const { deleteOne } = require('../../../models/bookshelfs.model');
const BookShelfs = require('../../../models/bookshelfs.model');

module.exports = {
    createShelf: async (parent, args, ctx, info) => {
        try {
            const findShelf = await BookShelfs.findOne({ shelfName: args.data.shelfName })
            
            if (findShelf) {
                throw new Error("Shelf name already")
            }
                
            const addShelf = await BookShelfs.create({
                shelfName: args.data.shelfName
            })
    
            return addShelf
        } catch (error) {
            throw error
        }
    },

    updateShelf: async (parent, {_id, data}, ctx, info) => {
        try {
            const findShelf = await BookShelfs.findById({_id: _id})
            console.log("🚀 ~ file: ShelfMutation.js ~ line 25 ~ updateShelf: ~ findShelf", findShelf)
            if (!findShelf) {
                throw new Error("Cannot Find shelf")
            }

            await BookShelfs.updateOne(
                { _id: findShelf._id },
                {
                    $set: {
                        ...data
                    }
                }
            )

            return {
                _id,
                ...data
            }
        } catch (error) {
            throw error
        }
    },
}