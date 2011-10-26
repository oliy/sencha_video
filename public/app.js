Ext.application({
    name: 'Hackathon',
    appFolder: 'app',
    requires: [
        'IO.Bus'
    ],

    controllers: [
    ],

    launch: function() {
        console.log('View!');

        Ext.create('A.view.ViewPort', {

        });
    }
});
