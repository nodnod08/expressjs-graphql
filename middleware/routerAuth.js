const path = require("path");
const VIEWS = path.join(__dirname, "..", "src", "pages");

const isAuth = function (req, res, next) {
	if (!req.isAuthenticated()) {
		return res.status(200).redirect("/admin/login");
	}
	next();
};

const loginRoute = function (req, res, next) {
	if (req.isAuthenticated()) {
		return res.status(200).redirect("/admin");
	}
	next();
};

module.exports = {
	isAuth,
	loginRoute,
};
