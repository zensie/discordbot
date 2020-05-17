const Discord = require("discord.js")
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    
    let users = bot.users;

    let searchTerm = args[0];
    if(!searchTerm) return message.channel.send("Please type a name to search!");

    let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    message.channel.send(matches.map(u => u.tag));

    message.delete();

}

  module.exports.config = {
    name: "search",
    description: "To find a user",
    usage: ",search (nick)",
    accessableby: "Members",
    aliases: ["find"]
}