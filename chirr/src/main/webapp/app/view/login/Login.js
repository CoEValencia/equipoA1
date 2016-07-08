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
          layout:{type:'vbox',align:'center',pack:'center'},
          items:[{
              xtype: 'panel',
              layout:{type:'vbox',align:'center',pack:'center'},
              closable:false,
              defaults:{margin:5},
              width:400,
              items:[{
                  xtype: 'container',
                  width: 121,
                  height: 39,
                  cls: 'app-logo'
              },{
                  xtype:'fwkformpanel',
                  reference:'fwkLoginForm',
                  border:false,
                  autoWith:true,
                  width:360,
                  layout: {
                      type: 'vbox',
                      align: 'stretch'
                  },
//                  standardSubmit : true,
//                  url:'j_spring_security_check',
                  defaults:{margin:'5 0 5 0', flex:1, labelAlign: 'top', labelSeparator: ''},
                  items:[{
                      xtype:'fwktextfield',
                      reference:'username',
                      name:'j_username',
                      fieldLabel:'User',
                      labelStyle:'color:#fff;',
                      tabIndex:1
                  },{
                      xtype:'fwktextfield',
                      itemId:'password',
                      name:'j_password',
                      fieldLabel:'Password',
                      labelStyle:'color:#fff;',
                      inputType: 'password',
                      tabIndex:2
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
                      reference : 'doRegister',
                      text : 'Register',
                      flex: 1,
                      margin: '10 0 5 0',
                      listeners:{
                          click: 'doRegister'
                      }
                  }]
              }]
          }]
  }],

  initComponent:function(){

      this.callParent(arguments);
  }
});