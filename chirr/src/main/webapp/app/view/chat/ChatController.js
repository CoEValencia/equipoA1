Ext.define('App.view.chat.ChatController', {
    extend:'Fwk.app.ViewController',
    alias: 'controller.chat',

    init : function() {
        this.control({
            'chat': {
                //afterrender: this.loadDatos
                loadFlow: this.loadFlow
            }
        });

        this.callParent(arguments);
    },
    
    messageSent: function(messageInput, content) {
        this.lookupReference('messagelist').addMessage(content);
    },
    
    loadFlow: function(flowId) {
        this.lookupReference('messagelist').loadFlow(flowId);
    }
    
});