Ext.define('Alegra.store.Precios', {
    extend: 'Ext.data.Store',

    alias: 'store.precios',

    model: 'Alegra.model.Precios',

    autoLoad: true,
    autoSync: true
});
