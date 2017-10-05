Ext.define('Alegra.model.Vendedores', {
    extend: 'Alegra.model.Base',

    fields: [
        'id', 'name', 'identification', 'observations', 'status'
    ],

    idProperty: 'id',

    proxy: {
        type: 'rest',
        appendId: true,
        api: {
            read: 'api/vendedores'
        },
        reader: {
            type: 'json',
        }
    }
});
