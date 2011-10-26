Ext.application({
    name: 'nlve-mobile',
    phoneStartupScreen: 'images/foo.gif',
    appFolder: 'app-mobile',

    requires: [
        "M.view.Preview",
        "M.view.Timeline",
        "M.view.Control",
        "IO.Bus"
    ],

    controllers: [
        
    ],

    launch: function() {

        console.log('mobile app launch');

        var control = Ext.create("M.view.Control",{
           docked:"left",
           width:200
        });

        control.on({
            "moveposition":function(direction, time){
                console.log("move position " + direction + " " + time + " second(s)");
                preview.movePosition(direction, time);
            },
            scope:this
        });

        IO.Bus.on({
            frame:function(data){
                var time = (360 / 7300) * data.frame;
                preview.movePosition("set", time);
            }
        })

        
        var preview = Ext.create("M.view.Preview",{
            dockedItems:[control],
            flex:1
        });

        var timeline = Ext.create("M.view.Timeline",{
           height:100
        });

        var test = Ext.create("Ext.Panel",{
            flex:1,
            items:Ext.create("Ext.Video")
        });

        var main = Ext.create("Ext.Panel",{
            layout:{
                type:"vbox"
            },
            items:[preview,timeline]
        });

        Ext.Viewport.add(main);

        preview.loadVideo("videos/foo.webm");

       
        
     }
});