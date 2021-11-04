const keepAlive = require("./server");
keepAlive()

const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: process.env.TOKEN, //Discord Bot Token
prefix: ">" //Discord Bot Prefix
})

//Events
bot.onMessage()

//Command Handler / Loads files
bot.loadCommands(`./commands/`)

//Command Example
bot.command({
name: "ping",
code: `Pong! \`$ping\`ms`
})

//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})


bot.status({
  text: ">",
  type: "PLAYING",
  status: "online",
})
