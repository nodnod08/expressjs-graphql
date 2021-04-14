import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Box, Grid, Button, Tooltip, Typography, Zoom, useMediaQuery } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import IconButton from "@material-ui/core/IconButton"
import InfoIcon from "@material-ui/icons/Info"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import CardContent from "@material-ui/core/CardContent"

import Layout from "@/components/modules/Layout"
import { setActiveUrl } from "./../actions"
import menus from "./assets/extra"
import useStyles from "./assets/style"

const Body = () => {
    const {
        url: { active },
        menus: { children }
    } = useSelector((state) => state.header)
    const [open, setOpen] = useState(false)
    const [content, setDescription] = useState({
        title: "",
        description: ""
    })
    const dispatch = useDispatch()
    const classes = useStyles()
    const inMedia = useMediaQuery("(max-width:960px)")

    const handleDescription = (title, desc) => {
        setOpen(!open)
        setDescription({
            title,
            description: desc
        })
    }

    useEffect(() => {
        dispatch(setActiveUrl())
    }, [])

    useEffect(() => {
        if (active)
            dispatch({
                type: "SET_BREADCRUMBS",
                payload: menus[active]
            })
    }, [active])

    return (
        <>
            <Dialog className={classes.dialog} open={open} onClose={() => setOpen(!open)} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{content.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">{content.description}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(!open)} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            <Grid className={classes.grid} container spacing={3}>
                {children.length &&
                    children.map((child, i) => (
                        <Tooltip
                            key={i}
                            disableHoverListener={inMedia}
                            TransitionProps={{
                                timeout: {
                                    appear: 400,
                                    enter: 300,
                                    exit: 500
                                }
                            }}
                            TransitionComponent={Zoom}
                            title={child.name}
                            arrow
                        >
                            <Grid key={i} item lg={3} md={3} sm={6} xs={12}>
                                <Card className={classes.card}>
                                    <CardContent>{child.icon}</CardContent>
                                    <Box display="flex" alignItems="center" justifyContent="space-between" className={classes.helper}>
                                        <Typography className={classes.heading}>{child.name}</Typography>
                                        <IconButton onClick={() => handleDescription(child.name, child.description)} className={classes.infoIcon}>
                                            <InfoIcon />
                                        </IconButton>
                                    </Box>
                                </Card>
                            </Grid>
                        </Tooltip>
                    ))}
            </Grid>
        </>
    )
}

const Index = () => {
    return <Layout body={<Body />}></Layout>
}

export default Index
