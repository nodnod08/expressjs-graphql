import jwt_decode from "jwt-decode"
import { getCookie } from "@/js/reusable"

import { SET_USER, SET_ACTIVE_URL, SET_ACTIVE_SIDEBAR } from "./constants"

export const getUser = () => (dispatch) => {
    const hash = getCookie("jwt")

    const decoded = jwt_decode(hash)
    dispatch({
        type: SET_USER,
        payload: decoded
    })
}

export const setActiveUrl = () => (dispatch) => {
    let path = location.pathname
    let active = path.split("/")[2]

    dispatch({
        type: SET_ACTIVE_URL,
        payload: active
    })
    dispatch({
        type: SET_ACTIVE_SIDEBAR,
        payload: `sidebar-menu-${active}`
    })
}
