//dependencys
require("dotenv").config();
//config
const prefix = ";" //change the ; to any other prefix you want.
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
});
//when a Message is send
client.on("messageCreate", (message) => {
    if (message.author.bot) return; //this ignores Bots

    //logic for very basic Commands
    //check for a specific message Most simple logic
    if (message.content === `!ping`) { // only trigger if !ping gets send
       return message.reply("Pong! Bot is online"); //reply
    }
    //check for message with the chossen prefix
    if (message.content === `${prefix}ping`) {
       return message.reply("Pong! Bot is online"); //reply
    }

//if a Prefix is found
 if (message.content.startsWith(prefix)) {

const args = message.content.slice(prefix.length).trim().split(/ +/); //slice away for args
const command = args.shift().toLowerCase(); //get the acc Command without prefix etc
if (command === "ping") return; //return as we already have a ping Command
//load the handler
try { //this is a try block so the Bot doesnt Crash
    const cmd = require(`./commands/${command}.js`); //requie the file
    cmd(client, message, args); //get the export
} catch (err) { //catch the error incase one happends
    console.error(err); //log the error
    message.reply("Unknown command."); //reply
} 
 }
});
//Login using .env for security it should look like this: TOKEN=BotToken
client.login(process.env.TOKEN);
