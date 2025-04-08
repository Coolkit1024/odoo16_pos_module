odoo.define('pos_dual_currency.screens', function (require) {
    "use strict";

    var screens = require('point_of_sale.screens');
    var PosBaseWidget = require('point_of_sale.BaseWidget');
    var core = require('web.core');
    var _t = core._t;

    screens.ProductScreenWidget.include({
        renderElement: function () {
            this._super();
            this.$('.product-list-container').each(function (index, el) {
                var product_id = $(el).data('product-id');
                var product = self.pos.db.get_product_by_id(product_id);
                if (product) {
                    var price = product.display_price;
                    var dual_currency_price = product.dual_currency_price || 0;
                    $(el).find('.product-price').after(
                        '<span class="dual-currency-price">' + _t('Dual Currency Price: ') + dual_currency_price.toFixed(2) + '</span>'
                    );
                }
            });
        },
    });

    return screens;
});
