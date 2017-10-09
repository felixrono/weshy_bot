/**
 * created by waweru
*/

'use strict';

const _ = require('lodash');

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
exports.servicesKeyBoard = '';
