import { makeStyles } from "@material-ui/core/styles"
export default makeStyles((theme) => ({
    appbar: {
        height: 50,
        background: "#1A253B"
    },
    logo: {
        height: 40,
        width: 40
    },
    icons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "15px",
        "& .MuiIconButton-root span svg": {
            color: "#fff"
        },
        "@media screen and (max-width: 400px)": {
            "&": {
                display: "none"
            }
        }
    },
    iconCircle: {
        background: "#676D8B",
        height: 35,
        width: 35,
        "&:hover": {
            background: "#868BA8"
        }
    },
    iconToggler: {
        background: "#676D8B",
        display: "none",
        "&:hover": {
            background: "#868BA8"
        },
        "@media screen and (max-width: 400px)": {
            "&": {
                display: "block"
            }
        }
    },
    toolbar: {
        minHeight: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    menu: {
        "& .MuiList-root .MuiButtonBase-root": {
            fontSize: 10,
            fontWeight: "bold",
            "& div": {
                minWidth: 40
            }
        }
    },
    baseInfo: {
        width: 300,
        height: "auto",
        minHeight: 70,
        maxHeight: 700,
        cursor: "default",
        border: "none"
    },
    info: {
        width: 300,
        minHeight: 70,
        maxHeight: 700,
        display: "flex",
        flexDirection: "column",
        overflowWrap: "break-word",
        justifyContent: "center",
        "& small": {
            marginLeft: 15
        }
    },
    avatar: {
        color: "#fff",
        backgroundColor: "#07184a"
    }
}))
