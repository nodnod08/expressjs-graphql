import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    dialog: {
        "& .MuiPaper-root": {
            background: "#272F40",
            "& .MuiDialogTitle-root": {
                "& .MuiTypography-root": {
                    color: "#fff"
                }
            },
            "& .MuiDialogContent-root": {
                "& .MuiTypography-root": {
                    color: "#D2D2D2"
                }
            },
            "& .MuiDialogActions-root": {
                "& .MuiButtonBase-root": {
                    "&:hover": {
                        background: "#2F3747"
                    }
                },
                "& button .MuiButton-label": {
                    color: "#fff"
                }
            }
        }
    },
    grid: {
        marginTop: 30
    },
    card: {
        background: "none",
        border: ".5px solid #999999",
        cursor: "pointer"
    },
    heading: {
        color: "#fff"
        // marginTop: 5
    },
    helper: {
        margin: "0 18px 5px 18px"
    },
    root: {
        maxWidth: 345
    },
    media: {
        height: 0,
        paddingTop: "56.25%" // 16:9
    },
    infoIcon: { marginRight: -10, fontSize: 20, color: "#999999" },
    info: {
        marginLeft: "auto"
    },
    expandOpen: {
        transform: "rotate(180deg)"
    }
}))

export default useStyles
