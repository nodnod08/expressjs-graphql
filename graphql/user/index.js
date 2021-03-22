const User = require("../../models/User");

const types = `
    scalar DateTime

    input LoginUserAdminInput {
        email: String!
        password: String!
    }

    type userAuth {
        message: String
        token: String,
        result: Boolean!
    }
    
    type User {
        id: ID!
        username: String!
        userType: Int!
        email: String!
        firstName: String!
        lastName: String!
        password: String!
        created_at: DateTime!
        added_by: String!
    }
`;

const schema = `
    getUsers: [User]
`;

const mutations = `
    loginUserAdmin(userInput: LoginUserAdminInput): userAuth!
`;

module.exports = {
	userSchema: schema,
	userType: types,
	userMutations: mutations,
};
