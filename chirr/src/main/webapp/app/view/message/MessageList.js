Ext.define('App.view.message.MessageList', {
    extend:'Ext.container.Container',
    alias:'widget.messagelist',
    requires:['App.view.message.MessageListController'],
    controller: 'messagelist',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    padding: '0 0 0 15',
    
    initComponent : function(){

        Ext.apply(this, {
            items : [this.getList()]
        });

        this.callParent(arguments);
    },

    
    getLoadButton: function() {
        return {
            xtype: 'button',
            iconCls: 'fa fa-refresh'
        };
    },
    
    getList: function() {
        return {
            xtype:'message',
            reference:'messagedataview',
            flex:1,
            store: Fwk.createStore('message'),
            scrollable: true
        };

    },

    addMessage: function(message) {
        this.fireEvent('addInputMessage', message);
    },
    
    loadFlow: function(flowId) {
        this.fireEvent('loadFlow', flowId);
    },
    
    search: function(value) {
        this.fireEvent('search', value);
    },

    clearSearch: function() {
        this.fireEvent('clearSearch');
    }
});