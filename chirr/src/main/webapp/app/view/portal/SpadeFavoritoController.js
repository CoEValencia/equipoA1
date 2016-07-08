Ext.define('App.view.portal.SpadeFavoritoController', {
    extend: 'Fwk.app.ViewController',
    alias: 'controller.spadefavorito',

    init : function() {
        this.control({
            'spadefavorito': {
                afterrender: this.delayedDoSearch,
                doSearch: this.delayedDoSearch,
            }
        });
        this.callParent(arguments);
    },
    
    delayedDoSearch: function(){
        Ext.Function.defer(this.doSearch, 1, this);
    },
    
    doSearch: function(btn){
        var grid = this.lookupReference('listadospadeGridFavoritos');
        var store = grid.getStore();
        
        var params = {};
        
        store.loadPage(1,{
            params : params
        });
    },
    
    onOwnerRender: function(value, metaData){
        return '<span data-qtip="' + metaData.record.get('owner').username + '">'+metaData.record.get('owner').apellido1 + ', '+value.nombre+'</span>';
    },
});