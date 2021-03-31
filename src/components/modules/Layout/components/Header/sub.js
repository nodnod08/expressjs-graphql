import React from "react"
import { List, ListItemText, ListItemIcon, ListItem } from "@material-ui/core"
import useStyles from "./assets/style"

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

export default React.memo(SubView)
