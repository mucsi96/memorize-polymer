var config,
    express = require('express'),
    path = require('path'),
    methodOverride = require('method-override'),
    cookieParser = require('cookie-parser'),
    errorHandler = require('errorhandler'),
    passport = require('passport'),
    app = express(),
    server = require('http').createServer(app);

config = {
    root: path.normalize(__dirname + '/..'),
    port: process.env.PORT || 9000
};

app.use(methodOverride());
app.use(cookieParser());
app.use(passport.initialize());
app.use(express.static(path.join(config.root, 'client')));
app.use('/bower_components',  express.static(path.join(config.root, 'bower_components')));
app.use(errorHandler()); // Error handler - has to be last

server.listen(config.port, function () {
    console.log('Express server started with following options: ', config);
});

exports = module.exports = app;