Ext.define('App.view.StartPageJaime', {
	extend : 'Fwk.panel.Panel',
	alias : 'widget.startpage',

	//title: '**i18n.inicio.titulo',
	layout:{
		type:'vbox',
		align : 'stretch'
	},
	defaults: {
	},
	initComponent : function(){

        Ext.apply(this, {
            //title:i18n.inicio.titulo,
            items:[this.getChat()]
        });

        this.callParent(arguments);
    },
    
    getChat: function() {
        return {
            xtype: 'mainview',
            flex: 1
        };
    }
});
