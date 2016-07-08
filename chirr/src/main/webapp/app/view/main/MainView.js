Ext.define('App.view.main.MainView', {
    extend : 'Ext.container.Container',
    alias : 'widget.mainview',
//    requires:['App.view.main.MainViewController'],
//    controller: 'mainview',
    
    layout:{
        type:'hbox',
        align : 'stretch'
    },
    
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
            width: 300
        };
    },
    
    getChat: function() {
        return {
            xtype: 'chat',
            flex: 1
        };
    }
});
