// MODULES
var express = require("express")
var router = express.Router()
const path = require("path")
const VIEWS = path.join(__dirname, "..", "src", "pages")

const { isAuth, loginRoute } = require("../middleware/routerAuth")

router.get("/admin/login", loginRoute, function (req, res) {
    res.render(VIEWS + "/login/index", null)
})

router.get("/admin", isAuth, function (req, res) {
    res.render(VIEWS + "/dashboard/index", null)
})

module.exports = router
