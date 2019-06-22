const Discord = require ('discord.js');
const ms = require ('ms');
module.exports.run = async (bot, message, args) => {

    let xdemb = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle("Неправильное написание!")
    .addField("Заметка:", `Возможно вы не упоминули пользователя или не указали его айди! Если ошибка не исчезла то поставьте роль бота выше всех ролей!`)

 let prava = new Discord.RichEmbed()
.setColor("RED")
.setDescription("Недостаточно прав для выполнения команды!")

    let user2 = new Discord.RichEmbed()
.setColor("GREEN")
.setDescription("Этот пользователь уже может говорить.")
    let user = message.mentions.users.first();

    const hive = new Discord.RichEmbed()
.setColor("GREEN")
.setDescription(`Пользователь: **${user}** был размучен.`)

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage(prava)

        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!toMute) return message.channel.sendMessage(xdemb);
        let role = message.guild.roles.find(r => r.name === "Mute")
        let reason = args.slice(3).join(' ');
        if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage(user2)
        await toMute.removeRole(role);
  

        message.channel.send(hive)
        message.delete();
      
     }
    
        module.exports.help = {
            name: "unmute"
        }
