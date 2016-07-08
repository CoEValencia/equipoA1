Ext.define('App.view.flow.FlowList', {
    extend:'Ext.container.Container',
    alias:'widget.flowlist',
//    requires:['App.view.flow.FlowListController'],
//    controller: 'flowlist',
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
            store: this.getStore(),
            hideHeaders: true,
            rowLines: false,
            plugins: {
                ptype: 'cellediting',
                clicksToEdit: 1
            },
            columns: [{
                header: 'Content',
                dataIndex:'name',
                editor: {
                    xtype: 'textfield'
                },
                flex:1
            },{
                header: 'Edit',
                xtype: 'widgetcolumn',
                width: 50,                
                widget: {
                    xtype: 'button',
                    ui: 'icon-only',
                    iconCls: 'fa fa-pencil'
                }
            }]
        };
    },
    
    getList: function() {
        return {
            xtype:'message',
            reference:'messagedataview',
            flex:1,
            store: Fwk.createStore('messagechat'),
            //store: this.getStore(),
            scrollable: true
        };

    },

    getStore: function() {
        return Ext.create('Ext.data.Store', {
            model: 'App.model.flow.FlowM',
            data: [
                   {
                       name: 'Main flow',
                   },{
                       name: 'Flow nº2'
                   }
                   ]
        });
    }

});