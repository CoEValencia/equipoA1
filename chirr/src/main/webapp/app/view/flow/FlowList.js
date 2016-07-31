Ext.define('App.view.flow.FlowList', {
    extend:'Ext.panel.Panel',
    alias:'widget.flowlist',
    requires:['App.view.flow.FlowListController'],
    controller: 'flowlist',
    ui: 'dark',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    defaults: {margin: 20},
    headerPosition: 'bottom',
    titleCollapse: true,
    
    initComponent : function(){

        Ext.apply(this, {
            items : [this.getFields(), this.getGrid()]
        });

        this.callParent(arguments);
    },
    
    getFields: function() {
        return {
            xtype: 'container',
            layout: 'hbox',
            margin: '20 20 0 20',
            items: [{
                xtype: 'searchfield',
                iconCls: 'fa fa-pencil',
                emptyText: 'Search flow...',
                flex: 1,
                listeners: {
                    search: 'onSearch',
                    change:  'onSearchChange'
                }
            },{
                xtype: 'button',
                ui: 'icon-only-large-alt',
                iconCls: 'fa fa-plus',
                margin: '0 0 0 10',
                listeners: {
                    click: 'showFlowAdd'
                }
            }]
        };
    },

    getGrid: function() {
        return {
            xtype: 'grid',
            reference: 'grid',
            ui: 'dark',
            store: Fwk.createStore('flow'),
            //border: true,
            hideHeaders: true,
            rowLines: false,
            flex: 1,
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
            viewConfig: {
                stripeRows: false,
                loadMask: false
            },
            columns: [{
                header: 'Content',
                dataIndex:'name',
                flex:1,
                editor: {
                    xtype: 'textfield'
                },
                renderer: function(value, metaData, record) {
                    var unread = record.get('unread'),
                    selection = metaData.column.up('grid').getSelection()[0],
                    cls = 'unread-msgs-tag';
                    
                    if ( unread === 0 || (selection && selection.id === record.id) ) {
                        cls += ' hidden';
                    }
                    return value + '<span class="'+ cls +'">' + unread + '</span>';
                }
            },{
                header: 'Edit',
                xtype: 'widgetcolumn',
                width: 24,
                widget: {
                    xtype: 'button',
                    padding: 0,
                    ui: 'icon-only',
                    iconCls: 'fa fa-pencil',
                    handler: 'onEditClick'
                }
            }]
        };
    },
    
    addFlow: function(flowName) {
        this.fireEvent('addFlow', flowName);
    }

});