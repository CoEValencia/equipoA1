Ext.define('App.view.login.Login',{
  extend: 'Ext.container.Container' ,
  alias:'widget.login',
  requires:'App.view.login.LoginController',
  controller: 'login',
  statics:{
      fwkSingleView:true
  },
  layout:'border',
  region : 'center',
  border : false,
  items:[{
          xtype:'fwkpanel',
          autoWidth:false,
          region:'center',
          layout:{type:'vbox',align:'center',pack:'center'},
          items:[{
              //title : 'i18n.login.title',
              xtype: 'panel',
              layout:{type:'vbox',align:'center',pack:'center'},
              closable:false,
              defaults:{margin:5},
              width:400,
              items:[{
                  xtype: 'label',
                  text: '\/\/Chirr',
                  margin: 10,
                  style: 'font-size:30px;font-weight:600'
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
                      fieldLabel:'i18n.login.user',
                      tabIndex:1
                  },{
                      xtype:'fwktextfield',
                      itemId:'password',
                      name:'j_password',
                      fieldLabel:'i18n.login.password',
                      inputType: 'password',
                      tabIndex:2
                  },{
                      xtype : 'fwkbutton',
                      reference : 'doLogin',
                      text : 'i18n.login.title',
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
                      reference : 'doRegister',
                      text : 'i18n.loginUser.register',
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

      //i18n del formulario
//      Ext.apply(this.items[0].items[0],{
//          title:i18n.login.title
//      });
      Ext.apply(this.items[0].items[0].items[1].items[0],{
          fieldLabel:i18n.login.user
      });
      Ext.apply(this.items[0].items[0].items[1].items[1],{
          fieldLabel:i18n.login.password
      });
      Ext.apply(this.items[0].items[0].items[1].items[2],{
          text:i18n.login.title
      });
      Ext.apply(this.items[0].items[0].items[1].items[4],{
          text:i18n.loginUser.register
      });
//      Ext.apply(this.items[0].items[0].bbar[1],{
//          text:i18n.login.send
//      });

      /*
      var imgLogo = Ext.get('fwkLogoDevon');
      if (imgLogo) {
          imgLogo.show();
          imgLogo.dom.style['display']='block';
          imgLogo.dom.src='rs/rs/extjs5/fwk/img/logoDevon_v4.0.png';
      }
      */

      this.callParent(arguments);
  }
});