/**
 * This view is an example list of people.
 */
Ext.define('Alegra.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: ['Alegra.model.Contactos',
               'Alegra.store.Contactos'],
    model: 'contactos',

    store: {
        type: 'contactos'
    },

    reference: 'listContactos',

    scrollable: true,
    controller: 'list',

    title: 'Contactos',


    viewConfig: {
        listeners: {
            itemcontextmenu: 'onGridContextMenu',
            selectionchange: 'onSelectionChange'
        }
    },

    allowDeselect: true,
    defaultActionType: 'button',
    actions: {
        crear: {
            iconCls: 'x-fa fa-plus black',
            text: 'Crear contacto',
            handler: 'crear'
        },
        ver: {
            iconCls: 'x-fa fa-eye black',
            text: 'Ver contacto',
            disabled: true,
            handler: 'ver'  // see Controller
        },
        editar: {
            iconCls: 'x-fa fa-pencil black',
            text: 'Editar contacto',
            disabled: true,
            handler: 'editar'
        },
        eliminar: {
            iconCls: 'x-fa fa-trash black',
            text: 'Eliminar contacto',
            disabled: true,
            handler: 'eliminar'
        }
    },

    tbar: [
        // Actions can be converted into Buttons.
        '@crear', '@ver', '@editar', '@eliminar'
    ],


    columns: [
        {
            text: 'Nombre',
            dataIndex: 'name',
            flex: 3
        }, {
            text: 'Identificacion',
            dataIndex: 'identification',
            flex: 2
        }, {
            text: 'Telefono',
            dataIndex: 'phonePrimary',
            flex: 2
        }, {
            text: 'Observaciones',
            dataIndex: 'observations',
            flex: 3
        }
    ],
});
