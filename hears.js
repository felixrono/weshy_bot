/**
 * created by waweru
*/

'use strict';

module.exports = {
    salute: ({ message, reply }) => {
        const msg = `Hello am Megan, anything I can do for you  ${message.from.last_name} ?`;
        reply(msg);
    }
};
