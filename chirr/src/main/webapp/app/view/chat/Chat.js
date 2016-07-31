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
            items:[this.getTitle(), this.getLista(), this.getInput()]
        });

        this.callParent(arguments);
    },
    
    getTitle: function() {
        return {
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'middle'
            },
            cls: 'chat-title-panel',
            height: 80,
            defaults: {margin: 15},
            items: [{
                xtype: 'label',
                reference: 'flowname',
                cls: 'chat-title'
            },{
                xtype: 'label',
                reference: 'searchlabel',
                cls: 'search-label',
                margin: 0
            },{
                xtype: 'tbfill'
            },{
                xtype: 'searchfield',
                reference: 'searchfield',
                emptyText: 'Chat search...',
                width: 254,
                listeners: {
                    search: 'onSearch',
                    change:  'onSearchChange'
                }
            }]
        };
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
    
    loadFlow: function(flow) {
        this.fireEvent('loadFlow', flow);
    }
});
