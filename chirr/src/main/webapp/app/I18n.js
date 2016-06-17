Ext.define('App.I18n', {
    singleton:true
}, function(){
    Fwk.I18n.add({
        en : {
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
            },
            loginUser: {
                register: 'Register'
            }
        }
    });

    Fwk.I18n.resolveLocale("en_EN");
});