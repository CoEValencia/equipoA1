
Fwk.app.Application.application({
    title : '**chirr',
//Sobreescrir si se requiere
    //fwkBOPathSuffix:'.wbo',
    useSecurity:true,
    multiTabs:false,
    startPageView: 'App.view.StartPageJaime',
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
           'App.view.StartPageJaime',
           'App.view.portal.Portal',
           'App.view.portal.SpadeFavorito',
           'App.view.portal.PersonaSinAsignar',
           'App.view.portal.DatosEquipo',
           'App.view.flow.FlowList',
           'App.view.chat.Chat',
           'App.view.main.MainView',
           'App.view.message.Message',
           'App.view.message.MessageList',
           'App.view.message.MessageInput'
           ]
});

Fwk.createStore = function(name) {
    if (!Fwk.sequenceStore) Fwk.sequenceStore = 0;
    Fwk.sequenceStore++;
    
    return Ext.create('store.'+name, {name: 'store.'+name+'.'+Fwk.sequenceStore});
};

Fwk.stringToColour = function(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
};