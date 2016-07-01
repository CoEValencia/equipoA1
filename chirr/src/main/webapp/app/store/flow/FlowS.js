Ext.define('App.store.flow.FlowS',{
    extend:'Fwk.data.Store',
    requires:['App.model.flow.FlowM'],
    model:'App.model.flow.FlowM',
    alias:'store.flow',
    autoLoad:false,
    remoteSort : true,
    proxy:{
        type: 'fwkajax',
        paramsAsJson:true,
        url:App.bo['flowFind'].url,   
        reader: {
            type:'json',
            rootProperty:'data'
        }
    }
});