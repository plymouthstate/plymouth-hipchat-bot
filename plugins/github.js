
var request = require('request');

module.exports.load = function( bot ) {
    bot.onMessage(/.*(#(\d+)).*/, onMessage);
};

var onMessage = function( channel, from, message, matches ) {
    var self = this;
    var uri = 'https://api.github.com/repos/plymouthstate/plymouth-webapp/issues/' + matches[2]; 

    request({'uri': uri}, function(error, response, body) {
        var issue = JSON.parse(body);
        self.message( channel, 'Issue ' + issue.number + ': ' + issue.title + "  " + issue.html_url );
    });
};
