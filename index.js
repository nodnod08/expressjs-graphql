// modules
require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const db = require("./database").db;
// customs

const app = express();
const PORT = process.env.PORT || 4000;

// app.use(
// 	"/graphql",
// 	graphqlHTTP({
// 		schema: MyGraphQLSchema,
// 		graphiql: true,
// 	})
// );

app.listen(PORT, () => console.log(`Running on port ${PORT}`));