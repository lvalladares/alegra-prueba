Ext.define('Alegra.store.Contactos', {
    extend: 'Ext.data.Store',

    alias: 'store.contactos',
    autoLoad: true,
    autoSync: true,

    model: 'Alegra.model.Contactos',
});
