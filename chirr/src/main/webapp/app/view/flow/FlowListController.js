Ext.define('App.view.flow.FlowListController', {
    extend:'Fwk.app.ViewController',
    alias: 'controller.flowlist',

    init : function() {
        this.control({
            'flowlist': {
                afterrender: this.loadData
            }
        });

        this.callParent(arguments);
    },
    
    scrollToBottom: function() {
        var dataview = this.lookupReference('messagedataview');
        dataview.el.scroll('b', Infinity, true);        
    },  
    
    loadData: function() {
        var me = this;
        var grid = this.lookupReference('grid');
        var store = grid.getStore();
        
        //TODO setear el id de Stream que toque al entrar
        var params = {
                stream: {
                    id: 1
                }
        };
        
        store.load({
            params: params
        });
        
//        App.bo['messageFind']({
//            jsonData: {},
//            success: function(result, options) {
//                
//                if (result.length) {                
//                    store.loadData(result);
//                    me.lastMessage = result[result.length-1].time;
//                    dataview.refresh();
//                    me.scrollToBottom();
//                } else {
//                    me.lastMessage = new Date();
//                }
//            
//                me.startTask();
//                
//            }
//        });
    },
    
    onViewReady: function(grid) {
        grid.selModel.doSelect(grid.store.data.items[0]);
    },
    
    onSelect: function(grid, record, index) {
        var view = this.getView();
        
        view.fireEvent('flowSelect', view, record.get('id'));
    },
    
    //Para evitar que se active el editor al hacer clic
    onBeforeEdit: function(editor, context) {
        //return false;
        if (!this.editingFlow) {
            return false;
        }
        this.editingFlow = false;
    },
    
    onEdit: function(editor, context) {
        var record = context.record;
        
        record.commit();
        
        //TODO actiualizar flow
        var params = record.data;
        App.bo['flowUpdate']({
           jsonData: params 
        });
        
    },
    
    onEditClick: function(btn) {
        var plugin = btn.up('grid').getPlugin('cellediting');
        var index = btn.up().indexOfRow(btn.getWidgetRecord());

        this.editingFlow = true;
        plugin.startEdit(index, 0);
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