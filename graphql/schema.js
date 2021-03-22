const { gql } = require("apollo-server");
const { userSchema, userType, userMutations } = require("./user");

const typeDefs = gql`
    ${userType}
    
    type Query {
        ${userSchema}
    }

    type Mutation {
        ${userMutations}
    }
`;

module.exports = typeDefs;
