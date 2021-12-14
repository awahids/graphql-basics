const Jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  getUser: (token) => {
    try {
      let decoded = null;
      if (token) {
        decoded = Jwt.verify(token, process.env.PWD_TOKEN);
      }

      return decoded;
    } catch (error) {
      throw error;
    }
  },
};
