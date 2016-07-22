Ext.define('App.view.chat.Chat', {
	extend : 'Ext.container.Container',
	alias : 'widget.chat',
	requires:['App.view.chat.ChatController'],
    controller: 'chat',
    
	layout:{
		type:'vbox',
		align : 'stretch'
	},
	
	initComponent : function(){

        Ext.apply(this, {
            items:[this.getLista(), this.getInput()]
        });

        this.callParent(arguments);
    },
    
    getLista: function() {
        return {
            xtype:'messagelist',
            reference:'messagelist',
            flex:1
        };
    },
    
    getInput: function() {
        return {
            xtype: 'messageinput',
            listeners: {
                messageSent: 'messageSent'
            }
        };
    },
    
    loadFlow: function(flowId) {
        this.fireEvent('loadFlow', flowId);
    }
});
