
var request = require('request');

module.exports.load = function( bot ) {
    bot.onMessage(/^\!commands[ \t]*$/i, onMessage);
};

var onMessage = function( channel, from, message, matches ) {
    var self = this;

    self.message( channel, 'You can use: t0000 for tickets, #0000 for github issue numbers, !codereview for codereview counts in mistime...plus other stuff.  Now STFU.' );    
}
