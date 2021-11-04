module.exports = {
name:"reload",
aliases: "update",
code:`
$title[Reloaded Successfully]
$description[
**New Commands Count:** $get[new] command(s)\n
**Reloaded:** $commandsCount command(s)
]
$footer[$serverName;$serverIcon]
$thumbnail[$userAvatar[$clientID]]
$color[GREEN]
$addTimeStamp
$channelSendMessage[$channelID;**Reloading Commands...**{delete:0.6s}]
$let[new;$math[$get[after]-$get[before]]]
$let[after;$commandsCount]
$updateCommands
$let[before;$commandsCount]
$onlyForIDs[747443425481195580;error]
`
}