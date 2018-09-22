const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NDkyNTM3OTk5OTI2NDkzMTk0.DogFFw.M7UXK8I5Tmbydacn9Nc58W6ASIg);//where BOT_TOKEN is the token of our bot
