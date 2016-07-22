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

    getStore: function() {
        return Ext.create('Ext.data.Store', {
            model: 'App.model.message.MessageM',
            data: [
                   {
                       user: {
                           username: 'Pepe',
                           color: 1
                       },
                       content: 'Lorem fistrum no te digo trigo por no llamarte Rodrigor de la pradera caballo blanco caballo negroorl.',
                       time: '2016-07-02T14:01:17.346Z'
                   },{
                       user: {
                           username: 'Popi',
                           color: 2
                       },
                       content: 'Papaar papaar benemeritaar pecador.',
                       time: '2016-07-02T14:03:39.782Z'
                   }
                   ]
        });
    }

});