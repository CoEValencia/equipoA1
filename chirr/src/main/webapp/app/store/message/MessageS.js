Ext.define('App.store.message.MessageS',{
    extend:'Fwk.data.Store',
    requires:['App.model.message.MessageM'],
    model:'App.model.message.MessageM',
    alias:'store.message',
    autoLoad:false,
    remoteSort : true,
    proxy:{
        type: 'fwkajax',
        paramsAsJson:true,
        url:App.bo['messageFind'].url,   
        reader: {
            type:'json',
            rootProperty:'data'
        }
    }
});