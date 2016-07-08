Ext.define('App.view.message.MessageListController', {
    extend:'Fwk.app.ViewController',
    alias: 'controller.messagelist',

    init : function() {
        this.control({
            'messagelist': {
                afterrender: this.loadData,
                addInputMessage: this.addInputMessage
            }
        });

        this.callParent(arguments);
    },
    
    addInputMessage: function(content) {
        var dataview = this.lookupReference('messagedataview');
        
        var message = {
                user:    Fwk.Security.userInfo,
                //TODO el flow habrá que cogerlo del componente
                flow:    {id: 1},
                content: content,
                time:    new Date(),
                id:      null
        };
       
        message.user.color = 3;
        
        //TODO guardar mensaje en BD
        App.bo['messageUpdate']({
            jsonData: message,
            success: function(result, options) {
                
            }
        });

        dataview.getStore().add(message);        
        dataview.refresh();
        this.scrollToBottom();

    },
    
    scrollToBottom: function() {
        var dataview = this.lookupReference('messagedataview');
        dataview.el.scroll('b', Infinity, true);        
    },  
    
    loadData: function() {
        var me = this;
        var dataview = this.lookupReference('messagedataview');
        var store = dataview.getStore();
        
        App.bo['messageFind']({
            jsonData: {},
            success: function(result, options) {
                
                if (result.length) {                
                    store.loadData(result);
                    me.lastMessage = result[result.length-1].time;
                    dataview.refresh();
                    me.scrollToBottom();
                } else {
                    me.lastMessage = new Date();
                }
            
                me.startTask();
                
            }
        });
    },
    
    startTask: function(){
        
        var me = this;
        var dataview = this.lookupReference('messagedataview');
        var store = dataview.getStore();
        
        var runner = new Ext.util.TaskRunner(),
        task = runner.start({
             run: function(){ 
                 App.bo['messageFind']({
                     jsonData: {
                         user: Fwk.Security.userInfo,
                         lastMessage: me.lastMessage
                     },
                     success: function(result, options) {
                         
                         if (result.length) {
                             store.add(result);
                             dataview.refresh();
                             me.lastMessage = result[result.length-1].time;
                             me.scrollToBottom();
                         } 
                         
                     }
                 });
             },
             interval: 5000
        }); 
    },
    
});