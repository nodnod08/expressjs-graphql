// MODULES
var express = require("express")
var routers = express.Router()
const path = require("path")
const VIEWS = path.join(__dirname, "..", "src", "pages")

const importItems = require("../queues/importItems")

const { isAuth } = require("../middleware/routerAuth")

routers.get("/", isAuth, function (req, res) {
    res.render(VIEWS + "/menu/index", null)
})

routers.get("/stocks/import-items", isAuth, function (req, res) {
    res.render(VIEWS + "/dashboard/index", null)
})

routers.get("/admin/importItems", isAuth, function (req, res) {
    importItems()

    res.send("santoy")
})

module.exports = routers
