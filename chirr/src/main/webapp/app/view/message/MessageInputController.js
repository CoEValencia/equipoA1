Ext.define('App.view.message.MessageInputController', {
    extend:'Fwk.app.ViewController',
    alias: 'controller.messageinput',

    init : function() {
        this.control({
            'messageinput': {
                //afterrender: this.loadDatos
            }
        });

        this.callParent(arguments);
    },

    sendMessage: function() {
        var view = this.getView(),
        textarea = this.lookupReference('textarea'),
        content = textarea.getValue().trim(),
        nonEmpty = /\S/;

        if (nonEmpty.test(content)){
            view.fireEvent('messageSent', view, content);
            textarea.reset();
        }

    },

    specialKey: function(field, e) {
        if (e.getKey() == e.ENTER && !this.shiftPressed) {
            e.preventDefault();
            this.sendMessage();
        }
    },

    keydown: function(field, e) {
        if (e.getKey() == e.SHIFT) { // if shift is pressed
            this.shiftPressed = true;
        }
    },  
    keyup: function(field, e) {
        if (this.shiftPressed && (this.shiftPressed == true) && (e.getKey() == e.SHIFT)) {
            this.shiftPressed = false;
        }
    }           

});