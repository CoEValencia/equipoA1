Ext.define('App.model.message.MessageM',{
    extend:'Fwk.data.Model',
    idProperty: 'id',
    fields:[
            {
                name:'id',
                type:'auto'
            },
            {
                name:'content',
                type:'string'
            },
            {
                name:'time',
                type:'date',
                dateFormat: 'c'
            },
            {
                name:'user',
                type:'auto'
            },
            {
                name:'flow',
                type:'auto'
            }
            ]
});