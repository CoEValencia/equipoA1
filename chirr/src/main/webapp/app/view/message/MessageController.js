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
    },
    
//    openInfoProducto: function(view, record, item, idx, event, opts) {
//        if(record.data.idProduct && record.data.idProduct != null && record.data.idProduct != ""){
//            view.setLoading(true);
//            App.bo['productoGetFicha']({
//                params: record.data,
//                success: function(result, options) {
//                   if(result){
//                       view.setLoading(false);
//                       Fwk.Page.show(Ext.create('App.view.producto.ProductoInfo', {datos: result}), true);
//                       Ext.ComponentQuery.query('fwkmainmenu')[0].fireEvent('addNavigationItem', i18n.producto.titulo, true);
//                   }
//                },
//                failure: function(result,options){
//                    view.setLoading(false);
//                    Ext.ComponentQuery.query('fwkheader')[0].fireEvent('goToDestacados');
//                }
//            });
//        }
//        else{
//            Ext.Msg.show({
//                title: i18n.comun.aviso,
//                message: i18n.producto.errorFicha,
//                buttons: this.OK,
//                closable: false,
//                buttons:Ext.Msg.OK,
//                cls:'alert_msg'
//            });
//        }
//    }

});
