/** @type {typeof import('telegraf').Telegraf} */
const { Telegraf } = require('telegraf');

const bot = new Telegraf('5435851744:AAGMCFlgwKBuVzxMhNb50b_U7yzX-e7K0ag');
bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();
