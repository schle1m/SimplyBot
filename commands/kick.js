//import Permission Checks from Discord
const { PermissionsBitField } = require("discord.js");

module.exports = async (client, message, args) => {
//permission check
if (!message.member.permissions.has(PermissionsBitField.Flags.KickMembers)) {
    return message.reply("You do not have permission to kick members!");
}

    try {
        //get target
    const target = message.mentions.members.first(); //get the first mentioned User as the Target

    if (!target) return message.reply("Please @ someone as your target") //if no target given

    if (target.id === message.guild.ownerId) return message.reply("Cant Kick the Server Owner") //if Server owner

    if (!target.kickable) return message.reply("This user Cant be kicked."); //if not able to kick
    //kick the target
     await target.kick(`Kicked by ${message.author}`);
    //reply
    return message.reply(`Succes, Kicked ${target.username}(${target.user.id})`)
    } catch (err) {
        //same catch logic
        console.log(err)
        return message.reply(`Error during Kick process`)
    }
}