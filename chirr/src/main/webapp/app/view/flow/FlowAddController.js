Ext.define('App.view.flow.FlowAddController', {
    extend:'Fwk.app.ViewController',
    alias: 'controller.flowadd',

    init : function() {
        this.control({
            'flowadd': {
                
            }
        });

        this.callParent(arguments);
    },
    
    addFlow: function(btn) {
        var me = this,
        view = this.getView();

        if (view.isValid()) {
            var params = view.getValues();
            view.parentView.addFlow(params.name);
        }

    }
    
});