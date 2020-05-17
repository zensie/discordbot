const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");


module.exports.run = async (bot, message, args) => {
    
    if(!args[1]) return message.reply("Please ask a full question!");
    let replies = ["I think so", "Um.. I guess not", "I'm not sure", "No comment.", "I don't know", "My system says.. Hell yeah!!", "404 not found. Ask me again later"];
    
    let result = Math.floor((Math.random() * replies.length))
    let question = args.slice(0).join(" ");

    let ballEmbed = new Discord.RichEmbed()
    .setAuthor(`${message.author.username} Asking...`)
    .setColor(colours.gold)
    .addField("The question is", question)
    .addField("And the answer is", replies[result]);

    message.channel.send({embed: ballEmbed});
}


module.exports.config = {
    name: "is",
    description: "Answer all question!",
    usage: ",is (ask)",
    accessableby: "Members",
    aliases: ["is"]
}
