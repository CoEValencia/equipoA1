Ext.define('App.store.stream.StreamS',{
    extend:'Fwk.data.Store',
    requires:['App.model.stream.StreamM'],
    model:'App.model.stream.StreamM',
    alias:'store.stream',
    autoLoad:false,
    remoteSort : true,
    proxy:{
        type: 'fwkajax',
        paramsAsJson:true,
        url:App.bo['streamFind'].url,   
        reader: {
            type:'json',
            rootProperty:'data'
        }
    }
});