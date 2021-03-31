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
        "@media screen and (max-width: 450px)": {
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
        // background: "#d3dbeb",
        color: "#fff",
        display: "none",
        // "&:hover": {
        //     background: "#e4e8f0"
        // },
        "@media screen and (max-width: 450px)": {
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
        },
        "@media screen and (max-width: 450px)": {
            "&": {
                display: "none"
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
    },
    drawer: {
        width: 240
    },
    drawerContainer: {
        "& .MuiDrawer-paper": {
            background: "#1A253B"
        }
    },
    logoContainer: {
        display: "flex",
        alignItems: "center",
        paddingLeft: "17px",
        width: "calc(100% - 17px)",
        height: 70
    },
    accountSection: {
        color: "#fff"
    },
    nested: {
        "& .MuiListItemIcon-root": {
            color: "#fff",
            marginLeft: "10px",
            minWidth: 35
        },
        "& .MuiListItemText-root span": {
            fontSize: 10
        }
    },
    nameHeader: {
        "&:hover": {
            background: "#2E3E5D"
        }
    },
    subHeader: {
        padding: "0px 16px",
        "& small": {
            fontSize: 10,
            display: "block",
            color: "#D8D8D8"
        }
    },
    sidebarContainer: {
        width: 220,
        minHeight: 20,
        maxHeight: 1000,
        padding: "0px 6px",
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
    }
}))
