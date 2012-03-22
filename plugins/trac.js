// finds strings that match r1234 and outputs a trac changeset url

module.exports.load = function( bot ) {
    bot.onMessage( /\br(\d{5,})\b/g, onMessage );
};

var onMessage = function( channel, from, message, matches ) {
    if( 'svn-bot' != from ) {
        var changeset;

        for( var i = 0, l = matches.length; i < l; i++ ) {
            changeset = matches[i].substring(1);
            this.message(channel, 'Trac: https://svn.plymouth.edu:8080/changeset/' + changeset);
        }
    }

    return true;
};
