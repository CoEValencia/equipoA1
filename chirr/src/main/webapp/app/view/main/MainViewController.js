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
    
    onFlowSelect: function(flowlist, flow) {
        this.lookupReference('chat').loadFlow(flow);
    } 
    
});