Ext.define('Alegra.view.main.Main', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.VBox',
        'Alegra.view.main.List',
        'Ext.plugin.Viewport',
        'Ext.data.proxy.Rest'
    ],
    xtype: 'main',

    width: 500,
    height: 400,
    scrollable: true,

    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },

    items: [{
        title: 'Contactos',
        xtype: 'mainlist',
        width: '75%',
        height: '75%',
        margin: '20 20 20 20',
        frame: true
    }]

});
