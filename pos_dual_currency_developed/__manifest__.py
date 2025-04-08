{
    'name': 'POS Dual Currency',
    'version': '1.0',
    'summary': 'Add dual currency functionality to POS',
    'description': 'This module adds the functionality to use dual currency in the POS system.',
    'author': 'Coolkit1024',
    'depends': ['point_of_sale'],
    'data': [
        'views/res_config_settings_views.xml',
        'views/pos_config_view.xml',
        'views/assets.xml',  # Nuevo archivo de activos
    ],
    'assets': {
        'web.assets_backend': [
            'pos_dual_currency/static/src/js/product_product_inherit.js',
            'pos_dual_currency/static/src/js/pos_order_line_inherit.js',
            'pos_dual_currency/static/src/js/product_screen_inherit.js',
            'pos_dual_currency/static/src/js/pos_store_inherit.js',
            'pos_dual_currency/static/src/js/dual_currency.js',
        ],
    },
    'installable': True,
    'application': False,
}
