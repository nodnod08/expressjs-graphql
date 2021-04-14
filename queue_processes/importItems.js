const processing = async ({ data }) => {
    await new Promise((resolve) => {
        setTimeout(resolve, 10000)
    })

    return data
}

module.exports = processing
