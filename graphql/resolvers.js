const user_resolvers = require("./user/resolver");

const resolvers = {
	...user_resolvers,
};

module.exports = resolvers;
