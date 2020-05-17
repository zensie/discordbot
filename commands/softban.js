const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("Justice say u cant use this Command!")

    let banMember = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!banMember) return message.channel.send("Please enter the nickname!")

    let reason = args.slice(1).join(" ");
    if(!reason) reason = "No reason given"

    if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I didn't have Justice Power!")

    banMember.send(`Hello, you have been banned from ${message.guild.name} for: ${reason}`).then(() =>
    message.guild.ban(banMember, { days: 1, reason: reason})).then(() => message.guild.unban(banMember.id, { reason: "Softban"})).catch(err => console.log(err))
    
    message.channel.send(`**${banMember.user.tag}** has been Softbanned`)

    let baembed = new Discord.RichEmbed()
    .setColor(colours.red_dark)
    .setAuthor(`${message.guild.name} ModLogs`, message.guild.iconURL)
    .addField("Moderation: Softban")
    .addField("Ban:", banMember.username)
    .addField("Moderator:", message.author.username)
    .addField("Reason:", reason)
    .addField("Date:", message.createdAt.toLocaleString())
    .setTimestamp();

let bChannel = message.guild.channels.find(c => c.name === "logs")
    bChannel.send(baembed)

};

module.exports.config = {
    name: "softban",
    description: "softban a user from the Server!",
    usage: ",softban",
    accessableby: "Administrators",
    aliases: ["sb", "sbanish"]
}