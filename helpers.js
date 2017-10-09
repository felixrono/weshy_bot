/**
 * created by waweru
*/

'use strict';

const _ = require('lodash');
const {Extra} = require('telegraf');

exports.interchangables = {
    salutations: (name) => {
        const replies = [
            `How may I be of service ☺️ ${name} ?`,
            `Anything I can do for you ${name} ?`,
            'Hi there, Am Megan here to serve you',
            `Hey ${name}, Am on my coffee break 😅 but how may I help you ?`
        ];
        const idx = _.random(replies.length-1);
        return replies[idx];
    }
};

exports.servicesKeyboard = Extra
.HTML()
.markup((m) => m.inlineKeyboard([
  m.callbackButton('Learn more about me', 'about:megan'),
  m.callbackButton('What I know about John', 'about:john'),
  m.callbackButton('Services offered here', 'services'),
  m.callbackButton(`Get John's contacts`, 'contacts'),
  m.callbackButton('Leave him a message', 'leave:message'),
  m.callbackButton(`Check outbox for left messages`, 'left:messages')
],
{columns: 2}));

exports.deleteMessageBtn = Extra.HTML().markup(
    (m) => m.inlineKeyboard([
        m.callbackButton('Delete this message', 'delete:message')
    ],
    {columns: 1})
);