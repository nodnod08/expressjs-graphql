import React, { useState } from "react"
import { List, ListItemText, Collapse, ListItem, ListItemIcon } from "@material-ui/core"
import { ExpandLess, ExpandMore } from "@material-ui/icons"

import SubView from "./sub"
import useStyles from "./assets/style"
import Logo from "@/assets/Logo.svg"
import { info_header, sidebars } from "./assets/extra"

const DrawerList = () => {
    const classes = useStyles()
    const [account, setAccount] = useState(false)
    const handleAccount = () => {
        setAccount(!account)
    }

    return (
        <div className={classes.drawer} role="presentation">
            <div className={classes.logoContainer}>
                <img src={Logo} className={classes.logo} alt="" />
            </div>
            <div className={classes.accountSection}>
                <List style={{ display: "block" }} component="nav">
                    <ListItem className={classes.nameHeader} dense button onClick={handleAccount}>
                        <ListItemText style={{ textTransform: "uppercase" }} primary="Dondomie Dungca" />
                        {account ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={account} timeout="auto" unmountOnExit>
                        <List style={{ background: "#404040" }} component="div" disablePadding>
                            {info_header.map((info, i) => {
                                return (
                                    <ListItem key={i} dense button className={classes.nested}>
                                        <ListItemIcon>{info.icon}</ListItemIcon>
                                        <ListItemText primary={info.name} />
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Collapse>
                </List>
                <div className={classes.subHeader}>
                    <small>Administrator</small>
                    <small>ID: 000-000-001</small>
                </div>
                <br />
                <hr style={{ background: "#fff", margin: "10px 15px" }} />
                <div className={classes.sidebarContainer}>
                    {sidebars.length &&
                        sidebars.map((sb, i) => {
                            return (
                                <div key={i} className={classes.group}>
                                    <h6 style={{ marginLeft: 10 }}>{sb.group_name}</h6>
                                    <div className={classes.sub}>{<SubView node={sb.groups} />}</div>
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default React.memo(DrawerList)
