const { deleteOne } = require("../../../models/bookshelfs.model");
const BookShelfs = require("../../../models/bookshelfs.model");

module.exports = {
  createShelf: async (parent, args, ctx, info) => {
    try {
      const findShelf = await BookShelfs.findOne({
        shelfName: args.data.shelfName,
      });

      if (findShelf) {
        throw new Error("Shelf name already");
      }

      const addShelf = await BookShelfs.create({
        shelfName: args.data.shelfName,
      });

      return addShelf;
    } catch (error) {
      throw error;
    }
  },

  updateShelf: async (parent, { _id, data }, ctx, info) => {
    try {
      const findShelf = await BookShelfs.findById({ _id: _id });

      if (!findShelf) {
        throw new Error("Cannot Find shelf");
      }

      await BookShelfs.updateOne(
        { _id: findShelf._id },
        {
          $set: {
            ...data,
          },
        }
      );

      return {
        _id,
        ...data,
      };
    } catch (error) {
      throw error;
    }
  },

  deleteShelfById: async (parent, { _id }, ctx, info) => {
    try {
      const findShelf = await BookShelfs.findById({ _id: _id });
      if (!findShelf) {
        throw new Error("Cannot find bookshelf");
      }

      const deleteShelf = await BookShelfs.deleteOne({ _id: findShelf._id });
      if (!deleteShelf) {
        throw new Error("cannot delete bookshelf");
      }

      return {
        _id,
      };
    } catch (error) {
      throw error;
    }
  },
};
