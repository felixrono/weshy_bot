/**
 * created by waweru
*/

'use strict';

const messages = require('./messages');
const {deleteMessageBtn} = require('./helpers');

module.exports = {
    defaulter: ({ reply }) => {
        const msg = `Am sorry John hasn't finished designing this functionality yet 😢. Sorry I couldn't be of service. This is so embarassing.`;
        return reply(msg);
    },
    leftMessage: (ctx) => ctx.reply(messages.important(ctx.update.callback_query.from.first_name), deleteMessageBtn)
};
