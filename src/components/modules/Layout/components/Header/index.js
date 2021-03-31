import React, { useState, useEffect } from "react"
import { AppBar, Menu, MenuItem, ListItemIcon, Avatar, IconButton, Toolbar } from "@material-ui/core"
import { Notifications, Message, Apps } from "@material-ui/icons"
import MenuIcon from "@material-ui/icons/Menu"
import { Drawer } from "@material-ui/core"

import Logo from "@/assets/Logo.svg"
import accountDetails from "./assets/accountDetails.svg"
import useStyles from "./assets/style"
import { info_header } from "./assets/extra"

import DrawerList from "./drawerList"

const PrimarySearchAppBar = () => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null)
    const [drawer, setDrawer] = useState(false)
    const open = Boolean(anchorEl)

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleDrawer = () => {
        setDrawer(!drawer)
    }

    window.addEventListener("resize", function (event) {
        var newWidth = window.innerWidth

        if (newWidth > 450) {
            setDrawer(false)
        }
    })

    return (
        <>
            <AppBar className={classes.appbar} position="fixed">
                <Toolbar className={classes.toolbar}>
                    <div>
                        <img src={Logo} className={classes.logo} alt="" />
                    </div>
                    <div>
                        <IconButton onClick={handleDrawer} size="medium" className={classes.iconToggler}>
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
                            {info_header.map((info, i) => {
                                return (
                                    <MenuItem key={i}>
                                        <ListItemIcon>{info.icon}</ListItemIcon>
                                        {info.name}
                                    </MenuItem>
                                )
                            })}
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer className={classes.drawerContainer} anchor="left" open={drawer} onClose={handleDrawer}>
                {<DrawerList />}
            </Drawer>
        </>
    )
}

export default PrimarySearchAppBar
