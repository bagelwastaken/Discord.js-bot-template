//make sure to install discord in the terminal by doing npm i discord.js
const discord = require('discord.js')
const bot = new Discord.Client()
const {prefix,token} = require("./botconfig.json");
bot.commands = new Discord.Collection();


bot.on("ready", () => {
    console.log(`bot has started, with ${bot.users.cache.size} users, in ${bot.channels.cache.size} channels of ${bot.guilds.cache.size} guilds.`);
    bot.user.setActivity(`Minecraft`);
  });


bot.login(token)

bot.on("message", msg =>  {
    if(msg.content === `${prefix}ping`) {
      msg.channel.send("pong!")
    }
  
  });

  bot.login(token)