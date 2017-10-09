/**
 * created by waweru
*/

'use strict';

require('dotenv').config();
const Telegraf = require('telegraf');
const Bot = require('./bot');
const matches = require('./matches');
const app = new Telegraf(process.env.BOT_TOKEN);

app.telegram.getMe().then((botInfo) => {
    app.options.username = botInfo.username;
});
  
app.command('start', Bot.Commands.start);

app.hears(matches.salutations, Bot.Hears.salute);

app.action('left:messages', Bot.actions.leftMessage);
app.action('delete:message', ({deleteMessage}) => deleteMessage());
app.action(matches.defaultAction, Bot.actions.defaulter);

// commence
app.startPolling();
