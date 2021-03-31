import React, { useState, useEffect } from "react"
import { Grid, CircularProgress } from "@material-ui/core"
import { LockOpen } from "@material-ui/icons/"

import useStyles from "./assets/style"
import { setCookie } from "@/js/reusable"
import { loginProcess } from "./assets/service"
import Logo from "@/assets/Logo.svg"
import Alert from "@/components/reusable/Alert"
import TextField from "@/components/reusable/TextField"
import Button from "@/components/reusable/ButtonClass1"
import useHook from "@/components/reusable/hooks/plain"

const Login = () => {
    // Reusable states
    const classes = useStyles()
    const [email, handleEmail, resetEmail] = useHook("")
    const [password, handlePassword, resetPassword] = useHook("")
    // State
    const [resultMessage, setResultMessage] = useState({})
    const [alert, setAlert] = useState(false)
    const [loading, setLoading] = useState(false)
    const [count, setCount] = useState(0)

    const login = async () => {
        setLoading(true)
        const result = await loginProcess(email, password)
        if (result.success) {
            setResultMessage({
                title: "Successfuly Logged In",
                message: `You will be redirect to admin panel in ${count} -`,
                strong: "Wait a little bit",
                severity: "success"
            })
            setCookie("jwt", result.token, 14)
            setAlert(true)
            setCount(3)
        } else {
            setResultMessage({
                title: "Error Occured",
                message: `${result.message}`,
                strong: "Try again",
                severity: "error"
            })
            setAlert(true)
        }
        setLoading(false)
    }

    const timer = () => {
        setCount(count - 1)
    }

    useEffect(() => {
        if (count) {
            let time = setInterval(timer, 1000)
            setResultMessage({
                ...resultMessage,
                message: `You will be redirect to admin panel in ${count} -`
            })
            return () => {
                clearInterval(time)
            }
        } else {
            if (resultMessage.severity == "success") {
                window.location = "/admin"
            }
        }
    }, [count])

    return (
        <div className={classes.adminSigninContainer}>
            <Grid className={classes.gridMain} container direction="row" justify="center" alignItems="center">
                <Grid className={classes.wrapper} item>
                    <img className={classes.imageLogo} width="80" height="80" src={Logo} />
                    <br />
                    <br />
                    <h3 className={classes.h3Head} id="signin-text">
                        LOGIN IN
                    </h3>
                    <small className={classes.smallIntro}>Login to admin platform</small>
                    <br />
                    <br />
                    <br />
                    <TextField
                        id="login-admin-1"
                        inputProps={{
                            autoComplete: "new-username"
                        }}
                        onChange={handleEmail}
                        size="small"
                        label="USERNAME OR EMAIL"
                        type="text"
                        variant="outlined"
                    />
                    <br />
                    <br />
                    <TextField
                        id="login-admin-2"
                        inputProps={{
                            autoComplete: "new-password"
                        }}
                        onChange={handlePassword}
                        size="small"
                        label="PASSWORD"
                        type="password"
                        variant="outlined"
                    />
                    <br />
                    <div className="forgot">
                        <small>
                            FORGOT PASSWORD? <a href="#">CLICK HERE</a>
                        </small>
                    </div>
                    <br />
                    <Button disabled={loading} onClick={login} fullWidth startIcon={loading ? <CircularProgress className={classes.circular} style={{ color: "#000" }} size={25} /> : <LockOpen />} size="medium" variant="contained">
                        LOGIN
                    </Button>
                    <br />
                    <br />
                    <br />
                    <br />
                    {alert && <Alert title={resultMessage.title} severity={`${resultMessage.severity}`} message={resultMessage.message} strongMessage={resultMessage.strong} />}
                </Grid>
            </Grid>
            <div className="footer">
                <Grid className="footer-wrapper" container direction="row" justify="space-between" alignItems="center">
                    <Grid item>
                        <a href="">TERMS AND CONDITIONS</a>
                    </Grid>
                    <Grid item>
                        <small>ALL RIGHTS RESERVED © 2021</small>
                    </Grid>
                    <Grid item>
                        <a href="">PRIVACY AND POLICY</a>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Login
