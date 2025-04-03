odoo.define('pos_dual_currency.product_product_inherit', function (require) {
    "use strict";

    const models = require('point_of_sale.models');
    const ProductProduct = models.ProductProduct;

    models.ProductProduct = ProductProduct.extend({
        getSecondaryPrice: function () {
            return (this.lst_price / this.pos.config.secondary_currency_rate).toFixed(2);
        },
    });
});
