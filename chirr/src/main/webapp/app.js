
Fwk.app.Application.application({
    title : '**chirr',
//Sobreescrir si se requiere
    //fwkBOPathSuffix:'.wbo',
    useSecurity:true,
    multiTabs:false,
    fwkLogin: {
        //view: 'Fwk.view.login.Login',
        view: 'App.view.login.Login',
        loginUrl: 'j_spring_security_check',
        //webpropertiesUrl: 'webproperties/list + Fwk.config.fwkBOPathSuffix'
        webpropertiesUrl: 'webproperties/list'
    },
    requires : [
        'App.I18n',
        'App.BusinessOperations'
    ],

    models:[],
    stores:[
            'message.MessageController'
            ],
    views:[
           'login.Login',
           'message.Message',
           'message.MessageList'
           ]
});

Fwk.createStore = function(name) {
    if (!Fwk.sequenceStore) Fwk.sequenceStore = 0;
    Fwk.sequenceStore++;
    
    return Ext.create('store.'+name, {name: 'store.'+name+'.'+Fwk.sequenceStore});
}; 