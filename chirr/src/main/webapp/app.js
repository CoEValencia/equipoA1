
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

    models:[
            'App.model.stream.StreamM',
            'App.model.flow.FlowM',
            'App.model.message.MessageM'
            ],
    stores:[
            'App.store.stream.StreamS',
            'App.store.flow.FlowS',
            'App.store.message.MessageS',
            'App.store.message.MessageChatS'
            ],
    views:[
           'login.Login',
           'App.view.portal.Portal',
           'App.view.portal.SpadeFavorito',
           'App.view.portal.PersonaSinAsignar',
           'App.view.portal.DatosEquipo',
           ]
});

Fwk.createStore = function(name) {
    if (!Fwk.sequenceStore) Fwk.sequenceStore = 0;
    Fwk.sequenceStore++;
    
    return Ext.create('store.'+name, {name: 'store.'+name+'.'+Fwk.sequenceStore});
};
