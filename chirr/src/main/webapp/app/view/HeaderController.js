Ext.define('App.view.HeaderController', {
    extend:'Fwk.app.ViewController',
    alias: 'controller.fwkheader',

    init : function() {
        this.control({
            'fwkheader': {
                //afterrender: this.loadDatos
            }
        });

        this.callParent(arguments);
    },
    
//    loadDatos: function(){
//        App.bo['getSemanaActual']({
//            success: function(result, options) {
//                if(result)
//                    App.semanaActual = result;
//            }
//        });
//    },

    showProfile: function(btn){
        alert('TODO: Show profile');
    },
    
    doLogout: function(btn){
        Ext.Msg.show({
            title: i18n.logout.title,
            message: i18n.logout.message,
            buttons:Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            closable: false,
            //cls:'alert_msg',
            fn: function(btn) {
                if (btn === 'yes') {
                    Fwk.Security.logout();
                }
            }
        });
    }

});