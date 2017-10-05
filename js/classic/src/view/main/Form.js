Ext.define('Alegra.view.main.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'form-contactos',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    controller: 'form',
    reference: 'windowForm',
    jsonSubmit: true,

    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 115,
        msgTarget: 'side'
    },

    items: [{
        xtype: 'container',
        layout: 'hbox',
        dock: 'bottom',
        margin: '0 10 0 10',
        items: [{
            xtype: 'fieldset',
            title: 'Información personal',
            flex: 3,
            defaultType: 'textfield',
            defaults: {
                anchor: '100%'
            },

            items: [
                {
                    xtype: 'hidden',
                    name: 'id',
                    bind: '{contacto.id}'
                },
                {
                    allowBlank:false,
                    fieldLabel: 'Nombre',
                    name: 'name',
                    maxLength: 90,
                    bind: '{contacto.name}'
                },
                {
                    fieldLabel: 'Identificación',
                    maxLength: 45,
                    name: 'identification',
                    bind: '{contacto.identification}'
                },
                {
                    xtype: 'fieldcontainer',
                    fieldLabel: 'Direccion',
                    layout: 'hbox',
                    combineErrors: true,
                    defaultType: 'textfield',
                    defaults: {
                        hideLabel: 'true'
                    },

                    items: [{
                        fieldLabel: 'Dirección',
                        name: 'address_record',
                        flex: 3,
                        maxLength: 200,
                        bind: '{contacto.address_record}'
                    },
                    {
                        fieldLabel: 'Ciudad',
                        name: 'city',
                        maxLength: 50,
                        flex: 2,
                        margin: '0 0 0 6',
                        bind: '{contacto.city}'
                    }]
                },
                {
                    fieldLabel: 'Correo Electronico',
                    name: 'email',
                    maxLength: 100,
                    vtype: 'email',
                    bind: '{contacto.email}'
                },
                {
                    fieldLabel: 'Telefono 1',
                    name: 'phonePrimary',
                    maxLength: 45,
                    vtype: 'phone',
                    bind: '{contacto.phonePrimary}'
                },
                {
                    fieldLabel: 'Telefono 2',
                    name: 'phoneSecondary',
                    maxLength: 45,
                    vtype: 'phone',
                    bind: '{contacto.phoneSecondary}'
                },
                {
                    fieldLabel: 'Fax',
                    name: 'fax',
                    maxLength: 45,
                    vtype: 'phone',
                    bind: '{contacto.fax}'
                },
                {
                    fieldLabel: 'Celular',
                    name: 'mobile',
                    maxLength: 45,
                    vtype: 'phone',
                    bind: '{contacto.mobile}'
                }

            ]
        }, {
            xtype: 'fieldset',
            title: 'Información de facturación',
            flex: 2,
            margin: '0 0 0 10',
            defaultType: 'textfield',
            defaults: {
                anchor: '100%'
            },

            items: [{
                xtype: 'combobox',
                fieldLabel: 'Lista de precios',
                name: 'priceList',
                store: {
                    type: 'precios'
                },
                valueField: 'id',
                displayField: 'name',
                typeAhead: true,
                queryMode: 'local',
                bind: '{contacto.priceList}'
            }, {
                xtype: 'combobox',
                fieldLabel: 'Vendedor',
                name: 'seller',
                store: {
                    type: 'vendedores'
                },
                valueField: 'id',
                displayField: 'name',
                typeAhead: true,
                queryMode: 'local',
                bind: '{contacto.seller}'
            }, {
                xtype: 'checkbox',
                boxLabel: 'Cliente',
                name: 'client',
                margin: '0 0 0 10',
                bind: '{contacto.client}'
            },
            {
                xtype: 'checkbox',
                boxLabel: 'Proveedor',
                margin: '0 0 0 10',
                name: 'provider',
                bind: '{contacto.provider}'
            },
            {
                xtype: 'textareafield',
                fieldLabel: 'Observaciones',
                labelAlign: 'top',
                name: 'observations',
                maxLength: 500,
                margin: '0',
                height: 188,
                bind: '{contacto.observations}'
            }]
        }]
    }],

    buttons: [{
        text: 'Enviar',
        formBind: true
    }]
});
