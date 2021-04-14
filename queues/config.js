const { REDIS_CLIENT } = process.env

const Redis = require("ioredis")
const client = new Redis(REDIS_CLIENT)
const subscriber = new Redis(REDIS_CLIENT)

var opts = {
    createClient: function (type) {
        switch (type) {
            case "client":
                return client
            case "subscriber":
                return subscriber
            default:
                return new Redis(REDIS_CLIENT)
        }
    }
}

module.exports = opts
