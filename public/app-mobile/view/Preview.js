Ext.define("M.view.Preview",{
    extend:"Ext.Panel",
    
    constructor:function(config){

        if(!config){ config = {} };


        this.video = Ext.create("Ext.Video",{
            autoResume:true,
            preload:true,
            enableControls:false
        });

        Ext.apply(config, {
            items:this.video
        })
        this.callParent([config]);
    },
    loadVideo:function(url){
        this.video.setUrl(url);
    },
    movePosition:function(direction,time){
        if(direction == "set"){
            this.video.element.dom.firstChild.currentTime = time;
        } else if(direction == "ahead"){
            this.video.element.dom.firstChild.currentTime += time;
        } else {
            this.video.element.dom.firstChild.currentTime -= time;
        }
    }
})