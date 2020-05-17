const Discord = require("discord.js")
const botconfig = require("../botconfig.json");


module.exports.run = async (bot, message, args) => {
    
    message.channel.send('Pong! `' + Math.floor(Math.round(bot.ping)) + '`ms')

    message.delete();

}


module.exports.config = {
    name: "ping",
    description: "show your ms",
    usage: ",ping",
    accessableby: "Members",
    aliases: ["ping"]
}