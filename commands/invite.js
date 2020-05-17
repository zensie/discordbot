const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");


module.exports.run = async (bot, message, args) => {
    
    const iEmbed = new Discord.RichEmbed()
        .setColor(colours.purple_medium)
        .setTitle('Click Me')
	    .setURL('https://discord.com/api/oauth2/authorize?client_id=699575527714848809&permissions=8&scope=bot')
        .setAuthor(`Evee Invitation`, bot.user.displayAvatarURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .setDescription("**Thanks For Inviting Me!**")
        .setFooter(`© Evee | Created By Zen | zen#1337`, bot.user.displayAvatarURL)
        .setTimestamp();
        message.channel.send(iEmbed)

}


module.exports.config = {
    name: "invite",
    description: "Give's my invitation",
    usage: ",invite",
    accessableby: "Members",
    aliases: ["i"]
}
