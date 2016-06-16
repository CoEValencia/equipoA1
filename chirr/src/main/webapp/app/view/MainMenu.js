Ext.define('App.view.MainMenu', {
	extend:'Fwk.view.MainMenu',
	alias:'widget.fwkmainmenu',

    initComponent: function() {

        this.items = [{
            text: i18n.menu.menu1.titulo,
            menu: [{
                text: i18n.menu.menu1.opciones.opcion1,
                fwkView: ''
            }]
        },
        "->",
        {
            text: i18n.helpButton,
            iconCls:'fam help fugue question',
            itemId:'fwkHelp'
        }];

        this.callParent(arguments);
    }
});
