const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'BOT_TOKEN';

bot.on('message', function(message){
    if(message.content == 'c_msg'){
        message.reply('reply_msg')
    }
});


bot.on('ready', function(){
    console.log('Ready.')
});

bot.login(TOKEN);
