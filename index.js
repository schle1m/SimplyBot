//dependencys
require("dotenv").config();
//config
const prefix = ";"
//what to import from Discord.js
const { Client, GatewayIntentBits } = require("discord.js");
//wich intents were going to use.
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
});
//when the Bot is ready
client.on("ready", () => {
    console.log("Bot is Ready"); //log That we are online
    require("./deploy.js"); //run a Deploy Script for Slash Commands.
});
//when a Message is send
client.on("messageCreate", (message) => {
    if (message.author.bot) return; //this ignores Bots
    //check for a specific message
    if (message.content === `${prefix}ping`) {
       return message.reply("Pong! Bot is online"); //reply
    }
    //same like above
    if (message.content === `${prefix}help`) {
        const user = message.author.displayName; //Fetch the Message Senders Display Name as a Variable
        return message.reply(`Hello ${user}!\nSimply is a Simple & Open Source Bot to aim at Helping People get into discord Bots.`) //reply with the Display Name
    }
});
//Login using .env for security it should look like this: TOKEN=BotToken
client.login(process.env.TOKEN);
