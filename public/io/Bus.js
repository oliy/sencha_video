Ext.define('IO.Bus',{
    singleton: true,
    extend: 'Ext.util.Observable',
    constructor: function() {
        var me = this;

        this.addEvents({
            'frame': true,
            'start': true,
            'ended': true
        });

        var events = ({
            frame: function(ev) { console.log('Frame: '+ev.frame); },
            start: function(ev) { console.log('Start: '); console.log(ev); },
            ended: function(ev) { console.log('Ended: '); console.log(ev); },
        });
        this.on(events);

        if (typeof(io)!=='undefined') {
            console.log('Starting up SocketIO bus');
            var socket = this.socket = io.connect();
            socket.on('bus', function (data) {
                console.log('bus event');
                me.fireEvent(data.type, data.data);
            });
        }
        else {
            this.socket = null;
            console.log('Using only local bus');
        }

        for (var key in events)
            this.register(key);
    },

    register: function(service) {
        if (!this.socket)
            return;

        var me = this;
        this.on(service, function(data) {
            console.log('Sending['+service+ ']');
            console.log(data);
            me.socket.emit('bus', { type: service, data: data });
        });
    }
});