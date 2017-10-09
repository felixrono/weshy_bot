/**
 * created by waweru
*/

'use strict';

const { Extra } = require('telegraf');

module.exports = {
    start: ({ reply, message }) => {
    
const msg = `
🙋 Hey ${message.from.first_name} ${message.from.last_name}.
Welcome to John's personal office make yourself at home;
😸 I know it's an office but am pleased to have you here.
What can I do for you sir / madam ?
`;

        return reply(msg);
    }
};
