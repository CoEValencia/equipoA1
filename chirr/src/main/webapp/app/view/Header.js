Ext.define('App.view.Header', {
   extend:'Fwk.panel.Panel',
   alias:'widget.fwkheader',
   requires:['App.view.HeaderController'],
   controller: 'fwkheader',
   border : false,
   initComponent:function(){
      if (window == window.top) {
         this.items = [this.panelUsuario()];
      }
      this.callParent(arguments);
   },
   panelUsuario:function(){
       return {
           xtype:'fwkpanel',
           reference:'panel1',
           bodyCls:'fwk_header',
           border:false,
           layout:{
               type:'vbox',
               align:'stretch'
           },
           items:[{
                  xtype:'fwkpanel',
                  reference:'panel2',
                  bodyCls:'fwk_header',
                  height:70,
                  layout:{
                    type:'hbox',
                    align:'stretch'
                  },
                  items:[{
                      border:false,
                      xtype:'fwkpanel',
                      html:'<img src="css/img/chirr-logo.png" />',
                      width:120
                   },{
//                       xtype:'label',
//                       html: 'jeje'
//                   },{
                       xtype:'container',
                       border:false,
                       flex:1,
                       padding:'0 10 0 0',
                       layout:{
                           type:'hbox',
                           align:'middle',
                           pack:'end'
                       },
                       items:[{
                           xtype: 'fwkbutton',
                           text: 'Welcome ' + Fwk.Security.userInfo.username + '!',
                           cls: 'app_link_btn',
                           iconCls: 'fa fa-user',
                           menu : {
                               plain: true,
                               items: [{
                                   text: 'Profile',
                                   listeners:{
                                       click: 'showProfile'
                                   }
                               },{
                                   text: 'Disconnect',
                                   listeners:{
                                       click: 'doLogout'
                                   }
                               }]
                           }
                       }]
                   }]
              }
           ]
     };
   }
});
