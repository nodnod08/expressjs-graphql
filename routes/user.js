// MODULES
var express = require("express")
var router = express.Router()
const bcrypt = require("bcrypt")
const passport = require("passport")
const jwt = require("jsonwebtoken")

router.post("/admin/login", async function (req, res, next) {
    passport.authenticate("local", function (err, user, info) {
        if (!user) {
            res.send({
                success: false,
                message: typeof info == "object" ? info.message : info
            })
        } else {
            req.login(user, function (err) {
                if (err) {
                    res.send({
                        success: false,
                        message: err.message
                    })
                } else {
                    const token = jwt.sign(
                        {
                            _id: user._id,
                            email: user.email,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            userType: user.userType
                        },
                        process.env.JWT_SECRET,
                        {
                            algorithm: "HS256",
                            expiresIn: "14d"
                        }
                    )
                    res.send({
                        success: true,
                        message: "Authentication successful",
                        token
                    })
                }
            })
        }
    })(req, res, next)
})

module.exports = router
