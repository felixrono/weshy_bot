/**
 * created by waweru
*/

'use strict';

module.exports = {
    defaulter: ({ answerCallbackQuery }) => {
        return answerCallbackQuery(`Oh, ${ctx.match[0]}! Great choise`);
    }
};
