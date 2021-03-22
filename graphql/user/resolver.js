const User = require("./../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const resolvers = {
	Query: {
		async getUsers(_, args, context) {
			return User.find({});
		},
	},
	Mutation: {
		async loginUserAdmin(_, args, context) {
			const email = args.userInput.email;
			const password = args.userInput.password;

			const user = await User.findOne({
				email: email,
			});
			const match = await bcrypt.compare(password, user.password);
			if (match) {
				const jwt_token = jwt.sign(
					{
						_id: user._id,
					},
					process.env.JWT_SECRET,
					{
						algorithm: "HS256",
						expiresIn: "1h",
					}
				);
				return {
					result: true,
					message: "Successfult authenticated",
					token: jwt_token,
				};
			} else {
				return {
					result: false,
					message: "Incorrect credentials",
					token: "",
				};
			}
		},
	},
};

module.exports = user_resolvers = resolvers;
