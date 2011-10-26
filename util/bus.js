Ext.define('IO.Bus',{
	statics: {
        handler: {},
        socket = io.listen(app).sockets;
        socket.on('connection', function(client) {
                client.emit('bus', { type: 'chat.message', body:{ name: 'Pirate Server', text: 'Welcome to the Pirate server'} });
                client.emit('bus', { buffer: buffer });

                var user;

                dispatch = {
                    'login': {
                        fn: function(msg) {
                            user = register(msg.name,{ name:msg.team, desc: msg.desc, flag: msg.flag }, client);
                                        console.log('login:'+user!=null);
                            return user!=null? { name: user.name, team: teams.get(user.team) } : null;
                    }, res: true
                },
                        'chat.send': { fn: chatter.message, scope: chatter },
                        'game.place': { fn: board.place, scope: board, res: true },
                        'game.fire': { fn: function(msg) { return board.fire(msg.x,msg.y); }, res: true },
                        'tetris.send': { fn: tetrisSend },
                };

                client.on('bus', function(message) {
                        var type = message.type;
                        var msg = message.body;

                        var route = dispatch[type];
                        if (!route) {
                                log('Failed to route message type: '+type);
                                return;
                        }

                        var ret = route.fn.call(route.scope || global, msg);
                        if (route.res)
                                client.emit('bus', { type: route.res===true ? type+'.res' : route.res, body: ret});
                });

                client.on('disconnect', function() { unregister(user); });
    }
}
