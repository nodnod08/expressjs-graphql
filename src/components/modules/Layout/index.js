import React from "react"
import PrimarySearchAppBar from "./components/Header"
import Sidebar from "./components/Sidebar"

const Main = ({ children }) => {
    return (
        <div>
            <PrimarySearchAppBar></PrimarySearchAppBar>
            <Sidebar></Sidebar>
            {children}
        </div>
    )
}

export default Main
