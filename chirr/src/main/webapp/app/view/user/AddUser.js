Ext.define('App.view.user.AddUser', {
    extend: 'Fwk.panel.Panel',
    alias:'widget.adduser',
    requires:['App.view.user.AddUserController'],
    controller: 'adduser',
    border:false,
    defaults:{margin:5},

    initComponent : function(){
        Ext.apply(this, {
            items : [
                this.formPanel()
            ],
            buttons: this.getButtons()
        });
        this.callParent(arguments);
    },


    formPanel : function(){
        return {
            xtype:'fwkformpanel',
            reference:'form',
            border:false,
            defaults:{ margin : 5 },
            layout:{type:'vbox',align:'stretch'},
            flex:1,
            items : [{
                xtype:'fwktextfield',
                name:'username',
                reference:'username',
                fieldLabel:'Usuario',
                fwkRequired:true,
                tabIndex:101,
                flex:1,
                allowBlank: false
            },{
                xtype:'fwktextfield',
                name:'password',
                inputType: 'password',
                reference:'password',
                fieldLabel:'Contraseña',
                fwkRequired:true,
                tabIndex:102,
                flex:1,
                allowBlank: false
            },,{
                xtype:'fwktextfield',
                name:'email',
                reference:'email',
                fieldLabel:'Email',
                fwkRequired:true,
                tabIndex:103,
                flex:1,
                allowBlank: false
            }]
        };
    },

    getButtons: function(){
        return [{
            xtype:'fwkbutton',
            text:'Cancelar',
            reference:'cancelButton',
            iconCls: 'fa fa-times-circle',
            listeners:{
                click:'cancel'
            }
        },{
            xtype:'fwkbutton',
            text:'Guardar',
            fwkEnableIfFormValid: true,
            reference:'saveButton',
            disabled:true,
            iconCls:'fa fa-check-circle',
            listeners:{
                click:'saveForm'
            }
        }];
    }
});
