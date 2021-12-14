const Users = require('../../../models/users.model');
const {authHash} = require('../../../utils/helpers/auth');

module.exports = {
    signUp: async (parent, args, ctx, info) => {
        try {
            const {email, name, password} = args.data
            const findUser = await Users.findOne({ email: email })
            
            if (findUser) {
                throw new Error(`${data.email} already taken`)
            }

            const hashPassword = await authHash(password);
            const user = await Users.create({
                email,
                name,
                password: hashPassword
            })
            if (!user) {
                throw new Error("cannot signUp")
            }

            return user
        } catch (error) {
            throw error
        }
    }
}