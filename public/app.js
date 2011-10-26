Ext.application({
    name: 'Hackathon',
    appFolder: 'app',
    requires: [
        'IO.Bus',
        'A.view.ImageView'
    ],

    controllers: [
    ],

    launch: function() {
        console.log('View!');

        Ext.create('A.view.ViewPort', {

        });
    }
});
