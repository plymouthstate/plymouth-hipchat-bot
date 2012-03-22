// this plugin outputs Bork, bork, bork!

module.exports.load = function( bot ) {
    bot.onMessage(/^\!bork[ \t]*$/, onMessage);
};

var onMessage = function( channel, from, message, matches ) {
    this.message( channel, 'Bork, bork, bork!' );

    return true;
};
