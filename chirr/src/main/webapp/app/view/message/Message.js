Ext.define('App.view.message.Message', {
    extend: 'Ext.view.View',
    alias:'widget.message',
    requires:['App.view.message.MessageController'],
    controller: 'message',

    tpl: new Ext.XTemplate(
        '<tpl for=".">',
        '<div class="msg-line {[xindex == xcount ? "msg-bg-last" : "msg-bg"]}">',
            '<div class="msg-wrap">',
                '<div class="msg-profile">',
                    '<div class="msg-picture fa fa-camera" style="background-color:{[Fwk.stringToColour(values.user.username)]}"></div>',
                    //'<div class="msg-picture fa fa-camera bg-color{user.color}"></div>',
                '</div>',
                '<div class="msg-content">',
                    '<div class="msg-title">{user.username} {[Ext.Date.format(values.time,"H:i")]}</div>',
                    '<div class="msg-text">{[this.formatContent(values.content)]}</div>',
                '</div>',
            '</div>',
        '</div>',
        '</tpl>',
        {
            getColor: function(){
                var num = Math.floor(Math.random() * 9) + 1;
                return 'bg-color'+num;
            },
            formatTime: function(time) {
                return Ext.Date.format(Ext.Date.parse(time,'c'),'H:i');
            },
            formatContent: function(content) {
                content = Ext.util.Format.nl2br(content);
                content = linkifyHtml(content);
                return content;
            }
        }
    ),
    itemSelector: 'div.msg-line',
    disableSelection: true,
    emptyText: 'No messages',
    loadMask:false     
});
