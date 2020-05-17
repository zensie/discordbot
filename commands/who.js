const Discord = require("discord.js")
const botconfig = require("../botconfig.json");


module.exports.run = async (bot, message, args) => {

    const memberTag = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;

    let replies = ["**is a alien from Mars**", "**is 100% Gay**", "**is 100% Lesbian**", "**is a pro gamers**", "**is um... Just a Noob**", "**is somebody **"]
    let result = Math.floor((Math.random() * replies.length))
    let question = args.slice(0).join(" ");

    message.channel.send(`${question} ` + replies[result]);
}

module.exports.config = {
    name: "who",
    description: "Describe some people",
    usage: ",who",
    accessableby: "Members",
    aliases: "[w]"
}