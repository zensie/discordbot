const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");

module.exports.run = async (bot, message, args) => {
    
    let msg = await message.channel.send("Generating avatar...");

    let mentionedUser = message.mentions.users.first() || message.author;

        let embed = new Discord.RichEmbed()

        .setImage(mentionedUser.displayAvatarURL)
        .setColor(colours.orange)
        .setTitle("Avatar")
        .setFooter("© Evee | Created By Zen | zen#1337" + message.author.tag)
        .setDescription("[Avatar URL link]("+mentionedUser.displayAvatarURL+")");

        message.channel.send(embed)


    msg.delete();
}

module.exports.config = {
    name: "avatar",
    description: "Give a profile of someone",
    usage: ",avatar (mention)",
    accessableby: "Members",
    aliases: ["av"]
}
