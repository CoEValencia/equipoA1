Ext.define('App.view.login.LoginController',{
    extend:'Fwk.app.ViewController',
    alias: 'controller.login',
    init:function(){
        this.control({
            'login field' : {
                //specialkey: Fwk.Key.specialKey(this.doLogin, this)
                specialkey: Fwk.Key.specialKey(this.doAction, this)
            },
            'login' : {
                afterrender: this.setFocus,
                securityloginsuccess: this.loginSuccess,
                securityloginfailure: this.loginFailure,
                editDone: this.editDone,
                editCancel: this.editCancel
            }
        });
    },

    /**
     * Función para ejecutar la acción del botón principal de 
     * cada formulario cuando se pulse la tecla enter
     */
    doAction: function(field) {
        var actionBtn = field.up('form').down('button');
        actionBtn.fireEventedAction('click', [actionBtn]);
    },
    
    doLogin: function(btn) {
        var form = btn.up('form');

        if (form.isValid()) {
            this.fwkMask = Fwk.Page.showMask();
            Fwk.Security.validateCredentials(form.getValues());            
        }
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
    },

    showRegister: function(btn) {
        var cardLayout = this.lookupReference('cardPanel').getLayout();
        cardLayout.next();
    },
    
    doRegister: function(btn) {
        var me = this,
        form = this.lookupReference('fwkRegisterForm'),
        values = form.getValues(),
        cardLayout = this.lookupReference('cardPanel').getLayout();
        
        if (form.isValid() && values.password === values.passwordConfirm) {
            Fwk.Page.showMask();
            App.bo['userCreate']({
                jsonData: values,
                //form: me.lookupReference('form'),
                success: function(result, options) {
                    Fwk.Page.hideMask();
                    cardLayout.next();
                    
                    me.lookupReference('usernameRegistered').setValue(options.jsonData.username);
                    me.lookupReference('passwordRegistered').focus();
                    
                },
                failure: function(result, options) {
                    Fwk.Page.hideMask();
                }
            });
        }
    },

//    doRegister: function(btn){
//        var title = 'Registrar';
//
//        var panel = Ext.create('App.view.user.AddUser', {
//            parentView : this.getView()
//        });
//
//        Fwk.Window.create({
//            parentView : this.getView(),
//            panel : panel,
//            options : {
//                draggable:true,
//                title:title
//            },
//            events : {
//                done: 'editDone',
//                cancel: 'editCancel'
//            }
//        }).show();
//    },

    editCancel: function(window){
        window.close();
    },

    editDone: function(window){
        window.close();
    },

});