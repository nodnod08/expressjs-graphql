import React from "react"
import Main from "@/components/modules/Layout"
import ImportExportIcon from "@material-ui/icons/ImportExport"
import { Typography } from "@material-ui/core"
import breadcrumbs from "./assets/breadcrumbs"

const Header = () => {
    return (
        <Typography variant="h5" style={{ color: "#fff", marginBottom: 10 }}>
            <ImportExportIcon style={{ marginRight: 15 }} />
            IMPORT ITEMS
        </Typography>
    )
}

const Index = () => {
    return <Main breadcrumbs={breadcrumbs} hading={<Header />} />
}

export default Index
