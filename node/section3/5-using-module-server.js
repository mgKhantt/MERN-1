const http = require("http")

// const requestHandler = require('./5-route')
const { reqHand } = require('./5-route')

const server = http.createServer(reqHand)

server.listen(3000)
