import React, { useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Menu, MenuItem, ListItemIcon, Avatar } from "@material-ui/core"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import { Notifications, Message, Apps, AccountCircle, Settings, Favorite, ExitToApp } from "@material-ui/icons"
import MenuIcon from "@material-ui/icons/Menu"
import jwt_decode from "jwt-decode"

import Logo from "@/assets/Logo.svg"
import { getCookie } from "@/js/reusable"
import accountDetails from "./assets/accountDetails.svg"

const useStyles = makeStyles((theme) => ({
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
        height: 70,
        cursor: "default",
        border: "none"
    },
    info: {
        width: "100%",
        height: 70,
        display: "flex",
        flexDirection: "column",
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

const PrimarySearchAppBar = () => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    useEffect(() => {
        const jwt = getCookie("jwt")
        var decodedHeader = jwt_decode(jwt)
        console.log(decodedHeader)
    }, [])

    return (
        <AppBar className={classes.appbar} position="fixed">
            <Toolbar className={classes.toolbar}>
                <div>
                    <img src={Logo} className={classes.logo} alt="" />
                </div>
                <div>
                    <IconButton size="medium" className={classes.iconToggler}>
                        <MenuIcon fontSize="small" />
                    </IconButton>
                </div>
                <div className={classes.icons}>
                    <IconButton>
                        <Apps fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <Message fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <Notifications fontSize="small" />
                    </IconButton>
                    <IconButton className={classes.iconCircle} aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
                        <img style={{ width: 20, height: 20 }} src={accountDetails} alt="" />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        getContentAnchorEl={null}
                        anchorOrigin={{
                            vertical: 50,
                            horizontal: "right"
                        }}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        className={classes.menu}
                    >
                        <MenuItem style={{ outline: "none" }} className={classes.baseInfo}>
                            <Avatar className={classes.avatar}>D</Avatar>
                            <div className={classes.info}>
                                <small style={{ fontSize: 14, fontWeight: "bold", display: "block" }}>Dondomie Dungca</small>
                                <small style={{ fontSize: 11, fontWeight: "bold", display: "block" }}>Administrator</small>
                                <small style={{ fontSize: 10, display: "block" }}>ID: 000-000-001</small>
                            </div>
                        </MenuItem>
                        <br />
                        <MenuItem>
                            <ListItemIcon>
                                <AccountCircle fontSize="small" />
                            </ListItemIcon>
                            MY ACCOUNT
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <Notifications fontSize="small" />
                            </ListItemIcon>
                            NOTIFICATIONS
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <Settings fontSize="small" />
                            </ListItemIcon>
                            ADMIN SETTINGS
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <Favorite fontSize="small" />
                            </ListItemIcon>
                            FAVORITES
                        </MenuItem>
                        <br />
                        <MenuItem>
                            <ListItemIcon>
                                <ExitToApp fontSize="small" />
                            </ListItemIcon>
                            LOGOUT
                        </MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default PrimarySearchAppBar
