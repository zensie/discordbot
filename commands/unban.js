const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("Justice say u cant use this Command!")

    let banmem = await bot.fetchUser(args[0])
        if(!banmem) return message.channel.send("Please enter the nickname!")

    let reso = args.slice(1).join(" ");
        if(!reso) reason = "No reason given"

    if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I didn't have Justice Power!")
    message.delete()
    try{
        message.guild.unban(banmem, {reason: reason})
        message.channel.send(`${banmem.tag} has been unbanned from server`)
    } catch(e) {
        console.log(e.message)
    }

    let inline = true;
    let ubaembed = new Discord.RichEmbed()
    .setColor(colours.red_dark)
    .setAuthor(`${message.guild.name} ModLogs`, message.guild.iconURL)
    .addField("Moderation: Unban")
    .addField("Moderated On:", `${banmem.username} (${banmem.id})`, inline)
    .addField("Moderator:", message.author.username, inline)
    .addField("Reason:", reso, inline)
    .addField("Date:", message.createdAt.toLocaleString(), inline)
    .setTimestamp();

let uChannel = message.guild.channels.find(c => c.name === "logs")
    uChannel.send(ubaembed)

};

module.exports.config = {
    name: "unban",
    description: "Unban a user from the Server!",
    usage: ",unban",
    accessableby: "Administrators",
    aliases: ["uba", "unbanish"]
}