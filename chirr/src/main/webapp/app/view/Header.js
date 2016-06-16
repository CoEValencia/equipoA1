Ext.define('App.view.Header', {
   extend:'Fwk.panel.Panel',
   alias:'widget.fwkheader',
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
                      html:'<img src="rs/rs/extjs5/fwk/img/logoDevon_v4.0.png" />',
                      width:300
                   }]
              },{
              xtype:'fwkmainmenu',
              border:'2 0 2 0',
              style: {
                  borderColor: 'white',
                  borderStyle: 'solid'
              },
              flex:1,
              layout:{
                  type:'hbox'
              }
          }]
     };
   }
});
