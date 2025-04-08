odoo.define('pos_dual_currency.models', function (require) {
    "use strict";

    var models = require('point_of_sale.models');
    var utils = require('web.utils');
    var core = require('web.core');
    var _t = core._t;

    models.load_fields("product.product", ["dual_currency_price"]);

    var _super_Orderline = models.Orderline.prototype;
    models.Orderline = models.Orderline.extend({
        get_price_dual_currency: function () {
            var product = this.get_product();
            var dual_currency_price = product.dual_currency_price || 0;
            return utils.round_pr(dual_currency_price * this.get_quantity(), this.pos.currency.rounding);
        },
    });

    return models;
});
