odoo.define('pos_dual_currency.product_screen_inherit', function (require) {
    "use strict";

    const ProductScreen = require('point_of_sale.ProductScreen');
    const core = require('web.core');
    const _t = core._t;

    ProductScreen.include({
        getProductPrice: function (product) {
            const price = this._super(product);
            const secondaryPrice = product.getSecondaryPrice();
            return `${_t("Bs")} ${price.toFixed(2)} / ${_t("USD")} ${secondaryPrice}`;
        },
    });
});
