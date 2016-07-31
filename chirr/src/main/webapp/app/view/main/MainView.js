Ext.define('App.view.main.MainView', {
    extend : 'Ext.container.Container',
    alias : 'widget.mainview',
    requires:['App.view.main.MainViewController'],
    controller: 'mainview',
    
    layout:'border',
    
    initComponent : function(){

        Ext.apply(this, {
            items:[this.getFlowList(), this.getChat()]
        });

        this.callParent(arguments);
    },
    
    getFlowList: function() {
        return {
            xtype:'flowlist',
            reference:'flowlist',
            width: 390,
            region: 'west',
            collapsible: true,
            listeners: {
                flowSelect: 'onFlowSelect'
            }
        };
    },
    
    getChat: function() {
        return {
            xtype: 'chat',
            reference: 'chat',
            //flex: 1
            region: 'center'
        };
    }
});
