Ext.define('App.view.message.MessageList', {
    extend:'Ext.panel.Panel',
    alias:'widget.messagelist',
    
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    
    border:true,
    
    initComponent : function(){

        Ext.apply(this, {
            items : [this.getList()]
        });

        this.callParent(arguments);
    },
    
    getList: function() {
        return {
            xtype:'message',
            reference:'messagelist',
            flex:1,
            //store: Ext.create('App.store.producto.ProductoS', {name:'storeproducto_'+Math.random()}),
            autoScroll: true
        };
        
    }
    
});