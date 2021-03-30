import React, { useEffect } from "react"
import { AppBar, Menu, MenuItem, ListItemIcon, Avatar, IconButton, Toolbar } from "@material-ui/core"
import { Notifications, Message, Apps, AccountCircle, Settings, Favorite, ExitToApp } from "@material-ui/icons"
import MenuIcon from "@material-ui/icons/Menu"
import jwt_decode from "jwt-decode"

import Logo from "@/assets/Logo.svg"
import { getCookie } from "@/js/reusable"
import accountDetails from "./assets/accountDetails.svg"
import useStyles from "./assets/style"

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

    // useEffect(() => {
    //     const jwt = getCookie("jwt")
    //     var decodedHeader = jwt_decode(jwt)
    //     console.log(decodedHeader)
    // }, [])

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
                        <MenuItem style={{ outline: "none", whiteSpace: "normal" }} className={classes.baseInfo}>
                            <Avatar className={classes.avatar}>D</Avatar>
                            <div className={classes.info}>
                                <small style={{ fontSize: 14, fontWeight: "bold" }}>Dondomie Dungca</small>
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
