const mongoose = require("mongoose");
require("dotenv").config();

module.exports = async () => {
  try {
    // await mongoose.connect(process.env.MONGO_URI, {});
    await mongoose.connect(process.env.DB_LOCAL, {});
    console.log("MongoDB are Connected");
  } catch (err) {
    console.log(err);
  }
};
