Ext.define('App.view.portal.SpadeFavorito', {
    extend: 'Ext.container.Container',
    alias:'widget.spadefavorito',
    
    requires: ['App.view.portal.SpadeFavoritoController'],
    controller:'spadefavorito',
    
    xtype: 'spadefavorito',
    
    statics:{
        fwkSingleView:true
    },

    layout: {type: 'vbox', align: 'stretch'},
    defaults: {margin: 5},

    initComponent : function(){
        Ext.apply(this, {
            items : [
                this.getTable()
            ]
        });
        this.callParent(arguments);
    },
    
    getTable:function(){
        return {
            xtype:'fwkgrid',
                reference:'listadospadeGridFavoritos',
                selModel: new Ext.selection.RowModel({
                    mode:'SINGLE',
                    allowDeselect:true
                }),
                flex:1,
                border:false,
                store: Fwk.createStore('stream'),
                columns: [{header:'Name', dataIndex:'name', flex: 1},
                          {header:'Owner', dataIndex:'owner', flex: 1, renderer: 'onOwnerRender'},
                ]           
        };
    }
});
