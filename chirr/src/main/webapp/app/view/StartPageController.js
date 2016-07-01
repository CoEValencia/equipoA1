Ext.define('App.view.StartPageController', {
    extend: Fwk.app.ViewController ,
    alias: 'controller.startpage',
    
    init : function() {
        this.control({
            'startpage': {
                afterrender: this.addItems
            }
        });
        this.callParent(arguments);
    },
    
    ping: function(){        
        var runner = new Ext.util.TaskRunner(),
        task = runner.start({
             run: function(){ 
                 App.bo['ping']({
                     jsonData: {},
                     success: function(result, options) {

                     }
                 });
             },
             interval: 60000
        });
    },
    
    addItems: function(view){
        var me = this;
        
        view.add({
            xtype: 'portal'
        });
        view.updateLayout();
    }  
});