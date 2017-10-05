Ext.define('Alegra.model.Precios', {
    extend: 'Alegra.model.Base',

    fields: [
        'id', 'dependent', 'main', 'name', 'nameWithPercent', 'percentage', 'status'
    ],

    idProperty: 'id',

    proxy: {
        type: 'rest',
        appendId: true,
        api: {
            read: 'api/precios'
        },
        reader: {
            type: 'json',
        }
    }
});
