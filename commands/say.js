const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("I can't lend u too use this command!")

    let argsresult;
    let mChannel = message.mentions.channels.first()

    message.delete()
    if(mChannel){
        argsresult = args.slice(1).join(" ")
        mChannel.send(argsresult)
    } else {
        argsresult = args.join(" ")
        message.channel.send(argsresult)
    }

};

module.exports.config = {
    name: "say",
    description: "say something what ur type",
    usage: ",say",
    accessableby: "Members",
    aliases: "[say]"
}