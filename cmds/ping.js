const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let inline = true
    let bicon = bot.user.displayAvatarURL;
    let usersize = bot.users.size
    let chansize = bot.channels.size
    let uptimxd = bot.uptime 
    let servsize = bot.guilds.size
    let botembed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setThumbnail(bicon)
    .addField("Название бота", ` ${bot.user.username}`, inline)
    .addField("Создатель бота", " <@590116318238474269> ", inline )
    .setFooter(`Информация о: ${bot.user.username}- Создал xDosuq, специально для JumpBox`)
    .setTimestamp()
    
    message.channel.send(botembed);

}

module.exports.help = {
  name:"bot"
}