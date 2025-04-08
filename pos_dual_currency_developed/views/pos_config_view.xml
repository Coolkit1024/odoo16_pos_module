<odoo>
    <record id="pos_config_view_form_inherit_dual_currency" model="ir.ui.view">
        <field name="name">pos.config.form.view.inherit.dual.currency</field>
        <field name="model">pos.config</field>
        <field name="inherit_id" ref="point_of_sale.pos_config_view_form"/>
        <field name="arch" type="xml">
            <xpath expr="//sheet" position="inside">
                <div class="row mt16 o_settings_container">
                    <div class="o_setting_box">
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
            </xpath>
        </field>
    </record>
</odoo>
