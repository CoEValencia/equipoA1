Ext.define('App.store.message.MessageChatS',{
    extend:'Fwk.data.Store',
    requires:['App.model.message.MessageM'],
    model:'App.model.message.MessageM',
    alias:'store.messagechat'
});