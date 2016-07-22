Ext.define('App.view.message.MessageListController', {
    extend:'Fwk.app.ViewController',
    alias: 'controller.messagelist',

    init : function() {
        this.control({
            'messagelist': {
                addInputMessage: this.addInputMessage,
                loadFlow: this.loadFlow
            }
        });

        this.callParent(arguments);
    },
    
    addInputMessage: function(content) {
        var dataview = this.lookupReference('messagedataview');
        
        var message = {
                user:    Fwk.Security.userInfo,
                //TODO el flow habrá que cogerlo del componente
                flow:    {id: this.flowId},
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
    
    loadFlow: function(flowId) {
        var me = this;
        var dataview = this.lookupReference('messagedataview');
        var store = dataview.getStore();
        
        if (me.task) me.task.stop();
        
        me.lastMessage = new Date();
        me.flowId = flowId;

        var params = {
            flow: {
                id: flowId
            }
        };

        store.load({
            params: params,
            callback: function(records, operation, success) {
                if (success && records.length > 0) {
                    me.lastMessage = records[records.length-1].data.time;
                    
                    dataview.refresh();
                    me.scrollToBottom(false);

                    if (me.task) {
                        me.task.start();
                    }
                    else {
                        me.createTask();
                    }
                }
            }
        });
        
        /*
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
        */
    },
    
    scrollToBottom: function(animate) {
        var dataview = this.lookupReference('messagedataview');
        animate = typeof animate !== 'undefined' ? animate : true;
        dataview.el.scroll('b', Infinity, animate);        
    },  

    createTask: function(){
        
        var me = this;
        var dataview = this.lookupReference('messagedataview');
        var store = dataview.getStore();
        
        var runner = new Ext.util.TaskRunner();
        me.task = runner.newTask({
             run: function(){
                 var params = {
                         user: Fwk.Security.userInfo,
                         lastMessage: me.lastMessage,
                         flow: {
                             id: me.flowId
                         }
                 };

                 App.bo['messageFind']({
                     jsonData: params,  
                     success: function(result, options) {
                         
                         if (result.length) {
                             store.add(result);
                             dataview.refresh();
                             me.lastMessage = result[result.length-1].time;
                             me.scrollToBottom();
                         } 
                         
                     }
                 });
                 
                 /*
                 store.load({
                     params: params,
                     addRecords: true
                 });
                 */
             },
             interval: 5000
        });
        
        me.task.start();
    },
    
});