odoo.define('pos_dual_currency.screens', function (require) {
    "use strict";

    const models = require('point_of_sale.models');
    const screens = require('point_of_sale.screens');

    // Extender Orderline para incluir precios secundarios
    const _super_orderline = models.Orderline.prototype;
    models.Orderline = models.Orderline.extend({
        initialize: function (attr, options) {
            _super_orderline.initialize.call(this, attr, options);
            if (this.pos.config.enable_dual_currency) {
                this.secondary_price = (this.price / this.pos.secondary_currency_rate).toFixed(2);
                this.secondary_currency = this.pos.secondary_currency;
            }
        },
    });

    // Extender ReceiptScreen para mostrar totales secundarios
    const ReceiptScreen = screens.ReceiptScreenWidget;
    screens.ReceiptScreenWidget.include({
        render_receipt: function () {
            this._super();
            if (this.pos.config.enable_dual_currency) {
                const order = this.pos.get_order();
                order.secondary_total = (order.get_total_with_tax() / this.pos.secondary_currency_rate).toFixed(2);
                order.secondary_currency = this.pos.secondary_currency;
            }
        },
    });
});
