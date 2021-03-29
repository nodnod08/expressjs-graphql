import { useState } from "react"

const index = (defaultValue) => {
    const [value, setValue] = useState(defaultValue)

    const handleState = (e) => {
        setValue(e.target.value)
    }

    const reset = () => {
        setValue(defaultValue)
    }

    return [value, handleState, reset]
}

export default index
