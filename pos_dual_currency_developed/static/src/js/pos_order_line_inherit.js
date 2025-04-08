odoo.define('pos_dual_currency.pos_order_line_inherit', function (require) {
    "use strict";

    const models = require('point_of_sale.models');
    const Orderline = models.Orderline;

    models.Orderline = Orderline.extend({
        initialize: function (attr, options) {
            this._super(attr, options);
            if (this.pos.config.enable_dual_currency) {
                this.secondary_price = (this.price / this.pos.secondary_currency_rate).toFixed(2);
            }
        },
        export_for_printing: function () {
            const json = this._super();
            if (this.pos.config.enable_dual_currency) {
                json.secondary_price = this.secondary_price;
                json.secondary_currency = this.pos.secondary_currency;
            }
            return json;
        },
        getPriceString: function () {
            const priceBs = this.pos.format_currency(this.get_display_price());
            const priceUsd = (this.get_display_price() / this.pos.secondary_currency_rate).toFixed(2);
            return `${priceBs} / ${priceUsd} USD`;
        },
        getDisplayData: function () {
            const data = this._super();
            data.price = this.getPriceString();
            return data;
        },
    });
});
