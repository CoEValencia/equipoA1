Ext.define('App.view.main.MainViewController', {
    extend:'Fwk.app.ViewController',
    alias: 'controller.mainview',

    init : function() {
        this.control({
            'mainview': {
                //afterrender: this.loadDatos
            }
        });

        this.callParent(arguments);
    },
    
    onFlowSelect: function(flowlist, flowId) {
        this.lookupReference('chat').loadFlow(flowId);
    } 
    
});