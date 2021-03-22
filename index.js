// modules
require("dotenv").config();
const express = require("express");
const passport = require("passport");
const { ApolloServer, makeExecutableSchema } = require("apollo-server-express");
const path = require("path");
const cors = require("cors");
var session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const db = require("./database").db;
const bodyParser = require("body-parser");
const expressJWT = require("express-jwt");
require("./middleware/passport")(passport);
const { applyMiddleware } = require("graphql-middleware");
const permissions = require("./graphql/permissions");

// customs
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
	expressJWT({
		secret: process.env.JWT_SECRET,
		algorithms: ["HS256"],
		credentialsRequired: false,
	})
);

app.use(express.static(path.join(__dirname, "/src")));
app.set("view engine", "ejs");

app.use(cors());
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Methods",
		"HEAD, OPTIONS, GET, POST, PUT, DELETE"
	);
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	next();
});

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

const server = new ApolloServer({
	schema: applyMiddleware(
		makeExecutableSchema({ typeDefs, resolvers }),
		permissions
	), // UPDATED!
	context: ({ req }) => {
		const user = req.user || null;
		return { user, req };
	},
});

server.applyMiddleware({ app, path: "/graphql" });

// session
app.use(
	session({
		secret: "dfdfgdfg",
		resave: false,
		proxy: true,
		saveUninitialized: false,
		cookie: { secure: false },
		store: new MongoStore({
			url: process.env.MONGODB,
			ttl: 14 * 24 * 60 * 60, // 14 days
			autoRemove: "interval",
			autoRemoveInterval: 5,
		}),
	})
);
app.use(passport.initialize());
app.use(passport.session());

// page route list
app.use("/", require("./routes/index"));
app.use("/user", require("./routes/user"));

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
