const Discord = require("discord.js")
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    
  const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
  let mentionedUser = message.mentions.users.first() || message.author;

  message.channel.send(`${mentionedUser} ` + Math.floor(Math.random() * 100 + 1) + "% lesbian :gay_pride_flag:");

}

  module.exports.config = {
    name: "howlesb",
    description: "Give you a rate of your lesbian",
    usage: ",howlesb (mention)",
    accessableby: "Members",
    aliases: ["lesbtest"]
}