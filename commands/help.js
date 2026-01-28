//get what we have exportet
module.exports = async (client, message, args) =>  {
        const user = message.author.displayName; //Fetch the Message Senders Display Name as a Variable
        return message.reply(`Hello ${user}!\nSimply is a Simple & Open Source Bot to aim at Helping People get into discord Bots.`) //reply with the Display Name
}