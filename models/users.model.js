const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const UsersSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  name: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

module.exports = Users = Mongoose.model("Users", UsersSchema);
