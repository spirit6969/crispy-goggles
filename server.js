const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send("Bot is ready")
})

function keepAlive() {
  server.listen(443, () => {
    console.log("Server is ready")
  })
}

module.exports = keepAlive

