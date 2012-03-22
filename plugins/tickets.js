// finds strings that match t1234 and outputs a ticket url

module.exports.load = function( bot ) {
    bot.onMessage( /\bt(\d{5,})\b/g, onMessage );
};

var onMessage = function( channel, from, message, matches ) {
    var ticket;

    for( var i = 0, l = matches.length; i < l; i++ ) {
        ticket = matches[i].substring(1);
        this.message(channel, 'CallLog: http://go.plymouth.edu/log/' + ticket);
    }
    return true;
};
