const express = require("express")
const http = require("http")
const path = require("path")
const {httpPort} = require("../config.json")

const app = express()

app.use(express.static(path.join(__dirname, "../public")))

http.createServer(app).listen(httpPort, () => {
    console.log(`Server is listening on port: ${httpPort}`)
})