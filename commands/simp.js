const Discord = require("discord.js")
const randomPuppy = require("random-puppy")


module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating...")

    const subreddits = ["IRLgirls", "mendrawingwomen", "DemEyesDoe"];

    const random = subreddits[Math.floor(Math.random() * subreddits.length)];

    const image = await randomPuppy(random);
    const sdembed = new Discord.RichEmbed()
    .setColor(0xff2050)
    .setAuthor(`Evee Girl!`, message.guild.iconURL)
    .setImage(image)
    .setTimestamp()
    .setFooter(`© Evee | Created By Zen | zen#1337`, bot.user.displayAvatarURL)

    message.channel.send(sdembed);

    msg.delete();
}


module.exports.config = {
    name: "simp",
    noalias: "No Aliases",
    description: "Sends a Gamer Girl Photo from a website!",
    usage: ",simp",
    accessableby: "Members",
    aliases: []
}