Ext.define('App.view.portal.Portal', {
    extend: 'Ext.container.Container',
    alias:'widget.portal',
    requires: [
        'Ext.layout.container.Border',
        'App.view.portal.PortalController'
    ],
    controller:'portal',
    layout: 'border',
    items: [{
        xtype: 'dashboard',
        reference: 'dashboard',
        region: 'center',
        stateful: false,
        columnWidths: [
            0.35,
            0.65
        ],
        parts: {
            spadefavorito: {
                viewTemplate: {
                    title: 'Streams',
                    closable: false,
                    reference: 'spadeFavorito',
                    tools:[{
                        type:'refresh',
                        tooltip: 'Refresh',
                        handler: function(event, toolEl, panelHeader) {
                            this.up().up().items.items[0].fireEvent('doSearch');
                        }
                    }],
                    items: [{
                        xtype: 'spadefavorito'
                    }]
                }
            },
            datosequipo: {
                viewTemplate: {
                    title: 'Messages',
                    closable: false,
                    reference: 'datosEquipo',
                    tools:[{
                        type:'refresh',
                        tooltip: 'Refresh',
                        handler: function(event, toolEl, panelHeader) {
                            this.up().up().items.items[0].fireEvent('doSearch');
                        }
                    }],
                    items: [{
                        xtype: 'datosequipo'
                    }]
                }
            },
            personalsinasig: {
                viewTemplate: {
                    title: 'Flows',
                    closable: false,
                    reference: 'personalSinAsig',
                    tools:[{
                        type:'refresh',
                        tooltip: 'Refresh',
                        handler: function(event, toolEl, panelHeader) {
                            this.up().up().items.items[0].fireEvent('doSearch');
                        }
                    }],
                    items: [{
                        xtype: 'personasinasignar'
                    }]
                }
            }
        },
        defaultContent: [
        {
            type: 'spadefavorito',
            columnIndex: 0,
            height: 300
        },        
        {
            type: 'datosequipo',
            columnIndex: 1,
            height: 300
        },
        {
            type: 'personalsinasig',
            columnIndex: 0,
            height: 300
        }
        ]
    }
    ]
});
