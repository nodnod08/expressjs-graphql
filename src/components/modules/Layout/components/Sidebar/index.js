import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Avatar } from "@material-ui/core"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import DraftsIcon from "@material-ui/icons/Drafts"
import SendIcon from "@material-ui/icons/Send"

import sidebars from "./assets/extra"

const useStyles = makeStyles((theme) => ({
    base: {
        position: "fixed",
        top: 52,
        left: 0,
        minWidth: 240,
        width: 240,
        height: "100vh",
        background: "#1A253B",
        "@media screen and (max-width: 400px)": {
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
        // background: "white",
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
    }
}))

const SubView = ({ node }) => {
    const classes = useStyles()
    return (
        <List className={classes.groupList} component="nav" aria-labelledby="nested-list-subheader">
            {node.length &&
                node.map((node_element, i) => {
                    return (
                        <ListItem key={i} dense button component="a" href={node_element.url}>
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

    return (
        <div className={classes.base}>
            <div className={classes.baseInfo}>
                <Avatar className={classes.avatar}>D</Avatar>
                <div className={classes.info}>
                    <small style={{ fontSize: 12, fontWeight: "bold" }}>Dondomie Dungca</small>
                    <small style={{ fontSize: 9, display: "block" }}>Administrator</small>
                    <small style={{ fontSize: 9, display: "block" }}>ID: 000-000-001</small>
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
        </div>
    )
}

export default Sidebar
