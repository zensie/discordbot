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
    if(!muterole) {
        try{
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#514f48",
                permission: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGE: false,
                    ADD_REACTION: false,
                    SEND_TTS_MESSAGES: false,
                    ATTACH_FILES: false,
                    SPEAK: false
                })
            })
        } catch(e) {
            console.log(e.stack);
        }
    }
muted.addRole(muterole.id).then(() => {
    message.delete()
    muted.send(`Hello, you have been in ${message.guild.name} Muted for: ${reason}`)
    message.channel.send(`${muted.user.username} was successfully muted!`)
})

let membed = new Discord.RichEmbed()
.setColor(colours.red_dark)
.setAuthor(`${message.guild.name} ModLogs`, message.guild.iconURL)
.addField("Moderation:", "mute")
.addField("Muted:", muted.user.username)
.addField("Moderator:", message.author.username)
.addField("Reason:", reason)
.addField("Date:", message.createdAt.toLocaleString())
.setTimestamp();

let mChannel = message.guild.channels.find(c => c.name === "『👣』𝕒𝕔𝕥𝕚𝕠𝕟-𝕝𝕠𝕘")
    mChannel.send(membed)
}


module.exports.config = {
    name: "mute",
    aliases: ["muted"],
    usage: ",mute",
    description: "mute people!",
    accessableby: "Members"
}