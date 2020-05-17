const Discord = require("discord.js")
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    
    let inline = true
    let bicon = bot.user.displayAvatarURL;
    let usersize = bot.users.size
    let chansize = bot.channels.size
    let uptimxd = bot.uptime 
    let servsize = bot.guilds.size
    let botembed = new Discord.RichEmbed()
    .setColor("#fc0d32")
    .setThumbnail(bicon)
    .addField("Bot Name", `:robot_face: ${bot.user.username}`, inline)
    .addField("Bot Owner", ":bust_in_silhouette: <@591109629329670248>", inline )
    .addField("Servers", `🛡 ${servsize}`, inline)
    .addField("Channels", `📁 ${chansize}`, inline)
    .addField("Users", `:busts_in_silhouette: ${usersize}`, inline)
    .addField("Bot Library", "Discord.js", inline)
    .addField("Created On", bot.user.createdAt, inline)
    .addField("Status Online :", `${uptimxd} Second`, inline)
    .setFooter(`Information about: ${bot.user.username}. Developed by: NubzHawk(Ndus)`)
    .setTimestamp()
    
    message.channel.send(botembed);


}

  module.exports.config = {
    name: "botinfo",
    description: "bot info!",
    usage: ",botinfo",
    accessableby: "Members",
    aliases: ["bi"]
}