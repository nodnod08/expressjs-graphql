import React from "react"
import WhatshotIcon from "@material-ui/icons/Whatshot"
import GrainIcon from "@material-ui/icons/Grain"

export default [
    {
        name: "Stocks",
        url: "/stocks",
        icon: <WhatshotIcon style={{ marginRight: 2, width: 17, height: 17 }} />,
        active: false
    },
    {
        name: "Import Products",
        url: "/stocks/import-items",
        icon: <GrainIcon style={{ marginRight: 2, width: 17, height: 17 }} />,
        active: true
    }
]
