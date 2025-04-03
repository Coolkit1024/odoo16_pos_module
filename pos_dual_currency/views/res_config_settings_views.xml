<odoo>
    <record id="res_config_settings_view_form_inherit_pos_dual_currency" model="ir.ui.view">
        <field name="name">res.config.settings.view.form.inherit.pos.dual.currency</field>
        <field name="model">res.config.settings</field>
        <field name="inherit_id" ref="point_of_sale.res_config_settings_view_form"/>
        <field name="arch" type="xml">
            <xpath expr="//div[hasclass('settings')]" position="inside">
                <div class="app_settings_block" data-string="Point of Sale" string="Point of Sale">
                    <div class="row mt16 o_settings_container">
                        <div class="col-12 col-lg-6 o_setting_box">
                            <div class="o_setting_left_pane">
                                <field name="enable_dual_currency"/>
                            </div>
                            <div class="o_setting_right_pane">
                                <label for="enable_dual_currency"/>
                                <div class="text-muted">
                                    Enable dual currency for the POS.
                                </div>
                                <div class="content-group" attrs="{'invisible': [('enable_dual_currency', '=', False)]}">
                                    <field name="secondary_currency_id"/>
                                    <field name="secondary_currency_rate"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </xpath>
        </field>
    </record>
</odoo>
