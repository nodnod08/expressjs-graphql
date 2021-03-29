import React from "react"
import { Alert, AlertTitle } from "@material-ui/lab"

import useStyles from "./style"

const CssAlert = ({ title, severity, message, strongMessage }) => {
    const classes = useStyles()

    switch (severity) {
        case "error":
            return (
                <Alert className={classes.root} variant="standard" severity={severity}>
                    <AlertTitle style={{ color: "#f28583" }}>{title}</AlertTitle>
                    <small style={{ color: "#f28583" }}>
                        {message} <strong>{strongMessage}</strong>
                    </small>
                </Alert>
            )
        case "success":
            return (
                <Alert className={classes.root} variant="standard" severity={severity}>
                    <AlertTitle style={{ color: "#85f2c3" }}>{title}</AlertTitle>
                    <small style={{ color: "#85f2c3" }}>
                        {message} <strong>{strongMessage}</strong>
                    </small>
                </Alert>
            )
        default:
            return (
                <Alert className={classes.root} variant="standard" severity="success">
                    <AlertTitle style={{ color: "#f28583" }}>{title}</AlertTitle>
                    <small style={{ color: "#f28583" }}>
                        {message} <strong>{strongMessage}</strong>
                    </small>
                </Alert>
            )
    }
}

export default CssAlert
