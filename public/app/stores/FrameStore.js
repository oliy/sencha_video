Ext.define('A.stores.FrameStore', {
	extend : 'Ext.data.Store',
    storeId : 'frameStore',
    model: 'A.models.Frame',
    //TODO loadFrames
    data: (function() {
    	var data = [];
    	var displayNum = '';
    	var len;
    	var addZeros;
    	for( var i = 1; i <= 73; i++ ) {
    		displayNum = i.toString();
    		len = displayNum.length;
    		if((4-len) > 0)
    			addZeros = new Array( 5-len ).join( 0 );
    		else
    			addZeros = '';
    		displayNum = addZeros + displayNum;
    		data.push({
    				img_src : "thumbs/foo-"+ displayNum + ".jpg",
    				frameNumber : i * 100
    		});
    	}
    	console.log(data);
    	return data;
    	
    })()
        
});