Ext.define('A.views.FrameList', {
	extend : 'Ext.view.View',
	alias : ['widget.frame-list'],   
    itemSelector: 'div.thumb-wrap',
    emptyText: 'No images available',
    cls : 'horizontal-frame-list',
    initComponent : function() {
    	this.tpl = new Ext.XTemplate(
        	    '<tpl for=".">',
                '<div data-frame="{frameNumber}" class="thumb-wrap">',
                  '<img src="{img_src}" />',
                '</div>',
            '</tpl>',
            {
            }
        );
    	
    	this.store = Ext.create('A.stores.FrameStore', {});
    	//TODO figure out how to calculate this
    	var img_width = 75;
    	
    	this.setWidth(this.store.getCount() * img_width);
    	
    	this.callParent(arguments);
    }
});




