Ext.define('App.view.StartPage', {
	extend : 'Fwk.panel.Panel',
	alias : 'widget.startpage',
	//title: '**i18n.inicio.titulo',
	layout:{
		type:'vbox',
		align : 'stretch'
	},
	defaults: {
		margin: 5
	},
	border:true,
	items:[],
	initComponent : function(){

        Ext.apply(this, {
            items: [{
                xtype: 'messagelist'
            }]
        });

        this.callParent(arguments);
    }
});
