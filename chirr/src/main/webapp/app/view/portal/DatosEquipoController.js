Ext.define('App.view.portal.DatosEquipoController', {
    extend:'Fwk.app.ViewController',
    alias: 'controller.datosequipo',
    
    init : function() {
        this.control({
            'datosequipo': {
                afterrender: this.delayedDoSearch,
                doSearch: this.delayedDoSearch
            }
        });
        this.callParent(arguments);
    },
    
    delayedDoSearch: function(){
        Ext.Function.defer(this.doSearch, 1, this);
    },
    
    startTask: function(){
        
        var me = this;
        var grid = this.lookupReference('listadoDatosEquipoGrid');
        var store = grid.getStore();
        store.removeAll();
        
        var runner = new Ext.util.TaskRunner(),
        task = runner.start({
             run: function(){ 
                 App.bo['messageFind']({
                     jsonData: {},
                     success: function(result, options) {
                         store.add(result);
                     }
                 });
             },
             interval: 5000
        }); 
    },
    
    doSearch: function(btn){
        var me = this;
        var grid = this.lookupReference('listadoDatosEquipoGrid');
        var store = grid.getStore();
        
        var params = {};
                
        store.loadPage(1,{
            params : params
        });
        
        this.startTask();
    },
    
    doClean: function(btn){
        var grid = this.lookupReference('listadoDatosEquipoGrid');
        grid.getStore().removeAll();
    }, 
    
    onUserRender: function(value, metaData){
        return '<span data-qtip="' + metaData.record.get('user').username + '">'+metaData.record.get('user').apellido1 + ', '+value.nombre+'</span>';
    },
    
    onFlowRender: function(value, metaData){
        return '<span>'+value.name+'</span>';
    },
});