const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent")


module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermissions("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("Justice say u cant use this Command!")

    if(!message.guild.me.hasPermissions(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Justice says NO!")

    let muted = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!muted) return message.channel.send("Please enter the nickname!")

    let reason = args.slice(1).join(" ");
    if(!reason) reason = "No reason given"

    let muterole = message.guild.roles.find(r => r.name === "Muted")
    if(!muterole) return message.channel.send("There is no mute role to remove!")

    muted.removeRole(muterole.id).then(() => {
        message.delete()
        muted.send(`Hello, you have been unmuted in ${message.guild.name} for: ${reason}`).catch(err => console.log(err))
        message.channel.send(`${muted.user.username} was unmuted!`)
    })

    let unembed = new Discord.RichEmbed()
    .setColor("#fc0d32")
    .setAuthor(`${message.guild.name} ModLogs`, message.guild.iconURL)
    .addField("Moderation:", "mute")
    .addField("Muted:", muted.user.username)
    .addField("Moderator:", message.author.username)
    .addField("Date:", message.createdAt.toLocaleString())

    let mChannel = message.guild.channels.find(c => c.name === "『👣』𝕒𝕔𝕥𝕚𝕠𝕟-𝕝𝕠𝕘")
    mChannel.send(unembed)
}


module.exports.config = {
    name: "unmute",
    aliases: ["unmute"],
    usage: ",unmute",
    description: "unmute people!",
    accessableby: "Members"
}