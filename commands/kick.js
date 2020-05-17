const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");

module.exports.run = async (bot, message, args) => {
    
    if(!message.member.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("Justice say u cant use this Command!")

    let kickm = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!kickm) return message.channel.send("Please enter the nickname!")

    let reas = args.slice(1).join(" ")
    if(!reas) reason = "No reason given"

    if(!message.guild.me.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I didn't have Justice Power!")

    kickm.send(`You have been kicked from ${message.guild.name} for: ${reas}`).then (() =>
    kickm.kick()).catch(err => console.log(err))

    message.channel.send(`**${banm.user.tag}** has been kicked`).then(m => m.delete(5000))

    let kiembed = new Discord.RichEmbed()
    .setColor(colours.red_dark)
    .setAuthor(`${message.guild.name} ModLogs`, message.guild.iconURL)
    .addField("Moderation:", "kick")
    .addField("Kick:", kickm.user.username)
    .addField("Moderator:", message.author.username)
    .addField("Reason:", reas)
    .addField("Date:", message.createdAt.toLocaleString())
    .setTimestamp();

let kChannel = message.guild.channels.find(c => c.name === "logs")
    kChannel.send(kiembed)

}

module.exports.config = {
    name: "kick",
    description: "Kick a member from Server",
    usage: ",kick",
    accessableby: "Moderators",
    aliases: ["k"]
}
