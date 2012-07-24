// this initializes a HipChat wobot (https://github.com/cjoudrey/wobot)
// with some plugins for our environment

var wobot = require('wobot');
var settings = require('settings.js');

var bot = new wobot.Bot( settings.credentials );

// set up the plugins
var plugins = [
      'ackbar'
    , 'bork'
    , 'codereview'
    , 'commands'
    , 'roll'
    , 'tickets'
    , 'trac'
    , 'weather'
    , 'github'
];

// initialize the plugins
for( i in plugins ) {
    bot.loadPlugin( plugins[i], require( './plugins/' + plugins[i] ) );
}

// connect to hipchat
bot.connect();
bot.onConnect(function() {
    this.join(settings.rooms.psu_mis);
    this.join(settings.rooms.bot_testing);
    console.log("We're online!");
});
