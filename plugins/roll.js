var roll = require('roll');

module.exports.load = function( bot ) {
    bot.onMessage(/^\!roll[ \t]+(\d+d\d+(\s*[\+\-]\s*\d)?)$/i, onMessage);
};

var onMessage = function( channel, from, message, matches ) {
    var dice = roll.roll(matches[1]);

    this.message( channel, matches[1] + " = " + dice.result );

    return true;
};
