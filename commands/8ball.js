function get8ball() { //function to get the awnsers
    const response = [
        "Yes", "No", "Maybe", "Perhaps", "Hell No", "Hell Yeah", "idk", "sorry i forgot"
    ]
    return response[Math.floor(Math.random() * response.length)]; //give back a random one from the list above
}
module.exports = (client, message, args) => {
   if (message.content.startsWith("8ball")) return; //return if the name of the message doesnt start with 8ball
    const response = get8ball(); //get the response from the Function above

    return message.reply(`### 8ball Response!\n**Question:** ${args}\n**8ball Reply:** ${response}`) //reply to the message
}