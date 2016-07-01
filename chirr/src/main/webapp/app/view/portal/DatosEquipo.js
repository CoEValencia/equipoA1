Ext.define('App.view.portal.DatosEquipo', {
    extend: 'Ext.container.Container',
    alias:'widget.datosequipo',
    
    requires:['App.view.portal.DatosEquipoController'],              
    controller:'datosequipo',   
    
    xtype: 'datosequipo',
    
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
            border: false,
                reference:'listadoDatosEquipoGrid',
                selModel: new Ext.selection.RowModel({
                    mode:'SINGLE',
                    allowDeselect:true
                }),
                flex:1,
                border:false,
                store: Fwk.createStore('messagechat'),
                columns: [{
                    header: 'Content',
                    dataIndex:'content',
                    flex:1
                },{
                    header: 'User',
                    dataIndex:'user',
                    flex:1,
                    renderer: 'onUserRender'
                },{
                    header: 'Flow',
                    dataIndex:'flow',
                    flex:1,
                    renderer: 'onFlowRender'
                },{
                    xtype: 'datecolumn',
                    header: 'time',
                    dataIndex: 'time',
                    flex: 1,
                    format:'d/m/Y'
                }]
        };
    }
});