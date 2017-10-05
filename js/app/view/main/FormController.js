Ext.define('Alegra.view.main.FormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.form',

    EnviarNuevo: function(me) {

        var form = me.up().up().getForm();
        var win = me.up('form-window');
        var grid = this.lookupReference('listContactos');

        if (form.isValid()) {
            form.submit({
                url: 'api/contactos',
                method: 'POST',
                waitMsg: 'Guardando...',
                success: function(form, action) {
                   Ext.Msg.alert('Exito', 'Información guardada exitosamente');
                   win.close();
                   Ext.ComponentQuery.query('mainlist')[0].getStore().reload();
                },
                failure: function(form, action) {
                    Ext.Msg.alert('Fallo', action.result.message);
                }
            })

        }
    },

    EnviarEditar: function(me) {

        var form = me.up().up().getForm();
        var win = me.up('form-window');
        var grid = this.lookupReference('listContactos');

        if (form.isValid()) {
            form.submit({
                url: 'api/contactos',
                method: 'PUT',
                waitMsg: 'Guardando...',
                success: function(form, action) {
                   Ext.Msg.alert('Exito', 'Información guardada exitosamente');
                   win.close();
                   Ext.ComponentQuery.query('mainlist')[0].getStore().reload();
                },
                failure: function(form, action) {
                    Ext.Msg.alert('Fallo', action.result.message);
                }
            })

        }
    }



});
