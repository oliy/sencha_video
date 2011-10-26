Ext.define("M.view.Control",{
    extend:"Ext.Panel",
    
    constructor:function(config){

        if(!config){ config = {} };
        Ext.apply(config,{
            layout:"vbox",
            items:[{
                xtype:"button",
                text:"Reset",
                handler:function(){
                    this.controlMovie("set", 0);
                },
                scope:this,
                flex:1
            },{
                xtype:"button",
                text:"Previous 10 seconds",
                handler:function(){
                    this.controlMovie("behind", 10);
                },
                scope:this,
                flex:1
            },{
                xtype:"button",
                text:"Next 10 seconds",
                handler:function(){
                    this.controlMovie("ahead", 10);
                },
                scope:this,
                flex:1
            }]
        })
       
        this.callParent([config]);
    },
    controlMovie:function(direction, time){
        this.fireEvent("moveposition", direction, time);
    }
})