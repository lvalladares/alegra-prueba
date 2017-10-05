Ext.define('Alegra.model.Contactos', {
    extend: 'Alegra.model.Base',

    fields: [
        'id', 'name', 'identification', 'email', 'phonePrimary', 'phoneSecondary',
        'fax', 'mobile', 'observations', 'type',
        { name: 'address_record', mapping: 'address.address' },
        { name: 'city', mapping: 'address.city' },
        { name: 'seller', mapping: 'seller.id' },
        { name: 'term', mapping: 'term.id' },
        { name: 'priceList', mapping: 'priceList.id' },
        { name: 'client', mapping: 'type',
            convert: function(v, record) {
                if (v) {
                    return v.includes("client");
                } else {
                    return false
                }
             } },
        { name: 'provider', mapping: 'type',
            convert: function(v, record) {
                if (v) {
                    return v.includes("provider");
                } else {
                    return false
                }
             } }
    ],

    idProperty:'id',

    proxy: {
        type: 'rest',
        appendId: true,
        api: {
            read: 'api/contactos'
        },
        reader: {
            type: 'json',
        }
    }
});



