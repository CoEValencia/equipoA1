Ext.define('App.view.portal.PersonaSinAsignar', {
    extend:'Ext.container.Container',
    alias:'widget.personasinasignar',
    requires: ['App.view.portal.PersonaSinAsignarController'],
    controller: 'personasinasignar',
    border : false,

    xtype:'personasinasignar',
    
    statics: {
        fwkSingleView: true
    },
    
    layout: {type: 'vbox', align: 'stretch'},
    defaults: {margin: 5},

    initComponent:function(){

        Ext.apply(this, {
            items: [
                    this.getTable()
            ]
        });

        this.callParent(arguments);
    },
    
    getTable: function() {
        return {
            xtype:'fwkgrid',
                reference: 'resultadosGridPersonaSinAsign',
                selModel: new Ext.selection.RowModel({
                    mode:'SINGLE',
                    allowDeselect:true
                }),
                store: Fwk.createStore('flow'),
                flex: 1,
                columns: [{
                    header: 'Name',
                    dataIndex: 'name',
                    flex:1
                },{
                    header: 'Owner',
                    dataIndex: 'owner',
                    flex:1,
                    renderer: 'onOwnerRender'
                }]
           
        };
    }

});