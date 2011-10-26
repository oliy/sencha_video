var 
	//Deps = require('./util/deps').Deps,
	express = require('express'),
	io = require('socket.io'),
	app = express.createServer(),
	log = console.log,
	socket
	;

var path = './ext-core';
var load = [
    '/Ext.js',
    '/version/Version.js',
    '/lang/Array.js',
    '/lang/Date.js',
    '/lang/Function.js',
    '/lang/Number.js',
    '/lang/Object.js',
    '/lang/String.js',
    '/class/Base.js',
    '/class/Class.js',
    '/class/ClassManager.js',
    '/lang/Error.js',
    '/class/Loader.js'
];
for (var i=0,m; m=load[i]; i++)
    require(path+m);

Ext.apply(global, require('./util/arrays'));
	
app.configure(function() {
	app.use(express.methodOverride());
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.use(app.router);
	app.use(express.static(__dirname + '/public'));
});

app.configure('development', function() {
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function() {
	app.use(express.errorHandler());
});


app.get('/user/:name?', function(req,res) {
  res.send('');
});

var port = 8001;

console.log('Starting server on port : '+port);
app.listen(port);

