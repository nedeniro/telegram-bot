const TelegramBot = require('node-telegram-bot-api');
const http = require('http');
const https = require('https');
http.createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
    res.end('')
});
setInterval(function(){
    https.get('https://nedeniro-telegram-bot.herokuapp.com/')
},300000);

const token = '753159262:AAGZMZI7Dir9Ep9BYiDK9FdBGYiRsgxofqA';

const bot = new TelegramBot(token, {
    polling: true
});

const deadline = 1552417200;
bot.sendMessage(335717878, 'Bot is running!');

//bot.on('message', (msg) => {
//    const chatId = msg.chat.id;
//
//    if (msg.text === '/deadline') {
//        console.log(msg);
//        const time = new Date(msg.date);
//        const needZero = num => num > 9 ? `${num}` : `0${num}`;
//
//        bot.sendMessage(chatId, `wake up, you have almost ${needZero(((deadline-msg.date)/3600).toFixed(0))}:${needZero(((deadline-msg.date)%3600/60).toFixed(0))}:${needZero(((deadline-msg.date)%60))}`);
//    } else {
//        bot.sendMessage(chatId, 'hello');
//    }
//});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    switch (msg.text) {
        case '/start':
            bot.sendMessage(chatId, 'Welcome to my telegram bot! list of all commands: \/deadline');
        case '/deadline':
            const time = new Date(msg.date);
            const needZero = num => num > 9 ? `${num}` : `0${num}`;

            bot.sendMessage(chatId, `wake up, you have almost ${needZero(parseInt((deadline-msg.date)/3600))}:${needZero(parseInt((deadline-msg.date)%3600/60))}:${needZero(parseInt((deadline-msg.date)%60))}`);
            break;
        default: bot.sendMessage(chatId, 'hello');

    }
});
