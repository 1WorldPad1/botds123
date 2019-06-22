const Discord = require("discord.js");
const ms = require("ms");
module.exports.run = async (bot, message, args) => {

    let xdemb = new Discord.RichEmbed()
        .setColor("RED")
        .setTitle("Неправильное написание!")
        .addField("Заметка:", `Возможно вы не упоминули пользователя или не указали его айди! Если ошибка не исчезла то поставьте роль бота выше всех ролей!`)

let prava = new Discord.RichEmbed()
.setColor("RED")
.setDescription(`Недостаточно прав для выполнения команды!`)

let reas = new Discord.RichEmbed()
.setColor("RED")
.setDescription(`Вы не указали время мута`)

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(prava);
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply(xdemb);
  let reason = args.slice(2).join(" ");
  if(!reason) return message.reply(reas);
  

  let muterole = message.guild.roles.find(`name`, "Mute");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Mute",
        color: "BLACK",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let time = new Discord.RichEmbed()
  .setColor("RED")
  .setDescription(`Укажите причину заглушки!`)
  let mutetime = args[1];
  if(!mutetime) return message.reply(time);

  message.delete().catch(O_o=>{});
  let dm = new Discord.RichEmbed()
.setColor("GREEN")
  .setDescription(`Вы были заглушены на сервере **${message.guild.name}**`)
  .addField("Модератор:", `${message.author.tag}`)
  .addField("Время мута:", mutetime)
  .addField("Причина:", reason)

    await tomute.send(dm)
let sn = new Discord.RichEmbed()
.setColor('GREEN')
.setDescription(`Пользователь: <@${tomute.id}> получил авто-размут по истечению времени`)
  let muteembed = new Discord.RichEmbed()
  .setColor("GREEN")
  .addField("Нарушитель:", tomute)
  .addField("Модератор:", `${message.author}`)
  .addField("Канал:", message.channel)
  .addField("Был выдан в:", message.createdAt)
  .addField("Время мута:", mutetime)
  .addField("Причина:", reason);
  
  message.channel.send(muteembed);

  await(tomute.addRole(muterole.id));

setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(sn);
  }, ms(mutetime));
  
//end of module
}

module.exports.help = {
  name: "mute"
}