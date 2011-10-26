Ext.application({
    name: 'Hackathon',
    appFolder: 'app',
    requires: [
    ],

    controllers: [
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                    xtype: 'panel',
                    region: 'north',
                    title: 'Header',
                    height: 500,
                    html: 'Header'
                },
                {
                    xtype: 'panel',
                    region: 'center',
                    title: 'Content',
                    html: 'Content'
                }
            ]
        });
    }
});
