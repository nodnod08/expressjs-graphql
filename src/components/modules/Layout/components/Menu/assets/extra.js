import React from "react"
import HomeIcon from "@material-ui/icons/Home"
import StoreIcon from "@material-ui/icons/Store"
import ListAltIcon from "@material-ui/icons/ListAlt"
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder"
import ImportExportIcon from "@material-ui/icons/ImportExport"

const classes = { marginRight: 2, width: 17, height: 17 }
const stocks_child = [
    {
        name: "Stocks List",
        url: "/admin/stocks/list",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
        icon: <ListAltIcon style={{ color: "#29A1E4" }} />
    },
    {
        name: "Add Item Types",
        url: "/admin/stocks/add-types",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
        icon: <CreateNewFolderIcon style={{ color: "#29A1E4" }} />
    },
    {
        name: "Import Items",
        url: "/admin/stocks/import-items",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
        icon: <ImportExportIcon style={{ color: "#29A1E4" }} />
    }
]

const stocks_breadcrumbs = [
    {
        name: "Stocks",
        url: "/admin/stocks/list",
        icon: <StoreIcon style={classes} />,
        active: true
    }
]

const dashboard_child = [
    {
        name: "Sales Slope",
        url: "/admin/dashboard/list",
        icon: <HomeIcon />
    },
    {
        name: "Business Intel",
        url: "/admin/dashboard/add-types",
        icon: <HomeIcon />
    },
    {
        name: "Customer Relationship",
        url: "/admin/dashboard/import-items",
        icon: <HomeIcon />
    }
]

const dashboard_breadcrumbs = [
    {
        name: "Stocks List",
        url: "/admin/stocks/list",
        icon: <HomeIcon />,
        active: true
    }
]

const menus = {
    stocks: {
        name: "STOCKS CATEGORY",
        icon: <StoreIcon style={{ marginRight: 15 }} />,
        children: stocks_child,
        breadCrumbs: stocks_breadcrumbs
    },
    dashboard: {
        children: dashboard_child,
        breadCrumbs: dashboard_breadcrumbs
    }
}

export default menus
