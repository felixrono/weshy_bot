/**
 * created by waweru
*/

'use strict';

const {interchangables, servicesKeyboard} = require('./helpers');

module.exports = {
    salute: ({ message, reply }) => reply(interchangables.salutations(message.from.first_name), servicesKeyboard)
};
