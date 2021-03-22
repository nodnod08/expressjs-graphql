const path = require("path");
const VIEWS = path.join(__dirname, "..", "src", "pages");

const isAuth = function (req, res, next) {
	if (!req.isAuthenticated()) {
	}
	next();
};

const loginRoute = function (req, res, next) {
	if (req.isAuthenticated()) {
		console.log(req.user);
		return res.status(200).redirect("/admin");
	}
	next();
};

module.exports = {
	isAuth,
	loginRoute,
};
