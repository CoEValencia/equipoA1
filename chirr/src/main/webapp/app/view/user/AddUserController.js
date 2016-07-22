Ext.define('App.view.user.AddUserController', {
    extend:'Fwk.app.ViewController',
    alias: 'controller.adduser',

    init : function() {
        this.control({
            'adduser'  : {
                afterRender: this.loadData
            }
        });

        this.callParent(arguments);
    },

    loadData: function(view){

    },

    saveForm: function(){
        var me = this;
        var params = {};
        params.username=this.lookupReference('username').getValue();
        params.password=this.lookupReference('password').getValue();
        params.email=this.lookupReference('email').getValue();
        
        App.bo['userCreate']({
            params:params,
            form:me.lookupReference('form'),
            success: function(result, options) {
                
//                if(result.id != undefined && result.id != null){
//                    if(me.getView().params!=null && me.getView().params.logout!=null){
//                      me.getView().lookupReference('saveButton').setDisabled(true);
//                      Fwk.Security.logout();
//                    }
//                    
//                    me.getView().idUsuario=result.id;
//                    me.getView().fireEvent('done');
//                }else{
//                    Ext.Msg.alert(i18n.comun.aviso, i18n.usuario.noExiste);
//                }
            }
        });
    },
    
    cancel: function(){
        if(this.getView().params!=null && this.getView().params.logout!=null){
            this.getView().lookupReference('saveButton').setDisabled(true);
            Fwk.Security.logout();
        }        
        this.getView().fireEvent('cancel');
    }
});
