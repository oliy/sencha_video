Ext.application({
    name: 'Hackathon',
    appFolder: 'app',
    requires: [
    ],

    controllers: [
    ],

    launch: function() {
        console.log('View!');

        Ext.create('App.view.ViewPort', {

        });
    }
});
