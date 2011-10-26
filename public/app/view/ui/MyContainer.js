/*
 * File: app/view/ui/MyContainer.js
 * Date: Wed Oct 26 2011 12:23:48 GMT-0500 (Central Daylight Time)
 *
 * This file was generated by Ext Designer version 1.2.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('App.view.ui.MyContainer', {
    extend: 'Ext.container.Container',
    requires: [
        'App.view.ToolsTabPanel',
        'App.view.VideoPanel'
    ],

    height: 425,
    width: 869,
    maintainFlex: true,
    layout: {
        type: 'hbox'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'toolstabpanel',
                    flex: 1
                },
                {
                    xtype: 'videopanel',
                    flex: 1,
                    tpl: Ext.create('Ext.XTemplate', 
                        ''
                    )
                }
            ]
        });

        me.callParent(arguments);
    }
});