import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppBar, Menu, MenuItem, ListItemIcon, Avatar, IconButton, Toolbar, Box } from "@material-ui/core"
import { Notifications, Message, Apps } from "@material-ui/icons"
import MenuIcon from "@material-ui/icons/Menu"
import { Drawer } from "@material-ui/core"

import Logo from "@/assets/Logo.svg"
import accountDetails from "./assets/accountDetails.svg"
import useStyles from "./assets/style"
import { INFO_HEADER } from "./assets/extra"
import { getUser } from "./../actions"

import DrawerList from "./DrawerList"

const PrimarySearchAppBar = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.header)
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

    useEffect(() => {
        dispatch(getUser())
    }, [])

    return (
        <>
            <AppBar className={classes.appbar} position="fixed">
                <Toolbar className={classes.toolbar}>
                    <>
                        <img src={Logo} className={classes.logo} alt="" />
                    </>
                    <>
                        <IconButton onClick={handleDrawer} size="medium" className={classes.iconToggler}>
                            <MenuIcon fontSize="small" />
                        </IconButton>
                    </>
                    <Box className={classes.icons}>
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
                            <img src={accountDetails} alt="" />
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
                            <MenuItem className={classes.baseInfo}>
                                <Avatar className={classes.avatar}>D</Avatar>
                                <Box className={classes.info}>
                                    <small>{user.name}</small>
                                    <small>{user.userType}</small>
                                    <small>ID: {user.id}</small>
                                </Box>
                            </MenuItem>
                            <br />
                            {INFO_HEADER.map((info, i) => {
                                return (
                                    <MenuItem key={i}>
                                        <ListItemIcon>{info.icon}</ListItemIcon>
                                        {info.name}
                                    </MenuItem>
                                )
                            })}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer className={classes.drawerContainer} anchor="left" open={drawer} onClose={handleDrawer}>
                {<DrawerList />}
            </Drawer>
        </>
    )
}

export default PrimarySearchAppBar
