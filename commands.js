/**
 * created by waweru
*/

'use strict';

const {servicesKeyboard} = require('./helpers');

module.exports = {
    start: ({ reply, message }) => {
        if (message.from.first_name !== 'Komu') {
const msg = `
🙋 Hey ${message.from.first_name}. My name is Megan 😊.
I am John's personal assistant. I know it's an office but feel at home here 😸.
What can I do for you sir / madam ?
`
;
            return reply(msg, servicesKeyboard);       
        } 
        else {

const msg = `
🙋 Hey ${message.from.first_name}. My name is Megan 😊. I am John's personal assistant.
He left a message for you ${message.from.first_name} and requested you delete it after reading it.
But since am around can I be of service.
`
;
            return reply(msg, servicesKeyboard);
        }
    }
};
