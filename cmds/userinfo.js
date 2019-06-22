const Discord = require("discord.js");
const fs= require("fs");
const profile = require("../profile.json");
module.exports.run =async (bot, message, args) => {
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;    
    if(!profile[member.id]) profile[member.id] = {
        warns: 0
    };
           
    let resence = true
    const status = {
        online: "Онлайн",
        idle: "Не активен",
        dnd: "Неизвестно",
        offline: "Оффлайн"
      }        

const user = message.mentions.users.first();
var str;
if(member.hasPermission('SEND_MESSAGES')) {
    str = "не заблокирован";
} else {
    str = "заблокирован";
};
    let embed = new Discord.RichEmbed()
    .setThumbnail(user.displayAvatarURL)
    .setColor("GREEN")
    .addField("•Ник", `${member.user.tag}`)
    .addField("•ID", member.user.id)
    .addField("•Статус", `${status[member.user.presence.status]}`)
    .addField("•Роли", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || ":no: Нет ролей!"}`)
    .addField("•В нашем дискорде с", message.guild.joinedAt)
    .addField("•Кол-во предупреждений", `${profile[member.id].warns}/3`)
    .addBlankField()
    .setTimestamp()
    .setFooter(`Информация о ${member.user.username}`);
    
    message.channel.send(embed);
    message.delete();
}

module.exports.help = {
    name: "userinfo"
}