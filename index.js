//Include required modules and configuration files
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const packageInfo = require("./package.json");

//Create discord client object
const bot = new Discord.Client()

bot.on("ready", async () => { //when bot ready
  const user = bot.users.cache.get(botconfig.userid); //Identify user to message
  await user.send(process.argv[2]); //Wait for message to send to user
  process.exit(0); //End program with success code
})

bot.login(botconfig.token); //Log into discord bot using private token.
