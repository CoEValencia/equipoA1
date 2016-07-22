/**
 * @class Fwk.data.proxy.Ajax
 *
 * Proxy para el envio de las peticiones Ajax.
 *
 * @extends Ext.data.proxy.Ajax
 *
 */

Ext.define('Fwk.data.proxy.Ajax', {
    extend :  Ext.data.proxy.Ajax ,
    alias : 'proxy.fwkajax',
               
                 
                    
      

    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },

    actionMethods: {
        create:'POST',
        read:'POST',
        update:'POST',
        destroy:'POST'
    },

    simpleSortMode : true,

    /**
     * @cfg {String} pageParam Nombre del parametro de paginacion. Por defecto 'start'.
     */
    pageParam: 'start',

    /**
     * @cfg {Objeto}  writer Writer para codificar las peticiones al servidor. Por defecto configurado de tipo JSON.
     */
    writer: {
        type: 'json',
        expandData: true
    },

    /**
     * @cfg {Boolean} allowSingle Envuelve los datos siempre en un array. Por defecto a false.
     */
    allowSingle: false,

    /**
     * @cfg {Boolean} fwkPaginated Activa la paginacion. Si esta activada la paginacion, se configura automaticamente el reader de las respuestas. Por defecto a false.
     */
    fwkPaginated: false,

    /**
     *  @param cfg Objeto con las opciones de configuracion.
     */
    constructor: function(cfg){
        if (cfg.fwkPaginated){
            cfg.reader = {
                type:'json',
                rootProperty: 'data'
            };
        }

        this.callParent([cfg]);
    },


    doRequest: function(operation, callback, scope) {
        var me = this,
        writer  = me.getWriter(),
        request = me.buildRequest(operation),
        method  = me.getMethod(request),
        jsonData, params;

        if (writer && operation.allowWrite()) {
            request = writer.write(request);
        }

        request.setConfig({
            binary              : me.getBinary(),
            headers             : me.getHeaders(),
            timeout             : me.getTimeout(),
            scope               : me,
            callback            : me.createRequestCallback(request, operation, callback, scope),
            method              : method,
            useDefaultXhrHeader : me.getUseDefaultXhrHeader(),
            disableCaching      : false // explicitly set it to false, ServerProxy handles caching
        });

        operation.fwkOpId=Fwk.BO.addRunningOperation(operation);

        Fwk.Log.debug( operation.getRequest().getUrl(), operation);

        if (method.toUpperCase() !== 'GET' && me.getParamsAsJson()) {
            params = request.getParams();

            if (params) {
                jsonData = request.getJsonData();
                if (jsonData) {
                    jsonData = Ext.Object.merge({}, jsonData, params);
                } else {
                    jsonData = params;
                }
                request.setJsonData(jsonData);
                request.setParams(undefined);
                request.setHeaders({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=utf-8'
                });
            }
        }

        if (me.getWithCredentials()) {
            request.setWithCredentials(true);
            request.setUsername(me.getUsername());
            request.setPassword(me.getPassword());
        }

        //Test BO - utility (store requests)
        if (Fwk.config.test === true) {
            var op = request.getUrl().substring(request.getUrl().search('/') + 1, request.getUrl().search(Fwk.config.fwkBOPathSuffix));
            request.setUrl('test/' + op + '.js');
        }

        this.showMask(operation);

        return me.sendRequest(request);
    },

    showMask: function(opts){
//        if (opts.mask){
//            if( opts.mask instanceof Ext.Component){
//                opts.maskInstance = new Ext.LoadMask({target: opts.mask, msg: i18n.mask.loading} );
//                opts.maskInstance.show();
//            }
//        }
//
//        if(!opts.maskInstance){
//            opts.maskInstance = Ext.getBody();
//            opts.maskInstance.mask(i18n.mask.loading);
//            opts.maskEntirePage = true;
//        }
    },

    hideMask: function(opts){
//        if (opts.maskInstance){
//
//            if(opts.maskEntirePage){
//                opts.maskInstance.unmask();
//                delete opts.maskEntirePage;
//            }else{
//                opts.maskInstance.hide();
//                opts.maskInstance.destroy();
//            }
//            delete opts.maskInstance;
//
//        }
    },

    processResponse: function(success, operation, request, response, callback, scope) {
        operation.fwkResponse=response;
        this.hideMask(operation);
        Fwk.BO.removeRunningOperation(operation);
        this.callParent(arguments);
    }

});