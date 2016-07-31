Ext.define('App.view.login.Login',{
    extend: 'Ext.panel.Panel' ,
    alias:'widget.login',
    requires:'App.view.login.LoginController',
    controller: 'login',
    statics:{
        fwkSingleView:true
    },
    layout:'border',
    region : 'center',
    border : false,
    bodyCls: 'app-login',
    items:[{
        xtype:'fwkpanel',
        autoWidth:false,
        region:'center',
        layout:{
            type:'vbox',
            align:'center',
            pack:'center'
        },
        items:[{
            xtype: 'container',
            layout: 'card',
            reference: 'cardPanel',
            //activeItem:2,
            items: [{
                //Card login 1
                xtype: 'panel',
                layout:{
                    type:'vbox',
                    align:'center',
                    pack:'center'
                },
                closable:false,
                defaults:{margin:5},
                width:400,
                items:[{
                    xtype: 'container',
                    width: 121,
                    height: 39,
                    margin: 10,
                    cls: 'app-logo'
                },{
                    xtype:'fwkformpanel',
                    reference:'fwkLoginForm',
                    border:false,
                    autoWith:true,
                    width:300,
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    defaults:{margin:'5 0 5 0', flex:1, labelAlign: 'top', labelSeparator: ''},
                    items:[{
                        xtype:'fwktextfield',
                        reference:'username',
                        name:'j_username',
                        fieldLabel:'User',
                        labelStyle:'color:#fff;',
                        allowBlank: false
                    },{
                        xtype:'fwktextfield',
                        itemId:'password',
                        name:'j_password',
                        fieldLabel:'Password',
                        inputType: 'password',
                        labelStyle:'color:#fff;',
                        allowBlank: false
                    },{
                        xtype : 'fwkbutton',
                        reference : 'doLogin',
                        text : 'Send',
                        flex: 1,
                        margin: '10 0 5 0',
                        listeners:{
                            click: 'doLogin'
                        }
                    },{
                        xtype: 'label',
                        html: '<p class="subtitle fancy"><span>New here?</span></p>'
                    },{
                        xtype : 'fwkbutton',
                        ui: 'ghost',
                        reference : 'showRegister',
                        text : 'Register',
                        flex: 1,
                        margin: '10 0 5 0',
                        listeners:{
                            click: 'showRegister'
                        }
                    }]
                }]
            },{
                //Card login 2 (registro)
                xtype: 'panel',
                layout:{
                    type:'vbox',
                    align:'center',
                    pack:'center'
                },
                closable:false,
                defaults:{margin:5},
                width:400,
                items:[{
                    xtype: 'container',
                    width: 121,
                    height: 39,
                    margin: 10,
                    cls: 'app-logo'
                },{
                    xtype:'fwkformpanel',
                    reference:'fwkRegisterForm',
                    border:false,
                    autoWith:true,
                    width:300,
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    defaults:{margin:'5 0 5 0', flex:1, labelAlign: 'top', labelSeparator: ''},
                    items:[{
                        xtype:'fwktextfield',
                        reference:'usernameRegister',
                        name:'username',
                        allowBlank: false,
                        fieldLabel:'What would your username be?',
                        labelStyle:'color:#fff;'
                    },{
                        xtype:'fwktextfield',
                        reference:'emailRegister',
                        name:'email',
                        allowBlank: false,
                        fieldLabel:'Your contact email',
                        labelStyle:'color:#fff;'
                    },{
                        xtype:'fwktextfield',
                        name:'password',
                        allowBlank: false,
                        fieldLabel:'Password',
                        labelStyle:'color:#fff;',
                        inputType: 'password'
                    },{
                        xtype:'fwktextfield',
                        name:'passwordConfirm',
                        allowBlank: false,
                        fieldLabel:'Confirm password',
                        labelStyle:'color:#fff;',
                        inputType: 'password'
                    },{
                        xtype : 'fwkbutton',
                        reference : 'doRegister',
                        text : 'Register',
                        flex: 1,
                        margin: '15 0 5 0',
                        listeners:{
                            click: 'doRegister'
                        }
                    }]
                }]


            },{
                //Card login 3 (after register OK)
                xtype: 'panel',
                layout:{
                    type:'vbox',
                    align:'center',
                    pack:'center'
                },
                closable:false,
                defaults:{margin:5},
                width:400,
                items:[{
                    xtype: 'container',
                    width: 121,
                    height: 39,
                    margin: 10,
                    cls: 'app-logo'
                },{
                    xtype:'fwkformpanel',
                    reference:'fwkLoginForm2',
                    border:false,
                    autoWith:true,
                    width:300,
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    defaults:{margin:'5 0 5 0', flex:1, labelAlign: 'top', labelSeparator: ''},
                    items:[{
                        xtype: 'label',
                        style: {
                            fontSize: '20px',
                            color: '#fff'
                        },
                        html: "You've successfully registered!"
                    },{
                        xtype: 'label',
                        style: {
                            fontFamily: 'Roboto Light Italic, Roboto',
                            fontStyle: 'italic',
                            fontSize: '14px',
                            color: '#fff'
                        },
                        html: 'Now you shall pass...'
                    },{
                        xtype:'fwktextfield',
                        reference:'usernameRegistered',
                        name:'j_username',
                        fieldLabel:'User',
                        labelStyle:'color:#fff;',
                        allowBlank: false
                    },{
                        xtype:'fwktextfield',
                        reference: 'passwordRegistered',
                        name:'j_password',
                        fieldLabel:'Password',
                        inputType: 'password',
                        labelStyle:'color:#fff;',
                        allowBlank: false
                    },{
                        xtype : 'fwkbutton',
                        text : 'Send',
                        flex: 1,
                        margin: '10 0 5 0',
                        listeners:{
                            click: 'doLogin'
                        }
                    }]
                }]
            }]
        }





        ]
    }],

    initComponent:function(){

        this.callParent(arguments);
    }
});