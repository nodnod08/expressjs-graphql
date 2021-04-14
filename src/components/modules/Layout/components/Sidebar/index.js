import React from "react"
import { useSelector } from "react-redux"
import { Avatar } from "@material-ui/core"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Fab from "@material-ui/core/Fab"
import HelpIcon from "@material-ui/icons/Help"

import sidebars from "./assets/extra"
import useStyles from "./assets/style"

const SubView = ({ node }) => {
    const classes = useStyles()
    const user = useSelector((state) => state.header)
    return (
        <List className={`${classes.groupList}`} component="nav" aria-labelledby="nested-list-subheader">
            {node.length &&
                node.map((node_element, i) => {
                    return (
                        <ListItem className={`${user.url.activesidebar == node_element.tag ? classes.activeSidebar : ""}`} key={i} dense button component="a" href={node_element.url}>
                            <ListItemIcon>{node_element.icon}</ListItemIcon>
                            <ListItemText style={{ color: "#C0C0C0" }} primary={node_element.name} />
                        </ListItem>
                    )
                })}
        </List>
    )
}

const Sidebar = () => {
    const classes = useStyles()
    const user = useSelector((state) => state.header)

    return (
        <div className={classes.base}>
            <div className={classes.baseInfo}>
                <Avatar className={classes.avatar}>D</Avatar>
                <div className={classes.info}>
                    <small style={{ fontSize: 12, fontWeight: "bold" }}>{user.name}</small>
                    <small style={{ fontSize: 9, display: "block" }}>{user.userType}</small>
                    <small style={{ fontSize: 9, display: "block" }}>{user.id}</small>
                </div>
            </div>
            <hr style={{ height: 1, margin: "0px 20px", background: "#fff" }} />
            <div className={classes.sidebarContainer}>
                {sidebars.length &&
                    sidebars.map((sb, i) => {
                        return (
                            <div key={i} className={classes.group}>
                                <h6 style={{ marginLeft: 10 }}>{sb.group_name}</h6>
                                <div className={classes.sub}>
                                    <SubView node={sb.groups} />
                                </div>
                            </div>
                        )
                    })}
            </div>
            <div className={classes.ask}>
                <Fab variant="extended" size="small" color="primary" aria-label="add">
                    <HelpIcon />
                    Ask Question
                </Fab>
            </div>
        </div>
    )
}

export default Sidebar
