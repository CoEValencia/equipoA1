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
            cls:'app-header',
            bodyCls:'app-header',
            height:80,
            layout:{
                type:'hbox',
                align:'middle'
            },
            padding: '0 20',
            defaults: {margin: '0 0 0 10'},
            items:[{
                xtype: 'container',
                width: 121,
                height: 39,
                cls: 'app-logo'
            },{
                xtype: 'tbfill'
            },{
                xtype: 'label',
                cls: 'app-header-subtitle app-subtitle app-color5',
                padding: '0 10 0 0',
                html: Ext.Date.format(new Date(), 'l d-m-Y')
            },{
                xtype: 'fwkbutton',
                text: 'Welcome ' + Fwk.Security.userInfo.username + '!',
                ui: 'link',
                iconCls: 'fa fa-user',
                menu : {
                    plain: true,
                    items: [
//                            {
//                        text: 'Profile',
//                        listeners:{
//                            click: 'showProfile'
//                        }
//                    },
                    {
                        text: 'Disconnect',
                        listeners:{
                            click: 'doLogout'
                        }
                    }]
                }
            }]
        };
    }
});
