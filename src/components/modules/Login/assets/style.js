import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    adminSigninContainer: {
        color: "#fff",
        background: "#090f2c",
        height: "100vh",
        width: "100vw",
        "& .footer": {
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100vw",
            "& .footer-wrapper": {
                paddingLeft: "10px",
                paddingRight: "10px",
                "& .MuiGrid-root *": {
                    textDecoration: "none",
                    color: "#fff",
                    fontSize: 11
                },
                "@media screen and (max-width: 440px)": {
                    "&": {
                        flexDirection: "column",
                        "& .MuiGrid-root *": {
                            display: "block",
                            marginBottom: 15
                        }
                    }
                }
            }
        }
    },
    circular: {
        root: {
            color: "#fff"
        }
    },
    h3Head: {
        margin: 0
    },
    gridMain: {
        height: "100%",
        width: "100%"
    },
    wrapper: {
        background: "#1D2139",
        padding: "20px 20px",
        borderRadius: "5%",
        maxWidth: 500,
        minWidth: 200,
        width: 400,
        "& .forgot small a": {
            color: "#1EBCFF",
            textDecoration: "none"
        },
        "& .forgot small": {
            display: "block",
            marginTop: "10px",
            fontSize: 11
        },
        "@media screen and (max-width: 420px)": {
            "&": {
                margin: "0px 5%"
            }
        }
    },
    imageLogo: {
        marginLeft: "50%",
        transform: "translateX(-50%)"
    }
})

export default useStyles
