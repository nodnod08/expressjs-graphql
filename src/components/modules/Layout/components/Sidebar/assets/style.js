import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles((theme) => ({
    base: {
        position: "fixed",
        top: 52,
        left: 0,
        minWidth: 240,
        width: 240,
        height: "100vh",
        background: "#1A253B",
        "@media screen and (max-width: 450px)": {
            "&": {
                display: "none"
            }
        }
    },
    baseInfo: {
        display: "flex",
        alignItems: "center",
        width: 200,
        minHeight: 80,
        height: "auto",
        maxHeight: 500,
        whiteSpace: "normal",
        padding: "0px 20px"
    },
    info: {
        width: "100%",
        minHeight: 80,
        maxHeight: 500,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        "& small": {
            marginLeft: 25,
            marginBottom: 5,
            color: "#fff",
            textTransform: "uppercase",
            wordBreak: "break-word"
        }
    },
    avatar: {
        color: "#404040",
        backgroundColor: "#fff"
    },
    sidebarContainer: {
        width: 220,
        minHeight: 20,
        maxHeight: 1000,
        padding: "0px 10px",
        marginTop: 35
    },
    group: {
        "& h6": {
            color: "#E3E3E3"
        }
    },
    groupList: {
        "& .MuiListItem-root": {
            color: "#fff",
            "&:hover": {
                background: "#253554"
            },
            "& .MuiListItemText-root": {
                "& span": {
                    fontSize: 12
                }
            },
            "& .MuiListItemIcon-root svg": {
                color: "#fff"
            }
        }
    },
    sub: {
        marginTop: "-25px"
    },
    ask: {
        position: "absolute",
        width: "100%",
        height: 40,
        background: "#d3dbeb",
        bottom: 50,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& .MuiButtonBase-root": {
            background: "#1b315c",
            height: 30,
            "& span": {
                textTransform: "none"
            }
        }
    }
}))

export default useStyles
