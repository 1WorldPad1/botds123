const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let a = message.author
    let embed = new Discord.RichEmbed()
    .setColor('#6c3dfa')
    .addField("Бот","`!help`")
    .addField("Mod","`!report @Ник Причина`")
    .addField("Mod","`!ban @Ник`")
    .addField("Mod","`!kick @Ник`")
    .addField("Mod","`!unmute @Ник`")
    .addField("Mod","`!mute @Ник Время Прчина`")
    .addField("Mod" ,"`!warn @Ник Прчина`")
    .addField("Mod","`!unwarn @Ник`")
    .addField("Информация", "`!userinfo @Ник`")
    .setFooter('JumpBox', bot.user.avatarURL)
    .setTimestamp()
    
    bot.send(embed);
    

};
module.exports.help = {
    name: "help"
};