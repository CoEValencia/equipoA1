
Fwk.app.Application.application({
    title : '**chirr',
//Sobreescrir si se requiere
//    fwkBOPathSuffix:'.wbo'
//    useSecurity:true,
//    fwkLogin: {
//        view: 'Fwk.view.login.Login',
//        loginUrl: 'j_spring_security_check',
//        webpropertiesUrl: 'webproperties/list + Fwk.config.fwkBOPathSuffix'
//    },
    requires : [
        'App.I18n',
        'App.BusinessOperations'
    ],

    models:[],
    stores:[],
    views:[]
});

