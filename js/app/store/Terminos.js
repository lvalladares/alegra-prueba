Ext.define('Alegra.store.Terminos', {
    extend: 'Ext.data.Store',

    alias: 'store.terminos',

    model: 'Alegra.model.Terminos',

    data: { items: [
        {idLocal: 0, name: "Vencimiento manual", days: "Vencimiento manual"},
        {idLocal: 1, name: "De contado", days: "0"},
        {idLocal: 2, name: "8 días", days: "8"},
        {idLocal: 3, name: "15 días", days: "15"},
        {idLocal: 4, name: "30 días", days: "30"},
        {idLocal: 5, name: "60 días", days: "60"}
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
