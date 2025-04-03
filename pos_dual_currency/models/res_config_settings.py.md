from odoo import api, fields, models

class ResConfigSettings(models.TransientModel):
    _inherit = 'res.config.settings'

    enable_dual_currency = fields.Boolean(string="Enable Dual Currency", default=False)
    secondary_currency_id = fields.Many2one('res.currency', string="Secondary Currency", domain="[('name', 'in', ('VES', 'USD'))]")
    secondary_currency_rate = fields.Float(string="Secondary Currency Rate", default=1.0, help="Exchange rate for the secondary currency.")

    def set_values(self):
        super(ResConfigSettings, self).set_values()
        self.env['ir.config_parameter'].sudo().set_param('pos.enable_dual_currency', self.enable_dual_currency)
        self.env['ir.config_parameter'].sudo().set_param('pos.secondary_currency_id', self.secondary_currency_id.id)
        self.env['ir.config_parameter'].sudo().set_param('pos.secondary_currency_rate', self.secondary_currency_rate)

    @api.model
    def get_values(self):
        res = super(ResConfigSettings, self).get_values()
        res.update(
            enable_dual_currency=self.env['ir.config_parameter'].sudo().get_param('pos.enable_dual_currency'),
            secondary_currency_id=int(self.env['ir.config_parameter'].sudo().get_param('pos.secondary_currency_id')),
            secondary_currency_rate=float(self.env['ir.config_parameter'].sudo().get_param('pos.secondary_currency_rate', default=1.0)),
        )
        return res
