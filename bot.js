const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'hi') {
    msg.reply('Welcome To Our Server :wave: :wave:');
  }
});
client.on('message', msg => {
  if (msg.content === 'hello') {
    msg.reply('Welcome To Our Server :wave: :wave:');
  }
});
client.on('message', msg => {
  if (msg.content === '.') {
    msg.reply('Welcome To Our Server :wave: :wave:');
  }
});
client.on('message', msg => {
  if (msg.content === 'أهلا') {
    msg.reply('أهلًاوسهلًا');
  }
});
client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('هلا بيك في سيرفرنا');
  }
});
client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('وعليكم السلام ورحمة الله وبركاته');
  }
});
client.login('NTM0MDQ1MTY0NTQ1NjM4NDQz.Dxz35g.psldIb9OfHJJiac0faJ2-OEzwJU');
