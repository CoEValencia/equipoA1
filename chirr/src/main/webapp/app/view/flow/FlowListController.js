Ext.define('App.view.flow.FlowListController', {
    extend:'Fwk.app.ViewController',
    alias: 'controller.flowlist',

    init : function() {
        this.control({
            'flowlist': {
                afterrender: this.loadData,
                addFlow: this.addFlow
            }
        });

        this.callParent(arguments);
    },
    
    loadData: function() {
        var me = this;
        var grid = this.lookupReference('grid');
        var store = grid.getStore();
        
        me.controlDate = new Date();
        
        var params = {
                //TODO setear el id de Stream que toque al entrar
                stream: {
                    id: 1
                },
                //TODO setear la fecha de la ultima vez que se estuvo en la app ¿?
                lastMessage: me.controlDate
        };
        
        store.load({
            params: params,
            callback: function(records, operation, success) {
                if (success) {
                    
                    if (me.task)
                        me.task.start();
                    else
                        me.createTask();
                }
            }
        });

    },
    
    onViewReady: function(grid) {
        grid.selModel.doSelect(grid.store.data.items[0]);
    },
    
    onSelect: function(grid, record, index) {
        var view = this.getView();

        this.controlDate = new Date();
        
        view.fireEvent('flowSelect', view, record.getData());
    },
    
    //Para evitar que se active el editor al hacer clic
    onBeforeEdit: function(editor, context) {
        if (!this.editingFlow) {
            return false;
        }
        this.editingFlow = false;
    },
    
    onEdit: function(editor, context) {
        var record = context.record;

        if (record.dirty) {
            
            record.commit();

            var params = record.data;
            App.bo['flowUpdate']({
                jsonData: params 
            });
            
            this.startTask();
        }
    },
    
    onEditClick: function(btn) {
        var plugin = btn.up('grid').getPlugin('cellediting');
        var index = btn.up().indexOfRow(btn.getWidgetRecord());

        this.stopTask();
        this.editingFlow = true;
        plugin.startEdit(index, 0);
    },
    
    createTask: function(){
        
        var me = this;
        var grid = this.lookupReference('grid');
        var store = grid.getStore();
        
        var runner = new Ext.util.TaskRunner();
        me.task = runner.newTask({
             run: function(){
                 
                 var params = {
                         //TODO setear el id de Stream que toque al entrar
                         stream: {
                             id: 1
                         },
                         //TODO setear la fecha de la ultima vez que se estuvo en la app ¿?
                         lastMessage: me.controlDate
                 };
                 
                 store.load({
                     params: params,
                     callback: function(records, operation, success) {
                     }
                 });
                 
             },
             interval: 5000
        });
        
        me.task.start();
    },
    
    
    startTask: function() {
        if (this.task) {
            this.task.start();
        }
    },
    
    stopTask: function() {
        if (this.task) {
            this.task.stop();
        }
    },
    
    
    showFlowAdd: function() {
        
        var panel = Ext.create('App.view.flow.FlowAdd', {
            parentView: this.getView()
        });

        this.flowAddWindow = Fwk.Window.create({
            parentView : this.getView(),
            panel: panel,
            options: {
                title: 'New Flow',
                closable: true,
                dragabble: true,
                width: 510
            }
        });
        
        this.flowAddWindow.show();
        
    },
    
    addFlow: function(flowName) {
        var me = this;
        var grid = this.lookupReference('grid');
        var store = grid.getStore();
        
        
        var flow = {
                name: flowName,
                ownerId: Fwk.Security.userInfo.id,
                streamId: 1
        };

        me.flowAddWindow.setLoading();
        App.bo['flowUpdate']({
            jsonData: flow,
            success: function(result, options) {
                me.flowAddWindow.setLoading(false);
                me.flowAddWindow.close();
            }
            
        });

        store.add(flow);
    },
    
    onSearch: function(field, value) {
        var me = this;
        var grid = this.lookupReference('grid');
        var store = grid.getStore();
        
        me.stopTask();
        
        var params = {
                stream: {
                    id: 1
                },
                name: value
        };
        
        App.bo['flowFindWithCount']({
            jsonData: params,  
            success: function(result, options) {
                
                if (result.length) {
                    store.setData(result);
                } 
                
            }
        });

    },
    
    onSearchChange: function(field, newvalue) {
        if (Ext.isEmpty(newvalue)) {
            this.loadData();
        }
    }
    
});