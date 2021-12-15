const Users = require("../../../models/users.model");
const { authHash } = require("../../../utils/helpers/auth");
const Bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  signUp: async (parent, args, ctx, info) => {
    try {
      const { email, name, password } = args.data;
      const findUser = await Users.findOne({ email: email });

      if (findUser) {
        throw new Error(`${data.email} already taken`);
      }

      const hashPassword = await authHash(password);
      const user = await Users.create({
        email,
        name,
        password: hashPassword,
      });
      if (!user) {
        throw new Error("cannot signUp");
      }

      return user;
    } catch (error) {
      throw error;
    }
  },

  signIn: async (parent, args, ctx, info) => {
    try {
      const findUser = await Users.findOne({ email: args.data.email });
      console.log(
        "🚀 ~ file: authMutation.js ~ line 36 ~ signIn: ~ findUser",
        findUser
      );
      if (!findUser) {
        throw new Error("email cannot found");
      }

      const checkPassword = await Bcrypt.compare(
        args.data.password,
        findUser.password
      );
      console.log(
        "🚀 ~ file: authMutation.js ~ line 45 ~ signIn: ~ checkPassword",
        checkPassword
      );

      if (!checkPassword) {
        throw new Error("password incorrect");
      }

      const payload = {
        email: findUser.email,
        id: findUser._id,
      };
      console.log(
        "🚀 ~ file: authMutation.js ~ line 55 ~ signIn: ~ payload",
        payload
      );

      const token = Jwt.sign(payload, process.env.PWD_TOKEN, {
        expiresIn: 3600 * 24,
      });

      return { token };
    } catch (error) {
      throw error;
    }
  },
};
