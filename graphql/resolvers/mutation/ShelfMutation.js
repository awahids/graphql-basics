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
    }
}