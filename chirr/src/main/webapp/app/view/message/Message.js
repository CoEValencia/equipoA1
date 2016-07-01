Ext.define('App.view.message.Message', {
    extend: 'Ext.view.View',
    alias:'widget.message',
    requires:['App.view.message.MessageController'],
    controller: 'message',

    tpl: new Ext.XTemplate(
        '<tpl for=".">',
      
        '</tpl>',
        {
            parteEntera: function(value){
                return Math.floor(value);
            },
            parteDecimal: function(value){
                var decimals = Math.pow(10,2);

                var fracPart = (value % 1)*decimals;
                fracPart = fracPart.toFixed(0);

                return fracPart;
            },
            getCodigo: function(){
                return Fwk.Security.userInfo.centroCanarias;
            },
            getImage: function(datos){
                var image = datos.xLargeImageURL ? datos.xLargeImageURL : 
                    (datos.largeImageURL ? datos.largeImageURL :
                        (datos.bigImageURL ? datos.bigImageURL : datos.mediumImageURL));
                return App.Utils.getImgURL(image); 
            },
            formatStockAlmacen: function(value) {
                return value > 0 ? value : 0;
            }
        }
    ),
    itemSelector: 'div.contenedorProducto',
    emptyText: 'No images available',
    loadMask:false
        
});
