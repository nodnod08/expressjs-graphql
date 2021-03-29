import { TextField, withStyles } from "@material-ui/core"

const CssTextField = withStyles({
    root: {
        width: "100%",
        "& label": {
            color: "white",
            fontSize: 11
        },
        "& label.Mui-focused": {
            color: "white",
            fontSize: 11
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "yellow"
        },
        "& .MuiOutlinedInput-root": {
            color: "white",
            fontSize: 11,
            "& fieldset": {
                borderColor: "white"
            },
            "&:hover fieldset": {
                borderColor: "white"
            },
            "&.Mui-focused fieldset": {
                borderColor: "white"
            }
        }
    }
})(TextField)

export default CssTextField
