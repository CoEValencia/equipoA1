Ext.define('App.view.message.MessageInput', {
    extend:'Ext.container.Container',
    alias:'widget.messageinput',
    requires:['App.view.message.MessageInputController'],
    controller: 'messageinput',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    

    cls: 'msg-input',
    padding: '26 27',
    
    initComponent : function(){

        Ext.apply(this, {
            items : [this.getContent()]
        });

        this.callParent(arguments);
    },
    
    getContent: function() {
        return {
            xtype: 'container',
            cls: 'inner',
            padding: 15,
            layout: {
                type: 'hbox',
                align: 'bottom'                
            },
            items: [this.getTextArea(),
                    this.getButtons()]
        };
    },
    
    getTextArea: function() {
        return {
            xtype: 'textarea',
            reference: 'textarea',
            flex: 1,
            hideLabel: true,
            enterIsSpecial: true,
            enableKeyEvents: true,
            listeners: {
                specialkey: 'specialKey',
                keydown: 'keydown',
                keyup: 'keyup'
            }
        };
    },
    
    getButtons: function() {
        return {
            xtype: 'container',
            layout: {
                type: 'hbox'
            },
            items: [{
                xtype: 'button',
                ui: 'icon-only-large',
                iconCls: 'fa fa-link',
                margin: '0 10 0 0'
            },{
                xtype: 'button',
                text: 'Send',
                width: 80,
                listeners: {
                    click: 'sendMessage'
                }
            }]
        };
    },
    
    
    
});