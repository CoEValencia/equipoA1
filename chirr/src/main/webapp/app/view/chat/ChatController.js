Ext.define('App.view.chat.ChatController', {
    extend:'Fwk.app.ViewController',
    alias: 'controller.chat',

    init : function() {
        this.control({
            'chat': {
                //afterrender: this.loadDatos
            }
        });

        this.callParent(arguments);
    },
    
    messageSent: function(messageInput, content) {
        this.lookupReference('messagelist').addMessage(content);
    }
    
});