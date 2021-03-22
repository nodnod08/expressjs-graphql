// MODULES
var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
const VIEWS = path.join(__dirname, "..", "src", "pages");

const { isAuth, loginRoute } = require("../middleware/routerAuth");

router.get("/admin/login", loginRoute, async function (req, res) {
	res.render(VIEWS + "/login/index", null);
});

module.exports = router;
