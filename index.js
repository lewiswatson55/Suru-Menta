const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const packageInfo = require("./package.json");

const bot = new Discord.Client()

bot.on("ready", async () => {
  const user = bot.users.cache.get(botconfig.userid);
  await user.send(process.argv[2]);
  process.exit(0);
})

bot.login(botconfig.token);
