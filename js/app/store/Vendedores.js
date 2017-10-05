Ext.define('Alegra.store.Vendedores', {
    extend: 'Ext.data.Store',

    alias: 'store.vendedores',

    model: 'Alegra.model.Vendedores',

    autoLoad: true,
    autoSync: true,
});
