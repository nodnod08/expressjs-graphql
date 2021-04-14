// MODULES
var express = require("express")
var router = express.Router()

const path = require("path")
const VIEWS = path.join(__dirname, "..", "src", "pages")

const { loginRoute } = require("../middleware/routerAuth")

router.get("/login", loginRoute, function (req, res) {
    res.render(VIEWS + "/login/index", null)
})

module.exports = router
