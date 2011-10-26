Ext.application({
    name: 'Hackathon',
    phoneStartupScreen: 'images/foo.gif',
    appFolder: 'app',
    requires: [
    ],

    controllers: [
    ],

    launch: function() {
        console.log('app launch');
        var carousel = Ext.create('Ext.Carousel', {
            fullscreen: true,
            // clean instantiation using the widget.alias's defined
            // in each view
            items: [
                { xtype: 'home' },
                { xtype: 'simplelist' }
            ]
        });
    }
});
