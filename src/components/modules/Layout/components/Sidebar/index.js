import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    base: {
        position: "fixed",
        top: 52,
        left: 0,
        minWidth: 240,
        height: "100vh",
        background: "#1A253B",
        "@media screen and (max-width: 400px)": {
            "&": {
                display: "none"
            }
        }
    }
}))

const Sidebar = () => {
    const classes = useStyles()

    return <div className={classes.base}></div>
}

export default Sidebar
