const Discord = require("discord.js")
const botconfig = require("../botconfig.json");


module.exports.run = async (bot, message, args) => {
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Justice say u cant use this Command!");
    if(!args[0]) return message.channel.send("Please put amount!");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(` `).then(msg => msg.delete(5000));
    })

}


module.exports.config = {
    name: "purge",
    description: "Deleting all message",
    usage: ",purge (number)",
    accessableby: "Owner & Admin",
    aliases: ["clear"]
}
