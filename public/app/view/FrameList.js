Ext.define('A.view.FrameList', {
	extend : 'Ext.view.View',
	alias : ['widget.frame-list'],   
    itemSelector: 'div.thumb-wrap',
    emptyText: 'No images available',
    cls : 'horizontal-frame-list',
    multiSelect : true,
    initComponent : function() {
    	var me = this;
    	
    	this.addEvents('frameSelect');
    	
    	this.tpl = new Ext.XTemplate(
        	    '<tpl for=".">',
                '<div class="thumb-wrap">',
                  '<img src="{img_src}" />',
                '</div>',
            '</tpl>',
            {
            }
        );
    	
    	this.store = Ext.create('A.stores.FrameStore', {});
    	//TODO figure out how to calculate this
    	var img_width = 79;
    	
    	this.setWidth(this.store.getCount() * img_width);
    	
    	this.callParent(arguments);
    	
    	this.on({
    		selectionchange : function(view, selections, eOpts) {
//    			console.log(view);
//    			console.log(selections);
//    			console.log(eOpts);
    			var len = selections.length;
    			var frames = [];
    			
    			
    			for(var i = 0; i < len; i++) {
    				frames.push({frame : selections[i].data.frameNumber});
    			}
    			frames.sort();
    			console.log(frames);
    			
    			if(count(frames) == 1) {
    				IO.Bus.fireEvent('frame',frames[0]);
    			}
    			else 
    				IO.Bus.fireEvent('frame', frames);
    		}
    		
    	});
    },
    
    
});




