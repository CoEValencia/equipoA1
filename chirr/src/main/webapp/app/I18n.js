Ext.define('App.I18n', {
    singleton:true
}, function(){
    Fwk.I18n.add({
        es : {
            applicacion : 'chirr',
            inicio: {
                titulo: 'Inicio',
                descripcion: {
                    titulo: 'Acerca de...',
                    content: 'chirr'
                }
            },
            menu: {
                menu1: {
                    titulo: 'Menu 1',
                    opciones:{
                        opcion1 : 'Menu 1.1'
                    }
                }
            }
        }
    });

    Fwk.I18n.resolveLocale("es_ES");
});