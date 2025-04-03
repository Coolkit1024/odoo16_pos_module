from odoo import models, fields, api

class PosConfig(models.Model):
    _inherit = 'pos.config'

    enable_dual_currency = fields.Boolean(string="Enable Dual Currency", default=False)
    secondary_currency_id = fields.Many2one('res.currency', string="Secondary Currency", domain="[('name', 'in', ('VES', 'USD'))]")
    secondary_currency_rate = fields.Float(string="Secondary Currency Rate", default=1.0, help="Exchange rate for the secondary currency.")

    @api.onchange('enable_dual_currency')
    def _onchange_enable_dual_currency(self):
        if not self.enable_dual_currency:
            self.secondary_currency_id = False
            self.secondary_currency_rate = 1.0
