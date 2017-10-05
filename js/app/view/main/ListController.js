Ext.define('Alegra.view.main.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.list',

    ver: function(widget, event) {
        var win = this.lookupReference('popupForm');
        var rec = this.getView().getSelectionModel().getSelection()[0];

        if (!win) {
            win = new Alegra.view.main.PopupForm({
                title: "Ver Contacto",
            });
            this.getView().add(win);
            win.show();
            win.setLoading(true);
        }

        Alegra.model.Contactos.load(rec["data"]["id"], {
            success: function(contacto) {
                win.child('form-contactos').getForm().loadRecord(contacto);
                win.setLoading(false);
                win.child('form-contactos').getForm().getFields().each(function(item) {
                  if(item.getXType() == 'textfield' || item.getXType() == 'combobox' ||
                    item.getXType() == 'textareafield' || item.getXType() == 'checkboxfield') {
                        //Disable the item
                        item.setReadOnly(true);
                    }
                });
                win.child('form-contactos').query('button')[0].destroy()
            }
        });
    },

    editar: function(widget, event) {
        var win = this.lookupReference('popupForm');
        var rec = this.getView().getSelectionModel().getSelection()[0];

        if (!win) {
            win = new Alegra.view.main.PopupForm({
                title: "Editar Contacto"
            });
            this.getView().add(win);
            win.show();
            win.setLoading(true);
            win.child('form-contactos').query('button')[0].setHandler("EnviarEditar")
        }

        Alegra.model.Contactos.load(rec["data"]["id"], {
            success: function(contacto) {
                win.child('form-contactos').getForm().loadRecord(contacto);
                win.setLoading(false);
            }
        });
    },

    eliminar: function(widget, event) {

        var win = this.getView();
        var rec = this.getView().getSelectionModel().getSelection()[0];

        Ext.Msg.confirm('Eliminar contacto', '¿Estas seguro que quieres eliminar este contacto?',
            function (choice) {
                if (choice === 'yes') {
                    var borrarData = new Object();
                    win.setLoading(true);
                    borrarData.id = rec["data"]["id"];

                    Ext.Ajax.request({
                        url: 'api/contactos',
                        jsonData: borrarData,
                        method: 'DELETE',
                        waitMsg: 'Eliminando...',
                        success: function(form, action) {
                        win.setLoading(false);
                           Ext.Msg.alert('Exito', 'Información eliminada exitosamente');
                           Ext.ComponentQuery.query('mainlist')[0].getStore().reload();
                        },
                        failure: function(form, action) {
                            win.setLoading(false);
                            Ext.Msg.alert('Fallo', action.result.message);
                        }
                    })
                }
            }
        );
    },

    crear: function(widget, event) {
        var win = this.lookupReference('popupForm');

        if (!win) {
            win = new Alegra.view.main.PopupForm({
                title: "Agregar Contacto"
            });
            this.getView().add(win);
            win.child('form-contactos').query('button')[0].setHandler("EnviarNuevo")
        }

        win.show();
    },

    onGridContextMenu: function(view, rec, node, index, e) {
        e.stopEvent();
        this.getContextMenu().show().setLocalXY(e.getXY());
        return false;
    },

    onSelectionChange: function(sm, selections) {
        var ver = this.view.getAction('ver'),
            editar = this.view.getAction('editar'),
            eliminar = this.view.getAction('eliminar');

        if (selections.length) {
            ver.enable();
            editar.enable();
            eliminar.enable();
        } else {
            ver.disable();
            editar.disable();
            eliminar.disable();
        }
    },
});
