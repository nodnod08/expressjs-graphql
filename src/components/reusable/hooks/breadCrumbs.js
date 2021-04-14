import React, { useReducer } from "react"

const index = (initialState) => {
    function reducer(state, action) {
        switch (action.type) {
            case "purchasing":
                return [
                    {
                        name: "Stocks",
                        url: "/stocks",
                        icon: <StoreIcon style={{ marginRight: 2, width: 17, height: 17 }} />,
                        active: false
                    },
                    {
                        name: "Import Products",
                        url: "/stocks/import-items",
                        icon: <ImportExportIcon style={{ marginRight: 2, width: 17, height: 17 }} />,
                        active: true
                    }
                ]
            case "sales":
                return [
                    {
                        name: "Stocks",
                        url: "/stocks",
                        icon: <StoreIcon style={{ marginRight: 2, width: 17, height: 17 }} />,
                        active: false
                    },
                    {
                        name: "Import Products",
                        url: "/stocks/import-items",
                        icon: <ImportExportIcon style={{ marginRight: 2, width: 17, height: 17 }} />,
                        active: true
                    }
                ]
            case "stocks":
                return [
                    {
                        name: "Stocks",
                        url: "/stocks",
                        icon: <StoreIcon style={{ marginRight: 2, width: 17, height: 17 }} />,
                        active: false
                    },
                    {
                        name: "Import Products",
                        url: "/stocks/import-items",
                        icon: <ImportExportIcon style={{ marginRight: 2, width: 17, height: 17 }} />,
                        active: true
                    }
                ]
            default:
                throw new Error()
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return [state, dispatch]
}

export default index
