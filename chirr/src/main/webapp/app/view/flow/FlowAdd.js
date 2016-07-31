Ext.define('App.view.flow.FlowAdd', {
    extend:'Fwk.form.Panel',
    alias:'widget.flowadd',
    requires:['App.view.flow.FlowAddController'],
    controller: 'flowadd',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    defaults: {margin: 20},
    
    initComponent : function(){

        Ext.apply(this, {
            items : [this.getFields()],
            buttons: this.getButtons()
        });

        this.callParent(arguments);
    },
    
    getFields: function() {
        return {
            xtype: 'textfield',
            name: 'name',
            allowBlank: false,
            emptyText: 'Write a flow name'
        };
    },
    
    getButtons: function() {
        return [{
            xtype: 'button',
            text: 'Yes!',
            width: 132,
            listeners: {
                click: 'addFlow'
            }
        }];
    }
});