/**
 * created by waweru
*/

'use strict';

const {interchangables} = require('./helpers');

module.exports = {
    salute: ({ message, reply }) => reply(interchangables.salutations(message.from.last_name))
};
