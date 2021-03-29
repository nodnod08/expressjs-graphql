// modules
require("dotenv").config()
const express = require("express")
const passport = require("passport")
const { ApolloServer, makeExecutableSchema } = require("apollo-server-express")
const path = require("path")
const cors = require("cors")
var session = require("express-session")
const MongoStore = require("connect-mongo")(session)
const db = require("./database").db
const bodyParser = require("body-parser")
const expressJWT = require("express-jwt")
require("./middleware/passport")(passport)
const { applyMiddleware } = require("graphql-middleware")
const permissions = require("./graphql/permissions")
const hbs = require("express-handlebars")

// customs
const typeDefs = require("./graphql/schema")
const resolvers = require("./graphql/resolvers")

const app = express()
const PORT = process.env.PORT || 4000

app.use(
    expressJWT({
        secret: process.env.JWT_SECRET,
        algorithms: ["HS256"],
        credentialsRequired: false
    })
)

app.engine(
    "hbs",
    hbs({
        extname: "hbs",
        defaultLayout: "layout",
        layoutsDir: __dirname + "/src/pages/layout"
    })
)
app.use(express.static(__dirname))
app.set("view engine", "hbs")

app.use(cors())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "HEAD, OPTIONS, GET, POST, PUT, DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    next()
})

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))

const server = new ApolloServer({
    schema: applyMiddleware(makeExecutableSchema({ typeDefs, resolvers }), permissions), // UPDATED!
    context: ({ req }) => {
        const user = req.user || null
        return { user, req }
    }
})

server.applyMiddleware({ app, path: "/graphql" })

// session
app.use(
    session({
        secret: process.env.JWT_SECRET,
        resave: true,
        proxy: false,
        saveUninitialized: false,
        cookie: { secure: false, maxAge: 604800000 }, // 7 days, millisecond format, even the sessions are still in the database (mongodb), it will check if it is expires and automatically remove from your browser and the server still filtering expired sessions with cookis
        store: new MongoStore({
            url: process.env.MONGODB,
            ttl: 604800000, // 7 days
            autoRemove: "interval",
            autoRemoveInterval: 5
        })
    })
)
app.use(passport.initialize())
app.use(passport.session())

// page route list
app.use("/", require("./routes/index"))
app.use("/user", require("./routes/user"))

app.listen(PORT, () => console.log(`Running on port ${PORT}`))
