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
    
    loadFlow: function(flow) {
        this.flow = flow;
        this.lookupReference('messagelist').loadFlow(flow.id);
        this.lookupReference('flowname').setHtml(flow.name);
        this.clearSearchField();
    },
    
    onSearch: function(field, value) {
        this.lookupReference('messagelist').search(value);
        this.lookupReference('searchlabel').setHtml('searching <span class="term">' + value + '</span>');
    },
    
    onSearchChange: function(field, newvalue) {
        if (Ext.isEmpty(newvalue)) {
            this.lookupReference('searchlabel').setHtml(null);
            this.lookupReference('messagelist').clearSearch();
        }
    },
    
    clearSearchField: function() {
        var searchfield = this.lookupReference('searchfield');

        this.lookupReference('searchlabel').setHtml(null);
        
        searchfield.suspendEvent('change');
        searchfield.reset();
        searchfield.resumeEvent('change');
    }
    
});