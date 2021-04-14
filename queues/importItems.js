const { setQueues, BullMQAdapter, BullAdapter } = require("bull-board")
const Queue = require("bull")
const processing = require("./../queue_processes/importItems")
var opts = require("./config")

const importItems = new Queue("importItems", opts)

setQueues([new BullAdapter(importItems)])

importItems.process(processing)

const execute_importItems = () => {
    importItems.add({ sample: "sample" })
    importItems.on("completed", (job, result) => {
        console.log("done job")
        console.log(job)
        console.log(result)
    })
}

module.exports = execute_importItems
