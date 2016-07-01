Ext.define('App.view.StartPage', {
	extend : 'Fwk.panel.Panel',
	alias : 'widget.startpage',
	
	requires: ['App.view.StartPageController'],
	controller:'startpage',
	    	    
	title: '**i18n.inicio.titulo',
//	header:true,
	iconCls:'icon_devon',
	layout: 'fit',
//	bodyCls:'startPageLogo',
//	layout:{
//		type:'vbox',
//		align : 'stretch'
//		//pack  : 'start'
//	},
	defaults: {
		margin: 5
	},
	items:[],
	initComponent : function(){

        Ext.apply(this, {
            title:i18n.inicio.titulo,
        });

        this.callParent(arguments);
    }
});
