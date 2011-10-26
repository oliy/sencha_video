
Ext.define('A.view.FrameListContainer', {
	extend : 'Ext.panel.Panel',
	alias : ['widget.frame-list-container'],
	requires : [
	    'A.view.FrameList'
	],
	autoScroll : true,
	
	initComponent : function() {
		var me = this;
		
		this.setHeight(90);
		this.frameList = Ext.create('A.view.FrameList', {});
		this.items = [this.frameList];	
		this.callParent(arguments);
		

	}
	
});