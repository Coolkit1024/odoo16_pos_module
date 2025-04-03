odoo.define('pos_dual_currency.pos_store_inherit', function (require) {
    "use strict";

    const PosModel = require('point_of_sale.models').PosModel;

    PosModel.include({
        initialize: function (session, attributes) {
            this._super(session, attributes);
            this.ready.then(() => {
                if (this.config.enable_dual_currency) {
                    this.secondary_currency = this.config.secondary_currency_id[1];
                    this.secondary_currency_rate = this.config.secondary_currency_rate;
                }
            });
        },
        getProductPriceFormatted: function (product) {
            const formattedUnitPrice = this.format_currency(this.getProductPrice(product));
            const formattedSecondaryPrice = (this.getProductPrice(product) / this.secondary_currency_rate).toFixed(2);
            if (product.to_weight) {
                return `${formattedUnitPrice} / ${formattedSecondaryPrice} USD / ${product.uom_id.name}`;
            } else {
                return `${formattedUnitPrice} / ${formattedSecondaryPrice} USD`;
            }
        },
    });
});
