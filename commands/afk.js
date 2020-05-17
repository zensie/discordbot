const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
botafk = new Map();


module.exports.run = async (bot, message, args) => {

    let reason = args.join(' ') ? args.join(' ') : `I am currently AFK, I will reply u ASAP!`
    let afklist = botafk.get(message.author.id);

    if (!afklist) {
        let construct = {
            id: message.author.id,
            reason: reason
        };

        botafk.set(message.author.id, construct);
        return message.reply(`I set your AFK: ${reason}`).then(msg => msg.delete(5000));
    }
};

module.exports.config = {
    name: "afk",
    description: "set ur afk",
    usage: ",afk",
    accessableby: "Members",
    aliases: "[afk]"
}