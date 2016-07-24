Ext.define('App.view.flow.FlowList', {
    extend:'Ext.container.Container',
    alias:'widget.flowlist',
    requires:['App.view.flow.FlowListController'],
    controller: 'flowlist',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    //padding: '0 0 0 15',
    
    initComponent : function(){

        Ext.apply(this, {
            items : [this.getGrid()]
        });

        this.callParent(arguments);
    },

    getGrid: function() {
        return {
            xtype: 'grid',
            reference: 'grid',
            store: Fwk.createStore('flow'),
            hideHeaders: true,
            rowLines: false,
            selModel: 'rowmodel',
            plugins: {
                ptype: 'cellediting',
                pluginId: 'cellediting',
                listeners: {
                    beforeedit: 'onBeforeEdit',
                    edit: 'onEdit'
                }
            },
            listeners: {
              viewready: 'onViewReady',
              select: 'onSelect'
            },
            columns: [{
                header: 'Content',
                dataIndex:'name',
                editor: {
                    xtype: 'textfield'
                },
                flex:1
            },{
                header: 'Unread',
                dataIndex:'',
                
            },{
                header: 'Edit',
                xtype: 'widgetcolumn',
                width: 50,                
                widget: {
                    xtype: 'button',
                    ui: 'icon-only',
                    iconCls: 'fa fa-pencil',
                    handler: 'onEditClick'
                }
            }]
        };
    }

});