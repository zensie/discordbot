const Discord = require("discord.js")
const randomPuppy = require("random-puppy")


module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating...")

    const meme = ["meme", "dankmeme", "me_irl"];

    const random = meme[Math.floor(Math.random() * meme.length)];

    const image = await randomPuppy(random);
    const embed = new Discord.RichEmbed()
    .setColor(0xff2050)
    .setAuthor(`Evee MEMES!`, message.guild.iconURL)
    .setImage(image)
    .setTimestamp()
    .setFooter(`© Evee | Created By Zen | zen#1337`, bot.user.displayAvatarURL)

    message.channel.send(embed);

    msg.delete();
}


module.exports.config = {
    name: "meme",
    noalias: "No Aliases",
    description: "Sends a meme from a website!",
    usage: ",meme",
    accessableby: "Members",
    aliases: []
}