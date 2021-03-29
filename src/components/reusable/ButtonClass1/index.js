import { Button, withStyles } from "@material-ui/core"

const CssButton = withStyles({
    root: {
        background: "#75D7E4",
        color: "#000",
        fontFamily: "Work Sans",
        "&:hover": {
            background: "#9EDFE8"
        },
        "&:disabled": {
            background: "#75D7E4",
            color: "#000",
            fontFamily: "Work Sans"
        }
    }
})(Button)

export default CssButton
