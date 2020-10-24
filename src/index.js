const Eris = require('eris');
const bot = new Eris(process.env.BOT_TOKEN);

bot.on('ready', function () {
    console.log('ready');
});

bot.on('messageCreate', function (message) {
    if (message.content === '!ping') {
        bot.createMessage(message.channel.id, 'Pong!');
    }
});

bot.connect();