var
    io = require('socket.io'),
    log = console.log
    ;

exports.init = function(app) {
    var handler = {};
    var socket = io.listen(app).sockets;
    socket.on('connection', function(client) {
        log(client);
        log('Client connected!');
        client.on('bus', function(message) {
            log(message);
            client.broadcast.emit('bus', message);
//                var type = message.type;
//                var msg = message.body;
//
//                var route = IO.Bus.handler[type];
//                if (!route) {
//                    log('Failed to route message type: '+type);
//                    return;
//                }
//
//                var ret = route.fn.call(route.scope || global, msg);
//                if (route.res)
//                        client.emit('bus', { type: route.res===true ? type+'.res' : route.res, body: ret});
        });

//        client.on('disconnect', function() { unregister(user); });
    });

    return {
        handler: handler,
        socket: socket
    };
};
