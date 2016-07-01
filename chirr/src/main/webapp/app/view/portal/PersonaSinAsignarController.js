Ext.define('App.view.portal.PersonaSinAsignarController', {
    extend:'Fwk.app.ViewController',
    alias:'controller.personasinasignar',
    init : function() {
        this.control({
            'personasinasignar' : {
                afterrender: this.loadData,
                doSearch: this.delayedDoSearch
            }
        });

        this.callParent(arguments);
    },
    
    delayedDoSearch: function(){
        Ext.Function.defer(this.doSearch, 1, this);
    },
    
    loadData: function(view) {
        var me = this;
        
        var grid = this.lookupReference('resultadosGridPersonaSinAsign');
        var gridStore = grid.getStore();
        gridStore.removeAll();
        
        if (gridStore.sorters) {
            gridStore.sorters.clear();
        }
        
        me.delayedDoSearch();
    },    
    
    doClean: function(btn) {
        var me = this;
        var grid = this.lookupReference('resultadosGridPersonaSinAsign');
        var store = grid.getStore();
        
        store.removeAll();
    },
    
    doSearch: function(btn) {
        var me = this;
        var grid = this.lookupReference('resultadosGridPersonaSinAsign');
        var store = grid.getStore();
        
        var params = {};
                
        store.loadPage(1,{
            params: params
        });        
    },
    
    onOwnerRender: function(value, metaData){
        return '<span data-qtip="' + metaData.record.get('owner').username + '">'+metaData.record.get('owner').apellido1 + ', '+value.nombre+'</span>';
    },
});