Ext.define('App.view.StartPage', {
	extend : 'Fwk.panel.Panel',
	alias : 'widget.startpage',
	//title: '**i18n.inicio.titulo',
	bodyCls:'startPageLogo',
	header:true,
	iconCls:'icon_devon',
	layout:{
		type:'vbox',
		align : 'stretch',
		pack  : 'start'
	},
	defaults: {
		margin: 5
	},
	items:[],
	initComponent : function(){

        Ext.apply(this, {
            //title:i18n.inicio.titulo
        });

        this.callParent(arguments);
    }
});
