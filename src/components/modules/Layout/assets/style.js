import { makeStyles } from "@material-ui/core/styles"
export default makeStyles((theme) => ({
    body: {
        background: "#1A253B",
        width: "calc(100vw - 300px)",
        height: "calc(100vh - 90px)",
        marginLeft: 250,
        marginTop: 60,
        padding: "10px 20px"
    },
    link: {
        display: "flex"
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20
    },
    breadcrumbs: {
        "& .MuiBreadcrumbs-separator": {
            color: "#fff"
        }
    },
    heading: {
        display: "flex",
        alignItems: "center"
    }
}))
