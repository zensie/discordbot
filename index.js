const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const colours = require("./colours.json");
const superagent = require("superagent")

const bot = new Discord.Client({disableEveryone: true}); 

require("./util/eventHandler")(bot)

const fs = require("fs");
bot.commands = new Discord.Collection(); 
bot.aliases = new Discord.Collection(); 

fs.readdir("./commands/", (err, files) => {   
    if(err) console.log(err) 

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) { 
         return console.log("[LOGS] Couldn't Find Commands!"); 
    }

    jsfile.forEach((f, i) => { 
        let pull = require(`./commands/${f}`); 
        bot.commands.set(pull.config.name, pull); 
        /*pull.config.aliases.forEach(alias => { 
            bot.aliases.set(alias, pull.config.name)
        });*/
    }); 
}); 

let y = process.openStdin()
y.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
    bot.channels.get("656444190703484942").send(x.join(" "));
});


botafk = new Map();
bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return; 

    let prefix = botconfig.prefix; 
    let messageArray = message.content.split(" ") 
    let cmd = messageArray[0]; 
    let args = messageArray.slice(1); 

    if (message.content.includes(message.mentions.users.first())) {
        botafk.forEach(key => {
           if (key.id == message.mentions.users.first().id) {
            message.guild.fetchMember(key.id).then(member => {
            let usertag = member.user.tag;
            return message.channel.send(`${usertag} Is AFK: ${key.reason} - ${message.reference}`);
            });   
           }
        });
    }
    
    botafk.forEach(key => {
        if (message.author.id == key.id) {
            botafk.delete(message.author.id);
            return message.reply(`Welcome Back, I removed your AFK!`).then(msg => msg.delete(5000));
        };
    });


    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length))) 
    if(commandfile) commandfile.run(bot,message,args) 

}) 

bot.login(botconfig.token);