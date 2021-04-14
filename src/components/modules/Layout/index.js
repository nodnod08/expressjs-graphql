import React from "react"
import { Provider, useSelector } from "react-redux"
import { Box, Breadcrumbs, Link, Typography } from "@material-ui/core"

import Sidebar from "./components/Sidebar"
import useStyle from "./assets/style"
import store from "./../redux/store"
import PrimarySearchAppBar from "./components/Header"

const BreadCrumbs = () => {
    const classes = useStyle()
    const {
        menus: { breadCrumbs }
    } = useSelector((state) => state.header)

    return (
        <Breadcrumbs className={classes.breadcrumbs} aria-label="breadcrumb">
            {breadCrumbs.length &&
                breadCrumbs.map((item, i) => {
                    if (item.active) {
                        return (
                            <Typography style={{ color: "white" }} key={i} href={item.url} className={classes.link}>
                                {item.icon}
                                <small>{item.name}</small>
                            </Typography>
                        )
                    } else {
                        return (
                            <Link style={{ color: "#999999" }} key={i} href={item.url} className={classes.link}>
                                {item.icon}
                                <small>{item.name}</small>
                            </Link>
                        )
                    }
                })}
        </Breadcrumbs>
    )
}

const Header = () => {
    const classes = useStyle()
    const {
        menus: { name, icon }
    } = useSelector((state) => state.header)
    return (
        <Typography variant="h5" style={{ color: "#fff", marginBottom: 10 }}>
            <Box className={classes.heading}>
                {icon}
                {name}
            </Box>
        </Typography>
    )
}

const Main = ({ body }) => {
    const classes = useStyle()

    return (
        <Provider store={store}>
            <PrimarySearchAppBar></PrimarySearchAppBar>
            <Sidebar></Sidebar>
            <Box className={classes.body}>
                <Header></Header>
                <BreadCrumbs />
                {body}
            </Box>
        </Provider>
    )
}

export default Main
