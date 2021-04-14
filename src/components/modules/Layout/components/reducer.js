import APP_CONST from "./constants"
import { SET_USER, GET_USER, SET_ACTIVE_URL, SET_ACTIVE_SIDEBAR, SET_BREADCRUMBS } from "./constants"

export default function header(state = APP_CONST, { type, payload }) {
    switch (type) {
        case GET_USER:
            return state
        case SET_USER:
            state = {
                ...state,
                name: `${payload.firstName} ${payload.lastName}`,
                userType: payload.userType === 1 ? "Administrator" : "Regular User",
                id: payload._id
            }

            return state
        case SET_ACTIVE_URL:
            state = {
                ...state,
                url: { ...state.url, active: payload }
            }

            return state
        case SET_ACTIVE_SIDEBAR:
            state = {
                ...state,
                url: { ...state.url, activesidebar: payload }
            }

            return state
        case SET_BREADCRUMBS:
            state = {
                ...state,
                menus: payload
            }

            return state
        default:
            return state
    }
}
