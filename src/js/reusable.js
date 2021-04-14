import axios from "axios"

export const requestHttpGql = (type) => {
    return axios.post("http://localhost:4000/graphql", type, {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + getCookie("jwt")
        }
    })
}

export const requestHttp = (url, type) => {
    return axios.post(url, type, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export const setCookie = (name, value, daysToExpire) => {
    var date = new Date()
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000)
    document.cookie = name + "=" + value + "; expires=" + date.toGMTString()
}

export const getCookie = function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";")

    // Loop through the array elements
    for (var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=")

        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if (name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1])
        }
    }

    // Return null if not found
    return null
}
