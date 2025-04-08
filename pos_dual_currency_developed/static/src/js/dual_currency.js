odoo.define('pos_dual_currency.dual_currency', function (require) {
    "use strict";

    const models = require('point_of_sale.models');
    const PosDB = require('point_of_sale.DB');
    const PosModel = models.PosModel;
    const core = require('web.core');
    const _t = core._t;

    PosModel.prototype.initialize = function (session, attributes) {
        const self = this;
        PosModel.prototype.initialize.call(this, session, attributes);
        this.ready.then(function () {
            if (self.config.enable_dual_currency) {
                self.secondary_currency = self.config.secondary_currency_id[1];
                self.secondary_currency_rate = self.config.secondary_currency_rate;
            }
        });
    };

    PosDB.prototype.get_product_by_id = function (id) {
        const product = PosDB.prototype.get_product_by_id.call(this, id);
        if (product && this.pos.config.enable_dual_currency) {
            product.secondary_price = (product.lst_price / this.pos.secondary_currency_rate).toFixed(2);
        }
        return product;
    };

    const _super_orderline = models.Orderline.prototype;
    models.Orderline = models.Orderline.extend({
        initialize: function (attr, options) {
            _super_orderline.initialize.call(this, attr, options);
            if (this.pos.config.enable_dual_currency) {
                this.secondary_price = (this.price / this.pos.secondary_currency_rate).toFixed(2);
            }
        },
        export_for_printing: function () {
            const json = _super_orderline.export_for_printing.call(this);
            if (this.pos.config.enable_dual_currency) {
                json.secondary_price = this.secondary_price;
                json.secondary_currency = this.pos.secondary_currency;
            }
            return json;
        },
    });

    const _super_order = models.Order.prototype;
    models.Order = models.Order.extend({
        initialize: function (attributes, options) {
            _super_order.initialize.call(this, attributes, options);
            if (this.pos.config.enable_dual_currency) {
                this.secondary_currency = this.pos.secondary_currency;
            }
        },
        export_for_printing: function () {
            const json = _super_order.export_for_printing.call(this);
            if (this.pos.config.enable_dual_currency) {
                json.secondary_currency = this.secondary_currency;
            }
            return json;
        },
    });

});
