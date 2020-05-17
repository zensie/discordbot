const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let inline = true
    let resence = true
    const status = {
        online: ":green_circle: Online",
        idle: ":orange_circle: Idle",
        dnd: ":red_circle: Do Not Disturb",
        offline: ":black_circle: Offline/Invisible"
      }
        
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author

if (member.user.bot === true) {
    bot = ":robot: Yes";
  } else {
    bot = ":bust_in_silhouette: No";
  }

            let embed = new Discord.RichEmbed()
                .setAuthor(member.user.username)
                .setThumbnail((target.displayAvatarURL))
                .setColor("#00ff00")
                .addField("Full Username", `${member.user.tag}`, inline)
                .addField("ID", member.user.id, inline)
                .addField("Nickname", `${member.nickname !== null ? `:white_check_mark: ${member.nickname}` : ":no_entry_sign: None"}`, true)
                .addField("Bot", `${bot}`,inline, true)
                .addField("Status", `${status[member.user.presence.status]}`, inline, true)
                .addField("Playing", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : ":no_entry_sign: Not playing"}`,inline, true)
                .addField("Roles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || ":no_entry_sign: No Roles"}`, true)
                .addField("Joined Discord At", member.user.createdAt, resence)
                .setFooter(`Information about ${member.user.username}`)
                .setTimestamp()
    
            message.channel.send(embed);

            message.delete();
    }


module.exports.config = {
    name: "userinfo",
    description: "Pulls the userinfo of yourself or a user!",
    usage: ",userinfo (@mention)",
    accessableby: "Members",
    aliases: ["ui"]
}
