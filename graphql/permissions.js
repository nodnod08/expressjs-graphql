const { and, or, rule, shield } = require("graphql-shield");

const isAuthenticated = rule()((parent, args, { user, req }) => {
	return user !== null;
});

const isAdmin = rule()((parent, args, { user }) => {
	return user.userType == 1;
});

module.exports = shield({
	Query: {
		getUsers: and(isAuthenticated, isAdmin),
	},
});
