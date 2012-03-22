
var request = require('request');

module.exports.load = function( bot ) {
    bot.onMessage(/^\!codereview[ \t]*$/i, onMessage);
};

var onMessage = function( channel, from, message, matches ) {
    var self = this;

    var uri = 'http://www.plymouth.edu/webapp/time/wp-admin/admin-ajax.php?action=p2mis_stats'; 
    request({'uri': uri}, function(error, response, body) {
      body = JSON.parse(body);
      if( body.codereview ) {
        self.message( channel, 'There are ' + body.codereview + ' request(s) for code review. http://go.plymouth.edu/codereview' );    
      }
    });
}
