// MODULES
var express = require("express")
var router = express.Router()
const path = require("path")
const VIEWS = path.join(__dirname, "..", "src", "pages")

const { isAuth } = require("../middleware/routerAuth")

router.get("/", isAuth, function (req, res) {
    res.render(VIEWS + "/dashboard/index", null)
})

module.exports = router
