Ext.define('App.BusinessOperations', {
    singleton:true
}, function() {

    Fwk.BO.register({
        'streamGet' : {url: 'bo/STREAM_GET' + Fwk.config.fwkBOPathSuffix},
        'streamFind' : {url: 'bo/STREAM_FIND' + Fwk.config.fwkBOPathSuffix},
        'streamUpdate' : {url: 'bo/STREAM_UPDATE' + Fwk.config.fwkBOPathSuffix},
        'streamDelete' : {url: 'bo/STREAM_DELETE' + Fwk.config.fwkBOPathSuffix},
        'flowGet' : {url: 'bo/FLOW_GET' + Fwk.config.fwkBOPathSuffix},
        'flowFind' : {url: 'bo/FLOW_FIND' + Fwk.config.fwkBOPathSuffix},
        'flowUpdate' : {url: 'bo/FLOW_UPDATE' + Fwk.config.fwkBOPathSuffix},
        'flowDelete' : {url: 'bo/FLOW_DELETE' + Fwk.config.fwkBOPathSuffix},
        'messageGet' : {url: 'bo/MESSAGE_GET' + Fwk.config.fwkBOPathSuffix},
        'messageFind' : {url: 'bo/MESSAGE_FIND' + Fwk.config.fwkBOPathSuffix},
        'messageUpdate' : {url: 'bo/MESSAGE_UPDATE' + Fwk.config.fwkBOPathSuffix},
        'messageDelete' : {url: 'bo/MESSAGE_DELETE' + Fwk.config.fwkBOPathSuffix},
    });

});

