Ext.define('Alegra.view.main.PopupForm', {
    extend: 'Ext.window.Window',
    xtype: 'form-window',

    requires: ['Alegra.model.Contactos',
               'Alegra.store.Contactos'],

    reference: 'popupForm',
    model: 'Alegra.model.Contactos',

    store: {
        type: 'Alegra.store.Contactos'
    },

    referenceHolder: true,

    record: {},
    viewModel : {
        data: {
            contacto: {}
        }
    },

    width: 900,
    height: 500,
    minWidth: 300,
    minHeight: 380,
    layout: 'fit',
    resizable: true,
    modal: true,
    defaultFocus: 'nombre',
    closeAction: 'destroy',

    items: {
        xtype: 'form-contactos',
    },
});
