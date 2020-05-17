const Discord = require("discord.js")
const botconfig = require("../botconfig.json");


module.exports.run = async (bot, message, args) => {

    if(message.author.id != "591109629329670248") return message.channel.send("Justice say u cant use this Command!")

    if(!args[0]) return message.channel.send("Please provide a command to reload!")

    let commandName = args[0].toLowerCase()

    try {
        delete require.cache[require.resolve(`./${commandName}.js`)]
        bot.commands.delete(commandName)
        const pull = require(`./${commandName}.js`)
        bot.commands.set(commandName, pull)
    } catch(e) {
        return message.channel.send(`Could not reload: \`${args[0].toUpperCase()}\``)
    }

    message.channel.send(`The command \`${args[0].toUpperCase()}\` has been reloaded!`)

}


module.exports.config = {
    name: "reload",
    description: "reloads a bot command!",
    usage: ",reload",
    accessableby: "Bot Owner",
    aliases: ["creload"]
}