Ext.define('App.view.login.LoginController',{
    extend:'Fwk.app.ViewController',
    alias: 'controller.login',
    init:function(){
        this.control({
            'login field' : {
                specialkey: Fwk.Key.specialKey(this.doLogin, this)
            },
            'login' : {
                afterrender: this.setFocus,
                securityloginsuccess: this.loginSuccess,
                securityloginfailure: this.loginFailure
            }
        });

    },

    doLogin: function(btn) {
        this.fwkMask = Fwk.Page.showMask();

        Fwk.Security.validateCredentials(this.lookupReference('fwkLoginForm').getValues());
    },

    loginSuccess: function() {
        var imgLogo = Ext.get('fwkLogoDevon');

        if (imgLogo) {
            imgLogo.hide();
        }

        Fwk.Page.hideMask(this.fwkMask);
    },

    loginFailure: function(response) {
        Fwk.Page.hideMask(this.fwkMask);

        var message, error;

        if(response && response.responseText){
            try{
                error = Ext.decode(response.responseText);
            }catch(e){
                error = null;
            }
        }
        
        if (error && error.errorMessage) {
            message = error.errorMessage;
        } else {
            message = i18n.login.error;
        }
        Fwk.Msg.error(message);
    },

    setFocus : function(){
        this.lookupReference('username').focus();
    }

});