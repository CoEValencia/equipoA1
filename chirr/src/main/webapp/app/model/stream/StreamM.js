Ext.define('App.model.stream.StreamM',{
    extend:'Fwk.data.Model',
    idProperty: 'id',
    fields:[
            {
                name:'id',
                type:'auto'
            },
            {
                name:'name',
                type:'string'
            },
            {
                name:'owner',
                type:'auto'
            }
            ]
});