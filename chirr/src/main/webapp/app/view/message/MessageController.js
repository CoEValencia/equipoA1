Ext.define('App.view.message.MessageController', {
    extend:'Fwk.app.ViewController',
    alias: 'controller.message',

    init : function() {
        this.control({
            'message'  : {
                //itemclick: this.openInfoProducto
            }
        });

        this.callParent(arguments);
    }

});
