import {
  LitElement,
  html,
  css,
  svg,
} from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";
const PowerCardversion = "1.0.0";
console.info(
  `%c POWER-FLOW-CARD %c v${PowerCardversion} `,
  "color: orange; font-weight: bold; background: black",
  "color: white; font-weight: bold; background: dimgray"
);

class PowerFlowCardEditor extends LitElement {
  setConfig(config) {
    this._config = config;
  }

  configChanged(newConfig) {
    const event = new Event("config-changed", {
      bubbles: true,
      composed: true,
    });
    event.detail = { config: newConfig };
    this.dispatchEvent(event);
  }
}

class PowerFlowCard extends LitElement {
  static get styles() {
    return css`
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        padding: 5px;
      }

      .card {
        border-radius: var(--ha-card-border-radius, 10px);
        box-shadow: var(
          --ha-card-box-shadow,
          0px 0px 0px 1px rgba(0, 0, 0, 0.12),
          0px 0px 0px 0px rgba(0, 0, 0, 0.12),
          0px 0px 0px 0px rgba(0, 0, 0, 0.12)
        );
        background: var(
          --ha-card-background,
          var(--card-background-color, white)
        );
        border-width: var(--ha-card-border-width);
        padding: 0px;
      }

      text {
        text-anchor: middle;
        alignment-baseline: middle;
      }
      .left-align {
        text-anchor: start;
      }
      .right-align {
        text-anchor: end;
      }
      .st1 {
        fill: #ff9b30;
      }
      .st2 {
        fill: #f3b3ca;
      }
      .st3 {
        font-size: 9px;
      }
      .st4 {
        font-size: 14px;
      }
      .st5 {
        fill: #969696;
      }
      .st6 {
        fill: #5fb6ad;
      }
      .st7 {
        fill: #5490c2;
      }
      .st8 {
        font-weight: 500;
      }
      .st9 {
        fill: #959595;
      }
      .st10 {
        font-size: 16px;
      }
      .st11 {
        fill: transparent;
      }
      .st12 {
        display: none;
      }
      .st13 {
        font-size: 22px;
      }
      .st14 {
        font-size: 12px;
      }
      .st15 {
        font-size: 8px;
      }
      .st16 {
        fill: #0086b2;
      }
    `;
  }

  static get properties() {
    return { hass: { type: Object } };
  }

  static getStubConfig() {
    return {
      cardstyle: "ju",
      card_height: 900,
      panel_mode: "no",
      large_font: "yes",
      show_solar: "yes",
      show_ev: "no",
      show_bal: "no",
      show_chaud: "no",
      show_stirling: "no",
      battery: {
        energy: 15960,
        shutdown_soc: 20,
        show_daily: "yes",
        invert_power: "yes",
        invert_power1: "yes",
        invert_power2: "yes",
        invert_power3: "yes",
        colour: "green",
        animation_speed: 6,
        max_power: 4500,
        full_capacity: 80,
        empty_capacity: 30,
        bat1_name: "Bat1",
        bat2_name: "Bat2",
        bat3_name: "Bat3",
        bat4_name: "Bat4",
      },
      inverter: {
        modern: "multi_rs",
        colour: "grey",
        autarky: "yes",
      },
      solar: {
        show_daily: "yes",
        mppts: "two",
      },
      load: {
        colour: "#5fb6ad",
        show_daily: "yes",
        show_aux: "yes",
        invert_aux: "no",
        aux_name: "Inverter",
        aux_type: "inv",
        aux_colour: "red",
        aux_off_colour: "red",
        animation_speed: 8,
        max_power: 8000,
        additional_loads: "four",
        load1_name: "AC",
        load2_name: "EV_charg",
        load3_name: "Routeur",
        load4_name: "Atelier",
        load1_icon: "mdi:air-conditioner",
        load2_icon: "mdi:ev-station",
        load3_icon: "mdi:water-boiler",
        load4_icon: "mdi:garage",
      },
      grid: {
        show_grid: "yes",
        show_daily_buy: "yes",
        show_daily_sell: "yes",
        show_nonessential: "no",
        nonessential_name: " ",
      },
      entities: {
        use_timer_248: "none",
        priority_load_243: "switch.none",
        inverter_voltage_154: "sensor.none",
        load_frequency_192: "sensor.none",
        inverter_current_164: "sensor.none",
        inverter_power_175: "sensor.none",
        grid_connected_status_194: "binary_sensor.none",
        inverter_status_59: "sensor.none",
        day_battery_charge_70: "sensor.none",
        day_battery_discharge_71: "sensor.none",
        battery_voltage_183: "sensor.none",
        battery_soc_184: "sensor.none",
        battery_power_190: "sensor.none",
        battery_current_191: "sensor.none",
        grid_power_169: "sensor.none",
        day_grid_import_76: "sensor.none",
        day_grid_export_77: "sensor.none",
        grid_ct_power_172: "sensor.none",
        day_load_energy_84: "sensor.none",
        //        essential_power: "none",
        //        nonessential_power: "none",
        //        aux_power_166: "sensor.none",
        day_pv_energy_108: "sensor.none",
        pv1_power_186: "sensor.none",
        pv2_power_187: "sensor.none",
        pv1_voltage_109: "sensor.none",
        pv1_current_110: "sensor.none",
        pv2_voltage_111: "sensor.none",
        pv2_current_112: "sensor.none",
        pv1_state: "sensor.none",
        pv2_state: "sensor.none",
        pv3_state: "sensor.none",
        pv4_state: "sensor.none",

        day_bat1_charge: "sensor.none",
        day_bat1_discharge: "sensor.none",
        battery1_voltage_183: "sensor.none",
        battery1_soc_184: "sensor.none",
        battery1_power: "sensor.none",
        battery1_current_191: "sensor.none",

        day_bat2_charge: "sensor.none",
        day_bat2_discharge: "sensor.none",
        battery2_voltage_183: "sensor.none",
        battery2_soc_184: "sensor.none",
        battery2_power: "sensor.none",
        battery2_current_191: "sensor.none",
        day_bat3_charge: "sensor.none",
        day_bat3_discharge: "sensor.none",
        battery3_voltage_183: "none",
        battery3_soc_184: "none",
        battery3_power: "none",
        battery3_current_191: "none",
        day_bat4_charge: "sensor.none",
        day_bat4_discharge: "sensor.none",
        battery4_voltage_183: "none",
        battery4_soc_184: "none",
        battery4_power: "none",
        battery4_current_191: "none",

        ///    bat1_switch: "switch.none",

        bat1_disch_sw: "switch.none",
        bat1_charg_sw: "switch.none",
        bat2_disch_sw: "switch.none",
        bat2_charg_sw: "switch.none",
        //        bat3_switch: "switch.none",
        //        bat3_switch: "switch.none",
        //        bat4_disch_sw: "switch.none",
        //        bat4_charg_sw: "switch.none",

        //        grid_connected_status_194: "binary_sensor.none",

        bat1_ah: "sensor.none",
        bat1_mid: "sensor.none",
        bat1_dev: "sensor.none",
        bat1_min: "sensor.none",
        bat1_max: "sensor.none",

        bat2_mostemp: "sensor.none",
        bat2_cell1temp: "sensor.none",
        bat2_cell2temp: "sensor.none",
        bat2_min: "sensor.none",
        bat2_max: "sensor.none",

        bat3_mostemp: "sensor.none",
        bat3_cell1temp: "sensor.none",
        bat3_cell2temp: "sensor.none",
        bat3_min: "sensor.none",
        bat3_max: "sensor.none",

        bat4_mostemp: "sensor.none",
        bat4_cell1temp: "sensor.none",
        bat4_cell2temp: "sensor.none",
        bat4_min: "sensor.none",
        bat4_max: "sensor.none",

        Text: "sensor.Text",
        Tsalon: "sensor.Tsalon",
        Tchambre: "sensor.Tchambre",
        Tbal1: "sensor.Tbal1",
        Tbal2: "sensor.Tbal2",
        Tbal3: "sensor.Tbal3",
        Tbal4: "sensor.Tbal4",
        ChargBal: "sensor.ChargBal",
      },
    };
  }

  render() {
    const config = this._config;
    const stateObj = this.hass.states[
      config.entities.day_battery_discharge_71
    ] || { state: "0" };
    const stateObj1 = this.hass.states[
      config.entities.day_battery_charge_70
    ] || { state: "0" };
    const stateObj2 = this.hass.states[config.entities.day_load_energy_84] || {
      state: "0",
    };
    const stateObj3 = this.hass.states[config.entities.day_grid_import_76] || {
      state: "0",
    };
    const stateObj4 = this.hass.states[config.entities.day_pv_energy_108] || {
      state: "0",
    };
    const stateObj5 = this.hass.states[
      config.entities.inverter_voltage_154
    ] || { state: "0" };
    const stateObj6 = this.hass.states[config.entities.load_frequency_192] || {
      state: "0",
    };
    const stateObj7 = this.hass.states[
      config.entities.inverter_current_164
    ] || { state: "0" };
    const stateObj8 = this.hass.states[config.entities.pv2_power_187] || {
      state: "0",
    };
    const stateObj9 = this.hass.states[config.entities.pv1_power_186] || {
      state: "0",
    };
    const stateObj11 = this.hass.states[
      config.entities.battery_voltage_183
    ] || { state: "0" };
    const stateObj12 = this.hass.states[config.entities.battery_soc_184] || {
      state: "0",
    };
    const stateObj13 = this.hass.states[config.entities.battery_power_190] || {
      state: "0",
    };
    const stateObj14 = this.hass.states[config.entities.essential_power] || {
      state: "0",
    };
    const stateObj15 = this.hass.states[config.entities.grid_ct_power_172] || {
      state: "0",
    };
    const stateObj16 = this.hass.states[config.entities.pv1_voltage_109] || {
      state: "0",
    };
    const stateObj17 = this.hass.states[config.entities.pv1_current_110] || {
      state: "0",
    };
    const stateObj18 = this.hass.states[config.entities.pv2_voltage_111] || {
      state: "0",
    };
    const stateObj19 = this.hass.states[config.entities.pv2_current_112] || {
      state: "0",
    };
    const stateObj20 = this.hass.states[
      config.entities.grid_connected_status_194
    ] || { state: "on" };
    const stateObj21 = this.hass.states[config.entities.inverter_status_59] || {
      state: "",
    };
    const stateObj22 = this.hass.states[config.entities.inverter_power_175] || {
      state: "0",
    };
    const stateObj23 = this.hass.states[config.entities.grid_power_169] || {
      state: "0",
    };
    const stateObj24 = this.hass.states[config.entities.aux_power_166] || {
      state: "0",
    };
    const stateObj25 = this.hass.states[config.entities.priority_load_243] || {
      state: "undefined",
    };
    const stateObj26 = this.hass.states[config.entities.use_timer_248] || {
      state: "undefined",
    };
    const stateObj27 = this.hass.states[config.entities.pv3_voltage_113] || {
      state: "0",
    };
    const stateObj28 = this.hass.states[config.entities.pv3_current_114] || {
      state: "0",
    };
    const stateObj29 = this.hass.states[config.entities.pv4_voltage_115] || {
      state: "0",
    };
    const stateObj30 = this.hass.states[config.entities.pv4_current_116] || {
      state: "0",
    };
    const stateObj31 = this.hass.states[config.entities.pv3_power_188] || {
      state: "0",
    };
    const stateObj32 = this.hass.states[config.entities.pv4_power_189] || {
      state: "0",
    };
    const stateObj33 = this.hass.states[config.entities.day_grid_export_77] || {
      state: "0",
    };
    const stateObj34 = this.hass.states[config.entities.nonessential_power] || {
      state: "0",
    };
    const stateObj35 = this.hass.states[
      config.entities.battery_current_191
    ] || { state: "0" };
    const stateObj36 = this.hass.states[config.entities.remaining_solar] || {
      state: "0",
    };
    const stateObj37 = this.hass.states[config.entities.battery_temp_182] || {
      state: "",
    };
    const stateObj38 = this.hass.states[
      config.entities.dc_transformer_temp_90
    ] || { state: "" };
    const stateObj39 = this.hass.states[config.entities.radiator_temp_91] || {
      state: "",
    };
    const stateObj40 = this.hass.states[
      config.entities.non_essential_load1
    ] || { state: "0" };
    const stateObj41 = this.hass.states[
      config.entities.non_essential_load2
    ] || { state: "0" };
    const stateObj42 = this.hass.states[config.entities.essential_load1] || {
      state: "0",
    };
    const stateObj43 = this.hass.states[config.entities.energy_cost] || {
      state: "",
    };
    const stateObj44 = this.hass.states[config.entities.solar_sell_247] || {
      state: "undefined",
    };
    const stateObj45 = this.hass.states[config.entities.essential_load2] || {
      state: "0",
    };
    const stateObj46 = this.hass.states[config.entities.pv_total] || {
      state: "0",
    };
    const stateObj47 = this.hass.states[
      config.entities.aux_connected_status
    ] || { state: "on" };
    const stateObj48 = this.hass.states[config.entities.essential_load3] || {
      state: "0",
    };
    const stateObj49 = this.hass.states[config.entities.essential_load4] || {
      state: "0",
    };

    const stateObj50 = this.hass.states[config.entities.battery4_soc_184] || {
      state: "0",
    };
    const stateObj51 = this.hass.states[config.entities.battery4_power] || {
      state: "0",
    };

    const stateObj52 = this.hass.states[
      config.entities.battery1_voltage_183
    ] || { state: "0" };
    const stateObj53 = this.hass.states[config.entities.battery1_soc_184] || {
      state: "0",
    };
    const stateObj54 = this.hass.states[config.entities.battery1_power] || {
      state: "0",
    };
    const stateObj55 = this.hass.states[
      config.entities.battery2_voltage_183
    ] || { state: "0" };
    const stateObj56 = this.hass.states[config.entities.battery2_soc_184] || {
      state: "0",
    };
    const stateObj57 = this.hass.states[config.entities.battery2_power] || {
      state: "0",
    };
    const stateObj58 = this.hass.states[
      config.entities.battery3_voltage_183
    ] || { state: "0" };
    const stateObj59 = this.hass.states[config.entities.battery3_soc_184] || {
      state: "0",
    };
    const stateObj60 = this.hass.states[config.entities.battery3_power] || {
      state: "0",
    };
    const stateObj61 = this.hass.states[
      config.entities.battery1_current_191
    ] || { state: "0" };
    const stateObj62 = this.hass.states[
      config.entities.battery2_current_191
    ] || { state: "0" };
    const stateObj63 = this.hass.states[
      config.entities.battery3_current_191
    ] || { state: "0" };
    const stateObj64 = this.hass.states[
      config.entities.battery4_voltage_183
    ] || { state: "0" };
    const stateObj65 = this.hass.states[
      config.entities.battery4_current_191
    ] || { state: "0" };
    //    const stateObj66 = this.hass.states[config.entities.bat4_charg_sw] || {state: "undefined",};
    const stateObj67 = this.hass.states[config.entities.day_bat1_discharge] || {
      state: "0",
    };
    const stateObj68 = this.hass.states[config.entities.day_bat1_charge] || {
      state: "0",
    };
    const stateObj69 = this.hass.states[config.entities.day_bat2_discharge] || {
      state: "0",
    };
    const stateObj70 = this.hass.states[config.entities.day_bat2_charge] || {
      state: "0",
    };
    const stateObj71 = this.hass.states[config.entities.day_bat3_discharge] || {
      state: "0",
    };
    const stateObj72 = this.hass.states[config.entities.day_bat3_charge] || {
      state: "0",
    };
    const stateObj73 = this.hass.states[config.entities.bat1_disch_sw] || {
      state: "undefined",
    };
    const stateObj74 = this.hass.states[config.entities.bat1_charg_sw] || {
      state: "undefined",
    };
    const stateObj75 = this.hass.states[config.entities.bat2_disch_sw] || {
      state: "undefined",
    };
    const stateObj76 = this.hass.states[config.entities.bat2_charg_sw] || {
      state: "undefined",
    };
    const stateObj77 = this.hass.states[config.entities.bat3_disch_sw] || {
      state: "undefined",
    };
    const stateObj78 = this.hass.states[config.entities.bat3_charg_sw] || {
      state: "undefined",
    };
    const stateObj79 = this.hass.states[config.entities.bat4_disch_sw] || {
      state: "undefined",
    };

    const stateObj80 = this.hass.states[config.entities.bat1_ah] || {
      state: "0",
    };
    const stateObj81 = this.hass.states[config.entities.bat1_mid] || {
      state: "0",
    };
    const stateObj82 = this.hass.states[config.entities.bat1_dev] || {
      state: "0",
    };
    const stateObj83 = this.hass.states[config.entities.bat1_min] || {
      state: "0",
    };
    const stateObj84 = this.hass.states[config.entities.bat1_max] || {
      state: "0",
    };

    const stateObj85 = this.hass.states[config.entities.bat2_mostemp] || {
      state: "0",
    };
    const stateObj86 = this.hass.states[config.entities.bat2_cell1temp] || {
      state: "0",
    };
    const stateObj87 = this.hass.states[config.entities.bat2_cell2temp] || {
      state: "0",
    };
    const stateObj88 = this.hass.states[config.entities.bat2_min] || {
      state: "0",
    };
    const stateObj89 = this.hass.states[config.entities.bat2_max] || {
      state: "0",
    };

    const stateObj90 = this.hass.states[config.entities.bat3_mostemp] || {
      state: "0",
    };
    const stateObj91 = this.hass.states[config.entities.bat3_cell1temp] || {
      state: "0",
    };
    const stateObj92 = this.hass.states[config.entities.bat3_cell2temp] || {
      state: "0",
    };
    const stateObj93 = this.hass.states[config.entities.bat3_min] || {
      state: "0",
    };
    const stateObj94 = this.hass.states[config.entities.bat3_max] || {
      state: "0",
    };

    const stateObj95 = this.hass.states[config.entities.bat4_mostemp] || {
      state: "0",
    };
    const stateObj96 = this.hass.states[config.entities.bat4_cell1temp] || {
      state: "0",
    };
    const stateObj97 = this.hass.states[config.entities.bat4_cell2temp] || {
      state: "0",
    };
    const stateObj98 = this.hass.states[config.entities.bat4_min] || {
      state: "0",
    };
    const stateObj99 = this.hass.states[config.entities.bat4_max] || {
      state: "0",
    };

    const stateObj100 = this.hass.states[config.entities.Text] || {
      state: "0",
    };
    const stateObj101 = this.hass.states[config.entities.Tsalon] || {
      state: "0",
    };
    const stateObj102 = this.hass.states[config.entities.Tchambre] || {
      state: "0",
    };
    const stateObj103 = this.hass.states[config.entities.Tbal1] || {
      state: "0",
    };
    const stateObj104 = this.hass.states[config.entities.Tbal2] || {
      state: "0",
    };
    const stateObj105 = this.hass.states[config.entities.Tbal3] || {
      state: "0",
    };
    const stateObj106 = this.hass.states[config.entities.Tbal4] || {
      state: "0",
    };
    const stateObj107 = this.hass.states[config.entities.ChargBal] || {
      state: "0",
    };
    const stateObj108 = this.hass.states[
      config.entities.day_bat4_discharge
    ] || { state: "0" };
    const stateObj109 = this.hass.states[config.entities.day_bat4_charge] || {
      state: "0",
    };
    //    const stateObj108 = this.hass.states[config.entities.pv2_power_187] || {state: "0",};
    //    const stateObj109 = this.hass.states[config.entities.pv1_power_186] || {state: "0",};

    const stateObj110 = this.hass.states[config.entities.pv1_state] || {
      state: "0",
    };
    const stateObj111 = this.hass.states[config.entities.pv2_state] || {
      state: "0",
    };
    const stateObj112 = this.hass.states[config.entities.pv3_state] || {
      state: "0",
    };
    const stateObj113 = this.hass.states[config.entities.pv4_state] || {
      state: "0",
    };
    const stateObj114 = this.hass.states[config.entities.pv1_max] || {
      state: "0",
    };
    const stateObj115 = this.hass.states[config.entities.pv2_max] || {
      state: "0",
    };
    const stateObj116 = this.hass.states[config.entities.pv3_max] || {
      state: "0",
    };
    const stateObj117 = this.hass.states[config.entities.pv4_max] || {
      state: "0",
    };
    const stateObj118 = this.hass.states[config.entities.pv1_sw] || {
      state: "0",
    };
    const stateObj119 = this.hass.states[config.entities.day_bat4_charge] || {
      state: "0",
    };
    const stateObj120 = this.hass.states[config.entities.pv1_state] || {
      state: "0",
    };
    const stateObj121 = this.hass.states[config.entities.pv2_state] || {
      state: "0",
    };
    const stateObj122 = this.hass.states[config.entities.pv3_state] || {
      state: "0",
    };
    const stateObj123 = this.hass.states[config.entities.pv4_state] || {
      state: "0",
    };
    const stateObj124 = this.hass.states[config.entities.pv1_max] || {
      state: "0",
    };
    const stateObj125 = this.hass.states[config.entities.pv2_max] || {
      state: "0",
    };
    //    const stateObj126 = this.hass.states[config.entities.bat1_name] || {state: "Bat 1",};
    //    const stateObj127 = this.hass.states[config.entities.bat2_name] || {state: "Bat 2",};
    //    const stateObj128 = this.hass.states[config.entities.bat3_name] || {state: "Bat 3",};
    //    const stateObj129 = this.hass.states[config.entities.bat4_name] || {state: "Bat 4",};

    //Set defaults
    let invert_aux = config?.load?.invert_aux || "no";
    let aux_power =
      invert_aux === "yes"
        ? parseInt(stateObj24.state) * -1
        : parseInt(stateObj24.state);
    let invert_grid = config?.grid?.invert_grid || "no";
    let grid_power =
      invert_grid === "yes"
        ? parseInt(stateObj15.state) * -1
        : parseInt(stateObj15.state);
    let inverter_modern = config?.inverter?.modern || "yes";
    let load_colour = config?.load?.colour || "#5fb6ad";
    let aux_colour = config?.load?.aux_colour || load_colour;
    let aux_off_colour = config?.load?.aux_off_colour || load_colour;
    let load_showdaily = config?.load?.show_daily || "no";
    let grid_colour = config?.grid?.colour || "#5490c2";
    let no_grid_colour = config?.grid?.no_grid_colour || "#a40013";
    let grid_show_noness = config?.grid?.show_nonessential || "yes";
    let grid_status = config?.entities?.grid_connected_status_194
      ? stateObj20.state
      : "on";
    let aux_status = config?.entities?.aux_connected_status
      ? stateObj47.state
      : "on";
    let load_frequency = config?.entities?.load_frequency_192
      ? stateObj6.state
      : 0;
    let inverter_voltage = config?.entities?.inverter_voltage_154
      ? stateObj5.state
      : 0;
    let inverter_current = config?.entities?.inverter_current_164
      ? stateObj7.state
      : 0;
    let battery_voltage = config?.entities?.battery_voltage_183
      ? stateObj11.state
      : 0;

    let noness_dual_load = config?.grid?.additional_loads;
    if (
      noness_dual_load !== "no" &&
      noness_dual_load !== "one" &&
      noness_dual_load !== "two"
    ) {
      noness_dual_load = "no";
    }

    let show_grid = config?.grid?.show_grid;
    if (show_grid !== "no" && show_grid !== "yes") {
      show_grid = "no";
    }

    let grid_showdailybuy = config?.grid?.show_daily_buy || "no";
    let grid_showdailysell = config?.grid?.show_daily_sell || "no";
    let battery_colour = config?.battery?.colour || "pink";
    let battery_showdaily = config?.battery?.show_daily || "no";
    let solar_colour = config?.solar?.colour || "orange";
    let solar_showdaily = config?.solar?.show_daily || "no";

    let show_aux = config?.load?.show_aux;
    if (show_aux !== "no" && show_aux !== "yes") {
      show_aux = "no";
    }

    let additional_load = config?.load?.additional_loads;
    if (
      additional_load !== "no" &&
      additional_load !== "one" &&
      additional_load !== "two" &&
      additional_load !== "three" &&
      additional_load !== "four"
    ) {
      additional_load = "no";
    }

    let aux_type = config?.load?.aux_type || "default"; //valid options are gen,inverter, default, gen, boiler, pump, aircon
    let nonessential_icon = config?.grid?.nonessential_icon || "default"; //valid options are default, oven, boiler, pump, aircon
    let load1_icon = config?.grid?.load1_icon || "default"; //valid options are default, oven, boiler, pump
    let load2_icon = config?.grid?.load2_icon || "default"; //valid options are default, oven, boiler, pump
    let load1e_icon = config?.load?.load1_icon || "default"; //valid options are boiler, aircon, pump
    let load2e_icon = config?.load?.load2_icon || "default"; //valid options are boiler, aircon, pump
    let load3_icon = config?.grid?.load3_icon || "default"; //valid options are default, oven, boiler, pump
    let load4_icon = config?.grid?.load4_icon || "default"; //valid options are default, oven, boiler, pump
    let load3e_icon = config?.load?.load3_icon || "default"; //valid options are boiler, aircon, pump
    let load4e_icon = config?.load?.load4_icon || "default"; //valid options are boiler, aircon, pump
    let remaining_solar = config.entities.remaining_solar
      ? parseFloat(stateObj36.state).toFixed(1)
      : "false";
    let font = config?.large_font || "no";
    let panel = config?.panel_mode || "no";
    let inverter_colour = config?.inverter?.colour || "grey";
    let useautarky = config?.inverter?.autarky || "power";
    let usetimer =
      config?.entities.use_timer_248 === "no" || !config?.entities.use_timer_248
        ? "no"
        : stateObj26.state;
    let priority =
      config?.entities.priority_load_243 === "no" ||
      !config?.entities.priority_load_243
        ? "no"
        : stateObj25.state;
    let battery_power =
      config?.battery?.invert_power === "yes"
        ? parseInt(stateObj13.state) * -1
        : parseInt(stateObj13.state);
    let height = config?.card_height || "396px"; //396px
    let bat_full = config?.battery?.full_capacity || "80";
    let bat_empty = config?.battery?.empty_capacity || "30";
    //   let width = config?.card_width || "100%";

    let battery1_power =
      config?.battery?.invert_power1 === "yes"
        ? parseInt(stateObj54.state) * -1
        : parseInt(stateObj54.state);
    let battery2_power =
      config?.battery?.invert_power2 === "yes"
        ? parseInt(stateObj57.state) * -1
        : parseInt(stateObj57.state);
    let battery3_power =
      config?.battery?.invert_power3 === "yes"
        ? parseInt(stateObj60.state) * -1
        : parseInt(stateObj60.state);
    let battery4_power =
      config?.battery?.invert_power4 === "yes"
        ? parseInt(stateObj51.state) * -1
        : parseInt(stateObj51.state);

    //totalsolar = pv1_power_186 + pv2_power_187 + pv3_power_188 + pv4_power_189
    let totalsolar =
      parseInt(parseFloat(stateObj8.state || 0).toFixed(0)) +
      parseInt(parseFloat(stateObj9.state || 0).toFixed(0)) +
      parseInt(parseFloat(stateObj31.state || 0).toFixed(0)) +
      parseInt(parseFloat(stateObj32.state || 0).toFixed(0));
    let total_pv = config?.entities?.pv_total
      ? parseInt(stateObj46.state)
      : totalsolar;

    let effsolar = parseInt(stateObj4.state) / 3.6;
    let wm2 = totalsolar / 18;
    let pvmaxold = "";
    let pvmax = "";
    if (totalsolar > pvmaxold) {
      pvmaxold = totalsolar;
    }
    pvmax = pvmaxold;

    //essential = inverter_power_175 + grid_power_169 - aux_power_166
    let essential =
      config?.entities.essential_power === "none" ||
      !config?.entities.essential_power
        ? parseInt(stateObj22.state) +
          parseInt(stateObj23.state) -
          parseInt(stateObj24.state)
        : parseInt(stateObj14.state);

    //nonessential = grid_ct_power_172 - grid_power_169
    let nonessential =
      config?.entities.nonessential_power === "none" ||
      !config?.entities.nonessential_power
        ? parseInt(stateObj15.state) - parseInt(stateObj23.state)
        : parseInt(stateObj34.state);

    //Timer entities
    const prog1 = {
      time: this.hass.states[config.entities.prog1_time] || { state: "" },
      capacity: this.hass.states[config.entities.prog1_capacity] || {
        state: "",
      },
      charge: this.hass.states[config.entities.prog1_charge] || { state: "" },
    };
    const prog2 = {
      time: this.hass.states[config.entities.prog2_time] || { state: "" },
      capacity: this.hass.states[config.entities.prog2_capacity] || {
        state: "",
      },
      charge: this.hass.states[config.entities.prog2_charge] || { state: "" },
    };
    const prog3 = {
      time: this.hass.states[config.entities.prog3_time] || { state: "" },
      capacity: this.hass.states[config.entities.prog3_capacity] || {
        state: "",
      },
      charge: this.hass.states[config.entities.prog3_charge] || { state: "" },
    };
    const prog4 = {
      time: this.hass.states[config.entities.prog4_time] || { state: "" },
      capacity: this.hass.states[config.entities.prog4_capacity] || {
        state: "",
      },
      charge: this.hass.states[config.entities.prog4_charge] || { state: "" },
    };
    const prog5 = {
      time: this.hass.states[config.entities.prog5_time] || { state: "" },
      capacity: this.hass.states[config.entities.prog5_capacity] || {
        state: "",
      },
      charge: this.hass.states[config.entities.prog5_charge] || { state: "" },
    };
    const prog6 = {
      time: this.hass.states[config.entities.prog6_time] || { state: "" },
      capacity: this.hass.states[config.entities.prog6_capacity] || {
        state: "",
      },
      charge: this.hass.states[config.entities.prog6_charge] || { state: "" },
    };

    let inverter_prog = {};
    if (
      !config.entities.use_timer_248 ||
      config.entities.use_timer_248 === "no" ||
      stateObj26.state === "off"
    ) {
      inverter_prog.show = "no";
    } else if (
      !config.entities.prog1_time ||
      !config.entities.prog2_time ||
      !config.entities.prog3_time ||
      !config.entities.prog4_time ||
      !config.entities.prog5_time ||
      !config.entities.prog6_time
    ) {
      inverter_prog.show = "no";
    } else {
      inverter_prog.show = "yes";

      const timer_now = new Date(); // Create a new Date object representing the current time

      const progTimes = [null, null, null, null, null, null];

      [prog1, prog2, prog3, prog4, prog5, prog6].forEach((prog, index) => {
        const [hours, minutes] = prog.time.state.split(":");
        progTimes[index] = new Date(timer_now.getTime());
        progTimes[index].setHours(hours);
        progTimes[index].setMinutes(minutes);
      });

      const [
        prog_time1,
        prog_time2,
        prog_time3,
        prog_time4,
        prog_time5,
        prog_time6,
      ] = progTimes;

      if (timer_now >= prog_time6 || timer_now < prog_time1) {
        assignInverterProgValues(prog6, config.entities.prog6_charge);
      } else if (timer_now >= prog_time1 && timer_now < prog_time2) {
        assignInverterProgValues(prog1, config.entities.prog1_charge);
      } else if (timer_now >= prog_time2 && timer_now < prog_time3) {
        assignInverterProgValues(prog2, config.entities.prog2_charge);
      } else if (timer_now >= prog_time3 && timer_now < prog_time4) {
        assignInverterProgValues(prog3, config.entities.prog3_charge);
      } else if (timer_now >= prog_time4 && timer_now < prog_time5) {
        assignInverterProgValues(prog4, config.entities.prog4_charge);
      } else if (timer_now >= prog_time5 && timer_now < prog_time6) {
        assignInverterProgValues(prog5, config.entities.prog5_charge);
      } else {
        inverter_prog.capacity = parseInt(config.battery.shutdown_soc);
        inverter_prog.entityID = "";
      }

      function assignInverterProgValues(prog, entityID) {
        if (
          prog.charge.state === "No Grid or Gen" ||
          prog.charge.state === "0" ||
          prog.charge.state === "off"
        ) {
          inverter_prog.charge = "none";
        } else {
          inverter_prog.charge = "both";
        }
        inverter_prog.capacity = parseInt(prog.capacity.state);
        inverter_prog.entityID = entityID;
      }
    }

    //calculate battery capacity
    let battery_capacity = "";
    if (battery_power > 0) {
      if (
        stateObj20.state === "off" ||
        inverter_prog.show === "no" ||
        parseInt(stateObj12.state) <= inverter_prog.capacity
      ) {
        battery_capacity = parseInt(config.battery.shutdown_soc);
      } else {
        battery_capacity = parseInt(inverter_prog.capacity);
      }
    } else if (battery_power < 0) {
      if (
        stateObj20.state === "off" ||
        inverter_prog.show === "no" ||
        parseInt(stateObj12.state) >= inverter_prog.capacity
      ) {
        battery_capacity = 100;
      } else if (parseInt(stateObj12.state) < inverter_prog.capacity) {
        battery_capacity = parseInt(inverter_prog.capacity);
      }
    }

    //calculate remaining battery time to charge or discharge
    let totalSeconds = 0;
    let formattedResultTime = "";
    let duration = "";
    let clock = new Date().toString().substring(0, 25);

    if (config.battery.energy !== "hidden") {
      if (battery_power === 0) {
        totalSeconds =
          ((((parseInt(stateObj12.state) - config.battery.shutdown_soc) / 100) *
            (config.battery.energy || 15960)) /
            1) *
          60 *
          60;
      } else if (battery_power > 0) {
        totalSeconds =
          ((((parseInt(stateObj12.state) - battery_capacity) / 100) *
            (config.battery.energy || 15960)) /
            battery_power) *
          60 *
          60;
      } else if (battery_power < 0) {
        totalSeconds =
          ((((battery_capacity - parseInt(stateObj12.state)) / 100) *
            config.battery.energy) /
            battery_power) *
          60 *
          60 *
          -1;
      }
      const currentTime = new Date(); // Create a new Date object representing the current time
      const durationMilliseconds = totalSeconds * 1000; // Convert the duration to milliseconds
      const resultTime = new Date(currentTime.getTime() + durationMilliseconds); // Add the duration in milliseconds
      const resultHours = resultTime.getHours(); // Get the hours component of the resulting time
      const resultMinutes = resultTime.getMinutes(); // Get the minutes component of the resulting time
      const formattedMinutes = resultMinutes.toString().padStart(2, "0");
      const formattedHours = resultHours.toString().padStart(2, "0");
      formattedResultTime = `${formattedHours}:${formattedMinutes}`;

      const days = Math.floor(totalSeconds / (60 * 60 * 24));
      const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      if (days > 0) {
        duration += `${days} days, `;
      }
      if (hours > 0 || days > 0) {
        duration += `${hours} hrs, `;
      }
      duration += `${minutes} min`;
    }

    let float =
      -2 <= parseInt(stateObj35.state) &&
      parseInt(stateObj35.state) <= 2 &&
      parseInt(stateObj12.state) >= 95
        ? "True"
        : "False";

    //Set Inverter Status Message and dot
    let inverterStateColour = "";
    let inverterStateMsg = "";

    switch (stateObj21.state) {
      case "0":
      case "standby":
        inverterStateColour = "blue";
        inverterStateMsg = "Standby";
        break;
      case "1":
      case "selftest":
        inverterStateColour = "yellow";
        inverterStateMsg = "Selftest";
        break;
      case "2":
      case "normal":
      case "ok":
        inverterStateColour = "green";
        inverterStateMsg = "Normal";
        break;
      case "3":
      case "alarm":
        inverterStateColour = "orange";
        inverterStateMsg = "Alarm";
        break;
      case "4":
      case "fault":
        inverterStateColour = "red";
        inverterStateMsg = "Fault";
        break;
      default:
        if (
          config?.entities?.inverter_status_59 === "none" ||
          !config?.entities?.inverter_status_59
        ) {
          inverterStateColour = "transparent";
          inverterStateMsg = "";
        } else {
          inverterStateColour = "transparent";
          inverterStateMsg = "Status";
        }
        break;
    }

    //Autarky in Percent = Home Production / Home Consumption
    //Ratio in Percent = Home Consumption / Home Production
    //let production_e = parseFloat(stateObj4.state) + parseFloat(stateObj.state);
    //let consumption_e = parseFloat(stateObj2.state) + parseFloat(stateObj1.state);
    let production_e =
      (isNaN(parseFloat(stateObj4.state)) ? 0 : parseFloat(stateObj4.state)) +
      (isNaN(parseFloat(stateObj.state)) ? 0 : parseFloat(stateObj.state));
    let consumption_e =
      (isNaN(parseFloat(stateObj2.state)) ? 0 : parseFloat(stateObj2.state)) +
      (isNaN(parseFloat(stateObj1.state)) ? 0 : parseFloat(stateObj1.state));
    let Autarky =
      consumption_e != 0
        ? Math.min(Math.round((production_e * 100) / consumption_e), 100)
        : 0;
    let Ratio =
      production_e != 0
        ? Math.min(Math.round((consumption_e * 100) / production_e), 100)
        : 0;

    let production_p =
      parseInt(totalsolar) +
      parseInt(`${battery_power > 0 ? battery_power : 0}`) +
      parseInt(`${aux_power < 0 ? aux_power * -1 : 0}`);
    let consumption_p =
      parseInt(essential) +
      parseInt(nonessential) +
      parseInt(`${aux_power > 0 ? aux_power : 0}`) +
      parseInt(`${battery_power < 0 ? battery_power * -1 : 0}`);
    let Autarkyp =
      consumption_p != 0
        ? Math.min(Math.round((production_p * 100) / consumption_p), 100)
        : 0;
    let Ratiop =
      production_p != 0
        ? Math.min(Math.round((consumption_p * 100) / production_p), 100)
        : 0;

    //Calculate power use animation speeds depending on Inverter size
    let solar_animation_speed = config?.solar?.animation_speed || "9";
    if (config && config.solar && config.solar.animation_speed) {
      let speed =
        config.solar.animation_speed -
        (config.solar.animation_speed - 1) *
          (totalsolar / (config.solar.max_power || totalsolar));
      solar_animation_speed = `${speed >= 1 ? speed : 1}`;
    }
    let battery_animation_speed = config?.battery?.animation_speed || "6";
    if (config && config.battery && config.battery.animation_speed) {
      let speed =
        config.battery.animation_speed -
        (config.battery.animation_speed - 1) *
          (`${battery_power < "0" ? battery_power * -1 : battery_power}` /
            (config.battery.max_power ||
              `${battery_power < "0" ? battery_power * -1 : battery_power}`));
      battery_animation_speed = `${speed >= 1 ? speed : 1}`;
    }

    let load_animation_speed = config?.load?.animation_speed || "4";
    if (config && config.load && config.load.animation_speed) {
      let speed =
        config.load.animation_speed -
        (config.load.animation_speed - 1) *
          (essential / (config.load.max_power || essential));
      load_animation_speed = `${speed >= 1 ? speed : 1}`;
    }

    let aux_animation_speed = config?.load?.animation_speed || "4";
    if (config && config.load && config.load.animation_speed) {
      let speed =
        config.load.animation_speed -
        (config.load.animation_speed - 1) *
          (`${
            parseInt(stateObj24.state) < "0"
              ? parseInt(stateObj24.state) * -1
              : parseInt(stateObj24.state)
          }` /
            (config.load.max_power ||
              `${
                parseInt(stateObj24.state) < "0"
                  ? parseInt(stateObj24.state) * -1
                  : parseInt(stateObj24.state)
              }`));
      aux_animation_speed = `${speed >= 1 ? speed : 1}`;
    }

    let grid_animation_speed = config?.grid?.animation_speed || "8";
    if (config && config.grid && config.grid.animation_speed) {
      let speed =
        config.grid.animation_speed -
        (config.grid.animation_speed - 1) *
          (`${
            parseInt(stateObj15.state) < "0"
              ? parseInt(stateObj15.state) * -1
              : parseInt(stateObj15.state)
          }` /
            (config.grid.max_power ||
              `${
                parseInt(stateObj15.state) < "0"
                  ? parseInt(stateObj15.state) * -1
                  : parseInt(stateObj15.state)
              }`));
      grid_animation_speed = `${speed >= 1 ? speed : 1}`;
    }

    let ne_animation_speed = config?.grid?.animation_speed || "4";
    if (config && config.grid && config.grid.animation_speed) {
      let speed =
        config.grid.animation_speed -
        (config.grid.animation_speed - 1) *
          (nonessential / (config.grid.max_power || nonessential));
      ne_animation_speed = `${speed >= 1 ? speed : 1}`;
    }

    if (config.cardstyle === "ju") {
      return html`
        <ha-card>
        <style>
        .essload-icon {
          color: ${load_colour} !important;
          --mdc-icon-size: 20px;
        }
        .essload1-icon {
          color: ${load_colour} !important;
          --mdc-icon-size: 36px;
        }
        .aux-icon {
          color: ${aux_colour} !important;
          --mdc-icon-size: 70px;
        }
        .aux-off-icon {
          color: ${aux_off_colour} !important;
          --mdc-icon-size: 70px;
        }
        .nonessload-icon {
          color: ${grid_colour} !important;
          --mdc-icon-size: 32px;
        }
        .noness-icon {
          color: ${grid_colour} !important;
          --mdc-icon-size: 70px;
        }
        </style>
        <div class="container card">
        
        <!--
        <svg viewBox="0 0 900 406" preserveAspectRatio="xMidYMid meet" height="40%" width="50%"  xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
        -->
        <svg viewBox="-0.5 ${config.show_solar === "no" ? 145.33 : -0.5} 483 ${
        config.show_solar === "no" ? 270.67 : 406
      }" preserveAspectRatio="xMidYMid meet" height="${
        panel === "no"
          ? `${config.show_solar === "no" ? "246px" : `${height}`}`
          : `${config.show_solar === "no" ? "75%" : "100%"}`
      }" width="100%"  xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
           <svg x="89%" y="94%" width="10%" height="10%" viewBox="0 0 570.118 82.033" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="12pt" stroke="#000" stroke-width="0.5mm" fill="#fff" style="stroke:#000;stroke-width:0.1mm;fill:#000"><path fill="#0589b6" d="M 149.317 75 L 148.145 72.559 A 41 41 0 0 1 136.909 76.175 A 36.833 36.833 0 0 1 130.957 76.66 A 33.385 33.385 0 0 1 118.032 74.217 A 31.364 31.364 0 0 1 107.715 67.187 A 32.983 32.983 0 0 1 98.07 45.589 A 44.298 44.298 0 0 1 97.949 42.285 A 42.351 42.351 0 0 1 99.231 31.599 A 31.282 31.282 0 0 1 106.348 18.262 Q 114.649 9.277 128.125 9.277 A 28.858 28.858 0 0 1 140.574 11.928 A 28.532 28.532 0 0 1 148.731 17.773 A 32.037 32.037 0 0 1 157.235 34.245 A 46.425 46.425 0 0 1 158.106 43.457 Q 158.106 49.679 156.289 53.644 A 11.242 11.242 0 0 1 151.66 58.887 A 8.065 8.065 0 0 1 148.784 59.961 A 7.656 7.656 0 0 1 147.559 60.059 Q 142.578 59.863 142.481 54.102 L 142.481 36.328 A 17.659 17.659 0 0 0 141.611 30.827 Q 139.662 25.173 133.354 23.576 A 22.798 22.798 0 0 0 127.93 22.949 A 33.441 33.441 0 0 0 123.345 23.239 Q 116.956 24.127 114.453 27.734 Q 113.623 29.118 113.577 30.414 A 4.281 4.281 0 0 0 113.574 30.566 Q 114.113 33.26 116.551 33.807 A 5.359 5.359 0 0 0 116.992 33.887 A 5.022 5.022 0 0 0 118.572 33.655 Q 120.084 33.155 120.77 31.578 A 5.567 5.567 0 0 0 120.996 30.957 A 17.975 17.975 0 0 1 121.051 30.743 Q 121.114 30.504 121.203 30.187 A 64.392 64.392 0 0 1 121.289 29.883 A 11.143 11.143 0 0 1 121.747 28.381 Q 122.534 26.367 123.926 25.781 A 6.11 6.11 0 0 1 125.41 25.325 Q 126.128 25.195 126.953 25.195 Q 135.031 25.39 135.156 34.216 A 19.409 19.409 0 0 1 135.156 34.277 L 135.156 39.844 A 80.694 80.694 0 0 0 127.996 40.174 Q 116.479 41.268 113.018 45.968 A 7.78 7.78 0 0 0 112.793 46.289 A 9.43 9.43 0 0 0 111.329 49.956 A 12.823 12.823 0 0 0 111.133 52.246 A 12.334 12.334 0 0 0 111.665 56.002 Q 112.876 59.797 116.836 61.439 A 13.059 13.059 0 0 0 117.871 61.816 A 15.566 15.566 0 0 0 122.168 62.402 Q 128.711 62.402 133.008 57.715 A 11.064 11.064 0 0 0 134.45 55.807 A 9.442 9.442 0 0 0 135.059 54.59 A 8.169 8.169 0 0 0 139.337 60.733 A 13.247 13.247 0 0 0 142.285 61.914 A 15.434 15.434 0 0 0 145.668 62.472 A 18.015 18.015 0 0 0 146.68 62.5 A 17.714 17.714 0 0 0 153.472 61.237 A 16.489 16.489 0 0 0 159.961 56.348 Q 164.453 50.977 164.453 42.48 Q 164.453 23.34 151.172 13.477 A 35.372 35.372 0 0 0 132.534 6.68 A 44.712 44.712 0 0 0 129.004 6.543 A 46.45 46.45 0 0 0 116.082 8.239 A 33.436 33.436 0 0 0 97.949 20.898 A 38.217 38.217 0 0 0 90.822 40.308 A 48.58 48.58 0 0 0 90.625 44.727 A 36.456 36.456 0 0 0 92.887 57.8 A 32.495 32.495 0 0 0 102.442 71.094 A 38.239 38.239 0 0 0 126.36 80.14 A 48.514 48.514 0 0 0 128.223 80.176 A 45.502 45.502 0 0 0 149.317 75 Z M 183.887 24.414 L 191.211 24.414 L 191.211 21.973 L 171.875 21.973 L 171.875 24.414 L 176.27 24.414 L 188.477 57.129 Q 190.527 62.695 192.676 63.574 Q 193.561 63.896 194.777 63.953 A 11.503 11.503 0 0 0 195.313 63.965 L 197.266 63.965 L 205.762 38.379 L 212.305 57.129 Q 214.015 62.17 215.809 63.394 A 2.62 2.62 0 0 0 216.113 63.574 Q 216.777 63.84 217.757 63.925 A 11.519 11.519 0 0 0 218.75 63.965 L 220.313 63.965 L 232.129 27.93 A 13.268 13.268 0 0 1 232.575 26.731 Q 233.405 24.817 234.473 24.512 A 4.931 4.931 0 0 1 235.053 24.433 A 6.304 6.304 0 0 1 235.547 24.414 Q 236.529 24.414 237.124 24.128 A 1.497 1.497 0 0 0 237.988 23.047 A 4.931 4.931 0 0 0 238.067 22.467 A 6.304 6.304 0 0 0 238.086 21.973 L 223.633 21.973 L 223.633 24.414 L 230.469 24.414 L 219.629 58.105 L 208.203 24.414 L 215.039 24.414 L 215.039 21.973 L 200 21.973 L 204.395 34.375 L 196.289 58.398 L 183.887 24.414 Z M 437.109 61.035 L 432.227 61.035 L 432.227 39.941 A 20.105 20.105 0 0 1 432.82 34.893 A 12.857 12.857 0 0 1 438.379 27.051 A 10.394 10.394 0 0 1 441.131 25.756 A 8.879 8.879 0 0 1 443.652 25.391 Q 448.828 25.391 451.276 29.592 A 11.814 11.814 0 0 1 451.953 30.957 A 14.572 14.572 0 0 1 452.938 35.002 A 17.926 17.926 0 0 1 453.027 36.816 L 453.027 55.176 Q 453.027 58.382 451.933 59.748 A 2.598 2.598 0 0 1 450.879 60.547 A 5.838 5.838 0 0 1 450.015 60.772 Q 448.63 61.035 446.192 61.035 L 446.192 63.477 L 467.676 63.477 A 4.699 4.699 0 0 0 467.611 62.657 Q 467.367 61.287 466.211 61.133 Q 465.92 61.06 465.519 61.041 A 6.178 6.178 0 0 0 465.234 61.035 L 460.352 61.035 L 460.352 36.816 Q 460.352 26.172 453.32 22.363 Q 450.586 20.996 447.461 20.996 A 16.187 16.187 0 0 0 439.9 22.753 A 16.609 16.609 0 0 0 435.352 26.27 Q 433.301 28.516 432.227 31.348 L 432.227 0 L 417.578 0 L 417.578 2.441 L 424.902 2.441 L 424.902 55.176 A 12.133 12.133 0 0 1 424.781 56.968 Q 424.454 59.146 423.249 60.073 A 3.109 3.109 0 0 1 422.363 60.547 A 6.814 6.814 0 0 1 421.424 60.777 Q 419.991 61.035 417.578 61.035 L 417.578 63.477 L 439.551 63.477 A 4.699 4.699 0 0 0 439.486 62.657 Q 439.242 61.287 438.086 61.133 Q 437.795 61.06 437.394 61.041 A 6.178 6.178 0 0 0 437.109 61.035 Z M 348.633 61.035 L 344.238 61.035 L 344.238 46.582 L 349.609 41.602 L 363.379 63.477 L 376.367 63.477 A 4.699 4.699 0 0 0 376.302 62.657 Q 376.058 61.287 374.902 61.133 Q 374.611 61.06 374.211 61.041 A 6.178 6.178 0 0 0 373.926 61.035 L 370.41 61.035 L 354.688 36.816 L 363.867 28.223 Q 367.087 25.187 368.834 24.664 A 3.005 3.005 0 0 1 369.043 24.609 A 6.339 6.339 0 0 1 369.928 24.457 A 8.487 8.487 0 0 1 370.801 24.414 A 4.699 4.699 0 0 0 371.62 24.349 Q 372.991 24.105 373.145 22.949 Q 373.242 22.461 373.242 21.973 L 356.641 21.973 L 356.641 24.414 L 363.965 24.414 L 344.238 42.676 L 344.238 0 L 329.59 0 L 329.59 2.441 L 336.914 2.441 L 336.914 55.176 A 12.133 12.133 0 0 1 336.793 56.968 Q 336.466 59.146 335.261 60.073 A 3.109 3.109 0 0 1 334.375 60.547 A 6.814 6.814 0 0 1 333.435 60.777 Q 332.002 61.035 329.59 61.035 L 329.59 63.477 L 351.074 63.477 A 4.699 4.699 0 0 0 351.009 62.657 Q 350.765 61.287 349.609 61.133 Q 349.318 61.06 348.918 61.041 A 6.178 6.178 0 0 0 348.633 61.035 Z M 79.199 61.035 L 74.317 61.035 L 74.317 21.973 L 58.984 21.973 L 58.984 24.414 L 66.992 24.414 L 66.992 45.508 A 19.81 19.81 0 0 1 66.391 50.543 A 13.119 13.119 0 0 1 60.84 58.398 A 11.158 11.158 0 0 1 58.101 59.775 A 9.205 9.205 0 0 1 55.176 60.254 A 11.494 11.494 0 0 1 51.495 59.709 Q 47.936 58.508 46.548 54.666 A 13.989 13.989 0 0 1 45.899 52.051 A 19.35 19.35 0 0 1 45.731 50.266 A 23.303 23.303 0 0 1 45.703 49.121 L 45.703 21.973 L 30.859 21.973 L 30.859 24.414 L 38.379 24.414 L 38.379 47.656 Q 38.466 62.544 49.497 64.237 A 19.69 19.69 0 0 0 52.344 64.453 A 14.419 14.419 0 0 0 63.299 59.728 A 18.733 18.733 0 0 0 64.356 58.496 Q 66.113 56.25 67.188 53.516 L 67.871 63.477 L 81.641 63.477 A 4.699 4.699 0 0 0 81.576 62.657 Q 81.332 61.287 80.176 61.133 Q 79.884 61.06 79.484 61.041 A 6.178 6.178 0 0 0 79.199 61.035 Z M 544.336 79.59 L 537.5 79.59 L 537.5 59.375 Q 542.871 64.063 549.902 64.453 A 18.635 18.635 0 0 0 563.71 58.702 A 23.099 23.099 0 0 0 564.453 57.91 A 22.065 22.065 0 0 0 569.827 46.046 A 30.063 30.063 0 0 0 570.117 41.797 A 32.133 32.133 0 0 0 569.486 35.216 Q 568.147 28.819 563.965 24.902 A 14.903 14.903 0 0 0 553.898 21 A 19.11 19.11 0 0 0 553.516 20.996 Q 544.043 20.996 539.356 28.516 Q 538.184 30.469 537.402 32.617 L 536.914 21.973 L 522.852 21.973 L 522.852 24.414 L 530.176 24.414 L 530.176 73.73 A 12.133 12.133 0 0 1 530.054 75.523 Q 529.728 77.7 528.522 78.628 A 3.109 3.109 0 0 1 527.637 79.102 A 6.814 6.814 0 0 1 526.697 79.332 Q 525.264 79.59 522.852 79.59 L 522.852 82.031 L 546.777 82.031 A 4.699 4.699 0 0 0 546.712 81.212 Q 546.468 79.842 545.313 79.688 Q 545.021 79.615 544.621 79.596 A 6.178 6.178 0 0 0 544.336 79.59 Z M 408.887 20.41 L 408.887 32.617 L 406.348 32.617 Q 406.195 25.571 400.155 23.991 A 15.539 15.539 0 0 0 396.387 23.535 A 19.05 19.05 0 0 0 393.271 23.769 Q 391.686 24.033 390.486 24.595 A 6.038 6.038 0 0 0 387.305 27.832 A 6.287 6.287 0 0 0 386.817 30.273 Q 386.817 33.496 390.383 35.971 A 18.492 18.492 0 0 0 392.871 37.402 A 25.805 25.805 0 0 0 393.652 37.775 Q 394.971 38.379 397.168 39.258 A 67.61 67.61 0 0 1 400.794 40.851 Q 405.737 43.213 407.715 45.41 A 10.681 10.681 0 0 1 410.547 52.832 Q 410.547 58.998 405.443 61.96 A 16.241 16.241 0 0 1 402.149 63.379 A 21.055 21.055 0 0 1 397.213 64.368 A 25.362 25.362 0 0 1 395.117 64.453 Q 388.086 64.355 382.91 60.938 A 7.784 7.784 0 0 1 382.858 61.88 Q 382.652 63.556 381.641 63.867 Q 381.055 63.965 380.274 63.965 L 380.274 49.121 L 383.008 49.121 A 21.648 21.648 0 0 0 383.56 53.88 Q 385.175 60.53 391.493 61.609 A 15.416 15.416 0 0 0 393.945 61.816 A 17.142 17.142 0 0 0 397.171 61.535 Q 401.297 60.743 403.027 57.715 Q 403.906 56.25 403.906 54.492 A 5.757 5.757 0 0 0 402.463 50.739 Q 400.985 48.962 397.994 47.483 A 23.826 23.826 0 0 0 397.949 47.461 Q 396.727 46.803 393.967 45.602 A 161.457 161.457 0 0 0 393.75 45.508 Q 385.742 42.188 383.106 39.258 A 11.037 11.037 0 0 1 380.274 31.738 Q 380.274 26.481 384.792 23.661 A 15.766 15.766 0 0 1 387.695 22.266 A 20.528 20.528 0 0 1 393.515 21.048 A 24.19 24.19 0 0 1 395.117 20.996 A 25.545 25.545 0 0 1 400.597 21.558 A 19.377 19.377 0 0 1 406.25 23.73 Q 406.25 20.898 407.617 20.508 A 7.146 7.146 0 0 1 408.388 20.424 A 8.832 8.832 0 0 1 408.887 20.41 Z M 312.988 61.035 L 305.957 61.035 L 305.957 41.602 A 23.402 23.402 0 0 1 306.775 35.254 A 17.536 17.536 0 0 1 311.426 27.344 Q 313.112 25.735 314.377 25.328 A 2.771 2.771 0 0 1 315.039 25.195 A 2.428 2.428 0 0 1 316.484 25.697 Q 317.265 26.263 317.97 27.468 A 10.411 10.411 0 0 1 318.067 27.637 A 15.603 15.603 0 0 0 318.788 28.79 Q 319.544 29.879 320.251 30.385 A 2.443 2.443 0 0 0 320.996 30.762 A 3.69 3.69 0 0 0 322.15 30.957 A 3.522 3.522 0 0 0 322.168 30.957 A 4.546 4.546 0 0 0 323.646 30.733 Q 325.317 30.161 325.879 28.125 A 3.69 3.69 0 0 0 326.074 26.971 A 3.522 3.522 0 0 0 326.074 26.953 A 6.396 6.396 0 0 0 325.738 24.805 Q 324.846 22.292 321.582 21.582 A 10.169 10.169 0 0 0 320.4 21.414 A 8.438 8.438 0 0 0 319.727 21.387 Q 313.867 21.387 309.277 26.367 Q 307.129 28.711 305.859 31.641 L 305.469 21.973 L 291.309 21.973 L 291.309 24.414 L 298.633 24.414 L 298.633 55.176 A 12.133 12.133 0 0 1 298.511 56.968 Q 298.185 59.146 296.979 60.073 A 3.109 3.109 0 0 1 296.094 60.547 A 6.814 6.814 0 0 1 295.154 60.777 Q 293.721 61.035 291.309 61.035 L 291.309 63.477 L 315.43 63.477 A 4.699 4.699 0 0 0 315.365 62.657 Q 315.121 61.287 313.965 61.133 Q 313.674 61.06 313.273 61.041 A 6.178 6.178 0 0 0 312.988 61.035 Z M 21.289 21.973 L 6.152 21.973 L 6.152 24.414 L 13.965 24.414 L 13.965 70.117 A 36.055 36.055 0 0 1 13.749 73.187 Q 13.005 79.51 9.961 79.59 A 2.279 2.279 0 0 1 7.964 78.485 Q 7.565 77.883 7.324 76.953 Q 6.59 74.343 5.924 73.436 A 1.808 1.808 0 0 0 5.664 73.145 A 3.445 3.445 0 0 0 3.711 72.559 Q 1.001 72.559 0.213 74.815 A 4.827 4.827 0 0 0 0.098 75.195 Q 0 75.684 0 76.074 A 4.784 4.784 0 0 0 1.94 79.954 Q 2.683 80.549 3.71 81.033 A 12.331 12.331 0 0 0 4.199 81.25 Q 6.152 82.031 8.203 82.031 Q 14.942 82.031 18.652 75.977 A 18.175 18.175 0 0 0 20.671 70.747 Q 21.289 68.01 21.289 64.746 L 21.289 21.973 Z M 263.379 20.996 A 22.374 22.374 0 0 0 254.908 22.557 A 20.755 20.755 0 0 0 247.754 27.441 A 20.284 20.284 0 0 0 242.015 41.186 A 26.594 26.594 0 0 0 241.992 42.285 A 26.611 26.611 0 0 0 243.042 49.978 A 19.554 19.554 0 0 0 250.977 60.742 A 21.097 21.097 0 0 0 263.086 64.453 A 21.669 21.669 0 0 0 271.412 62.895 A 20.296 20.296 0 0 0 278.613 57.812 Q 284.277 51.758 284.277 42.676 A 26.344 26.344 0 0 0 283.3 35.284 A 19.01 19.01 0 0 0 275.195 24.414 Q 269.824 20.996 263.379 20.996 Z M 495.508 20.996 A 22.374 22.374 0 0 0 487.036 22.557 A 20.755 20.755 0 0 0 479.883 27.441 A 20.284 20.284 0 0 0 474.144 41.186 A 26.594 26.594 0 0 0 474.121 42.285 A 26.611 26.611 0 0 0 475.171 49.978 A 19.554 19.554 0 0 0 483.106 60.742 A 21.097 21.097 0 0 0 495.215 64.453 A 21.669 21.669 0 0 0 503.541 62.895 A 20.296 20.296 0 0 0 510.742 57.812 Q 516.406 51.758 516.406 42.676 A 26.344 26.344 0 0 0 515.429 35.284 A 19.01 19.01 0 0 0 507.324 24.414 Q 501.953 20.996 495.508 20.996 Z M 250.69 36.619 A 42.481 42.481 0 0 0 250.293 42.676 A 45.436 45.436 0 0 0 250.433 46.321 A 34.318 34.318 0 0 0 250.977 50.293 Q 252.683 58.167 257.695 60.75 A 12.239 12.239 0 0 0 263.379 62.012 A 13.437 13.437 0 0 0 266.992 61.523 A 10.262 10.262 0 0 0 270.867 59.311 Q 274.521 55.983 275.562 48.708 A 45.562 45.562 0 0 0 275.977 42.285 Q 275.977 39.453 275.684 37.109 A 31.555 31.555 0 0 0 275.326 34.917 Q 273.786 27.255 268.848 24.707 A 12.403 12.403 0 0 0 263.086 23.438 A 13.043 13.043 0 0 0 258.594 24.219 A 10.633 10.633 0 0 0 255.587 26.036 Q 251.743 29.341 250.69 36.619 Z M 482.819 36.619 A 42.481 42.481 0 0 0 482.422 42.676 A 45.436 45.436 0 0 0 482.562 46.321 A 34.318 34.318 0 0 0 483.106 50.293 Q 484.812 58.167 489.824 60.75 A 12.239 12.239 0 0 0 495.508 62.012 A 13.437 13.437 0 0 0 499.121 61.523 A 10.262 10.262 0 0 0 502.996 59.311 Q 506.65 55.983 507.691 48.708 A 45.562 45.562 0 0 0 508.106 42.285 Q 508.106 39.453 507.813 37.109 A 31.555 31.555 0 0 0 507.455 34.917 Q 505.915 27.255 500.977 24.707 A 12.403 12.403 0 0 0 495.215 23.438 A 13.043 13.043 0 0 0 490.723 24.219 A 10.633 10.633 0 0 0 487.716 26.036 Q 483.872 29.341 482.819 36.619 Z M 555.739 26.307 A 9.929 9.929 0 0 0 550.391 24.902 A 10.657 10.657 0 0 0 543.945 27.051 A 14.193 14.193 0 0 0 539.483 32.794 Q 538.383 35.267 537.864 38.436 A 38.461 38.461 0 0 0 537.402 44.629 Q 537.402 50.098 538.867 54.102 A 16.086 16.086 0 0 0 540.275 57.094 Q 543.29 62.012 549.219 62.012 A 12.853 12.853 0 0 0 549.383 62.011 A 11.131 11.131 0 0 0 554.102 60.937 Q 560.008 58.022 561.393 48.923 A 41.047 41.047 0 0 0 561.817 42.773 A 40.863 40.863 0 0 0 561.666 39.191 A 30.452 30.452 0 0 0 561.133 35.547 A 26.565 26.565 0 0 0 560.867 34.408 Q 559.36 28.557 555.739 26.307 Z M 135.156 42.285 L 135.156 49.121 A 15.854 15.854 0 0 1 133.655 53.182 A 11.456 11.456 0 0 1 128.711 58.008 A 9.56 9.56 0 0 1 126.88 58.667 A 7.521 7.521 0 0 1 125.098 58.887 A 6.215 6.215 0 0 1 122.583 58.403 Q 120.32 57.413 119.336 54.395 A 11.654 11.654 0 0 1 118.75 50.699 A 12.647 12.647 0 0 1 118.75 50.684 A 6.682 6.682 0 0 1 122.625 44.474 Q 125.362 42.998 130.033 42.537 A 38.183 38.183 0 0 1 130.664 42.48 A 48.131 48.131 0 0 1 133.997 42.297 A 54.521 54.521 0 0 1 135.156 42.285 Z M 22.266 7.715 A 5.973 5.973 0 0 0 21.924 5.639 Q 21.338 4.048 19.749 3.106 A 6.843 6.843 0 0 0 19.238 2.832 A 6.672 6.672 0 0 0 18.091 2.466 A 5.163 5.163 0 0 0 16.992 2.344 A 5.777 5.777 0 0 0 14.873 2.713 Q 13.395 3.291 12.482 4.775 A 6.97 6.97 0 0 0 12.109 5.469 A 5.368 5.368 0 0 0 11.621 7.715 Q 11.621 11.018 14.314 12.444 A 6.836 6.836 0 0 0 14.844 12.695 Q 15.918 13.086 16.992 13.086 A 5.745 5.745 0 0 0 19.015 12.749 Q 20.859 12.061 21.777 9.961 A 5.368 5.368 0 0 0 22.266 7.715 Z" vector-effect="non-scaling-stroke"/></g></svg>
           <svg version="1.0" xmlns="http://www.w3.org/2000/svg" x="1%" y="1%"  width="33.75pt" height="22.5pt" class="${
             inverter_modern === "multi_rs" ? "" : "st12"
           }" viewBox="0 0 300.000000 194.000000"  preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,194.000000) scale(0.100000,-0.100000)" fill="#2a8ae5" stroke="none"> <path d="M850 1830 c-69 -12 -129 -48 -200 -120 -92 -92 -162 -251 -190 -425 -5 -33 -16 -103 -25 -155 -20 -123 -13 -183 25 -210 39 -28 74 -26 99 6 17 22 21 42 22 113 1 97 9 153 38 261 44 163 94 263 135 274 16 4 36 27 59 68 19 35 56 86 81 113 67 73 56 93 -44 75z"/> <path d="M468 1816 c-156 -56 -252 -180 -321 -416 -19 -67 -66 -359 -67 -418 0 -46 58 -107 92 -97 41 12 55 43 62 133 12 164 65 390 107 458 10 17 19 38 19 45 0 16 55 77 135 150 75 69 136 139 130 150 -9 13 -114 10 -157 -5z"/> <path d="M1110 1805 c-105 -45 -193 -138 -241 -256 -15 -36 -31 -74 -37 -85 -27 -50 -60 -282 -61 -430 -1 -82 1 -93 22 -112 27 -25 55 -28 82 -8 19 14 19 16 49 251 14 108 56 269 76 289 6 6 10 18 10 28 0 22 64 95 91 103 11 4 28 23 39 43 40 73 58 99 98 142 22 25 39 47 37 51 -10 16 -113 5 -165 -16z"/> <path d="M1505 1821 c-120 -22 -217 -108 -288 -254 -24 -51 -47 -112 -51 -136 -4 -24 -10 -49 -14 -55 -30 -47 -54 -401 -30 -446 15 -27 37 -35 73 -26 31 8 36 24 51 156 16 156 40 283 58 319 9 16 16 39 16 49 0 11 9 31 20 45 12 14 26 40 31 57 11 31 45 48 73 37 31 -12 108 -213 126 -327 7 -41 14 -82 17 -90 3 -8 9 -99 13 -203 8 -176 21 -257 40 -257 17 0 29 67 35 185 5 103 10 126 32 167 l26 48 -13 107 c-7 60 -18 119 -25 133 -7 14 -16 47 -19 73 -8 51 -51 175 -67 192 -5 5 -9 21 -9 36 0 28 15 39 56 39 34 0 126 -89 163 -157 42 -77 81 -214 88 -310 4 -58 12 -92 27 -115 28 -45 56 -107 56 -124 0 -27 18 -14 24 18 3 17 18 56 32 86 25 53 26 59 15 131 -19 133 -39 224 -60 279 -12 29 -21 60 -21 69 0 22 -87 153 -124 186 -57 51 -153 88 -236 92 -41 2 -93 0 -115 -4z"/> <path d="M2992 1605 c0 -16 2 -22 5 -12 2 9 2 23 0 30 -3 6 -5 -1 -5 -18z"/> <path d="M1357 1228 c-3 -13 -9 -77 -13 -143 -6 -103 -11 -128 -35 -175 -32 -65 -31 -108 3 -270 11 -52 24 -117 30 -145 5 -27 13 -54 18 -60 4 -5 15 -34 24 -62 10 -29 22 -55 27 -58 5 -4 9 -17 9 -30 0 -91 -188 41 -242 170 -34 82 -67 202 -73 274 -6 55 -16 90 -44 144 -40 79 -57 92 -67 50 -4 -15 -15 -40 -25 -55 -23 -32 -23 -57 -3 -173 9 -49 19 -112 23 -140 4 -27 14 -65 24 -84 9 -19 17 -41 17 -50 1 -20 47 -114 82 -165 30 -43 150 -125 185 -126 12 0 25 -4 28 -10 10 -16 150 -12 208 6 80 24 117 45 168 96 55 56 130 200 154 298 29 118 33 144 44 285 14 183 1 235 -60 235 -44 0 -59 -33 -69 -152 -12 -132 -37 -277 -54 -303 -7 -11 -16 -37 -19 -58 -3 -20 -15 -50 -26 -66 -12 -16 -21 -36 -21 -45 0 -21 -44 -48 -71 -44 -16 2 -31 19 -50 58 -41 81 -79 185 -79 215 0 14 -6 56 -14 93 -8 37 -17 144 -21 238 -6 170 -20 264 -41 271 -7 2 -14 -6 -17 -19z"/> <path d="M2140 1020 c-11 -11 -20 -26 -21 -32 -1 -22 -17 -169 -28 -261 -6 -49 -17 -101 -25 -115 -7 -15 -16 -43 -20 -62 -8 -47 -63 -151 -89 -170 -39 -29 -82 -77 -107 -120 -14 -24 -46 -67 -72 -94 -26 -28 -48 -54 -48 -58 -1 -31 187 20 261 71 45 29 129 127 129 148 0 6 6 16 13 22 8 6 19 30 26 53 7 24 17 48 22 54 21 26 54 217 68 389 8 101 7 124 -6 150 -9 16 -21 33 -27 37 -20 14 -56 8 -76 -12z"/> <path d="M2470 1027 c-29 -15 -39 -54 -39 -165 -1 -120 -63 -360 -114 -440 -15 -24 -40 -49 -55 -54 -19 -8 -36 -29 -57 -71 -17 -34 -55 -86 -92 -124 -35 -35 -61 -69 -57 -75 10 -15 96 -1 171 29 81 32 173 120 224 215 43 79 94 231 103 308 4 30 11 82 17 115 29 169 24 237 -21 260 -35 18 -48 18 -80 2z"/> <path d="M2801 1027 c-6 -8 -15 -57 -21 -110 -5 -53 -17 -135 -25 -183 -8 -48 -15 -99 -15 -113 0 -15 -6 -35 -13 -46 -7 -11 -19 -40 -26 -64 -19 -67 -106 -193 -152 -222 -47 -28 -149 -141 -149 -163 0 -23 91 -21 162 2 53 18 127 69 175 122 62 68 146 290 167 441 8 58 20 125 25 149 30 127 1 200 -77 200 -22 0 -45 -6 -51 -13z"/> </g> </svg> 

            <rect id="load" x="57%" y="40%" width="14%" height="5%" rx="1%" ry="1%" fill="none" stroke="${load_colour}" pointer-events="all"/>          
            <rect id="pv" x="33%" y="25%" width="14%" height="5%" rx="1%" ry="1%" fill="none" stroke="${solar_colour}" pointer-events="all" class="${
        config.show_solar === "no" ? "st12" : ""
      }"/>
            <rect id="bat" x="33%" y="59%" width="14%" height="5%" rx="1%" ry="1%" fill="none" stroke="${battery_colour}" pointer-events="all"/>
            <rect id="grid" x="5%" y="39%" width="14%" height="5%" rx="1%" ry="1%" fill="none" stroke="${grid_colour}" pointer-events="all" display="${
        config.entities.grid_ct_power_172 === "none" ? "none" : ""
      }"/>
            <rect id="aux" x="5%" y="44%" width="14%" height="5%" rx="1%" ry="1%" fill="none" stroke="${aux_colour}" pointer-events="all" display="${
        show_aux === "no" ? "none" : ""
      }"/>
            <rect id="pv1 "x="25%" y="10%" width="13%" height="5%" rx="1%" ry="1%" fill="none" stroke="${solar_colour}" pointer-events="all" class="${
        config.show_solar === "no" ? "st12" : ""
      }"/>
            <rect id="pv2 "x="42%" y="10%" width="13%" height="5%" rx="1%" ry="1%" fill="none" stroke="${solar_colour}" pointer-events="all" class="${
        config.show_solar === "no" || config.solar.mppts === "one" ? "st12" : ""
      }"/>
            <rect id="pv3" x="11%" y="10%" width="13%" height="5%" rx="1%" ry="1%" fill="none" stroke="${solar_colour}" pointer-events="all" class="${
        config.show_solar === "no" ||
        config.solar.mppts === "one" ||
        config.solar.mppts === "two"
          ? "st12"
          : ""
      }"/>
            <rect id="pv4" x="56%" y="10%" width="13%" height="5%" rx="1%" ry="1%" fill="none" stroke="${solar_colour}" pointer-events="all" class="${
        config.show_solar === "no" ||
        config.solar.mppts === "one" ||
        config.solar.mppts === "two" ||
        config.solar.mppts === "three"
          ? "st12"
          : ""
      }"/>
            <rect id="es-load1" x="70%" y="10%" width="14%" height="4%" rx="1%" ry="1%" fill="none" stroke="${load_colour}" pointer-events="all" display="${
        additional_load === "no" ? "none" : ""
      }"/>
            <rect id="es-load2" x="70%" y="59%" width="14%" height="4%" rx="1%" ry="1%" fill="none" stroke="${load_colour}" pointer-events="all" display="${
        additional_load === "no" || additional_load === "one" ? "none" : ""
      }"/>
            <rect id="es-load3" x="85%" y="10%" width="14%" height="4%" rx="1%" ry="1%" fill="none" stroke="${load_colour}" pointer-events="all" display="${
        additional_load === "no" ||
        additional_load === "one" ||
        additional_load === "two"
          ? "none"
          : ""
      }"/>
            <rect id="es-load4" x="85%" y="59%" width="14%" height="4%" rx="1%" ry="1%" fill="none" stroke="${load_colour}" pointer-events="all" display="${
        additional_load === "no" ||
        additional_load === "one" ||
        additional_load === "two" ||
        additional_load === "three"
          ? "none"
          : ""
      }"/>
            <rect id="nonesstotal" x="0.5%" y="59%" width="14%" height="5%" rx="1%" ry="1%" fill="none" stroke="${grid_colour}" pointer-events="all" class="${
        grid_show_noness === "no" ? "st12" : ""
      }"/>
            <rect id="noness1" x="0.5%" y="65%" width="14%" height="5%" rx="1%" ry="1%" display="${
              noness_dual_load === "one" ? "" : "none"
            }" fill="none" stroke="${grid_colour}" pointer-events="all" class="${
        grid_show_noness === "no" ? "st12" : ""
      }"/>
            <rect id="noness2" x="0.5%" y="65%" width="7%" height="5%" rx="1%" ry="1%" display="${
              noness_dual_load === "two" ? "" : "none"
            }" fill="none" stroke="${grid_colour}" pointer-events="all" class="${
        grid_show_noness === "no" || noness_dual_load === "one" ? "st12" : ""
      }"/>
            <rect id="noness2" x="8%" y="65%" width="7%" height="5%" rx="1%" ry="1%" display="${
              noness_dual_load === "two" ? "" : "none"
            }" fill="none" stroke="${grid_colour}" pointer-events="all" class="${
        grid_show_noness === "no" || noness_dual_load === "one" ? "st12" : ""
      }"/>
            <rect id="bat1" x="17.5%" y="75%" width="14%" height="5%" rx="1%" ry="1%" fill="none" stroke="${battery_colour}" pointer-events="all"/>
            <rect id="bat2" x="32.5%" y="75%" width="14%" height="5%" rx="1%" ry="1%" display="${
              config.entities.battery2_soc_184 === "none" ? "none" : ""
            }" fill="none" stroke="${battery_colour}" pointer-events="all"/>
            <rect id="bat3" x="47.5%" y="75%" width="14%" height="5%" rx="1%" ry="1%" display="${
              config.entities.battery3_soc_184 === "none" ? "none" : ""
            }" fill="none" stroke="${battery_colour}" pointer-events="all"/>
            <rect id="pchaud" x="119%" y="59%" width="10%" height="4%" rx="1%" ry="1%" fill="none" stroke="${load_colour}" pointer-events="all" class="${
        config.show_chaud === "yes" ? "" : "st12"
      }"/>
            <rect id="pstrirlchau" x="105%" y="59%" width="10%" height="4%" rx="1%" ry="1%" fill="none" stroke="${load_colour}" pointer-events="all" class="${
        config.show_stirling === "yes" ? "" : "st12"
      }"/>

            <text id="time" x="70%" y="3%" class="st14 st16 left-align">${clock}</text>
            <text id="duration" x="46%" y="49%" class="${
              font === "no" ? "st3" : "st3"
            } left-align" fill="${
        config.battery.energy === "hidden" ||
        float === "True" ||
        battery_power === 0
          ? "transparent"
          : `${battery_colour}`
      }" >${duration}</text>
            <text id="duration_text" x="46%" y="51%" class="st3 left-align" fill="${
              config.battery.energy === " hidden" ||
              battery_power <= 0 ||
              float === "True"
                ? "transparent"
                : `${battery_colour}`
            }">RUNTIME TO ${battery_capacity}% @${formattedResultTime}</text>
            <text id="duration_text_charging" x="46%" y="51%" class="st3 left-align" fill="${
              config.battery.energy === " hidden" ||
              battery_power >= 0 ||
              float === "True"
                ? "transparent"
                : `${battery_colour}`
            }" >TO ${battery_capacity}% CHARGE @${formattedResultTime}</text>
            <text id="floating" x="46%" y="51%" class="st3 left-align" fill="${
              config.battery.energy === " hidden" || float === "False"
                ? "transparent"
                : `${battery_colour}`
            }">BATTERY FLOATING</text>

            <text id="daily_bat_charge" x="0%" y="94%" class="st3 left-align" fill="${
              battery_showdaily === " no" ? "transparent" : `${battery_colour}`
            }">DAILY CHARGE</text>
            <text id="daily_bat_dischcharge" x="0%" y="99%" class="st3 left-align" fill="${
              battery_showdaily === " no" ? "transparent" : `${battery_colour}`
            }">DAILY DISCH</text>
<!--
            <text id="daily_bat1" x="17%" y="97%" class="st3 left-align" fill="${
              battery_showdaily === " no" ? "transparent" : `${battery_colour}`
            }">AGM in/out</text>
            <text id="daily_bat2" x="32%" y="97%" class="st3 left-align" display="${
              config.entities.battery2_soc_184 === "none" ? "none" : ""
            }" fill="${
        battery_showdaily === " no" ? "transparent" : `${battery_colour}`
      }">LTO in/out</text>
            <text id="daily_bat3" x="47%" y="97%" class="st3 left-align" display="${
              config.entities.battery3_soc_184 === "none" ? "none" : ""
            }" fill="${
        battery_showdaily === " no" ? "transparent" : `${battery_colour}`
      }">LFP in/out</text>
-->
            <text id="daily_load" x="58%" y="38%" class="st3 left-align" fill="${
              load_showdaily === "no" ? "transparent" : `${load_colour}`
            }" >DAILY LOAD</text>

            <text id="bat1_1" x="23%" y="86%" class="st15 left-align" display="${
              config.entities.battery1_soc_184 === "none" ? "none" : ""
            }" fill="${battery_colour}">Ah: ${
        !isNaN(parseFloat(stateObj80.state))
          ? parseFloat(stateObj80.state).toFixed(2)
          : "0"
      }</text>
            <text id="bat1_2" x="23%" y="88%" class="st15 left-align" display="${
              config.entities.battery1_soc_184 === "none" ? "none" : ""
            }" fill="${battery_colour}">mid: ${
        !isNaN(parseFloat(stateObj81.state))
          ? parseFloat(stateObj81.state).toFixed(1)
          : "0"
      }</text>
            <text id="bat1_3" x="23%" y="90%" class="st15 left-align" display="${
              config.entities.battery1_soc_184 === "none" ? "none" : ""
            }" fill="${battery_colour}">dev: ${
        !isNaN(parseFloat(stateObj82.state))
          ? parseFloat(stateObj82.state).toFixed(2)
          : "0"
      }</text>
            <text id="bat1_4" x="23%" y="92%" class="st15 left-align" display="${
              config.entities.battery1_soc_184 === "none" ? "none" : ""
            }" fill="${battery_colour}">Vmin: ${
        !isNaN(parseFloat(stateObj83.state))
          ? parseFloat(stateObj83.state).toFixed(1)
          : "0"
      }</text>
            <text id="bat1_5" x="23%" y="94%" class="st15 left-align" display="${
              config.entities.battery1_soc_184 === "none" ? "none" : ""
            }" fill="${battery_colour}">Vmax: ${
        !isNaN(parseFloat(stateObj84.state))
          ? parseFloat(stateObj84.state).toFixed(1)
          : "0"
      }</text>

            <text id="bat2_1" x="38%" y="86%" class="st15 left-align" display="${
              config.entities.battery2_soc_184 === "none" ? "none" : ""
            }" fill="${battery_colour}">Tbms: ${
        !isNaN(parseFloat(stateObj85.state))
          ? parseFloat(stateObj85.state).toFixed(0)
          : "0"
      }</text>
            <text id="bat2_2" x="38%" y="88%" class="st15 left-align" display="${
              config.entities.battery2_soc_184 === "none" ? "none" : ""
            }" fill="${battery_colour}">Vmin: ${
        !isNaN(parseFloat(stateObj88.state))
          ? parseFloat(stateObj88.state).toFixed(2)
          : "0"
      }</text>
            <text id="bat2_3" x="38%" y="90%" class="st15 left-align" display="${
              config.entities.battery2_soc_184 === "none" ? "none" : ""
            }" fill="${battery_colour}">Vmax: ${
        !isNaN(parseFloat(stateObj89.state))
          ? parseFloat(stateObj89.state).toFixed(2)
          : "0"
      }</text>
            <text id="bat2_4" x="38%" y="92%" class="st15 left-align" display="${
              config.entities.battery2_soc_184 === "none" ? "none" : ""
            }" fill="${battery_colour}">Tcell1: ${
        !isNaN(parseFloat(stateObj86.state))
          ? parseFloat(stateObj86.state).toFixed(0)
          : "0"
      }</text>
            <text id="bat2_5" x="38%" y="94%" class="st15 left-align" display="${
              config.entities.battery2_soc_184 === "none" ? "none" : ""
            }" fill="${battery_colour}">Tcell2: ${
        !isNaN(parseFloat(stateObj87.state))
          ? parseFloat(stateObj87.state).toFixed(0)
          : "0"
      }</text>

            <text id="bat3_1" x="53%" y="86%" class="st15 left-align" display="${
              config.entities.battery3_soc_184 === "none" ? "none" : ""
            }" fill="${battery_colour}">Tbms: ${
        !isNaN(parseFloat(stateObj90.state))
          ? parseFloat(stateObj90.state).toFixed(0)
          : "0"
      }</text>
            <text id="bat3_2" x="53%" y="88%" class="st15 left-align" display="${
              config.entities.battery3_soc_184 === "none" ? "none" : ""
            }" fill="${battery_colour}">Vmin: ${
        !isNaN(parseFloat(stateObj93.state))
          ? parseFloat(stateObj93.state).toFixed(2)
          : "0"
      }</text>
            <text id="bat3_3" x="53%" y="90%" class="st15 left-align" display="${
              config.entities.battery3_soc_184 === "none" ? "none" : ""
            }" fill="${battery_colour}">Vmax: ${
        !isNaN(parseFloat(stateObj94.state))
          ? parseFloat(stateObj94.state).toFixed(2)
          : "0"
      }</text>
            <text id="bat3_4" x="53%" y="92%" class="st15 left-align" display="${
              config.entities.battery3_soc_184 === "none" ? "none" : ""
            }" fill="${battery_colour}">Tcell1: ${
        !isNaN(parseFloat(stateObj91.state))
          ? parseFloat(stateObj91.state).toFixed(0)
          : "0"
      }</text>
            <text id="bat3_5" x="53%" y="94%" class="st15 left-align" display="${
              config.entities.battery3_soc_184 === "none" ? "none" : ""
            }" fill="${battery_colour}">Tcell2: ${
        !isNaN(parseFloat(stateObj92.state))
          ? parseFloat(stateObj92.state).toFixed(0)
          : "0"
      }</text>

            <text id="bat4_1" x="68%" y="86%" class="st15 left-align" display="${
              config.entities.battery4_soc_184 === "none" ? "none" : ""
            }" fill="${battery_colour}">Tbms: ${
        !isNaN(parseFloat(stateObj90.state))
          ? parseFloat(stateObj95.state).toFixed(0)
          : "0"
      }</text>
            <text id="bat4_2" x="68%" y="88%" class="st15 left-align" display="${
              config.entities.battery4_soc_184 === "none" ? "none" : ""
            }" fill="${battery_colour}">Vmin: ${
        !isNaN(parseFloat(stateObj93.state))
          ? parseFloat(stateObj98.state).toFixed(2)
          : "0"
      }</text>
            <text id="bat4_3" x="68%" y="90%" class="st15 left-align" display="${
              config.entities.battery4_soc_184 === "none" ? "none" : ""
            }" fill="${battery_colour}">Vmax: ${
        !isNaN(parseFloat(stateObj94.state))
          ? parseFloat(stateObj99.state).toFixed(2)
          : "0"
      }</text>
            <text id="bat4_4" x="68%" y="92%" class="st15 left-align" display="${
              config.entities.battery4_soc_184 === "none" ? "none" : ""
            }" fill="${battery_colour}">Tcell1: ${
        !isNaN(parseFloat(stateObj91.state))
          ? parseFloat(stateObj96.state).toFixed(0)
          : "0"
      }</text>
            <text id="bat4_5" x="68%" y="94%" class="st15 left-align" display="${
              config.entities.battery4_soc_184 === "none" ? "none" : ""
            }" fill="${battery_colour}">Tcell2: ${
        !isNaN(parseFloat(stateObj92.state))
          ? parseFloat(stateObj97.state).toFixed(0)
          : "0"
      }</text>

            <text id="bat1_name" x="17%" y="97%" class="st15 left-align" display="${
              config.entities.battery1_soc_184 === "none" ? "none" : ""
            }" fill="${battery_colour}">${
        config?.battery?.bat1_name ? `${config.battery.bat1_name}` : ""
      }</text>
            <text id="bat2_name" x="32%" y="97%" class="st15 left-align" display="${
              config.entities.battery2_soc_184 === "none" ? "none" : ""
            }" fill="${battery_colour}">${
        config?.battery?.bat2_name ? `${config.battery.bat2_name}` : ""
      }</text>
            <text id="bat3_name" x="47%" y="97%" class="st15 left-align" display="${
              config.entities.battery3_soc_184 === "none" ? "none" : ""
            }" fill="${battery_colour}">${
        config?.battery?.bat3_name ? `${config.battery.bat3_name}` : ""
      }</text>
            <text id="bat4_name" x="62%" y="97%" class="st15 left-align" display="${
              config.entities.battery4_soc_184 === "none" ? "none" : ""
            }" fill="${battery_colour}">${
        config?.battery?.bat4_name ? `${config.battery.bat4_name}` : ""
      }</text>



            <text id="Text" x="95%" y="23%" class="st3 left-align" fill="${load_colour}">Ext</text>
            <text id="Tsalon" x="82%" y="40%" class="st3 left-align" fill="${load_colour}">Salon</text>
            <text id="Tchambre" x="81%" y="34%" class="st3 left-align" fill="${load_colour}">Chambre</text>
            <text id="Text" x="97.5%" y="26%"  fill="${load_colour}">${
        !isNaN(parseFloat(stateObj100.state))
          ? parseFloat(stateObj100.state).toFixed(1)
          : "0"
      }°</text>
            <text id="Tsalon" x="89%" y="43%"  fill="${load_colour}">${
        !isNaN(parseFloat(stateObj101.state))
          ? parseFloat(stateObj101.state).toFixed(1)
          : "0"
      }°</text>
            <text id="Tchambre" x="89%" y="37%" fill="${load_colour}">${
        !isNaN(parseFloat(stateObj102.state))
          ? parseFloat(stateObj102.state).toFixed(1)
          : "0"
      }°</text>
            <text id="Tbal1" x="126%" y="26%" class="st3 left-align"  class="${
              config.show_bal === "yes" ? "" : "st12"
            }" fill="${load_colour}">${
        !isNaN(parseFloat(stateObj103.state))
          ? parseFloat(stateObj103.state).toFixed(0)
          : "0"
      }°</text>
            <text id="Tbal2" x="126%" y="32%" class="st3 left-align"  class="${
              config.show_bal === "yes" ? "" : "st12"
            }" fill="${load_colour}">${
        !isNaN(parseFloat(stateObj104.state))
          ? parseFloat(stateObj104.state).toFixed(0)
          : "0"
      }°</text>
            <text id="Tbal3" x="126%" y="38%" class="st3 left-align" class="${
              config.show_bal === "yes" ? "" : "st12"
            }" fill="${load_colour}">${
        !isNaN(parseFloat(stateObj105.state))
          ? parseFloat(stateObj105.state).toFixed(0)
          : "0"
      }°</text>
            <text id="Tbal4" x="126%" y="44%" class="st3 left-align" class="${
              config.show_bal === "yes" ? "" : "st12"
            }" fill="${load_colour}">${
        !isNaN(parseFloat(stateObj106.state))
          ? parseFloat(stateObj106.state).toFixed(0)
          : "0"
      }°</text>
            <text id="ChargeBal" x="118%" y="22%" class="${
              config.show_bal === "yes" ? "" : "st12"
            }" fill="${load_colour}">${
        !isNaN(parseFloat(stateObj107.state))
          ? parseFloat(stateObj107.state).toFixed(0)
          : "0"
      } %</text>
<!--
            <text id="EVsoc" x="82%" y="82.5%" fill="${load_colour}">${
        !isNaN(parseFloat(stateObj107.state))
          ? parseFloat(stateObj107.state).toFixed(0)
          : "0"
      } % Soc</text>
            <text id="EVsoc" x="85%" y="95%" fill="${load_colour}"> Cell min/max, Tbat, V, I</text>
-->
            <text id="daily_grid_buy" x="0%" y="36%" class="st15 left-align" fill="${
              grid_showdailybuy === " no" ? "transparent" : `${grid_colour}`
            }">DAILY GRID BUY</text>
            <text id="daily_grid_sell" x="0%" y="31%" class="st15 left-align" fill="${
              grid_showdailysell === " no" ? "transparent" : `${grid_colour}`
            }">DAILY GRID SELL</text>
            <text id="daily_solar" x="19%" y="6%" class="st3 left-align" fill="${
              solar_showdaily === " no" ||
              config.show_solar === "no" ||
              remaining_solar != "false"
                ? "transparent"
                : `${solar_colour}`
            }">DAILY </text>
            <text id="remaining_solar" x="19%" y="6%" class="st3 left-align" fill="${
              solar_showdaily === " no" ||
              config.show_solar === "no" ||
              remaining_solar === "false"
                ? "transparent"
                : `${solar_colour}`
            }">DAILY / HA LEFT / VICTRON LEFT / Wh/Wc / Wh/m2</text>
<!--
            <text x="33%" y="16.5%" class="st3 st8" display="${
              config.show_solar === " no" ? "none" : ""
            }" fill="${solar_colour}">${
        config?.solar?.pv1_name ? `${config.solar.pv1_name}` : "PV1"
      }</text>
            <text x="51%" y="16.5%" class="st3 st8" display="${
              config.show_solar === " no" || config.solar.mppts === "one"
                ? "none"
                : ""
            }" fill="${solar_colour}">${
        config?.solar?.pv2_name ? `${config.solar.pv2_name}` : "PV2"
      }</text>
            <text x="19%" y="16.5%" class="st3 st8" display="${
              config.show_solar === " no" ||
              config.solar.mppts === "one" ||
              config.solar.mppts === "two"
                ? "none"
                : ""
            }" fill="${solar_colour}">${
        config?.solar?.pv3_name ? `${config.solar.pv3_name}` : "PV3"
      }</text>
            <text x="64.5%" y="16.5%" class="st3 st8" display="${
              config.show_solar === " no" ||
              config.solar.mppts === "one" ||
              config.solar.mppts === "two" ||
              config.solar.mppts === "three"
                ? "none"
                : ""
            }" fill="${solar_colour}">${
        config?.solar?.pv4_name ? `${config.solar.pv4_name}` : "PV4"
      }</text>
-->
            <text id="pv1_st" x="33%" y="16.5%" class="st3 st8" display="${
              config.show_solar === " no" ? "none" : ""
            }" fill="${solar_colour}">${
        stateObj110.state ? stateObj110.state : ""
      }</text>
            <text id="pv2_st" x="51%" y="16.5%" class="st3 st8" display="${
              config.show_solar === " no" || config.solar.mppts === "one"
                ? "none"
                : ""
            }" fill="${solar_colour}">${
        stateObj111.state ? stateObj111.state : ""
      }</text>
            <text id="pv3_st" x="19%" y="16.5%" class="st3 st8" display="${
              config.show_solar === " no" ||
              config.solar.mppts === "one" ||
              config.solar.mppts === "two"
                ? "none"
                : ""
            }" fill="${solar_colour}">${
        stateObj112.state ? stateObj112.state : ""
      }</text>
            <text id="pv4_st" x="64.5%" y="16.5%" class="st3 st8" display="${
              config.show_solar === " no" ||
              config.solar.mppts === "one" ||
              config.solar.mppts === "two" ||
              config.solar.mppts === "three"
                ? "none"
                : ""
            }" fill="${solar_colour}">${
        stateObj113.state ? stateObj113.state : ""
      }</text>
            <text id="inv_st" x="45%" y="34%" class="st3 st8" fill="${inverter_colour}">${
        stateObj21.state ? stateObj21.state : ""
      }</text>

            <text id="autarkye_value" x="0.5%" y="54%" display="${
              useautarky === "no" ? "none" : ""
            }" class="${
        useautarky === "energy" ? "st4 st8 left-align" : "st12"
      }" fill="${inverter_colour}" >${Autarky}%</text>
            <text id="ratioe_value" x="9%" y="54%" display="${
              useautarky === "no" ? "none" : ""
            }" class="${
        useautarky === "energy" ? "st4 st8 left-align" : "st12"
      }" fill="${inverter_colour}" >${Ratio}%</text>
            <text id="autarkyp_value" x="0.5%" y="54%" display="${
              useautarky === "no" ? "none" : ""
            }" class="${
        useautarky === "power" ? "st4 st8 left-align" : "st12"
      }" fill="${inverter_colour}" >${Autarkyp}%</text>
            <text id="ratiop_value" x="9%" y="54%" display="${
              useautarky === "no" ? "none" : ""
            }" class="${
        useautarky === "power" ? "st4 st8 left-align" : "st12"
      }" fill="${inverter_colour}" >${Ratiop}%</text>
            <text id="autarky" x="0.5%" y="57%" display="${
              useautarky === "no" ? "none" : ""
            }" class="st3 left-align" fill="${inverter_colour}" >Autarky</text>
            <text id="ratio" x="9%" y="57%" display="${
              useautarky === "no" ? "none" : ""
            }" class="st3 left-align" fill="${inverter_colour}" >Ratio</text>

            <!-- zzzzzzzzz    -->



            <text id="es-load1" x="72%" y="9%" class="st3" display="${
              additional_load === "no" ? "none" : ""
            }" fill="${load_colour}" >${
        config?.load?.load1_name ? `${config.load.load1_name}` : ""
      }</text>
            <text id="ess_load1" x="77%" y="13%" display="${
              additional_load === "no" ? "none" : ""
            }" class="${
        font === "no" ? "st14" : "st4"
      } st8" fill="${load_colour}">${
        !isNaN(parseFloat(stateObj42.state))
          ? parseFloat(stateObj42.state).toFixed(0)
          : "0"
      } W</text>
            <text id="es-load2" x="72%" y="65%" class="st3" display="${
              additional_load === "no" || additional_load === "one"
                ? "none"
                : ""
            }" fill="${load_colour}" >${
        config?.load?.load2_name ? `${config.load.load2_name}` : ""
      }</text>
            <text id="ess_load2" x="77%" y="61.5%" display="${
              additional_load === "no" || additional_load === "one"
                ? "none"
                : ""
            }" class="${
        font === "no" ? "st14" : "st4"
      } st8" fill="${load_colour}">${
        !isNaN(parseFloat(stateObj45.state))
          ? parseFloat(stateObj45.state).toFixed(0)
          : "0"
      } W</text>
            <text id="es-load3" x="90%" y="9%" class="st3" display="${
              additional_load === "no" ||
              additional_load === "one" ||
              additional_load === "two"
                ? "none"
                : ""
            }" fill="${load_colour}" >${
        config?.load?.load3_name ? `${config.load.load3_name}` : ""
      }</text>
            <text id="ess_load3" x="91%" y="13%" display="${
              additional_load === "no" ||
              additional_load === "one" ||
              additional_load === "two"
                ? "none"
                : ""
            }" class="${
        font === "no" ? "st14" : "st4"
      } st8" fill="${load_colour}">${
        !isNaN(parseFloat(stateObj48.state))
          ? parseFloat(stateObj48.state).toFixed(0)
          : "0"
      } W</text>
            <text id="es-load4" x="90%" y="65%" class="st3" display="${
              additional_load === "no" ||
              additional_load === "one" ||
              additional_load === "two" ||
              additional_load === "three"
                ? "none"
                : ""
            }" fill="${load_colour}" >${
        config?.load?.load4_name ? `${config.load.load4_name}` : ""
      }</text>
            <text id="ess_load4" x="91%" y="61.5%" display="${
              additional_load === "no" ||
              additional_load === "one" ||
              additional_load === "two" ||
              additional_load === "three"
                ? "none"
                : ""
            }" class="${
        font === "no" ? "st14" : "st4"
      } st8" fill="${load_colour}">${
        !isNaN(parseFloat(stateObj49.state))
          ? parseFloat(stateObj49.state).toFixed(0)
          : "0"
      } W</text>
            <text id="aux" x="10%" y="50%" class="st3 st8" display="${
              show_aux === " no" ? "none" : ""
            }" fill="${
        aux_status === " on" || aux_status === "1"
          ? `${aux_colour}`
          : `${aux_off_colour}`
      }">${
        config?.load?.aux_name ? `${config.load.aux_name}` : "Auxiliary"
      }</text>
            <text id="noness" x="7%" y="75%" class="st3 st8" display="${
              grid_show_noness === " no" ? "none" : ""
            }" fill="${grid_colour}" >${
        config?.grid?.nonessential_name
          ? `${config.grid.nonessential_name}`
          : "Non Essential"
      }</text>
            <text id="noness1" x="4%" y="72%" class="st3 st8" display="${
              grid_show_noness === " no" ||
              noness_dual_load === "no" ||
              noness_dual_load === "two"
                ? "none"
                : ""
            }" fill="${grid_colour}">${
        config?.grid?.load1_name ? `${config.grid.load1_name}` : ""
      }</text>
            <text id="noness2" x="4%" y="72%" class="st3 st8" display="${
              grid_show_noness === " no" ||
              noness_dual_load === "no" ||
              noness_dual_load === "one"
                ? "none"
                : ""
            }" fill="${grid_colour}">${
        config?.grid?.load1_name ? `${config.grid.load1_name}` : ""
      }</text>
            <text id="noness2" x="11.5%" y="72%" class="st3 st8" display="${
              grid_show_noness === " no" ||
              noness_dual_load === "no" ||
              noness_dual_load === "one"
                ? "none"
                : ""
            }" fill="${grid_colour}">${
        config?.grid?.load2_name ? `${config.grid.load2_name}` : ""
      }</text>
            <text id="noness1_value" x="7.5%" y="68%" class="st3" display="${
              grid_show_noness === " no" ||
              noness_dual_load === "no" ||
              noness_dual_load === "two"
                ? "none"
                : ""
            }" fill="${grid_colour}">${
        !isNaN(parseFloat(stateObj40.state))
          ? parseFloat(stateObj40.state).toFixed(0)
          : "0"
      } W</text>
            <text id="noness2_value" x="4%" y="68%" class="st3" display="${
              grid_show_noness === " no" ||
              noness_dual_load === "no" ||
              noness_dual_load === "one"
                ? "none"
                : ""
            }" fill="${grid_colour}">${
        !isNaN(parseFloat(stateObj40.state))
          ? parseFloat(stateObj40.state).toFixed(0)
          : "0"
      } W</text>
            <text id="noness2_value" x="12%" y="68%" class="st3" display="${
              grid_show_noness === " no" ||
              noness_dual_load === "no" ||
              noness_dual_load === "one"
                ? "none"
                : ""
            }" fill="${grid_colour}">${
        !isNaN(parseFloat(stateObj41.state))
          ? parseFloat(stateObj41.state).toFixed(0)
          : "0"
      } W</text>

<!--
            <text id="autarkye_value" x="2%" y="15%" class="st3" fill="${inverter_colour}" >${pvmax}%</text>
            <text id="autarkye_value" x="2%" y="18%" class="st3" fill="${inverter_colour}" >${totalsolar}%</text>
-->

            <circle id="standby" cx="220" cy="260" r="3.5" fill="${inverterStateColour}"/>

            <path id="pv1-line" d="M 149 60 L 149 100 Q 149 110 158 110 L 158 110" class="${
              config.show_solar === " no" ? "st12" : ""
            }" fill="none" stroke="${solar_colour}" stroke-width="1" stroke-miterlimit="10" pointer-events="stroke" />
            <circle id="pv1-dot" cx="0" cy="0" r="3" class="${
              config.show_solar === " no" ? "st12" : ""
            }" fill="${
        parseInt(stateObj9.state) <= 0 ? " transparent" : `${solar_colour}`
      }"><animateMotion dur="${solar_animation_speed}s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear"><mpath xlink:href="#pv1-line"/></animateMotion></circle>
            <path id="pv2-line" d="M 235 60 L 235 100 Q 235 110 230 110 L 228 110" class="${
              config.show_solar === "no" || config.solar.mppts === "one"
                ? "st12"
                : ""
            }" fill="none" stroke="${solar_colour}" stroke-width="1" stroke-miterlimit="10"  pointer-events="stroke"/>
            <circle id="pv2-dot" cx="0" cy="0" r="3" class="${
              config.show_solar === "no" || config.solar.mppts === "one"
                ? "st12"
                : ""
            }" fill="${
        parseInt(stateObj8.state) <= 0 ? "transparent" : `${solar_colour}`
      }"><animateMotion dur="${solar_animation_speed}s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear"><mpath xlink:href="#pv2-line"/></animateMotion> </circle>
            <path id="pv3-line" d="M 82 60 L 82 100 Q 82 110 92 110 L 157 110" class="${
              config.show_solar === "no" ||
              config.solar.mppts === "one" ||
              config.solar.mppts === "two"
                ? "st12"
                : ""
            }" fill="none" stroke="${solar_colour}" stroke-width="1" stroke-miterlimit="10"  pointer-events="stroke"/>
            <circle id="pv3-dot" cx="0" cy="0" r="3" class="${
              config.show_solar === "no" ||
              config.solar.mppts === "one" ||
              config.solar.mppts === "two"
                ? "st12"
                : ""
            }" fill="${
        parseInt(stateObj31.state) <= 0 ? "transparent" : `${solar_colour}`
      }"><animateMotion dur="${solar_animation_speed}s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear"><mpath xlink:href="#pv3-line"/></animateMotion></circle>
            <path id="pv4-line" d="M 300 60 L 300 100 Q 300 110 290 110 L 228 110" class="${
              config.show_solar === "no" ||
              config.solar.mppts === "one" ||
              config.solar.mppts === "two" ||
              config.solar.mppts === "three"
                ? "st12"
                : ""
            }" fill="none" stroke="${solar_colour}" stroke-width="1" stroke-miterlimit="10"  pointer-events="stroke"/>
            <circle id="pv4-dot" cx="0" cy="0" r="3" class="${
              config.show_solar === "no" ||
              config.solar.mppts === "one" ||
              config.solar.mppts === "two" ||
              config.solar.mppts === "three"
                ? "st12"
                : ""
            }" fill="${
        parseInt(stateObj32.state) <= 0 ? "transparent" : `${solar_colour}`
      }"><animateMotion dur="${solar_animation_speed}s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear"><mpath xlink:href="#pv4-line"/></animateMotion></circle>

            <path id="bat-line" d="M 190 215 L 190 235" fill="none" stroke="${battery_colour}" stroke-width="1" stroke-miterlimit="10"  pointer-events="stroke"/><circle id="power-dot-charge" cx="0" cy="0" r="3" fill="${
        parseInt(battery_power) < 0 || parseInt(battery_power) === 0
          ? "transparent"
          : `${battery_colour}`
      }"><animateMotion dur="${battery_animation_speed}s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath xlink:href="#bat-line"/></animateMotion></circle><circle id="power-dot-discharge" cx="0" cy="0" r="3" fill="${
        parseInt(battery_power) > 0 || parseInt(battery_power) === 0
          ? "transparent"
          : `${battery_colour}`
      }"><animateMotion dur="${battery_animation_speed}s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear"><mpath xlink:href="#bat-line"/></animateMotion></circle>
            <path id="bat1-line" d="M 155 250 L 125 250 Q 115 250 115 260 L 115 275" fill="none" stroke="${battery_colour}" stroke-width="1" stroke-miterlimit="10"  pointer-events="stroke"/><circle id="power1-dot-charge" cx="0" cy="0" r="3" fill="${
        parseInt(battery1_power) < 0 || parseInt(battery1_power) === 0
          ? "transparent"
          : `${battery_colour}`
      }"><animateMotion dur="${battery_animation_speed}s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath xlink:href="#bat1-line"/></animateMotion></circle><circle id="power1-dot-discharge" cx="0" cy="0" r="3" fill="${
        parseInt(battery1_power) > 0 || parseInt(battery1_power) === 0
          ? "transparent"
          : `${battery_colour}`
      }"><animateMotion dur="${battery_animation_speed}s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear"><mpath xlink:href="#bat1-line"/></animateMotion></circle>
            <path id="bat2-line" d="M 190 260 L 190 300" fill="none" display="${
              config.entities.battery2_soc_184 === "none" ? "none" : ""
            }" stroke="${battery_colour}" stroke-width="1" stroke-miterlimit="10"  pointer-events="stroke"/><circle id="power2-dot-charge" cx="0" cy="0" r="3" fill="${
        parseInt(battery2_power) < 0 || parseInt(battery2_power) === 0
          ? "transparent"
          : `${battery_colour}`
      }"><animateMotion dur="${battery_animation_speed}s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath xlink:href="#bat2-line"/></animateMotion></circle><circle id="power2-dot-discharge" cx="0" cy="0" r="3" class="${
        config.entities.battery2_soc_184 === "none" ? "st12" : ""
      }" fill="${
        parseInt(battery2_power) > 0 || parseInt(battery2_power) === 0
          ? "transparent"
          : `${battery_colour}`
      }"><animateMotion dur="${battery_animation_speed}s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear"><mpath xlink:href="#bat2-line"/></animateMotion></circle>
            <path id="bat3-line" d="M 230 250 L 252 250 Q 262 250 262 260 L 262 275" display="${
              config.entities.battery3_soc_184 === "none" ? "none" : ""
            }" fill="none" stroke="${battery_colour}" stroke-width="1" stroke-miterlimit="10"  pointer-events="stroke"/><circle id="power3-dot-charge" cx="0" cy="0" r="3" fill="${
        parseInt(battery3_power) < 0 || parseInt(battery3_power) === 0
          ? "transparent"
          : `${battery_colour}`
      }"> <animateMotion dur="${battery_animation_speed}s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath xlink:href="#bat3-line"/></animateMotion></circle><circle id="power3-dot-discharge" cx="0" cy="0" r="3" class="${
        config.entities.battery3_soc_184 === "none" ? "st12" : ""
      }" fill="${
        parseInt(battery3_power) > 0 || parseInt(battery3_power) === 0
          ? "transparent"
          : `${battery_colour}`
      }"><animateMotion dur="${battery_animation_speed}s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear"><mpath xlink:href="#bat3-line"/></animateMotion></circle>

            <path id="so-line" d="M 190 140 L 190 120" class="${
              config.show_solar === "no" ? "st12" : ""
            }" fill="none" stroke="${solar_colour}" stroke-width="1" stroke-miterlimit="10"  pointer-events="stroke"/><circle id="so-dot" cx="0" cy="0" r="3" class="${
        config.show_solar === "no" ? "st12" : ""
      }" fill="${
        totalsolar === 0 ? "transparent" : `${solar_colour}`
      }"><animateMotion dur="${solar_animation_speed}s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath xlink:href="#so-line"/></animateMotion></circle>
            <path id="grid-line" d="M 95 165 L 115 165 " class="${
              show_aux === "no" ? "st12" : ""
            }" fill="none" stroke="${grid_colour}" stroke-width="1" stroke-miterlimit="10"  pointer-events="stroke"/><circle id="grid-dot" cx="0" cy="0" r="3" class="${
        show_aux === "no" || grid_power === 0 ? "st12" : ""
      }"  fill="${
        parseInt(grid_power) < 0 ? "transparent" : `${grid_colour}`
      }"><animateMotion dur="${grid_animation_speed}s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear"><mpath xlink:href="#grid-line"/></animateMotion></circle><circle id="grid-dot" cx="0" cy="0" r="3" class="${
        show_aux === "no" || grid_power === 0 ? "st12" : ""
      }" fill="${
        parseInt(grid_power) > 0 ? "transparent" : `${grid_colour}`
      }"><animateMotion dur="${grid_animation_speed}s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath xlink:href="#grid-line"/></animateMotion></circle>
            <path id="aux-line" d="M 95 187 L 115 187" fill="none" class="${
              show_aux === "no" ? "st12" : ""
            }" stroke="${aux_colour}" stroke-width="1" stroke-miterlimit="10"  pointer-events="stroke"/><circle id="aux-dot" cx="0" cy="0" r="3" class="${
        show_aux === "no" || aux_power === 0 ? "st12" : ""
      }" fill="${
        parseInt(aux_power) < 0 ? "transparent" : `${aux_colour}`
      }"><animateMotion dur="${aux_animation_speed}s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear"><mpath xlink:href="#aux-line"/></animateMotion></circle><circle id="aux-dot" cx="0" cy="0" r="3" class="${
        show_aux === "no" || aux_power === 0 ? "st12" : ""
      }" fill="${
        parseInt(aux_power) > 0 ? "transparent" : `${aux_colour}`
      }"><animateMotion dur="${aux_animation_speed}s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath xlink:href="#aux-line"/></animateMotion></circle>
            <path id="es-line" d="M 274 175 L 225 175" fill="none" stroke="${load_colour}" stroke-width="1" stroke-miterlimit="10"  pointer-events="stroke"/><circle id="es-dot" cx="0" cy="0" r="3" fill="${
        essential === 0 ? "transparent" : `${load_colour}`
      }"><animateMotion dur="${load_animation_speed}s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath xlink:href="#es-line"/></animateMotion></circle>

            <!--            <path id="es-line1" d="M 325 175 L 350 175" fill="none" stroke="${load_colour}" stroke-width="1" stroke-miterlimit="10"  pointer-events="stroke"/><circle id="es-dot" cx="0" cy="0" r="3" fill="${
        essential === 0 ? "transparent" : `${load_colour}`
      }"><animateMotion dur="${load_animation_speed}s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear"><mpath xlink:href="#es-line1"/></animateMotion></circle>
            -->
            <path id="es-load1" d="M 375 60 L 375 100" display="${
              additional_load === "no" ? "none" : ""
            }" fill="none" stroke="${load_colour}" stroke-width="1" stroke-miterlimit="10"  pointer-events="stroke"/>
            <path id="es-load2" d="M 375 235 L 375 205" display="${
              additional_load === "no" || additional_load === "one"
                ? "none"
                : ""
            }" fill="none" stroke="${load_colour}" stroke-width="1" stroke-miterlimit="10"  pointer-events="stroke"/>
            <path id="es-load3" d="M 445 60 L 445 100" display="${
              additional_load === "no" ||
              additional_load === "one" ||
              additional_load === "two"
                ? "none"
                : ""
            }" fill="none" stroke="${load_colour}" stroke-width="1" stroke-miterlimit="10"  pointer-events="stroke"/>
            <path id="es-load4" d="M 445 235 L 445 205" display="${
              additional_load === "no" ||
              additional_load === "one" ||
              additional_load === "two" ||
              additional_load === "three"
                ? "none"
                : ""
            }" fill="none" stroke="${load_colour}" stroke-width="1" stroke-miterlimit="10"  pointer-events="stroke"/>


            <!--            <svg xmlns="http://www.w3.org/2000/svg" id="ess_oven_top" x="368" y="113" width="36" height="36" viewBox="0 0 32 32" opacity="${
              load1e_icon === "oven" &&
              (additional_load === "one" || additional_load === "two")
                ? "1"
                : "0"
            }"><path display="${
        additional_load === "no" || config.show_solar === "no" ? "none" : ""
      }" fill="${load_colour}" d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5v-17Zm24 0A2.5 2.5 0 0 0 24.5 5h-17A2.5 2.5 0 0 0 5 7.5V11h22V7.5Zm0 17V13H5v11.5A2.5 2.5 0 0 0 7.5 27h17a2.5 2.5 0 0 0 2.5-2.5Zm-17-15a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm6 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3ZM23.5 8a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0ZM9 23v-6h14v6H9Zm-.5-8A1.5 1.5 0 0 0 7 16.5v7A1.5 1.5 0 0 0 8.5 25h15a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-1.5-1.5h-15Z"/></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" id="ess_oven_bottom" x="368" y="287" width="36" height="36" viewBox="0 0 32 32" opacity="${
                        load2e_icon === "oven" && additional_load === "two"
                          ? "1"
                          : "0"
                      }"><path display="${
        additional_load === "no" || config.show_solar === "no" ? "none" : ""
      }" fill="${load_colour}" d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5v-17Zm24 0A2.5 2.5 0 0 0 24.5 5h-17A2.5 2.5 0 0 0 5 7.5V11h22V7.5Zm0 17V13H5v11.5A2.5 2.5 0 0 0 7.5 27h17a2.5 2.5 0 0 0 2.5-2.5Zm-17-15a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm6 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3ZM23.5 8a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0ZM9 23v-6h14v6H9Zm-.5-8A1.5 1.5 0 0 0 7 16.5v7A1.5 1.5 0 0 0 8.5 25h15a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-1.5-1.5h-15Z"/></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" id="ess_pump_top" x="368" y="113" width="36" height="36" viewBox="0 0 24 24" opacity="${
                        load1e_icon === "pump" &&
                        (additional_load === "one" || additional_load === "two")
                          ? "1"
                          : "0"
                      }"><path display="${
        additional_load === "no" || config.show_solar === "no" ? "none" : ""
      }" fill="${load_colour}" d="M3 17h4.1q-.425-.425-.787-.925T5.675 15H3v2Zm9 0q2.075 0 3.538-1.463T17 12q0-2.075-1.463-3.538T12 7Q9.925 7 8.462 8.463T7 12q0 2.075 1.463 3.538T12 17Zm6.325-8H21V7h-4.1q.425.425.788.925T18.325 9ZM1 20v-8h2v1h2.075q-.05-.25-.063-.488T5 12q0-2.925 2.038-4.963T12 5h9V4h2v8h-2v-1h-2.075q.05.25.063.488T19 12q0 2.925-2.038 4.963T12 19H3v1H1Zm2-3v-2v2Zm18-8V7v2Zm-9 3Zm0 3q-.825 0-1.413-.588T10 13q0-.575.238-1.137t.912-1.613L12 9l.85 1.25q.675 1.05.913 1.613T14 13q0 .825-.588 1.413T12 15Z"/></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" id="ess_pump_bottom" x="368" y="287" width="36" height="36" viewBox="0 0 24 24" opacity="${
                        load2e_icon === "pump" && additional_load === "two"
                          ? "1"
                          : "0"
                      }"><path display="${
        additional_load === "no" || config.show_solar === "no" ? "none" : ""
      }" fill="${load_colour}" d="M3 17h4.1q-.425-.425-.787-.925T5.675 15H3v2Zm9 0q2.075 0 3.538-1.463T17 12q0-2.075-1.463-3.538T12 7Q9.925 7 8.462 8.463T7 12q0 2.075 1.463 3.538T12 17Zm6.325-8H21V7h-4.1q.425.425.788.925T18.325 9ZM1 20v-8h2v1h2.075q-.05-.25-.063-.488T5 12q0-2.925 2.038-4.963T12 5h9V4h2v8h-2v-1h-2.075q.05.25.063.488T19 12q0 2.925-2.038 4.963T12 19H3v1H1Zm2-3v-2v2Zm18-8V7v2Zm-9 3Zm0 3q-.825 0-1.413-.588T10 13q0-.575.238-1.137t.912-1.613L12 9l.85 1.25q.675 1.05.913 1.613T14 13q0 .825-.588 1.413T12 15Z"/></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" id="ess_ac_top" x="374" y="116" width="30" height="30" viewBox="0 0 24 24" opacity="${
                        load1e_icon === "aircon" &&
                        (additional_load === "one" || additional_load === "two")
                          ? "1"
                          : "0"
                      }"><path display="${
        additional_load === "no" || config.show_solar === "no" ? "none" : ""
      }" fill="${load_colour}" d="M6.59.66c2.34-1.81 4.88.4 5.45 3.84c.43 0 .85.12 1.23.34c.52-.6.98-1.42.8-2.34c-.42-2.15 1.99-3.89 4.28-.92c1.81 2.34-.4 4.88-3.85 5.45c0 .43-.11.86-.34 1.24c.6.51 1.42.97 2.34.79c2.13-.42 3.88 1.98.91 4.28c-2.34 1.81-4.88-.4-5.45-3.84c-.43 0-.85-.13-1.22-.35c-.52.6-.99 1.43-.81 2.35c.42 2.14-1.99 3.89-4.28.92c-1.82-2.35.4-4.89 3.85-5.45c0-.43.13-.85.35-1.23c-.6-.51-1.42-.98-2.35-.8c-2.13.42-3.88-1.98-.91-4.28M5 16h2a2 2 0 0 1 2 2v6H7v-2H5v2H3v-6a2 2 0 0 1 2-2m0 2v2h2v-2H5m7.93-2H15l-2.93 8H10l2.93-8M18 16h3v2h-3v4h3v2h-3a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z"/></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" id="ess_ac_bottom" x="374" y="289" width="30" height="30" viewBox="0 0 24 24" opacity="${
                        load2e_icon === "aircon" && additional_load === "two"
                          ? "1"
                          : "0"
                      }"><path display="${
        additional_load === "no" || config.show_solar === "no" ? "none" : ""
      }" fill="${load_colour}" d="M6.59.66c2.34-1.81 4.88.4 5.45 3.84c.43 0 .85.12 1.23.34c.52-.6.98-1.42.8-2.34c-.42-2.15 1.99-3.89 4.28-.92c1.81 2.34-.4 4.88-3.85 5.45c0 .43-.11.86-.34 1.24c.6.51 1.42.97 2.34.79c2.13-.42 3.88 1.98.91 4.28c-2.34 1.81-4.88-.4-5.45-3.84c-.43 0-.85-.13-1.22-.35c-.52.6-.99 1.43-.81 2.35c.42 2.14-1.99 3.89-4.28.92c-1.82-2.35.4-4.89 3.85-5.45c0-.43.13-.85.35-1.23c-.6-.51-1.42-.98-2.35-.8c-2.13.42-3.88-1.98-.91-4.28M5 16h2a2 2 0 0 1 2 2v6H7v-2H5v2H3v-6a2 2 0 0 1 2-2m0 2v2h2v-2H5m7.93-2H15l-2.93 8H10l2.93-8M18 16h3v2h-3v4h3v2h-3a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z"/></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" id="ess_boiler_top" x="371" y="113" width="36" height="36" viewBox="0 0 24 24" opacity="${
                        load1e_icon === "boiler" &&
                        (additional_load === "one" || additional_load === "two")
                          ? "1"
                          : "0"
                      }"><path display="${
        additional_load === "no" || config.show_solar === "no" ? "none" : ""
      }" fill="${load_colour}" d="M9.3 10.775q0 .475.163.925t.462.825q.05-.3.2-.588t.375-.487L12 10l1.475 1.475q.225.2.375.475t.2.575q.275-.375.487-.8t.213-.9q0-.475-.15-.913t-.45-.812q-.275.125-.563.2T13 9.375q-.75 0-1.375-.425t-.95-1.125q-.3.3-.55.637t-.438.713Q9.5 9.55 9.4 9.95t-.1.825ZM12 12.1l-.425.425q-.1.1-.138.2t-.037.225q0 .25.175.4t.425.15q.25 0 .425-.15t.175-.4q0-.125-.037-.225t-.138-.2L12 12.1ZM12 5v1.9q0 .425.3.713t.725.287q.275 0 .5-.162t.4-.388l.175-.25q1.025.575 1.588 1.563t.562 2.162q0 1.75-1.25 2.963T12 15q-1.75 0-2.975-1.225T7.8 10.8q0-1.925 1.225-3.425T12 5ZM6 22q-.825 0-1.413-.588T4 20V6q0-1.65 1.175-2.825T8 2h8q1.65 0 2.825 1.175T20 6v14q0 .825-.588 1.413T18 22H6Zm0-4v2h12v-2q-.75 0-1.2.5T15 19q-1.35 0-1.763-.5T12 18q-.825 0-1.238.5T9 19q-1.35 0-1.763-.5T6 18Zm3-1q.825 0 1.238-.5T12 16q1.35 0 1.8.5t1.2.5q.75 0 1.2-.5T18 16V6q0-.825-.588-1.413T16 4H8q-.825 0-1.413.588T6 6v10q1.35 0 1.763.5T9 17Z"/></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" id="ess_boiler_bottom" x="371" y="287" width="36" height="36" viewBox="0 0 24 24" opacity="${
                        load2e_icon === "boiler" && additional_load === "two"
                          ? "1"
                          : "0"
                      }"><path display="${
        additional_load === "no" || config.show_solar === "no" ? "none" : ""
      }" fill="${load_colour}" d="M9.3 10.775q0 .475.163.925t.462.825q.05-.3.2-.588t.375-.487L12 10l1.475 1.475q.225.2.375.475t.2.575q.275-.375.487-.8t.213-.9q0-.475-.15-.913t-.45-.812q-.275.125-.563.2T13 9.375q-.75 0-1.375-.425t-.95-1.125q-.3.3-.55.637t-.438.713Q9.5 9.55 9.4 9.95t-.1.825ZM12 12.1l-.425.425q-.1.1-.138.2t-.037.225q0 .25.175.4t.425.15q.25 0 .425-.15t.175-.4q0-.125-.037-.225t-.138-.2L12 12.1ZM12 5v1.9q0 .425.3.713t.725.287q.275 0 .5-.162t.4-.388l.175-.25q1.025.575 1.588 1.563t.562 2.162q0 1.75-1.25 2.963T12 15q-1.75 0-2.975-1.225T7.8 10.8q0-1.925 1.225-3.425T12 5ZM6 22q-.825 0-1.413-.588T4 20V6q0-1.65 1.175-2.825T8 2h8q1.65 0 2.825 1.175T20 6v14q0 .825-.588 1.413T18 22H6Zm0-4v2h12v-2q-.75 0-1.2.5T15 19q-1.35 0-1.763-.5T12 18q-.825 0-1.238.5T9 19q-1.35 0-1.763-.5T6 18Zm3-1q.825 0 1.238-.5T12 16q1.35 0 1.8.5t1.2.5q.75 0 1.2-.5T18 16V6q0-.825-.588-1.413T16 4H8q-.825 0-1.413.588T6 6v10q1.35 0 1.763.5T9 17Z"/></svg>
             -->



            <g display="${additional_load === "no" ? "none" : ""}">
              <foreignObject x="71%" y="15%" width="7.5%" height="7.5%" style="position: fixed; " ><body xmlns="http://www.w3.org/1999/xhtml" ><div style="position: fixed; "> 
              <ha-icon icon="${load1e_icon}" class="essload-icon" ></ha-icon></div></body></foreignObject>
            </g>

            <g display="${
              additional_load === "no" || additional_load === "one"
                ? "none"
                : ""
            }">
              <foreignObject x="71%" y="53%" width="7.5%" height="7.5%" style="position:fixed; " ><body xmlns="http://www.w3.org/1999/xhtml" ><div style="position: fixed; ">   
              <ha-icon icon="${load2e_icon}" class="essload-icon" ></ha-icon></div></body></foreignObject>
            </g>

            <g display="${
              additional_load === "no" ||
              additional_load === "one" ||
              additional_load === "two"
                ? "none"
                : ""
            }">
              <foreignObject x="86%" y="15%" width="7.5%" height="7.5%" style="position: fixed; " ><body xmlns="http://www.w3.org/1999/xhtml" > <div style="position: fixed; "> 
              <ha-icon icon="${load3e_icon}" class="essload-icon" ></ha-icon></div></body></foreignObject>
            </g>

            <g display="${
              additional_load === "no" ||
              additional_load === "one" ||
              additional_load === "two" ||
              additional_load === "three"
                ? "none"
                : ""
            }">
              <foreignObject x="86%" y="53%" width="7.5%" height="7.5%" style="position:fixed; " ><body xmlns="http://www.w3.org/1999/xhtml" ><div style="position: fixed; ">
              <ha-icon icon="${load4e_icon}" class="essload-icon" ></ha-icon></div></body></foreignObject>
            </g>

            <svg xmlns="http://www.w3.org/2000/svg" id="sun" x="10%" y="0.5%" width="9%" height="9%" viewBox="0 0 24 24"><path class="${
              config.show_solar === "no" ? "st12" : ""
            }" fill="${solar_colour}" d="M11.45 2v3.55L15 3.77L11.45 2m-1 6L8 10.46l3.75 1.25L10.45 8M2 11.45L3.77 15l1.78-3.55H2M10 2H2v8c.57.17 1.17.25 1.77.25c3.58.01 6.49-2.9 6.5-6.5c-.01-.59-.1-1.18-.27-1.75m7 20v-6h-3l5-9v6h3l-5 9Z"/></svg>

            <svg xmlns="http://www.w3.org/2000/svg" id="bat1-high" x="17%" y="83%" width="10%" height="13%" display="${
              config.entities.battery1_soc_184 === "none" ? "none" : ""
            }" preserveAspectRatio="none" opacity="${
        parseInt(stateObj53.state) > "80" ? "1" : "0"
      }" viewBox="0 0 24 24"> <path fill="${battery_colour}" d="M 12 20 H 4 V 6 h 8 L 12 20 m 0.67 -16 H 11 V 2 H 5 v 2 H 3.33 C 2.6 4 2 4.6 2 5.33 v 15.34 C 2 21.4 2.6 22 3.33 22 h 9.34 c 0.74 0 1.33 -0.59 1.33 -1.33 V 5.33 C 14 4.6 13.4 4 12.67 4 M 11 16 H 5 v 3 h 6 v -3 m 0 -9 H 5 v 3 h 6 V 7 m 0 4.5 H 5 v 3 h 6 v -3 h -3 h 3"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="bat1-med" x="17%" y="83%" width="10%" height="13%" display="${
              config.entities.battery1_soc_184 === "none" ? "none" : ""
            }" preserveAspectRatio="none" opacity="${
        parseInt(stateObj53.state) >= 50 && parseInt(stateObj53.state) <= 80
          ? "1"
          : "0"
      }" viewBox="0 0 24 24"> <path fill="yellow" d="M 12 20 H 4 V 6 h 8 L 12 20 m 0.67 -16 H 11 V 2 H 5 v 2 H 3.33 C 2.6 4 2 4.6 2 5.33 v 15.34 C 2 21.4 2.6 22 3.33 22 h 9.34 c 0.74 0 1.33 -0.59 1.33 -1.33 V 5.33 C 14 4.6 13.4 4 12.67 4 M 11 16 H 5 v 3 h 6 v -3 m 0 -4.5 H 5 v 3 h 6 v -3 h -3 h 3"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="bat1-low" x="17%" y="83%" width="10%" height="13%" display="${
              config.entities.battery1_soc_184 === "none" ? "none" : ""
            }" preserveAspectRatio="none" opacity="${
        parseInt(stateObj53.state) > 30 && parseInt(stateObj53.state) <= 49
          ? "1"
          : "0"
      }" viewBox="0 0 24 24"> <path fill="orange" d="M 12 20 H 4 V 6 h 8 L 12 6 L 12 20 m 0.67 -15.999 H 11 V 2 H 5 v 2 H 3.33 C 2.6 4 2 4.6 2 5.33 v 15.34 C 2 21.4 2.6 22 3.33 22 h 9.34 c 0.74 0 1.33 -0.59 1.33 -1.33 V 5.33 C 14 4.6 13.4 4 12.67 4 M 11 16 H 5 v 3 h 6 v -3"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="bat1-empty" x="17%" y="83%" width="10%" height="13%" display="${
              config.entities.battery1_soc_184 === "none" ? "none" : ""
            }" preserveAspectRatio="none" opacity="${
        parseInt(stateObj53.state) <= 30 ? "1" : "0"
      }" viewBox="0 0 24 24"> <path fill="red" d="M 12 6 L 12 20 M 12 20 H 4 l 0.05 -14 h 7.95 m 0.67 -2 h -1.67 V 2 h -6 v 2 H 3.38 a 1.33 1.33 0 0 0 -1.33 1.33 v 15.34 c 0 0.73 0.6 1.33 1.33 1.33 h 9.34 c 0.73 0 1.33 -0.6 1.33 -1.33 V 5.33 A 1.33 1.33 0 0 0 12.72 4 Z"/></svg>

            <svg xmlns="http://www.w3.org/2000/svg" id="bat2-high" x="32%" y="83%" width="10%" height="13%" display="${
              config.entities.battery2_soc_184 === "none" ? "none" : ""
            }" preserveAspectRatio="none" opacity="${
        parseInt(stateObj56.state) > "80" ? "1" : "0"
      }" viewBox="0 0 24 24"> <path fill="${battery_colour}" d="M 12 20 H 4 V 6 h 8 L 12 20 m 0.67 -16 H 11 V 2 H 5 v 2 H 3.33 C 2.6 4 2 4.6 2 5.33 v 15.34 C 2 21.4 2.6 22 3.33 22 h 9.34 c 0.74 0 1.33 -0.59 1.33 -1.33 V 5.33 C 14 4.6 13.4 4 12.67 4 M 11 16 H 5 v 3 h 6 v -3 m 0 -9 H 5 v 3 h 6 V 7 m 0 4.5 H 5 v 3 h 6 v -3 h -3 h 3"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="bat2-med" x="32%" y="83%" width="10%" height="13%" display="${
              config.entities.battery2_soc_184 === "none" ? "none" : ""
            }" preserveAspectRatio="none" opacity="${
        parseInt(stateObj56.state) >= 50 && parseInt(stateObj56.state) <= 80
          ? "1"
          : "0"
      }" viewBox="0 0 24 24"> <path fill="yellow" d="M 12 20 H 4 V 6 h 8 L 12 20 m 0.67 -16 H 11 V 2 H 5 v 2 H 3.33 C 2.6 4 2 4.6 2 5.33 v 15.34 C 2 21.4 2.6 22 3.33 22 h 9.34 c 0.74 0 1.33 -0.59 1.33 -1.33 V 5.33 C 14 4.6 13.4 4 12.67 4 M 11 16 H 5 v 3 h 6 v -3 m 0 -4.5 H 5 v 3 h 6 v -3 h -3 h 3"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="bat2-low" x="32%" y="83%" width="10%" height="13%" display="${
              config.entities.battery2_soc_184 === "none" ? "none" : ""
            }" preserveAspectRatio="none" opacity="${
        parseInt(stateObj56.state) > 30 && parseInt(stateObj56.state) <= 49
          ? "1"
          : "0"
      }" viewBox="0 0 24 24"> <path fill="orange" d="M 12 20 H 4 V 6 h 8 L 12 6 L 12 20 m 0.67 -15.999 H 11 V 2 H 5 v 2 H 3.33 C 2.6 4 2 4.6 2 5.33 v 15.34 C 2 21.4 2.6 22 3.33 22 h 9.34 c 0.74 0 1.33 -0.59 1.33 -1.33 V 5.33 C 14 4.6 13.4 4 12.67 4 M 11 16 H 5 v 3 h 6 v -3"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="bat2-empty" x="32%" y="83%" width="10%" height="13%" display="${
              config.entities.battery2_soc_184 === "none" ? "none" : ""
            }" preserveAspectRatio="none" opacity="${
        parseInt(stateObj56.state) <= 30 ? "1" : "0"
      }" viewBox="0 0 24 24"> <path fill="red" d="M 12 6 L 12 20 M 12 20 H 4 l 0.05 -14 h 7.95 m 0.67 -2 h -1.67 V 2 h -6 v 2 H 3.38 a 1.33 1.33 0 0 0 -1.33 1.33 v 15.34 c 0 0.73 0.6 1.33 1.33 1.33 h 9.34 c 0.73 0 1.33 -0.6 1.33 -1.33 V 5.33 A 1.33 1.33 0 0 0 12.72 4 Z"/></svg>

            <svg xmlns="http://www.w3.org/2000/svg" id="bat3-high" x="47%" y="83%" width="10%" height="13%" display="${
              config.entities.battery3_soc_184 === "none" ? "none" : ""
            }" preserveAspectRatio="none" opacity="${
        parseInt(stateObj59.state) > "80" ? "1" : "0"
      }" viewBox="0 0 24 24"> <path fill="${battery_colour}" d="M 12 20 H 4 V 6 h 8 L 12 20 m 0.67 -16 H 11 V 2 H 5 v 2 H 3.33 C 2.6 4 2 4.6 2 5.33 v 15.34 C 2 21.4 2.6 22 3.33 22 h 9.34 c 0.74 0 1.33 -0.59 1.33 -1.33 V 5.33 C 14 4.6 13.4 4 12.67 4 M 11 16 H 5 v 3 h 6 v -3 m 0 -9 H 5 v 3 h 6 V 7 m 0 4.5 H 5 v 3 h 6 v -3 h -3 h 3"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="bat3-med" x="47%" y="83%" width="10%" height="13%" display="${
              config.entities.battery3_soc_184 === "none" ? "none" : ""
            }" preserveAspectRatio="none" opacity="${
        parseInt(stateObj59.state) >= 50 && parseInt(stateObj59.state) <= 80
          ? "1"
          : "0"
      }" viewBox="0 0 24 24"> <path fill="yellow" d="M 12 20 H 4 V 6 h 8 L 12 20 m 0.67 -16 H 11 V 2 H 5 v 2 H 3.33 C 2.6 4 2 4.6 2 5.33 v 15.34 C 2 21.4 2.6 22 3.33 22 h 9.34 c 0.74 0 1.33 -0.59 1.33 -1.33 V 5.33 C 14 4.6 13.4 4 12.67 4 M 11 16 H 5 v 3 h 6 v -3 m 0 -4.5 H 5 v 3 h 6 v -3 h -3 h 3"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="bat3-low" x="47%" y="83%" width="10%" height="13%" display="${
              config.entities.battery3_soc_184 === "none" ? "none" : ""
            }" preserveAspectRatio="none" opacity="${
        parseInt(stateObj59.state) > 30 && parseInt(stateObj59.state) <= 49
          ? "1"
          : "0"
      }" viewBox="0 0 24 24"> <path fill="orange" d="M 12 20 H 4 V 6 h 8 L 12 6 L 12 20 m 0.67 -15.999 H 11 V 2 H 5 v 2 H 3.33 C 2.6 4 2 4.6 2 5.33 v 15.34 C 2 21.4 2.6 22 3.33 22 h 9.34 c 0.74 0 1.33 -0.59 1.33 -1.33 V 5.33 C 14 4.6 13.4 4 12.67 4 M 11 16 H 5 v 3 h 6 v -3"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="bat3-empty" x="47%" y="83%" width="10%" height="13%" display="${
              config.entities.battery3_soc_184 === "none" ? "none" : ""
            }" preserveAspectRatio="none" opacity="${
        parseInt(stateObj59.state) <= 30 ? "1" : "0"
      }" viewBox="0 0 24 24"> <path fill="red" d="M 12 6 L 12 20 M 12 20 H 4 l 0.05 -14 h 7.95 m 0.67 -2 h -1.67 V 2 h -6 v 2 H 3.38 a 1.33 1.33 0 0 0 -1.33 1.33 v 15.34 c 0 0.73 0.6 1.33 1.33 1.33 h 9.34 c 0.73 0 1.33 -0.6 1.33 -1.33 V 5.33 A 1.33 1.33 0 0 0 12.72 4 Z"/></svg>

            <svg xmlns="http://www.w3.org/2000/svg" id="bat4-high" x="62%" y="83%" width="10%" height="13%" display="${
              config.entities.battery4_soc_184 === "none" ? "none" : ""
            }" preserveAspectRatio="none" opacity="${
        parseInt(stateObj50.state) > "80" ? "1" : "0"
      }" viewBox="0 0 24 24"> <path fill="${battery_colour}" d="M 12 20 H 4 V 6 h 8 L 12 20 m 0.67 -16 H 11 V 2 H 5 v 2 H 3.33 C 2.6 4 2 4.6 2 5.33 v 15.34 C 2 21.4 2.6 22 3.33 22 h 9.34 c 0.74 0 1.33 -0.59 1.33 -1.33 V 5.33 C 14 4.6 13.4 4 12.67 4 M 11 16 H 5 v 3 h 6 v -3 m 0 -9 H 5 v 3 h 6 V 7 m 0 4.5 H 5 v 3 h 6 v -3 h -3 h 3"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="bat4-med" x="62%" y="83%" width="10%" height="13%" display="${
              config.entities.battery4_soc_184 === "none" ? "none" : ""
            }" preserveAspectRatio="none" opacity="${
        parseInt(stateObj50.state) >= 50 && parseInt(stateObj50.state) <= 80
          ? "1"
          : "0"
      }" viewBox="0 0 24 24"> <path fill="yellow" d="M 12 20 H 4 V 6 h 8 L 12 20 m 0.67 -16 H 11 V 2 H 5 v 2 H 3.33 C 2.6 4 2 4.6 2 5.33 v 15.34 C 2 21.4 2.6 22 3.33 22 h 9.34 c 0.74 0 1.33 -0.59 1.33 -1.33 V 5.33 C 14 4.6 13.4 4 12.67 4 M 11 16 H 5 v 3 h 6 v -3 m 0 -4.5 H 5 v 3 h 6 v -3 h -3 h 3"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="bat4-low" x="62%" y="83%" width="10%" height="13%" display="${
              config.entities.battery4_soc_184 === "none" ? "none" : ""
            }" preserveAspectRatio="none" opacity="${
        parseInt(stateObj50.state) > 30 && parseInt(stateObj50.state) <= 49
          ? "1"
          : "0"
      }" viewBox="0 0 24 24"> <path fill="orange" d="M 12 20 H 4 V 6 h 8 L 12 6 L 12 20 m 0.67 -15.999 H 11 V 2 H 5 v 2 H 3.33 C 2.6 4 2 4.6 2 5.33 v 15.34 C 2 21.4 2.6 22 3.33 22 h 9.34 c 0.74 0 1.33 -0.59 1.33 -1.33 V 5.33 C 14 4.6 13.4 4 12.67 4 M 11 16 H 5 v 3 h 6 v -3"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="bat4-empty" x="62%" y="83%" width="10%" height="13%" display="${
              config.entities.battery4_soc_184 === "none" ? "none" : ""
            }" preserveAspectRatio="none" opacity="${
        parseInt(stateObj50.state) <= 30 ? "1" : "0"
      }" viewBox="0 0 24 24"> <path fill="red" d="M 12 6 L 12 20 M 12 20 H 4 l 0.05 -14 h 7.95 m 0.67 -2 h -1.67 V 2 h -6 v 2 H 3.38 a 1.33 1.33 0 0 0 -1.33 1.33 v 15.34 c 0 0.73 0.6 1.33 1.33 1.33 h 9.34 c 0.73 0 1.33 -0.6 1.33 -1.33 V 5.33 A 1.33 1.33 0 0 0 12.72 4 Z"/></svg>

            <svg id="ev_car" x="65%" y="80%" width="25%" height="25%" fill="${load_colour}" class="${
        config.show_ev === "yes" ? "" : "st12"
      }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300.000000 107.000000" preserveAspectRatio="xMidYMid meet"><g 
            transform="translate(0.000000,107.000000) scale(0.100000,-0.100000)" stroke="none">
            <path d="M1585 1033 c-122 -8 -279 -36 -356 -62 -108 -36 -259 -113 -377 -190 -99 -65 -116 -71 -287 -96 -140 -21 -310 -77 -386 -127 -37 -25 -75 -62 -101 -100 -40 -56 -43 -66 -43 -125 0 -62 0 -63 28 -63 37 0 38 -36 1 -50 -45 -17 -26 -43 41 -56 33 -6 73 -16 88 -23 16 -6 46 -11 68 -11 28 0 39 -4 39 -15 0 -12 7 -14 26 -9 15 4 52 7 83 8 54 1 58 -1 95 -42 21 -23 50 -46 65 -50 14 -4 -109 -9 -274 -12 -165 -3 377 -5 1205 -5 828 -1 1393 2 1255 5 -137 3 -243 7 -234 8 28 4 98 72 110 107 l13 35 127 0 126 0 27 40 c14 22 31 40 36 40 15 0 12 26 -5 40 -12 10 -14 24 -9 59 3 25 10 50 15 55 16 18 9 44 -15 63 -33 24 -69 116 -53 133 9 9 8 15 -7 24 -11 6 -43 36 -72 66 -38 40 -50 58 -42 67 13 17 1 33 -25 33 -16 1 -38 22 -75 73 l-53 72 30 9 c17 5 31 15 31 22 0 19 -89 35 -255 44 -82 5 -240 16 -350 25 -183 14 -362 17 -490 8z m258 -10 c-29 -2 -77 -2 -105 0 -29 2 -6 3 52 3 58 0 81 -1 53 -3z m-225 -10 c-15 -2 -42 -2 -60 0 -18 2 -6 4 27 4 33 0 48 -2 33 -4z m385 0 c-18 -2 -48 -2 -65 0 -18 2 -4 4 32 4 36 0 50 -2 33 -4z m-73 -18 c261 -5 470 -22 498 -39 8 -4 11 -14 8 -22 -3 -7 11 -37 30 -66 73 -109 99 -133 202 -187 55 -29 110 -63 122 -76 l21 -23 -56 -26 c-67 -30 -178 -96 -172 -102 2 -2 48 20 103 50 54 29 109 56 121 60 33 10 63 -10 84 -60 11 -24 29 -50 41 -58 19 -14 20 -19 10 -58 -18 -66 -18 -94 -2 -113 12 -15 12 -19 -7 -33 -11 -10 -26 -27 -32 -39 -11 -22 -18 -23 -110 -23 l-99 0 -7 63 c-12 110 -71 189 -166 222 -94 34 -182 13 -254 -60 -59 -58 -75 -102 -75 -198 l0 -66 -626 -1 c-345 0 -630 -3 -634 -5 -4 -3 -11 32 -15 78 -8 96 -21 130 -65 181 -51 58 -103 80 -185 80 -74 0 -117 -15 -165 -60 l-25 -23 -50 60 c-28 33 -51 64 -53 69 -2 5 50 25 115 45 65 20 129 41 143 46 32 13 86 56 78 64 -11 11 -292 -55 -378 -90 -85 -34 -137 -45 -126 -26 25 39 467 150 505 127 5 -4 12 -2 16 4 3 5 14 10 23 10 9 0 44 12 77 25 74 30 90 19 39 -27 -27 -25 -35 -40 -31 -53 6 -15 17 -17 72 -13 56 3 65 2 59 -12 -26 -62 -28 -221 -4 -351 13 -70 36 -89 104 -88 44 1 47 2 21 9 l-30 8 37 1 c20 0 38 -3 40 -7 5 -13 929 3 955 16 53 29 283 412 298 496 7 40 -13 76 -41 76 -24 0 -24 18 1 68 37 74 34 90 -17 96 -267 32 -781 45 -893 22 -127 -26 -286 -92 -432 -178 -45 -26 -86 -48 -92 -48 -29 0 -2 23 87 74 122 70 243 119 370 151 53 13 106 26 117 29 11 3 -2 3 -28 0 -27 -3 -73 -12 -103 -20 -30 -8 -64 -14 -74 -14 -11 0 -20 -4 -20 -10 0 -5 -6 -10 -12 -10 -23 0 -170 -68 -279 -130 -176 -98 -216 -107 -66 -14 102 64 262 141 347 169 94 30 191 43 300 39 58 -2 229 -6 380 -9z m618 -19 c34 -3 75 -9 89 -12 25 -7 25 -8 8 -15 -11 -4 -58 -8 -104 -8 -69 -1 -86 2 -97 17 -20 26 -17 32 14 27 15 -2 55 -6 90 -9z m-852 -44 c-2 -9 -15 -65 -27 -123 l-22 -107 -106 -6 c-58 -3 -150 -9 -204 -12 l-97 -6 -15 36 c-10 22 -20 33 -29 30 -7 -3 -16 2 -19 10 -4 9 -16 16 -27 16 -15 0 -20 7 -20 25 0 21 11 30 68 59 133 66 282 102 410 98 81 -3 92 -5 88 -20z m90 -14 c-4 -18 -11 -69 -17 -113 -5 -44 -11 -85 -14 -92 -4 -13 -41 -10 -39 3 1 5 10 55 19 112 9 57 15 105 12 108 -4 4 -28 -111 -42 -202 -5 -36 -9 -41 -26 -37 -15 4 -19 11 -14 27 3 11 15 67 27 124 l21 102 40 0 c39 0 39 0 33 -32z m376 15 c10 -5 5 -160 -6 -170 -4 -4 -237 -39 -308 -46 -59 -6 -83 9 -70 43 9 23 9 23 15 -10 4 -18 10 -30 13 -27 4 3 0 25 -8 49 -12 34 -13 57 -5 112 l11 69 174 -7 c96 -3 179 -9 184 -13z m94 -16 c1 -1 4 -30 7 -65 6 -67 -4 -82 -52 -82 -23 0 -27 26 -15 114 7 45 8 47 33 41 14 -4 26 -7 27 -8z m33 -65 c-1 -49 -3 -60 -9 -42 -12 37 -12 122 0 115 6 -3 10 -36 9 -73z m57 64 c3 -8 -6 -36 -19 -63 l-25 -48 -3 63 c-4 59 -3 62 19 62 12 0 25 -6 28 -14z m208 -58 c30 -40 63 -83 73 -94 25 -30 204 -167 209 -161 3 3 -23 26 -58 53 -87 65 -89 67 -48 59 44 -8 118 -83 118 -119 0 -25 -1 -24 -47 14 -25 21 -87 61 -136 88 -81 43 -96 56 -152 130 -35 46 -63 87 -63 92 0 6 11 10 25 10 18 0 37 -17 79 -72z m103 -8 c42 -58 64 -79 81 -80 12 0 22 -4 22 -9 0 -6 -12 -6 -32 0 -40 11 -38 11 -38 0 0 -5 12 -11 27 -13 14 -2 28 -8 30 -15 3 -8 -7 -9 -39 -2 -46 11 -74 37 -148 142 l-41 57 39 0 c38 0 43 -3 99 -80z m-1561 -61 c-5 -25 -46 -79 -59 -79 -2 0 -19 8 -39 18 l-36 19 61 36 c34 20 66 36 71 37 5 0 6 -14 2 -31z m1252 -25 c37 -25 29 -71 -34 -192 -67 -129 -175 -293 -216 -327 -29 -25 -32 -25 -208 -25 -107 0 -181 4 -185 10 -9 15 -10 327 -1 393 7 56 8 57 41 57 34 0 241 27 420 55 55 9 109 22 120 30 26 18 36 18 63 -1z m-1190 -37 c3 -26 1 -27 -41 -27 -41 0 -45 2 -40 21 6 22 37 39 63 36 8 -1 16 -15 18 -30z m-155 -15 c28 -30 3 -49 -75 -57 -80 -9 -88 4 -31 48 42 31 83 35 106 9z m215 -8 c10 -19 8 -22 -13 -26 -22 -5 -25 -2 -25 21 1 25 1 26 16 6 16-19 16 -19 9 5 -8 28 -3 26 13 -6z m-149 -29 c16 -5 21 -4 17 4 -5 7 8 11 38 11 25 0 46 -4 46 -10 0 -5 -8 -10 -19 -10 -10 0 -46 -3 -80 -6 -55 -6 -61 -5 -55 10 4 9 12 15 18 13 6 -2 22 -8 35 -12z m624 -22 c-5 -16 -8 -119 -8 -231 l0 -202 -92 0 c-50 0 -93 -3 -95 -7 -1 -5 -114 -6 -251 -5 l-247 4 -17 31 c-24 45 -26 358 -3 381 19 19 192 34 475 42 110 4 202 8 204 10 2 2 13 4 23 4 15 0 17 -5 11 -27z m-1021 -5 c-21 -21 -176 -67 -184 -54 -12 18 9 30 85 48 92 21 115 22 99 6z m-201 -69 c-8 -9 -207 -75 -251 -84 -30 -7 -33 -6 -22 8 17 20 87 53 187 88 73 26 80 27 86 11 4 -9 4 -20 0 -23z m-275 -61 c-30 -22 -36 -52 -8 -44 9 3 49 14 89 24 l71 18 59 -66 59 -65 -24 -47 c-19 -37 -24 -61 -23 -118 l1 -73 -112 8 c-194 12 -301 42 -219 60 42 9 45 18 21 65 -17 33 -18 40 -5 40 9 0 15 9 15 24 0 33 -17 42 -41 20 -10 -9 -22 -14 -26 -11 -3 4 0 7 8 7 10 1 9 4 -4 11 -16 9 -15 13 10 47 42 58 96 112 111 112 7 0 11 4 8 9 -4 5 4 7 15 4 22 -6 21 -6 -5 -25z m561 -113 c58 -29 97 -79 111 -142 19 -83 -13 -157 -91 -214 -25 -18 -34 -29 -23 -29 9 0 40 23 68 51 42 42 55 49 76 44 25 -6 293 -6 922 -1 272 2 317 1 326 -12 10 -14 13 -13 23 6 15 29 67 31 76 3 8 -27 81 -91 103 -91 11 0 7 6 -14 19 -149 91 -142 297 13 368 216 99 399 -175 226 -339 -63 -60 -16 -58 -1023 -58 -1016 0 -960 -3 -1028 63 -49 46 -65 84 -65 148 0 158 158 255 300 184z m-677 -79 c0 -8 3 -21 6 -30 4 -11 0 -16 -12 -16 -14 0 -20 8 -21 30 -2 21 2 30 12 30 8 0 15 -6 15 -14z m1713 -123 c-29 -2 -77 -2 -105 0 -29 2 -6 3 52 3 58 0 81 -1 53 -3z"/>
            <path d="M867 564 c-16 -16 -5 -25 26 -22 17 2 31 8 30 13 -3 12 -46 19 -56 9z"/>
            <path d="M2830 265 c-17 -20 3 -45 36 -45 25 0 67 37 58 52 -9 14 -81 9 -94 -7z m75 -15 c-3 -5 -19 -10 -36 -10 -16 0 -29 5 -29 10 0 6 16 10 36 10 21 0 33 -4 29 -10z"/>
            <path d="M2158 664 c-36 -19 -35 -29 4 -48 38 -19 52 -20 103 -2 51 18 57 41 13 50 -70 14 -94 14 -120 0z m52 -4 c-11 -7 -7 -10 18 -10 17 0 32 -4 32 -10 0 -5 -25 -10 -55 -10 -30 0 -55 4 -55 10 0 5 6 7 13 4 8 -3 20 2 27 11 7 8 18 15 24 15 6 0 4 -5 -4 -10z"/>
            <path d="M1533 622 c-18 -9 -33 -21 -33 -27 0 -5 18 -19 41 -29 38 -19 42 -19 72 -4 18 9 40 19 50 22 25 8 16 30 -14 34 -13 2 -28 8 -33 13 -15 13 -47 10 -83 -9z m75 -8 c43 -12 21 -24 -40 -23 -35 1 -54 3 -43 6 11 3 24 9 30 14 11 10 21 11 53 3z"/>
            <path d="M157 303 c-13 -12 -7 -40 13 -58 16 -15 22 -15 35 -5 18 15 19 42 3 58 -13 13 -41 16 -51 5z m43 -33 c0 -23 -10 -26 -28 -8 -18 18 -15 28 8 28 13 0 20 -7 20 -20z"/>
            <path d="M588 360 c-102 -54 -111 -204 -16 -272 46 -32 139 -33 184 -1 72 51 86 173 28 234 -56 60 -129 74 -196 39z m152 -17 c36 -21 70 -81 70 -123 0 -71 -53 -132 -126 -146 -45 -8 -118 26 -144 68 -38 63 -17 162 44 199 39 24 118 25 156 2z"/>
            <path d="M2357 359 c-71 -37 -101 -119 -72 -195 23 -61 72 -96 138 -101 168 -12 231 198 88 294 -42 29 -102 29 -154 2z m180 -43 c88 -95 22 -242 -108 -240 -82 1 -139 61 -139 146 0 130 158 191 247 94z"/></g></svg>


            <svg id="whispergen" x="104%" y="81%" width="12%" height="12%" viewBox="0 0 300.000000 430.000000" preserveAspectRatio="xMidYMid meet" class="${
              config.show_stirling === "yes" ? "" : "st12"
            }"   version="1.0" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0.000000,430.000000) scale(0.100000,-0.100000)" fill="${load_colour}" stroke="none">
            <path d="M131 4286 c-14 -8 -28 -22 -32 -32 -4 -11 -8 -144 -8 -298 l-1 -278 -35 4 -36 4 3 -268 c2 -209 0 -268 -9 -268 -7 0 -13 -4 -13 -10 0 -5 6 -10 13 -10 9 0 12 -124 12 -587 0 -511 -2 -590 -15 -600 -13 -11 -13 -12 0 -13 13 0 15 -79 12 -660 l-2 -660 35 0 35 0 0 -223 c0 -203 2 -225 18 -240 16 -14 54 -17 287 -19 l268 -3 2 -57 1 -58 -335 -3 c-185 -1 62 -2 549 -2 487 0 697 1 468 2 l-418 3 0 61 c0 37 4 58 10 54 6 -3 10 -26 10 -51 l0 -44 413 0 c364 1 412 -1 415 -15 2 -8 7 -15 12 -15 5 0 7 7 4 15 -5 13 29 15 270 15 l276 0 0 50 c0 28 5 50 10 50 6 0 10 -28 10 -65 l0 -65 130 0 129 0 3 63 3 62 135 5 c74 3 141 9 148 13 9 6 12 65 12 238 l0 229 35 0 35 0 -2 340 c-2 219 1 342 7 345 7 3 7 7 0 10 -12 6 -12 405 0 425 5 8 5 15 -1 17 -9 3 -9 1667 1 1682 2 5 2 11 -1 14 -3 3 -7 59 -7 124 l-2 118 -33 0 -33 0 -2 87 c-2 91 1 97 50 102 7 1 18 7 25 15 11 11 8 12 -17 7 -16 -4 -37 -9 -45 -11 -13 -4 -15 19 -12 175 l3 181 -31 29 -31 29 -1352 0 c-1112 0 -1356 -2 -1376 -13z m1156 -59 l31 -52 -488 -3 -488 -2 -20 -33 c-11 -17 -25 -52 -32 -77 -7 -25 -16 -53 -21 -62 -5 -10 -9 -39 -9 -65 0 -73 -22 -273 -30 -273 -13 0 -30 -208 -32 -397 -2 -101 -4 -183 -4 -183 -1 0 -15 7 -30 15 -16 8 -36 15 -44 15 -13 0 -15 38 -13 292 1 161 3 416 3 566 0 258 1 273 20 292 20 20 33 20 573 20 l552 -1 32 -52z m284 -2 l16 -55 -121 0 -121 0 -20 33 c-11 17 -25 42 -33 55 l-13 22 138 0 138 0 16 -55z m299 47 c0 -5 -7 -23 -16 -41 -9 -17 -13 -38 -10 -46 4 -13 -13 -15 -113 -15 l-119 0 -16 47 c-9 26 -16 50 -16 55 0 4 65 8 145 8 80 0 145 -4 145 -8z m1005 -17 c25 -24 25 -26 25 -203 l0 -179 -27 -6 c-16 -3 -35 -8 -43 -12 -13 -4 -19 12 -34 85 -18 89 -19 91 -85 160 l-66 70 -393 0 c-215 0 -392 1 -392 3 0 2 7 27 15 55 l16 52 480 0 480 0 24 -25z m-1516 -137 c28 -37 29 -42 14 -53 -17 -13 -7 -25 76 -93 14 -11 10 -12 -21 -7 -20 3 -45 1 -55 -4 -10 -5 -36 -13 -58 -16 -27 -5 -51 -19 -78 -46 l-39 -39 -315 1 c-231 0 -318 -3 -329 -11 -9 -8 -14 -31 -14 -64 0 -44 -4 -56 -28 -79 -27 -26 -32 -27 -145 -27 l-117 0 6 63 c3 34 9 71 14 82 5 11 11 59 13 106 4 68 11 99 35 152 l31 67 488 3 c268 1 489 3 490 5 1 1 15 -17 32 -40z m246 32 c6 0 2 -5 -7 -11 -25 -14 -22 -29 10 -73 17 -23 27 -47 25 -60 -4 -20 -11 -21 -84 -21 l-80 0 -16 57 c-14 51 -19 57 -38 52 -16 -4 -25 1 -35 23 -8 15 -16 30 -17 33 -2 4 198 4 242 0z m200 -62 l-1 -63 -62 3 c-40 3 -62 0 -62 -7 0 -6 -4 -11 -10 -11 -5 0 -10 25 -10 55 0 32 -4 55 -11 55 -5 0 -7 5 -4 10 3 6 -1 10 -9 10 -9 0 -16 3 -16 8 0 4 42 6 92 5 l93 -2 0 -63z m462 62 l365 0 61 -60 62 -60 -182 0 c-160 0 -183 -2 -183 -16 0 -9 -5 -13 -12 -10 -7 3 -21 9 -30 12 -10 4 -18 13 -18 20 0 12 -41 14 -230 14 -205 0 -230 -2 -230 -16 0 -11 -5 -14 -16 -10 -9 3 -20 6 -25 6 -12 0 0 29 29 67 14 19 22 39 18 49 -5 12 -2 15 10 10 8 -3 180 -6 381 -6z m43 -174 c0 -33 5 -56 12 -58 6 -2 12 -16 12 -31 1 -23 -2 -27 -26 -27 -15 0 -30 5 -33 10 -3 6 -19 10 -36 10 -16 0 -29 -4 -29 -10 0 -6 -36 -10 -89 -10 -50 0 -93 5 -96 10 -3 6 -37 10 -76 10 l-69 0 0 75 0 75 215 0 215 0 0 -54z m-555 19 c0 -5 -15 -11 -32 -13 -25 -3 -33 1 -33 13 0 12 8 16 33 13 17 -2 32 -7 32 -13z m85 1 c0 -8 3 -21 6 -30 5 -13 -2 -16 -41 -16 -31 0 -44 4 -39 11 3 6 17 9 30 6 26 -5 42 7 24 18 -15 9 -12 25 5 25 8 0 15 -6 15 -14z m930 -23 c17 -48 29 -133 18 -133 -4 0 -8 20 -8 45 l0 45 -155 0 -155 0 0 40 0 40 143 0 143 0 14 -37z m-410 -8 c0 -19 -4 -35 -10 -35 -5 0 -10 16 -10 35 0 19 5 35 10 35 6 0 10 -16 10 -35z m-740 -21 c6 -14 10 -27 10 -30 0 -2 -34 -4 -75 -4 l-75 0 0 30 0 30 65 0 c61 0 66 -2 75 -26z m130 16 c0 -5 -4 -10 -10 -10 -5 0 -19 -9 -31 -21 -25 -25 -29 -23 -22 14 4 22 11 27 34 27 16 0 29 -4 29 -10z m-300 -19 c0 -5 -30 -12 -67 -16 -76 -8 -117 -25 -133 -55 -16 -30 6 -26 34 7 18 20 31 26 59 25 20 -1 38 2 41 6 2 4 22 6 43 4 21 -2 74 -7 117 -11 71 -5 77 -7 55 -18 -37 -19 -63 -20 -75 -4 -12 15 -84 8 -84 -9 0 -6 -37 -11 -82 -12 l-83 -2 85 -6 c47 -3 -111 -8 -352 -11 -240 -2 -434 -1 -431 4 2 4 150 7 329 7 179 0 323 4 320 8 -12 20 55 66 111 78 71 15 113 17 113 5z m220 -36 c0 -16 -6 -25 -15 -25 -9 0 -15 9 -15 25 0 16 6 25 15 25 9 0 15 -9 15 -25z m70 6 c0 -23 -16 -36 -25 -21 -9 14 1 40 15 40 5 0 10 -9 10 -19z m118 -3 c-2 -13 -9 -23 -15 -22 -7 1 -31 2 -53 3 -57 2 -55 29 3 34 23 2 48 4 55 5 9 1 12 -6 10 -20z m725 5 l177 -6 0 -23 c0 -23 -3 -24 -80 -24 -47 0 -80 4 -80 10 0 6 -13 10 -30 10 -16 0 -30 -4 -30 -10 0 -6 -38 -10 -95 -10 l-95 0 0 29 c0 31 15 43 40 34 8 -3 95 -7 193 -10z m-1073 -42 c0 -5 3 -16 6 -25 4 -11 0 -16 -14 -16 -15 0 -20 6 -18 25 1 23 26 38 26 16z m393 -10 c100 -1 107 -2 107 -21 0 -19 -7 -20 -162 -20 -90 -1 -192 -2 -228 -2 -54 -2 -65 1 -68 15 -4 18 10 20 135 17 33 -1 64 3 67 8 3 6 14 9 24 7 9 -2 65 -4 125 -4z m857 -23 c0 -6 -68 -25 -127 -35 -18 -3 -33 -10 -33 -17 0 -6 -5 -4 -10 5 -10 17 -8 17 -497 19 -57 0 -73 3 -73 15 0 11 20 15 98 17 187 6 642 3 642 -4z m140 -194 l0 -206 -22 6 c-13 3 -33 6 -46 6 l-23 0 3 195 3 194 35 4 c19 2 38 4 43 5 4 1 7 -91 7 -204z m-2280 176 c0 -5 -3 -10 -7 -10 -5 0 -17 -7 -28 -16 -18 -13 -21 -30 -26 -172 l-5 -157 -2 179 c-2 153 0 177 13 173 8 -4 17 -2 20 3 8 13 35 13 35 0z m281 -32 c-22 -8 -28 -32 -11 -43 25 -16 2 -20 -94 -17 l-104 3 -42 -40 c-42 -40 -42 -41 -38 -97 4 -50 9 -60 39 -85 41 -33 66 -39 173 -40 44 0 75 -3 69 -6 -20 -8 -15 -39 8 -49 22 -10 21 -10 -4 -27 -14 -9 -44 -19 -66 -23 -38 -6 -41 -5 -41 17 0 22 0 22 15 3 14 -19 14 -19 15 1 0 13 -11 25 -30 33 -38 17 -70 2 -70 -33 0 -30 -7 -31 -57 -8 -50 23 -50 23 -30 34 20 12 23 55 4 62 -7 3 -24 3 -38 0 l-24 -4 0 146 c0 143 0 146 18 124 14 -18 22 -21 34 -13 22 14 26 46 8 60 -30 22 9 33 126 36 85 2 120 -1 138 -11 23 -15 23 -15 2 -23z m273 22 c-3 -8 -8 -30 -11 -47 l-6 -33 -71 0 c-71 0 -73 1 -119 44 -26 24 -47 45 -47 47 0 2 59 4 130 4 112 0 129 -2 124 -15z m46 10 c0 -6 -4 -18 -9 -28 -5 -9 -14 -30 -20 -46 -19 -47 -22 -23 -5 32 15 46 34 69 34 42z m220 -7 c0 -7 -9 -13 -20 -13 -33 0 -68 -21 -74 -45 -5 -21 -13 -24 -76 -27 -39 -2 -70 -2 -70 0 0 8 32 77 39 86 14 17 201 15 201 -1z m1350 -211 l-7 -157 0 195 c-1 110 3 178 7 157 4 -21 4 -109 0 -195z m-620 175 c14 -7 68 -77 122 -157 89 -132 96 -145 76 -148 -12 -2 -24 1 -26 7 -2 7 -36 11 -89 11 -82 0 -84 1 -78 22 6 18 4 20 -11 13 -11 -4 -45 -12 -76 -18 -32 -5 -58 -13 -58 -18 0 -4 26 -15 58 -24 31 -9 63 -22 70 -27 9 -8 12 -5 12 12 0 23 0 23 112 17 109 -6 114 -7 135 -34 13 -15 23 -33 23 -39 0 -6 7 -17 15 -24 20 -16 95 -127 95 -140 0 -5 4 -10 8 -10 13 0 32 -48 32 -80 l0 -30 -384 0 -383 0 8 43 c4 23 8 86 9 140 l0 97 -51 0 -51 0 3 -120 c3 -94 7 -123 19 -130 13 -9 7 -14 -12 -11 -5 0 -8 -3 -8 -9 0 -6 -134 -10 -381 -10 l-382 0 6 38 c4 24 40 87 104 180 l97 142 72 0 c64 0 76 3 104 26 52 44 86 139 73 204 -6 30 -8 32 -44 28 -22 -2 -39 -2 -39 0 0 6 36 40 55 50 30 17 731 16 765 -1z m330 -7 c-14 -11 -31 -20 -37 -20 -7 0 -13 -4 -13 -10 0 -5 35 -9 79 -9 70 0 78 2 74 18 -5 21 51 41 116 41 l41 0 0 -154 c0 -85 3 -161 6 -170 4 -11 1 -16 -10 -16 -13 0 -16 13 -16 81 0 103 -5 109 -104 109 -42 0 -76 -4 -76 -8 0 -27 -115 -43 -138 -20 -7 7 -12 30 -12 52 -1 64 -16 76 -97 76 -61 0 -72 3 -93 25 l-23 25 164 0 164 0 -25 -20z m-1522 -38 c5 -17 -36 -15 -54 3 -14 13 -12 15 17 12 18 -1 34 -8 37 -15z m1374 -21 c-24 -15 -10 -46 21 -46 l27 1 0 -84 c0 -70 -2 -83 -14 -73 -7 6 -16 34 -19 63 -7 56 -45 108 -79 108 -10 0 -18 2 -18 4 0 2 -3 11 -6 20 -5 13 3 16 47 16 34 0 49 -4 41 -9z m-939 -22 c10 -36 -22 -132 -54 -164 l-29 -30 -208 -5 c-114 -3 -259 -2 -321 1 -113 6 -115 7 -143 38 -42 46 -39 102 6 147 l34 34 355 0 c351 0 355 0 360 -21z m-874 -91 c-1 -67 -4 -94 -9 -78 -14 45 -10 180 6 180 2 0 4 -46 3 -102z m-31 45 c-5 -27 -7 -60 -4 -75 l6 -28 -63 0 c-54 1 -60 2 -44 14 9 7 17 16 17 20 0 6 91 115 96 116 1 0 -3 -21 -8 -47z m-418 -248 l0 -274 -23 8 c-22 8 -22 9 -25 262 -1 139 0 259 3 266 2 7 14 13 25 13 20 0 20 -5 20 -275z m349 235 c-21 -19 -39 -40 -39 -46 0 -23 -37 -43 -85 -46 l-50 -3 -3 -229 c-2 -177 1 -231 10 -238 16 -10 -6 -11 -39 -2 l-23 6 6 182 c4 164 19 358 30 396 3 12 25 15 118 16 l114 0 -39 -36z m2522 30 c5 0 9 -50 9 -111 l0 -110 -26 3 -26 3 1 108 c0 59 0 110 1 113 0 3 7 3 16 0 9 -3 20 -6 25 -6z m-611 -70 c0 -22 -18 -7 -38 33 l-22 42 30 -33 c16 -18 30 -37 30 -42z m311 10 l69 0 0 -76 0 -76 -31 6 c-17 3 -56 6 -85 6 l-54 0 0 76 c0 65 2 75 16 70 9 -3 47 -6 85 -6z m-121 -37 c0 -22 -4 -23 -65 -23 -61 0 -65 1 -65 23 0 21 4 22 65 22 61 0 65 -1 65 -22z m-2012 -80 c7 -24 11 -151 12 -345 l0 -308 -112 0 -113 0 1 85 c1 47 4 88 8 92 3 3 6 1 6 -5 0 -7 16 -12 40 -12 49 0 51 12 5 30 -19 8 -35 17 -35 22 0 5 -14 17 -30 27 l-31 18 0 212 c0 116 1 213 1 216 0 3 53 5 118 5 l119 0 11 -37z m2012 7 c0 -29 -13 -40 -25 -20 -3 5 -28 7 -55 4 -44 -5 -50 -3 -50 14 0 28 8 32 72 32 58 0 58 0 58 -30z m-1440 -51 c0 -17 4 -28 10 -24 6 3 10 17 10 31 0 13 5 24 10 24 16 0 11 -33 -8 -56 -14 -17 -32 -22 -85 -26 -60 -3 -71 -8 -102 -38 -33 -32 -35 -33 -35 -11 0 14 20 43 53 77 48 49 55 53 100 54 46 0 47 -1 47 -31z m-520 3 c0 -10 -7 -19 -15 -19 -8 0 -15 9 -15 19 0 10 7 18 15 18 8 0 15 -8 15 -18z m1929 12 c29 -6 31 -9 31 -49 0 -73 7 -80 46 -45 41 35 58 37 101 10 33 -20 47 -51 41 -91 -6 -41 -23 -30 -23 14 0 54 -18 77 -59 77 -50 0 -69 -20 -70 -73 -1 -35 -4 -43 -13 -35 -7 6 -13 15 -13 20 0 6 -13 27 -30 48 -16 21 -30 43 -30 49 0 6 -6 11 -14 11 -8 0 -23 16 -35 35 l-20 35 28 0 c16 0 43 -3 60 -6z m176 -14 c4 -6 15 -8 26 -5 17 6 19 1 19 -35 l0 -41 -29 20 c-38 27 -88 27 -118 -1 l-23 -21 0 46 0 47 59 0 c33 0 63 -5 66 -10z m80 -801 l0 -789 -55 1 c-43 0 -50 2 -33 9 12 5 25 20 28 33 4 12 4 106 2 208 -3 151 -2 187 10 201 17 19 21 53 9 86 -6 17 -4 22 9 22 15 0 16 44 11 507 -3 278 -3 510 0 515 3 5 9 6 13 3 3 -4 6 -362 6 -796z m44 441 c14 -26 25 -1018 12 -1034 -5 -6 -8 -29 -7 -51 2 -22 0 -44 -3 -50 -3 -5 -11 -48 -17 -95 -9 -67 -11 93 -11 755 0 742 2 819 12 660 6 -99 13 -182 14 -185z m69 349 l22 1 0 -863 0 -863 -34 -54 c-39 -61 -38 -81 2 -49 l27 21 3 -76 c2 -42 2 -109 0 -148 l-3 -73 -145 20 -145 21 23 19 c12 11 22 25 22 31 0 7 3 14 8 16 4 2 16 21 27 42 11 22 28 53 37 70 45 82 88 254 107 428 16 143 13 842 -4 1123 -8 132 -15 264 -15 294 0 51 1 53 23 46 12 -4 32 -6 45 -6z m90 -855 c-3 -794 -4 -858 -20 -868 -9 -5 -20 -8 -23 -5 -4 4 -8 1363 -5 1722 0 4 11 7 25 7 l25 0 -2 -856z m-2378 735 c0 -69 -3 -98 -11 -93 -6 3 -10 27 -9 53 2 25 1 64 -1 86 -2 22 -6 -149 -9 -380 l-5 -420 -3 425 c-2 419 -2 426 18 427 19 2 20 -4 20 -98z m31 -44 c-1 -60 -4 -111 -6 -113 -2 -2 -5 48 -7 112 -2 64 1 115 6 113 5 -2 8 -52 7 -112z m448 87 c-7 -12 -19 -17 -31 -14 -10 2 -18 0 -18 -6 0 -6 8 -12 18 -15 12 -3 9 -7 -16 -17 -35 -13 -52 -36 -52 -71 0 -17 -3 -20 -11 -12 -15 15 -4 45 28 77 30 30 24 49 -7 21 -31 -28 -51 -74 -40 -94 7 -15 5 -17 -19 -13 -28 4 -28 4 -18 50 13 65 50 100 118 110 30 5 55 7 57 6 2 -1 -2 -11 -9 -22z m-371 -8 c4 2 15 -2 25 -9 13 -9 17 -25 16 -56 -3 -83 -2 -174 3 -259 3 -47 3 -118 0 -157 l-5 -73 -33 0 c-24 0 -34 5 -34 15 0 8 -7 15 -15 15 -13 0 -15 37 -15 276 l0 276 25 -16 c14 -9 29 -15 33 -12z m1124 -49 l3 -74 -23 15 c-22 14 -24 14 -29 -5 -3 -12 -10 -21 -15 -21 -6 0 -8 10 -4 23 3 12 6 48 6 80 0 56 0 57 29 57 l29 0 4 -75z m-942 0 c0 -37 -4 -65 -10 -65 -5 0 -10 6 -10 13 -1 6 -10 1 -21 -12 -14 -17 -19 -36 -18 -62 2 -21 0 -41 -4 -45 -12 -13 -7 -34 8 -34 8 0 15 -4 15 -10 0 -5 -7 -10 -15 -10 -20 0 -19 -20 3 -36 15 -12 15 -13 1 -14 -14 0 -16 -20 -15 -165 1 -139 3 -165 16 -166 13 0 13 -1 0 -7 -8 -4 -15 -14 -15 -22 0 -8 7 -18 15 -22 12 -5 12 -7 -2 -7 -11 -1 -18 -9 -18 -21 0 -12 7 -20 18 -20 16 -1 16 -1 -1 -14 -17 -13 -17 -15 0 -32 13 -12 14 -19 5 -22 -6 -2 -12 -10 -12 -18 0 -8 -4 -14 -9 -14 -11 0 -30 101 -38 202 -6 74 -5 76 18 81 23 4 23 5 3 12 -20 6 -21 13 -22 163 -1 86 -2 180 -3 207 -3 67 14 180 26 180 6 0 16 4 23 8 6 5 16 6 21 2 5 -3 12 -1 16 5 16 25 25 5 25 -55z m-110 19 c0 -21 -4 -33 -10 -29 -5 3 -10 19 -10 36 0 16 5 29 10 29 6 0 10 -16 10 -36z m1904 17 c12 -14 16 -32 14 -67 -3 -43 -6 -48 -32 -55 -47 -13 -66 4 -66 58 0 73 45 107 84 64z m-2084 -161 c0 -18 6 -33 15 -36 8 -4 15 -10 15 -15 0 -5 -7 -9 -15 -9 -11 0 -15 -11 -15 -36 0 -19 -4 -33 -8 -30 -12 7 -12 156 -1 156 5 0 9 -14 9 -30z m287 14 c3 -8 1 -25 -4 -37 l-10 -22 -12 23 c-13 25 -9 52 9 52 6 0 13 -7 17 -16z m1853 -14 c0 -10 -5 -22 -10 -25 -13 -8 -24 20 -16 41 8 20 26 9 26 -16z m-55 -55 c-2 -46 0 -77 7 -81 7 -5 7 -9 -1 -13 -8 -5 -8 -22 -2 -54 9 -49 -3 -65 -18 -24 -5 13 -16 29 -24 35 -11 9 -15 31 -15 70 0 33 -4 58 -11 60 -6 2 -11 19 -11 37 0 31 3 34 33 38 17 2 35 5 39 5 4 1 6 -32 3 -73z m-1707 25 l4 -35 -31 29 c-38 37 -39 48 -3 44 23 -3 27 -8 30 -38z m842 32 c0 -13 -29 -48 -30 -35 0 6 -3 18 -6 27 -4 12 0 16 15 16 12 0 21 -4 21 -8z m-854 -121 c2 -47 -44 -120 -67 -106 -14 9 -11 25 6 25 8 0 15 7 15 15 0 8 -7 15 -15 15 -8 0 -15 5 -15 10 0 6 6 10 14 10 12 0 14 13 11 65 l-3 64 26 -31 c17 -19 27 -45 28 -67z m-882 63 c14 -6 16 -66 16 -575 0 -339 -4 -569 -9 -569 -5 0 -16 -3 -25 -6 -14 -6 -16 49 -16 575 0 346 4 581 9 581 5 0 16 -3 25 -6z m1696 -35 c0 -5 -175 -9 -400 -9 -257 0 -400 4 -400 10 0 9 741 20 783 11 9 -2 17 -7 17 -12z m-1595 -9 c19 -7 24 -15 21 -32 -12 -59 -16 -277 -6 -408 5 -80 13 -196 17 -257 3 -62 9 -113 12 -113 3 0 6 -49 6 -110 l0 -109 -50 -22 c-27 -11 -54 -23 -60 -25 -7 -3 -10 183 -10 546 l0 551 22 -6 c12 -3 34 -10 48 -15z m442 -137 c-2 -32 -3 -8 -3 52 0 61 1 87 3 58 2 -29 2 -78 0 -110z m1993 147 c0 -6 -137 -10 -390 -10 -253 0 -390 4 -390 10 0 6 137 10 390 10 253 0 390 -4 390 -10z m-1843 -132 c-2 -24 -4 -7 -4 37 0 44 2 63 4 43 2 -21 2 -57 0 -80z m973 102 c0 -5 -16 -9 -35 -7 -45 3 -45 17 0 17 19 0 35 -4 35 -10z m155 0 c-3 -5 -17 -10 -30 -10 -13 0 -27 5 -30 10 -4 6 8 10 30 10 22 0 34 -4 30 -10z m-1647 -8 c7 -5 10 -16 6 -27 -6 -15 -4 -17 19 -11 l27 6 0 -469 c0 -418 -2 -470 -16 -475 -41 -16 -44 -9 -44 82 0 48 -5 143 -10 212 -25 315 -30 434 -24 558 7 131 11 143 42 124z m1522 -12 c0 -5 -7 -10 -15 -10 -18 0 -20 -40 -2 -41 10 0 10 -2 0 -6 -7 -2 -13 -13 -13 -24 0 -18 -13 -19 -410 -19 -225 0 -410 2 -410 4 0 1 11 15 25 30 14 15 25 36 25 46 0 19 12 20 393 23 215 1 395 3 400 5 4 1 7 -2 7 -8z m-1180 -45 c0 -25 -4 -45 -10 -45 -5 0 -10 20 -10 45 0 25 5 45 10 45 6 0 10 -20 10 -45z m2013 25 c-4 -14 3 -27 21 -41 14 -11 26 -25 26 -30 0 -5 -163 -9 -406 -9 -347 0 -408 2 -420 15 -9 8 -11 15 -5 15 6 0 11 9 11 20 0 11 -5 20 -11 20 -8 0 -8 5 1 15 11 13 68 15 400 15 384 0 388 0 383 -20z m-2013 -110 c0 -20 5 -30 15 -30 9 0 15 -9 15 -25 0 -36 44 -75 85 -75 l35 0 2 -67 c1 -38 1 -77 1 -88 0 -11 3 -22 7 -25 4 -3 12 -32 18 -65 6 -33 18 -95 27 -137 16 -73 16 -78 -2 -102 -17 -23 -62 -35 -163 -41 -17 -1 -26 -8 -28 -23 -3 -17 -10 -22 -31 -22 -58 0 -93 -12 -88 -30 3 -13 -14 -24 -82 -51 l-86 -35 0 362 0 363 113 3 112 3 0 -252 0 -251 28 -6 c86 -17 155 -27 159 -22 3 3 13 1 23 -4 22 -12 32 -2 20 20 -7 14 -32 21 -100 31 l-90 12 0 256 c0 141 -3 273 -6 294 -5 24 -3 37 5 37 6 0 11 -13 11 -30z m1150 5 c0 -13 -51 -15 -412 -13 l-413 3 410 5 410 5 -410 5 -410 5 413 3 c361 2 412 0 412 -13z m718 8 c-114 -2 -303 -2 -420 0 -117 1 -24 2 207 2 231 0 327 -1 213 -2z m-10 -20 c-115 -2 -301 -2 -415 0 -115 1 -21 2 207 2 228 0 322 -1 208 -2z m234 -27 c-11 -18 -9 -430 3 -439 6 -5 4 -11 -7 -18 -20 -11 -26 -83 -8 -94 6 -3 10 -19 10 -36 0 -27 -3 -29 -37 -29 -28 0 -34 -3 -23 -10 13 -8 13 -10 -1 -10 -22 0 -33 29 -14 36 20 8 19 53 0 60 -11 5 -15 23 -15 75 l0 69 30 0 30 0 0 199 c0 212 3 239 26 220 8 -6 10 -16 6 -23z m-1925 -143 c-2 -32 -3 -8 -3 52 0 61 1 87 3 58 2 -29 2 -78 0 -110z m173 -48 l0 -205 30 0 30 0 0 -66 c0 -72 -13 -93 -58 -94 -21 0 -23 3 -17 30 9 39 -2 69 -28 80 l-22 9 23 0 c26 1 30 21 5 21 -15 0 -16 2 -3 10 11 7 15 30 16 95 0 47 -4 85 -8 85 -5 0 -6 5 -2 12 4 6 8 51 8 100 1 64 -2 88 -11 88 -7 0 -13 5 -13 10 0 6 7 10 15 10 8 0 15 5 15 10 0 6 5 10 10 10 6 0 10 -75 10 -205z m823 198 c-16 -6 -17 -43 -2 -43 6 0 7 -5 2 -12 -12 -20 -12 -78 1 -78 7 0 7 -3 1 -8 -18 -13 -17 -42 2 -43 17 -1 17 -2 1 -6 -10 -2 -18 -13 -18 -24 0 -11 7 -19 18 -20 16 -1 16 -2 0 -6 -10 -2 -18 -13 -18 -24 0 -11 7 -19 18 -20 16 -1 16 -2 0 -6 -22 -5 -24 -43 -3 -43 8 0 15 -4 15 -10 0 -5 -7 -10 -15 -10 -8 0 -15 -8 -15 -17 0 -17 -25 -18 -397 -16 l-398 3 -3 195 -2 195 412 -1 c227 0 407 -3 401 -6z m887 -188 l0 -195 -27 0 c-16 -1 -77 -2 -136 -3 l-109 -2 6 30 c3 17 9 62 12 100 l7 70 -40 18 c-49 21 -52 21 -82 -2 -18 -14 -28 -40 -45 -115 l-21 -97 -183 0 c-101 -1 -186 2 -189 5 -9 8 -7 171 1 184 4 7 3 12 -3 12 -7 0 -7 8 -1 25 6 17 6 25 -1 25 -6 0 -7 4 -4 10 13 20 11 90 -3 95 -11 4 -11 7 0 19 11 13 74 15 416 16 l402 0 0 -195z m-273 -12 c9 -18 8 -28 -5 -124 -10 -76 -23 -89 -83 -89 -48 0 -58 7 -39 26 9 9 18 67 19 125 2 61 86 109 108 62z m-1795 -340 c5 -7 14 -10 19 -7 5 3 9 0 9 -5 0 -14 -11 -13 -32 3 -15 11 -18 28 -16 117 l2 104 3 -99 c2 -55 9 -106 15 -113z m262 136 c-3 -5 -10 -7 -15 -4 -5 4 -9 1 -9 -4 0 -6 -4 -11 -10 -11 -17 0 -11 28 8 33 22 5 34 -2 26 -14z m896 -79 l0 -80 -245 0 c-207 0 -244 2 -239 14 3 8 12 17 20 20 22 8 17 66 -8 93 -26 28 -96 32 -142 8 -15 -8 -41 -15 -57 -15 -27 0 -29 -3 -29 -40 0 -39 1 -40 33 -40 21 0 41 -8 51 -19 13 -15 26 -18 51 -14 18 3 41 0 51 -7 15 -9 3 -10 -60 -6 -43 3 -94 6 -113 6 l-33 0 0 80 0 80 360 0 360 0 0 -80z m460 71 c0 -14 157 -15 165 -1 7 12 205 14 205 3 1 -16 1 -214 1 -385 l-1 -178 -68 0 c-61 0 -68 2 -69 21 -2 20 2 23 48 33 54 12 37 96 -19 96 l-27 0 0 104 0 104 36 6 c32 5 37 9 37 33 0 56 -13 65 -88 61 l-69 -3 -3 40 -3 40 -80 0 -80 0 -3 -47 -3 -47 78 -3 c43 -2 78 -7 78 -13 0 -6 -88 -11 -237 -13 l-238 -2 0 70 c0 64 -2 70 -21 70 -11 0 -18 4 -15 9 8 13 376 15 376 2z m-1357 -18 c-7 -2 -13 -10 -13 -15 0 -6 3 -8 7 -5 13 14 29 -14 25 -43 -5 -36 -22 -40 -22 -5 0 14 -7 28 -15 31 -28 11 -14 42 20 42 6 0 4 -2 -2 -5z m926 -39 c-6 -8 -9 -25 -7 -39 3 -14 1 -25 -3 -25 -10 0 -12 73 -3 83 13 13 25 -5 13 -19z m70 -21 c-2 -34 -3 -39 -6 -18 -3 17 -12 38 -20 48 -15 16 -14 17 5 17 20 0 22 -5 21 -47z m-654 7 c0 -21 -5 -26 -32 -28 -29 -3 -33 0 -33 21 0 31 9 39 40 35 19 -2 25 -9 25 -28z m85 0 c0 -23 -4 -30 -20 -30 -16 0 -20 7 -20 30 0 23 4 30 20 30 16 0 20 -7 20 -30z m948 5 c-13 -29 -28 -33 -28 -7 0 22 8 32 26 32 11 0 11 -5 2 -25z m42 -5 c0 -20 -5 -30 -15 -30 -8 0 -15 7 -15 15 0 8 5 15 10 15 6 0 9 3 9 8 -2 12 1 22 6 22 3 0 5 -13 5 -30z m70 1 c0 -35 -8 -42 -38 -34 -16 4 -22 13 -22 34 0 26 4 29 30 29 27 0 30 -3 30 -29z m-1220 0 c0 -17 -18 -31 -41 -31 -5 0 -9 11 -9 25 0 20 5 25 25 25 18 0 25 -5 25 -19z m-207 -13 c7 -25 1 -38 -18 -38 -11 0 -14 27 -6 58 3 11 20 -2 24 -20z m901 -33 c-4 -8 -10 -12 -15 -9 -11 6 -12 48 -2 58 10 10 24 -31 17 -49z m-454 -53 c234 0 439 0 455 0 240 -1 557 0 580 1 l30 2 3 -452 c2 -361 0 -452 -10 -448 -22 8 -72 17 -108 20 -100 8 -231 29 -236 36 -3 5 -26 9 -51 9 -37 0 -44 3 -39 16 5 14 -3 15 -71 9 -86 -8 -99 -13 -63 -22 13 -3 48 -18 77 -33 49 -25 53 -25 53 -8 0 12 7 18 23 18 42 0 192 -23 203 -31 5 -5 48 -11 95 -14 141 -10 130 -2 127 -102 l-3 -86 -45 -13 c-25 -8 -63 -16 -85 -18 -55 -7 -273 -9 -282 -3 -5 3 -31 5 -60 5 -68 0 -225 23 -241 35 -7 6 -164 13 -368 18 -213 5 -363 13 -375 19 -11 6 -24 8 -29 5 -6 -3 -10 -1 -10 4 0 6 -6 11 -12 11 -7 0 -29 4 -48 10 l-35 10 0 492 c0 271 4 498 7 504 4 6 26 10 50 9 24 -1 234 -2 468 -3z m-540 -87 c0 -39 -4 -41 -46 -22 -16 8 -40 18 -54 24 -23 10 -21 11 30 21 30 5 58 10 63 11 4 0 7 -15 7 -34z m1869 -327 c-27 -23 -35 -22 -59 2 -18 18 -20 33 -20 179 l0 160 48 3 47 3 3 -165 c3 -158 2 -166 -19 -182z m-2006 307 c18 -8 55 -23 82 -33 35 -14 51 -26 53 -40 3 -19 -3 -21 -50 -24 l-53 -3 0 -372 c0 -205 -3 -373 -7 -373 -4 0 -9 4 -13 9 -3 5 -28 17 -55 26 -28 9 -50 20 -50 23 0 4 -18 15 -40 25 -22 9 -40 21 -40 26 0 5 -10 13 -22 16 -28 9 -138 114 -138 132 0 7 -3 13 -7 13 -5 0 -8 101 -8 224 l0 224 40 20 c22 11 57 26 78 33 20 7 37 17 37 21 0 4 7 8 15 8 8 0 15 -7 15 -15 0 -23 26 -18 44 10 9 14 22 25 30 25 7 0 21 9 31 20 22 24 19 24 58 5z m125 -155 c1 -22 -3 -40 -8 -40 -6 0 -10 18 -10 40 0 22 4 40 8 40 5 0 9 -18 10 -40z m-488 -187 c-1 -193 -2 -206 -16 -174 -8 19 -13 40 -10 47 2 6 0 16 -6 22 -5 5 -12 72 -15 147 -6 126 -5 139 12 151 11 8 22 14 27 14 4 0 8 -93 8 -207z m-60 84 c0 -125 18 -256 40 -287 10 -14 20 -35 24 -47 8 -24 140 -153 158 -153 6 0 19 -6 27 -14 43 -37 294 -151 387 -176 99 -27 260 -40 491 -40 198 0 426 -22 452 -43 19 -16 502 -17 522 -1 8 6 38 19 67 29 28 11 52 23 52 27 0 4 6 8 13 8 6 0 34 25 62 55 41 46 55 55 82 55 32 0 216 -25 261 -35 l22 -5 0 -250 0 -250 -1397 0 -1398 0 0 584 0 585 60 25 c33 14 63 25 68 25 4 1 7 -41 7 -92z m2243 86 c8 -7 -11 -33 -24 -33 -5 0 -9 9 -9 20 0 19 20 27 33 13z m-2393 -633 l0 -580 -25 0 -25 0 0 570 c0 531 1 570 18 579 9 6 20 11 25 11 4 0 7 -261 7 -580z m2470 405 l0 -105 -64 0 -65 0 -3 100 -3 99 65 4 c36 2 66 4 68 5 1 1 2 -45 2 -103z m-1762 35 c0 -36 -4 -50 -14 -50 -10 0 -14 14 -14 50 0 36 4 50 14 50 10 0 14 -14 14 -50z m1952 0 c0 -6 -35 -10 -85 -10 -50 0 -85 4 -85 10 0 6 35 10 85 10 50 0 85 -4 85 -10z m13 -72 c-7 -60 -30 -133 -66 -203 -16 -33 -38 -77 -48 -97 -31 -61 -40 -57 -37 19 l3 68 -43 0 c-46 0 -48 3 -28 48 22 50 36 98 36 123 0 38 73 83 137 84 l51 0 -5 -42z m-1963 -8 c0 -11 -7 -20 -15 -20 -8 0 -15 9 -15 20 0 11 7 20 15 20 8 0 15 -9 15 -20z m0 -50 c0 -11 -7 -20 -15 -20 -8 0 -15 9 -15 20 0 11 7 20 15 20 8 0 15 -9 15 -20z m2170 -183 l0 -194 -27 5 -28 4 0 153 c0 151 1 154 23 164 18 9 21 16 16 36 -4 15 -2 25 5 25 8 0 11 -58 11 -193z m-426 136 c-4 -15 -13 -38 -20 -52 -8 -14 -14 -33 -14 -41 0 -11 -11 -15 -41 -14 l-41 1 -2 67 -1 66 63 0 62 0 -6 -27z m-1744 -3 c0 -11 -7 -20 -15 -20 -8 0 -15 9 -15 20 0 11 7 20 15 20 8 0 15 -9 15 -20z m-3 -123 c2 -35 -2 -47 -12 -47 -11 0 -15 13 -15 51 0 66 24 63 27 -4z m1803 -73 l0 -77 -37 6 c-21 3 -60 9 -88 12 l-50 7 0 64 0 64 88 0 87 0 0 -76z m-1800 -4 c0 -11 -7 -20 -15 -20 -8 0 -15 9 -15 20 0 11 7 20 15 20 8 0 15 -9 15 -20z m0 -50 c0 -11 -7 -20 -15 -20 -8 0 -15 9 -15 20 0 11 7 20 15 20 8 0 15 -9 15 -20z m1666 -21 c3 -6 18 -9 31 -6 14 3 36 -1 49 -8 23 -12 23 -12 -37 -68 -80 -76 -88 -75 -76 9 8 53 7 68 -4 75 -11 6 -8 9 8 9 12 0 25 -5 29 -11z m-1668 -32 c2 -10 -3 -17 -12 -17 -10 0 -16 9 -16 21 0 24 23 21 28 -4z m2170 -289 l2 -248 -27 0 -28 0 0 250 0 251 25 -3 25 -3 3 -247z m2 -348 l0 -80 -1465 0 -1465 0 0 80 0 80 1465 0 1465 0 0 -80z m-73 -310 c2 -125 -1 -221 -7 -230 -8 -13 -84 -15 -567 -18 l-558 -2 0 119 c0 169 13 161 -260 161 -273 0 -259 9 -263 -159 l-4 -121 -546 0 c-493 0 -547 2 -564 17 -16 15 -18 36 -18 235 l0 218 1393 -2 1392 -3 2 -215z m-1177 0 c24 -18 25 -25 28 -127 2 -98 1 -106 -13 -89 -14 19 -15 19 -15 -7 l0 -27 -236 0 -236 0 4 111 c3 107 4 112 31 135 28 24 31 24 220 24 174 0 194 -2 217 -20z m-806 -318 l3 -52 -118 0 -119 0 0 55 0 56 116 -3 116 -3 2 -53z m810 35 c3 -12 6 -31 6 -42 0 -20 -6 -20 -385 -17 l-385 2 0 40 0 40 379 0 379 0 6 -23z m596 -19 l0 -43 -270 0 c-149 0 -270 3 -270 7 0 4 10 10 22 14 18 5 19 8 7 18 -8 6 -20 19 -28 29 -13 16 1 17 263 17 l276 0 0 -42z m282 -13 l3 -55 -117 0 -118 0 0 55 0 55 114 0 114 0 4 -55z"/>
            <path d="M2296 2638 c-12 -58 45 -81 60 -23 7 29 -10 55 -36 55 -12 0 -20 -11 -24 -32z m51 -3 c5 -16 -14 -38 -26 -31 -18 12 -13 48 6 44 9 -2 18 -7 20 -13z"/>
            <path d="M1210 2195 l0 -35 240 0 240 0 0 35 0 35 -240 0 -240 0 0 -35z m470 -5 c0 -20 -5 -20 -227 -18 -208 3 -228 5 -231 21 -3 16 13 17 227 17 225 0 231 -1 231 -20z"/>
            <path d="M1807 2224 c-4 -4 -7 -20 -7 -36 l0 -28 246 0 245 0 -3 33 -3 32 -236 3 c-129 1 -238 -1 -242 -4z m463 -34 c0 -19 -7 -20 -225 -20 -218 0 -225 1 -225 20 0 19 7 20 225 20 218 0 225 -1 225 -20z"/>
            <path d="M1217 2144 c-4 -4 -7 -22 -7 -41 l0 -33 241 0 240 0 -3 38 -3 37 -231 3 c-127 1 -233 -1 -237 -4z m451 -17 c6 -5 12 -15 12 -23 0 -12 -36 -14 -230 -14 -133 0 -230 4 -230 9 0 36 7 37 223 36 117 0 218 -4 225 -8z"/>
            <path d="M1812 2141 c-8 -5 -12 -21 -10 -37 l3 -29 240 0 240 0 3 29 c2 16 -2 32 -10 37 -7 5 -112 9 -233 9 -121 0 -226 -4 -233 -9z m456 -29 c3 -22 3 -22 -222 -22 -179 0 -226 3 -226 13 0 29 25 32 232 31 210 -1 213 -1 216 -22z"/>
            <path d="M1210 2030 l0 -30 240 0 240 0 0 30 0 30 -240 0 -240 0 0 -30z m468 0 c2 -13 -27 -15 -224 -13 -124 1 -228 4 -231 7 -3 2 -2 10 2 16 4 7 77 10 228 8 188 -3 222 -5 225 -18z"/>
            <path d="M1800 2030 l0 -30 245 0 245 0 0 30 c0 17 -4 30 -10 30 -5 0 -10 -10 -10 -22 l0 -23 -225 0 c-207 0 -225 1 -225 17 0 16 19 18 223 21 l222 2 -232 3 -233 2 0 -30z"/>
            <path d="M1221 1977 c-6 -6 -11 -21 -11 -34 l0 -23 240 0 240 0 0 23 c0 12 -4 27 -8 34 -10 15 -446 15 -461 0z m457 -28 c3 -15 -20 -17 -222 -17 -126 0 -228 4 -232 9 -15 26 16 29 229 27 196 -3 222 -5 225 -19z"/>
            <path d="M1812 1978 c-7 -7 -12 -22 -12 -35 l0 -23 246 0 245 0 -3 33 -3 32 -231 2 c-166 2 -234 -1 -242 -9z m458 -28 c0 -20 -5 -20 -225 -20 -175 1 -225 4 -225 14 0 7 3 16 7 19 3 4 105 7 225 7 212 0 218 -1 218 -20z"/>
            <path d="M857 1909 c-14 -16 -16 -24 -6 -35 14 -17 41 -18 57 -2 16 16 15 23 -4 42 -20 21 -26 20 -47 -5z"/>
            <path d="M2322 1918 c-20 -20 -14 -45 13 -52 33 -8 45 -1 45 29 0 32 -35 46 -58 23z"/>
            <path d="M1210 1865 l0 -35 240 0 240 0 0 35 0 35 -240 0 -240 0 0 -35z m470 0 c0 -13 -32 -15 -230 -15 -198 0 -230 2 -230 15 0 13 32 15 230 15 198 0 230 -2 230 -15z"/>
            <path d="M1804 1886 c-3 -8 -4 -23 -2 -33 3 -17 20 -18 243 -18 l240 0 3 33 3 32 -241 0 c-200 0 -242 -2 -246 -14z m466 -16 c0 -19 -7 -20 -225 -20 -192 0 -225 2 -225 15 0 12 34 15 223 18 122 1 223 3 225 5 1 1 2 -7 2 -18z"/>
            <path d="M336 1824 c-12 -31 -6 -44 19 -44 20 0 25 5 25 24 0 13 -7 27 -16 30 -21 8 -21 8 -28 -10z"/>
            <path d="M170 1107 c0 -10 21 -13 83 -12 45 0 74 -1 64 -3 -12 -2 -16 -9 -13 -19 11 -27 -3 -31 -56 -17 -46 12 -55 12 -67 -1 -12 -12 -13 -17 -3 -27 10 -10 15 -10 21 1 6 9 18 12 37 7 16 -4 43 -8 59 -9 23 -2 31 -7 33 -26 3 -21 1 -23 -25 -17 -64 16 -79 17 -105 7 -16 -6 -28 -18 -28 -27 0 -13 6 -15 28 -8 15 4 36 6 47 5 86 -8 278 -10 265 -2 -8 5 -18 8 -22 5 -11 -7 -88 17 -88 28 0 4 -7 8 -15 8 -8 0 -15 5 -15 10 0 14 13 13 46 -5 38 -20 57 -19 85 4 23 18 23 20 5 27 -10 4 -27 2 -37 -4 -10 -7 -20 -8 -24 -3 -3 5 -23 8 -45 7 -38 -3 -52 6 -30 19 6 4 8 11 5 16 -9 14 18 11 41 -5 17 -12 25 -12 62 5 23 11 42 23 42 28 0 5 -40 7 -90 6 -52 -2 -90 0 -90 6 0 5 -38 9 -85 9 -63 0 -85 -3 -85 -13z"/>
            <path d="M176 922 c-3 -6 -2 -13 4 -17 5 -3 10 -15 10 -26 0 -24 9 -24 26 -1 16 20 18 42 4 42 -5 0 -10 -8 -10 -17 -1 -14 -4 -13 -14 6 -8 14 -16 19 -20 13z"/>
            <path d="M430 890 c0 -29 4 -40 15 -40 8 0 15 5 15 10 0 6 -4 10 -10 10 -14 0 -12 38 2 42 7 3 6 7 -5 11 -14 5 -17 0 -17 -33z"/>
            <path d="M534 904 c-9 -36 2 -54 34 -54 33 0 61 24 41 35 -6 4 -15 2 -19 -5  -11 -17 -40 -5 -40 16 0 13 6 15 31 10 22 -4 29 -2 27 6 -3 7 -19 13 -36 14 -26 1 -33 -3 -38 -22z"/>
            <path d="M627 923 c-2 -5 -3 -21 -2 -38 1 -23 7 -31 24 -33 13 -2 28 1 34 7 8 8 5 11 -11 11 -29 0 -28 17 1 23 18 4 17 4 -6 6 -16 0 -26 5 -22 10 3 5 1 12 -4 15 -5 4 -11 3 -14 -1z"/>
            <path d="M710 890 c0 -22 5 -40 10 -40 6 0 10 12 10 28 l0 27 25 -30 24 -30 -1 45 c0 39 -1 41 -7 15 -7 -29 -7 -29 -19 -9 -6 12 -18 24 -27 28 -12 4 -15 -3 -15 -34z"/>
            <path d="M797 923 c-14 -13 -7 -33 11 -33 27 0 33 10 17 26 -15 16 -19 17 -28 7z"/>
            <path d="M254 904 c3 -9 6 -25 6 -37 0 -16 3 -18 11 -10 14 14 4 63 -12 63 -6 0 -8 -7 -5 -16z"/>
            <path d="M324 888 c2 -33 3 -34 59 -30 9 1 17 9 17 17 0 8 5 15 10 15 6 0 10 7 10 15 0 8 -7 15 -16 15 -10 0 -14 -6 -11 -15 8 -20 -11 -29 -29 -14 -12 10 -12 14 -2 20 9 6 4 9 -13 9 -24 0 -26 -4 -25 -32z"/>
            <path d="M471 883 c1 -21 3 -30 6 -20 6 21 23 23 23 1 0 -8 4 -13 9 -10 14 9 -4 61 -22 64 -14 3 -17 -4 -16 -35z"/>
            <path d="M1659 333 c-16 -19 -4 -28 37 -28 27 0 34 4 34 20 0 15 -7 20 -30 21 -16 1 -35 -5 -41 -13z"/>
            <path d="M1480 250 c0 -89 0 -90 25 -90 25 0 25 1 25 90 0 89 0 90 -25 90 -25 0 -25 -1 -25 -90z m30 -5 c0 -43 -4 -75 -10 -75 -6 0 -10 32 -10 75 0 43 4 75 10 75 6 0 10 -32 10 -75z"/>
            <path d="M1372 308 c-29 -29 -3 -72 40 -66 19 2 23 9 23 38 0 30 -4 35 -25 38 -14 2 -31 -3 -38 -10z"/>
            <path d="M1572 312 c-8 -5 -12 -22 -10 -38 3 -26 7 -29 38 -29 33 0 35 2 35 35 0 30 -4 35 -25 38 -14 1 -31 -2 -38 -6z"/>
            <path d="M1300 170 c0 -22 15 -27 23 -7 4 8 8 9 14 2 4 -6 29 -11 55 -13 42 -2 46 -1 41 18 -5 17 -13 20 -69 20 -57 0 -64 -2 -64 -20z"/>
            <path d="M1565 182 c-26 -26 28 -45 54 -19 11 9 14 9 18 0 4 -10 8 -9 19 1 8 8 14 17 14 20 0 8 -98 5 -105 -2z"/>
            <path d="M1943 3 c76 -2 198 -2 270 0 73 1 11 3 -138 3 -148 0 -208 -2 -132 -3z"/>
            <path d="M2723 3 c54 -2 139 -2 190 0 51 1 7 3 -98 3 -104 0 -146 -2 -92 -3z"/></g></svg>

            <svg version="1.0" id="chaud" x="115%" y="75%" width="18%" height="18%" class="${
              config.show_chaud === "yes" ? "" : "st12"
            }" fill="${load_colour}" viewBox="0 0 256.000000 300.000000"preserveAspectRatio="xMidYMid meet">
            <g transform="translate(-128.000000,150.000000) scale(0.100000,-0.100000)" transform-origin="center" fill="${load_colour}" stroke="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="" d="M2230 2890 c-14 -11 -32 -20 -40 -20 -16 -1 -90 -39 -77 -40 5 0 38 12 73 26 36 14 72 23 80 20 11 -4 14 -1 12 11 -4 24 -20 25 -48 3z"/> <path fill="red" d="M551 2613 c3 -61 2 -68 -15 -65 -17 3 -18 -4 -14 -97 l3 -101 -164 0 c-188 0 -230 -9 -281 -60 -122 -122 -33 -330 140 -330 88 0 162 55 189 142 12 36 13 36 71 40 52 3 57 1 49 -14 -5 -9 -9 -107 -9 -217 l0 -201 30 0 30 0 0 227 c0 148 3 224 10 217 5 -5 11 -90 13 -189 l2 -180 3 191 c2 220 13 199 -108 202 -52 2 -84 -2 -104 -13 -15 -8 -43 -15 -62 -15 -60 0 -54 -33 9 -47 15 -3 27 -12 27 -19 0 -20 -17 -17 -52 7 -16 12 -31 19 -34 16 -3 -3 11 -16 31 -30 24 -16 32 -27 25 -32 -7 -4 -27 7 -47 26 -22 21 -32 27 -25 14 5 -11 19 -29 31 -39 11 -10 18 -23 15 -27 -11 -18 -24 -8 -44 31 -11 22 -22 40 -25 40 -6 0 16 -63 27 -77 6 -7 5 -14 -3 -18 -15 -10 -29 13 -29 48 0 15 -5 27 -11 27 -8 0 -9 -13 -5 -40 4 -25 2 -40 -4 -40 -18 0 -23 30 -12 66 5 19 6 34 2 34 -8 0 -13 -21 -23 -87 -1 -8 -7 -9 -17 -3 -12 8 -12 14 3 45 21 44 21 51 3 36 -8 -7 -18 -26 -21 -42 -4 -17 -12 -28 -18 -26 -22 7 -17 26 15 63 26 30 28 35 10 25 -12 -6 -29 -23 -38 -37 -13 -18 -20 -22 -28 -14 -8 8 -2 19 24 40 19 16 30 30 23 30 -6 0 -26 -12 -43 -27 l-32 -26 4 23 c2 16 14 28 38 37 34 13 34 13 5 9 -16 -2 -38 -7 -49 -11 -16 -7 -17 -6 -6 14 10 19 18 22 50 19 34 -3 40 0 50 22 11 23 9 28 -25 57 -25 21 -32 33 -24 39 8 4 23 -5 41 -25 35 -39 38 -24 3 17 -21 25 -23 31 -9 36 11 4 21 -6 35 -37 18 -37 20 -39 16 -12 -2 17 -6 35 -8 40 -2 6 0 12 6 15 5 3 15 -13 22 -35 l13 -40 -4 43 c-3 33 -1 42 11 42 13 0 15 -9 11 -45 -6 -53 9 -50 18 3 l6 38 155 -4 155 -4 -4 123 -3 124 660 -3 c457 -1 656 1 649 8 -7 7 -218 10 -657 8 l-647 -3 0 37 c0 20 5 40 10 43 13 8 1299 7 1311 -1 5 -3 9 -18 9 -34 0 -16 5 -32 10 -35 6 -4 10 15 10 49 l0 56 -691 0 -691 0 3 -67z m-425 -384 c42 -25 45 -45 4 -24 -16 8 -36 15 -45 15 -16 0 -20 12 -8 23 9 10 12 9 49 -14z m-8 -36 l37 -17 -44 -4 c-48 -4 -56 0 -48 23 8 19 9 19 55 -2z m272 -63 c0 -20 -32 -23 -63 -7 l-32 16 48 0 c26 1 47 -4 47 -9z"/>
            <path fill="red" d="M2310 2615 l0 -65 35 0 35 0 0 -340 0 -340 -170 0 -170 0 0 219 c0 166 -3 220 -12 223 -7 2 -31 1 -53 -2 l-40 -6 30 -8 c17 -4 36 -9 43 -12 13 -4 13 5 12 -933 0 -294 -3 -538 -6 -542 -3 -5 -14 -9 -25 -9 -10 0 -19 -4 -19 -10 0 -5 16 -10 35 -10 l35 0 0 540 0 540 170 0 170 0 0 -785 0 -785 -775 0 c-516 0 -775 -3 -775 -10 0 -7 257 -9 775 -8 l775 3 0 -47 0 -48 -897 -2 c-494 0 -905 -1 -913 -2 -11 -1 -16 -16 -18 -63 l-3 -63 979 0 979 0 -1 113 -1 112 28 -3 c15 -2 27 1 27 7 0 6 -13 11 -28 11 l-28 0 0 784 0 785 30 4 31 4 -34 1 -33 2 7 405 7 405 -101 0 -101 0 0 -65z m170 -347 c0 -211 1 -742 3 -1180 l2 -798 -47 0 -47 0 0 817 c0 450 0 959 0 1130 l-1 312 -30 16 c-23 12 -30 23 -30 44 0 15 3 31 7 34 3 4 37 7 75 7 l68 0 0 -382z m2 -2083 c-2 -49 -7 -93 -11 -98 -4 -4 -430 -6 -947 -5 l-939 3 -3 38 -3 37 878 1 c483 1 889 4 903 8 21 6 26 14 28 46 4 63 7 66 54 63 l43 -3 -3 -90z"/> <path fill="yellow" d="M1901 2536 c-9 -10 -9 -21 -3 -33 6 -12 5 -49 -2 -106 -11 -78 -7 -111 11 -94 8 9 23 80 23 115 0 19 7 49 16 68 13 27 14 37 4 49 -16 19 -34 19 -49 1z"/>
            <path fill="orange" d="M2131 2434 c-26 -43 -26 -44 -2 -44 19 0 20 -6 14 -160 -6 -145 -4 -160 10 -160 15 0 17 18 17 160 0 151 1 160 19 160 19 0 19 1 -2 40 -12 22 -25 40 -29 40 -3 0 -15 -16 -27 -36z"/>
            <path d="M792 2398 c3 -7 26 -16 52 -20 26 -3 58 -14 71 -22 44 -29 78 -124 43 -118 -23 4 -23 2 6 -48 l24 -42 26 44 c24 40 24 43 7 46 -13 2 -20 15 -25 41 -8 50 -40 89 -90 112 -48 22 -120 26 -114 7z"/>
            <path fill="red" d="M1490 2396 c0 -12 9 -16 35 -16 50 0 110 -33 123 -67 24 -63 25 -73 3 -73 -27 0 -26 -2 6 -51 l26 -40 24 42 c28 49 28 51 6 47 -13 -2 -19 5 -21 22 -10 84 -64 136 -151 147 -43 5 -51 3 -51 -11z"/>
            <path d="M720 1620 l0 -750 103 1 c95 1 100 2 72 14 -16 8 -42 14 -57 15 -16 0 -28 5 -28 10 0 6 -9 10 -21 10 -11 0 -17 -4 -14 -10 3 -5 1 -10 -4 -10 -6 0 -13 0 -16 0 -3 0 -5 331 -5 735 0 646 -2 735 -15 735 -13 0 -15 -91 -15 -750z"/>
            <path fill="red" d="M278 2260 c-9 -22 -15 -40 -12 -40 6 0 44 63 44 73 0 20 -17 2 -32 -33z"/>
            <path fill="red" d="M308 2245 c-16 -18 -28 -36 -28 -41 0 -10 49 37 61 59 16 28 -4 18 -33 -18z"/>
            <path fill="red" d="M1910 2075 l0 -205 -442 -3 -443 -2 443 -3 442 -2 0 -496 c0 -328 3 -493 10 -489 14 8 13 1405 0 1405 -6 0 -10 -79 -10 -205z"/>
            <path fill="red" d="M325 2214 l-40 -35 43 21 c23 11 42 27 42 35 0 19 2 20 -45 -21z"/>
            <path fill="red" d="M652 1927 c3 -152 2 -164 -14 -159 -23 6 -23 2 6 -48 l24 -43 21 41 c25 49 25 52 6 52 -13 0 -15 24 -15 160 0 139 -2 160 -16 160 -14 0 -15 -19 -12 -163z"/>
            <path fill="red" d="M586 1689 c-8 -41 -6 -908 2 -934 6 -18 15 -20 82 -20 93 1 97 0 105 -35 3 -16 12 -31 20 -34 8 -3 17 -21 21 -41 7 -38 47 -75 83 -75 11 0 32 -5 46 -12 33 -15 41 -6 20 26 -15 22 -21 42 -24 69 -1 4 -6 7 -12 7 -11 0 -9 -16 6 -52 6 -15 2 -18 -21 -18 -40 1 -63 21 -71 61 -3 19 -12 38 -20 42 -18 11 -17 27 2 27 8 0 15 4 15 10 0 5 -3 9 -7 9 -24 -4 -43 3 -43 15 0 10 14 16 43 19 23 2 -18 4 -90 5 l-133 2 0 480 c0 436 -5 540 -24 449z"/>
            <path fill="brown" d="M970 1410 c0 -4 7 -10 15 -14 28 -10 16 -229 -14 -259 -12 -12 -51 18 -51 40 0 7 -9 13 -20 13 -21 0 -21 -18 1 -78 5 -13 9 -55 9 -93 0 -57 -4 -73 -21 -90 l-21 -21 34 5 c109 18 106 16 97 51 -33 124 -33 124 -16 150 10 14 17 32 17 40 0 8 14 19 30 25 27 9 32 7 46 -14 13 -20 15 -42 11 -107 -3 -46 -8 -95 -12 -110 -7 -25 -4 -27 30 -34 20 -4 40 -3 44 2 3 5 15 11 26 12 30 6 32 12 4 12 -13 0 -30 -4 -38 -9 -16 -10 -41 -4 -41 10 0 5 15 10 33 10 30 2 30 2 4 6 -15 2 -25 9 -21 14 3 5 0 17 -7 25 -6 8 -9 18 -5 22 4 4 60 7 124 7 65 0 100 1 79 3 -20 2 -35 7 -33 11 3 5 -5 7 -17 5 -12 -2 -48 -5 -79 -8 -55 -4 -57 -4 -62 22 -3 15 -6 50 -8 77 -1 44 -4 51 -22 53 -11 0 -22 6 -24 12 -2 5 -16 7 -30 4 -23 -5 -25 -3 -12 8 10 9 14 28 12 62 -2 27 -1 61 3 74 5 21 10 23 38 18 18 -3 133 -6 257 -7 210 0 405 -11 417 -23 3 -2 1 -11 -3 -18 -5 -7 -7 -23 -5 -36 1 -13 -3 -30 -9 -38 -10 -11 -10 -14 0 -14 21 0 2 -13 -43 -32 -30 -12 -36 -17 -20 -17 12 -1 25 4 28 9 12 19 25 10 19 -14 -6 -24 26 -70 34 -47 2 6 8 11 13 11 6 0 8 -4 4 -9 -3 -5 7 -11 22 -13 23 -3 29 -9 34 -40 4 -25 2 -38 -5 -38 -6 0 -5 -4 2 -9 10 -6 3 -13 -25 -25 l-38 -16 34 6 c26 5 32 3 29 -7 -3 -8 -14 -14 -26 -13 -12 0 -19 -3 -16 -8 3 -4 -16 -9 -43 -9 l-48 -2 60 -7 c85 -9 102 8 110 108 4 49 1 63 -15 82 -17 20 -26 22 -65 17 -51 -7 -54 -2 -25 45 27 44 28 148 3 170 -15 12 -57 16 -223 19 -113 1 -248 2 -300 1 -52 -1 -132 4 -177 11 -46 8 -83 11 -83 7z m-4 -425 c12 -8 11 -12 -6 -23 -19 -12 -20 -10 -19 35 1 28 4 37 6 23 3 -13 11 -29 19 -35z"/>
            <path d="M907 1353 c-14 -38 -15 -56 -7 -85 12 -42 15 -45 24 -22 3 8 2 12 -4 9 -19 -12 -11 79 10 113 14 22 16 32 7 32 -7 0 -21 -21 -30 -47z"/>
            <path d="M834 1155 c-13 -20 -14 -29 -5 -38 8 -8 11 -6 11 9 0 11 5 25 12 32 6 6 9 14 6 18 -4 3 -14 -6 -24 -21z"/>
            <path fill="red" d="M2208 973 c-5 -22 -20 -40 -47 -59 -35 -23 -67 -74 -55 -87 8 -7 -27 -87 -38 -87 -5 0 -6 -4 -3 -10 8 -13 -18 -13 -32 1 -6 6 -23 9 -37 7 -26 -3 -26 -4 -11 -23 9 -11 14 -14 10 -7 -4 8 2 12 20 12 15 0 24 -4 20 -10 -13 -20 23 -9 50 16 22 20 33 24 59 18 76 -16 73 -44 -9 -79 -48 -21 -74 -26 -102 -22 -35 6 -36 5 -19 -8 29 -22 69 -18 139 14 44 20 68 38 81 61 16 29 17 32 3 27 -9 -3 -23 0 -31 8 -8 8 -27 15 -43 15 -15 0 -35 5 -43 10 -13 9 -13 11 0 20 8 5 23 10 33 10 10 0 19 6 21 13 2 6 13 42 25 79 13 36 21 77 19 90 -3 20 -4 19 -10 -9z m-46 -118 c-11 -39 -35 -47 -26 -8 6 24 24 47 31 39 1 -1 -1 -15 -5 -31z"/>
            <path d="M1325 980 c11 -5 31 -9 45 -9 20 -1 22 1 10 9 -8 5 -28 9 -45 9 -26 0 -27 -2 -10 -9z"/>
            <path d="M1186 971 c-6 -9 40 -21 82 -21 14 0 44 -11 66 -24 52 -30 142 -52 159 -38 26 21 84 33 110 23 31 -12 179 -1 184 14 2 6 -38 10 -107 9 -88 0 -110 2 -106 13 5 11 1 11 -22 0 -17 -8 -42 -11 -69 -7 -23 3 -40 3 -37 -1 2 -4 -2 -10 -8 -13 -7 -3 6 -2 28 1 23 3 44 1 48 -5 9 -15 -62 -19 -119 -6 -41 9 -46 13 -30 20 18 7 16 9 -15 17 -19 5 -54 8 -77 8 -23 -1 -44 3 -48 9 -8 12 -32 13 -39 1z"/>
            <path d="M1839 960 c-1 -3 -3 -18 -5 -34 -2 -16 -7 -33 -13 -39 -6 -6 -5 -15 5 -25 8 -8 16 -13 18 -11 10 12 14 86 6 99 -5 8 -10 13 -11 10z"/>
            <path d="M1065 880 c-101 -7 -69 -19 63 -22 89 -3 91 -2 70 14 -13 10 -30 17 -38 16 -8 -1 -51 -4 -95 -8z"/>
            <path d="M1315 883 c-55 -13 -32 -23 51 -21 49 0 73 3 54 5 -19 3 -39 9 -44 14 -10 9 -27 10 -61 2z"/>
            <path d="M1558 883 c-44 -12 -11 -23 65 -22 66 1 74 3 42 9 -22 4 -51 9 -65 13 -14 3 -33 3 -42 0z"/>
            <path d="M950 846 c0 -27 22 -40 39 -23 16 16 14 34 -5 41 -27 10 -34 7 -34 -18z"/>
            <path d="M1722 858 c3 -7 17 -14 31 -16 21 -3 27 1 27 15 0 15 -2 16 -10 3 -6 -10 -10 -11 -10 -2 0 6 -9 12 -21 12 -12 0 -19 -5 -17 -12z"/>
            <path d="M1518 843 c-5 -25 -2 -63 4 -63 4 0 8 16 8 35 0 31 -7 48 -12 28z"/>
            <path d="M840 815 c0 -10 11 -15 33 -16 47 -1 82 -14 79 -28 -1 -7 2 -10 8 -6 17 10 41 -23 61 -83 l19 -57 -4 50 c-7 85 -25 110 -94 138 -54 22 -102 22 -102 2z"/>
            <path d="M1220 795 c0 -15 44 -85 53 -85 6 0 3 8 -6 18 -10 10 -17 24 -17 31 0 7 -7 19 -15 27 -8 9 -15 12 -15 9z"/>
            <path d="M1730 785 c0 -8 -7 -15 -16 -15 -14 0 -14 -3 -4 -15 11 -13 14 -13 24 -1 6 7 17 15 24 17 8 3 5 8 -8 17 -17 10 -20 10 -20 -3z"/>
            <path d="M1040 759 c0 -8 12 -10 34 -6 19 3 39 0 45 -6 8 -8 11 -7 11 6 0 13 -9 17 -45 17 -27 0 -45 -5 -45 -11z"/>
            <path d="M1270 761 c0 -12 37 -20 47 -10 4 4 35 10 68 12 50 3 45 4 -27 5 -49 1 -88 -2 -88 -7z"/>
            <path d="M1531 766 c2 -2 18 -6 36 -9 17 -3 37 -8 42 -12 6 -3 11 1 11 9 0 12 -11 16 -47 16 -25 0 -44 -2 -42 -4z"/>
            <path d="M1905 762 c-18 -6 -15 -10 23 -28 l43 -22 -23 25 c-19 21 -20 23 -4 17 14 -5 17 -4 12 4 -8 13 -20 14 -51 4z"/>
            <path d="M520 460 l0 -270 30 0 30 0 0 270 0 270 -30 0 -30 0 0 -270z"/>
            <path d="M1715 670 c3 -6 23 -18 43 -29 20 -10 73 -39 117 -64 106 -60 151 -71 221 -57 30 6 54 15 54 20 0 5 -13 7 -29 4 -31 -7 -75 12 -105 45 -32 35 -40 23 -11 -15 l28 -36 -33 7 c-40 9 -145 58 -168 78 -19 16 -101 57 -114 57 -5 0 -6 -5 -3 -10z"/>
            <path d="M1683 623 c3 -21 8 -46 12 -55 5 -14 2 -18 -14 -18 -12 0 -21 -4 -21 -9 0 -10 26 -17 95 -25 39 -5 44 -4 22 3 -43 14 -53 26 -72 86 -20 64 -30 72 -22 18z"/>
            <path d="M986 618 c5 -65 19 -102 44 -115 100 -49 145 -63 209 -63 l66 1 -38 13 c-20 8 -44 19 -52 26 -13 11 -14 10 -9 -4 8 -20 9 -20 -57 3 -120 41 -120 41 -140 89 -23 52 -18 67 8 25 l18 -29 22 43 c19 36 20 43 7 43 -10 0 -14 -6 -10 -15 4 -11 -1 -15 -19 -15 -16 0 -25 6 -25 15 0 8 -6 15 -13 15 -9 0 -13 -11 -11 -32z"/>
            <path d="M1285 542 c4 -49 3 -52 -15 -42 -13 7 -20 7 -20 1 0 -18 54 -39 84 -34 l28 6 -28 22 c-15 12 -34 40 -41 61 l-13 39 5 -53z"/>
            <path d="M1329 571 c12 -21 87 -61 115 -61 29 0 12 24 -23 31 -18 4 -42 16 -55 28 -29 27 -51 28 -37 2z"/>
            <path d="M1480 542 c0 -5 26 -19 57 -32 31 -13 73 -38 93 -56 32 -29 45 -34 115 -40 53 -5 76 -4 72 3 -4 6 -27 14 -51 17 -32 5 -57 18 -91 48 -37 33 -46 37 -41 21 6 -20 2 -19 -61 13 -68 34 -93 41 -93 26z"/>  </g> </svg>

            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            x="90%" y="65%" width="80.000000pt" height="201.000000pt" viewBox="0 0 80.000000 201.000000"
            preserveAspectRatio="xMidYMid meet">
           <metadata>
           Created by potrace 1.10, written by Peter Selinger 2001-2011
           </metadata>
           <g transform="translate(0.000000,100.000000) scale(0.050000,-0.050000)"
           fill="white" stroke="none">
           <path d="M380 1975 c0 -22 -4 -25 -36 -25 -50 0 -148 -27 -204 -55 -52 -26
           -99 -76 -101 -106 -1 -10 -3 -23 -4 -29 -1 -5 -3 -66 -4 -135 -1 -104 -4 -125
           -16 -125 -8 0 -15 -4 -15 -10 0 -5 7 -10 15 -10 13 0 15 -24 15 -155 0 -131
           -2 -155 -15 -155 -24 0 -18 -18 7 -23 23 -4 23 -4 -2 -15 -18 -8 -20 -11 -7
           -11 16 -1 17 -19 17 -241 0 -207 -2 -240 -15 -240 -8 0 -15 -4 -15 -10 0 -5 7
           -10 15 -10 13 0 15 -22 16 -132 1 -73 1 -152 0 -175 -3 -54 12 -81 55 -99 34
           -14 35 -17 33 -62 -1 -26 -1 -53 0 -60 1 -10 62 -12 289 -10 l287 3 0 58 c1
           66 9 76 70 78 22 1 30 4 18 6 -25 5 -21 33 6 34 10 0 11 2 4 6 -17 6 -17 90 0
           96 6 3 -73 6 -176 6 -137 1 -186 4 -181 12 5 9 -33 10 -140 7 -116 -3 -146 -1
           -146 9 0 16 37 16 237 3 201 -13 413 -17 413 -8 0 5 -4 8 -10 8 -15 0 -13 137
           3 144 10 5 10 7 0 12 -18 8 -18 180 -1 187 10 4 9 8 -2 16 -13 10 -13 12 0 21
           8 5 10 10 3 10 -6 0 -13 21 -15 50 -2 39 0 50 12 50 13 0 13 1 0 10 -13 9 -13
           11 0 20 10 6 11 10 3 10 -9 0 -13 19 -13 60 0 33 4 60 10 60 6 0 10 5 10 11 0
           5 -4 7 -10 4 -5 -3 -10 0 -10 9 0 8 6 17 13 19 10 4 10 6 0 6 -15 1 -18 61 -3
           61 6 0 10 5 10 11 0 5 -4 7 -10 4 -5 -3 -10 -2 -10 4 0 5 6 12 13 14 10 4 10
           6 0 6 -10 1 -13 31 -13 115 0 82 4 116 13 120 10 5 10 7 0 12 -7 3 -13 12 -13
           19 0 7 6 16 13 18 10 4 10 6 0 6 -7 1 -13 7 -13 15 0 8 6 17 13 19 10 4 10 6
           0 6 -9 1 -13 24 -13 80 0 54 4 81 13 84 10 4 10 6 0 6 -7 1 -13 7 -13 15 0 8
           6 17 13 19 7 3 6 6 -5 6 -9 1 -20 6 -24 13 -4 7 -3 8 4 4 27 -16 2 57 -31 92
           -45 49 -188 101 -274 102 -28 0 -33 3 -33 25 0 20 -5 25 -25 25 -20 0 -25 -5
           -25 -25z m125 -45 c107 -17 166 -41 212 -85 39 -38 56 -75 34 -75 -5 0 -30 25
           -56 55 -33 39 -54 55 -71 55 -13 0 -24 -3 -24 -7 0 -4 21 -29 47 -55 l47 -48
           -322 0 c-357 0 -349 -2 -292 63 70 80 262 124 425 97z m180 -110 c27 -27 43
           -50 35 -50 -16 1 -108 100 -93 100 5 0 31 -22 58 -50z m52 -97 l28 -38 -3
           -376 -2 -376 -168 -7 c-92 -3 -235 -6 -318 -7 -83 0 -155 -4 -161 -7 -7 -5
           -10 -101 -9 -272 l1 -265 335 -11 335 -11 -362 -1 -363 -2 0 705 0 705 329 0
           329 0 29 -37z m29 -815 c4 -5 -77 -8 -180 -8 -122 0 -185 -3 -181 -10 4 -6 65
           -10 151 -10 83 0 144 -4 144 -9 0 -16 -18 -22 -26 -10 -3 6 -9 7 -13 3 -3 -5
           -78 -7 -166 -5 -103 3 -147 7 -125 12 21 4 -18 6 -93 5 -96 -1 -127 2 -127 12
           0 9 28 12 103 13 56 1 181 4 277 8 220 8 227 8 236 -1z m-6 -263 l0 -245 -24
           0 -25 0 1 245 0 245 24 0 24 0 0 -245z m-360 205 c67 -6 60 -7 -65 -9 -77 0
           -150 -4 -162 -7 -17 -5 -23 -2 -23 10 0 14 13 16 88 15 48 -1 121 -5 162 -9z
           m260 -26 c0 -15 -9 -16 -61 -10 -34 3 -110 7 -168 8 l-106 2 80 6 c44 3 119 7
           168 8 75 2 87 0 87 -14z m-270 -14 l95 -7 -85 -1 c-47 -1 -122 -5 -167 -9 -73
           -5 -83 -4 -83 11 0 13 11 16 73 15 39 -1 115 -5 167 -9z m270 -26 c0 -15 -11
           -16 -92 -10 -50 3 -125 7 -167 8 l-76 2 90 6 c189 13 245 12 245 -6z m-275
           -14 c80 -5 88 -7 39 -8 -33 -1 -109 -5 -167 -9 -95 -5 -107 -4 -107 10 0 19
           51 21 235 7z m275 -27 c0 -14 -11 -15 -97 -10 -54 4 -129 8 -168 9 -62 2 -58
           3 35 8 210 12 230 12 230 -7z m-181 -19 c2 -2 -23 -4 -56 -4 -33 0 -108 -3
           -166 -7 -97 -5 -107 -4 -107 11 0 16 12 17 163 10 89 -3 164 -8 166 -10z m185
           -21 c6 -15 -4 -16 -115 -10 -67 4 -145 8 -173 9 -28 1 -4 5 54 8 207 12 227
           11 234 -7z m-255 -15 l76 -1 -100 -7 c-183 -14 -235 -12 -235 6 0 15 11 16 92
           10 50 -3 125 -7 167 -8z m291 -24 c0 -17 -16 -18 -26 -3 -5 8 -9 8 -14 -1 -6
           -9 -46 -10 -171 -4 l-164 9 110 6 c195 10 265 8 265 -7z m-306 -16 l91 -1 -90
           -8 c-49 -4 -125 -7 -167 -8 -66 -1 -78 2 -78 15 0 15 10 16 77 10 42 -3 117
           -7 167 -8z m266 -20 c0 -9 3 -9 12 0 16 16 28 15 28 -3 0 -17 -95 -20 -265 -7
           l-100 7 130 5 c72 3 145 7 163 8 19 1 32 -3 32 -10z m-342 -20 c116 -1 127 -2
           72 -8 -36 -4 -104 -8 -152 -9 -75 -1 -88 1 -88 15 0 11 5 14 16 10 9 -3 77 -7
           152 -8z m342 -19 c0 -8 4 -9 13 0 14 11 27 6 27 -11 0 -4 -53 -8 -117 -9 -65
           0 -138 -4 -163 -9 -32 -6 -3 -8 98 -7 108 2 142 -1 142 -10 0 -10 -29 -13
           -109 -13 -63 0 -112 -4 -116 -10 -4 -6 35 -10 109 -10 71 0 116 -4 116 -10 0
           -6 -53 -10 -137 -11 -101 -1 -127 -4 -98 -10 22 -4 84 -8 138 -8 70 -1 97 -4
           98 -13 0 -10 2 -10 6 0 6 16 36 16 31 0 -3 -7 -12 -12 -21 -12 -9 1 -88 3
           -174 4 -113 2 -144 5 -108 10 32 5 -3 7 -98 6 -112 -1 -147 2 -147 12 0 9 30
           12 114 12 66 0 117 4 121 10 4 6 -37 10 -114 10 -74 0 -121 4 -121 10 0 6 50
           10 128 11 80 0 120 4 107 9 -11 5 -68 9 -127 9 -79 1 -108 4 -108 14 0 9 36
           12 147 11 82 -1 126 2 98 5 -35 4 -4 8 100 11 83 3 153 7 158 8 4 1 7 -3 7 -9z
           m-255 -149 c62 -6 56 -7 -61 -8 -72 -1 -146 -5 -163 -8 -24 -5 -31 -3 -31 10
           0 14 13 16 93 15 50 -1 124 -5 162 -9z m295 -25 c0 -18 -11 -19 -29 -2 -11 10
           -12 9 -6 -2 7 -12 -10 -13 -115 -8 -68 4 -148 8 -179 9 -47 1 -43 3 29 8 47 3
           133 7 193 8 89 2 107 0 107 -13z m62 -110 c3 -30 1 -35 -17 -35 -53 0 -245
           -34 -245 -44 0 -8 -58 -12 -187 -13 -167 -1 -191 1 -225 18 -35 18 -38 22 -38
           64 l0 45 354 0 354 0 4 -35z m-12 -59 c-24 -23 -240 -48 -240 -28 0 7 168 36
           235 41 17 1 17 -1 5 -13z m-523 -66 c112 -19 354 -10 434 15 17 6 19 1 19 -49
           l0 -56 -275 0 -275 0 0 56 c0 50 2 55 19 49 11 -3 45 -10 78 -15z m343 9 c-59
           -10 -250 -9 -320 1 -36 5 17 7 155 7 125 -1 192 -4 165 -8z"/>
           </g>
           </svg>

       <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
       id="Ballon" x="102%" y="22%"  width="30%" height="30%" class="${
         config.show_bal === "yes" ? "" : "st12"
       }" fill="${load_colour}" viewBox="0 0 256 256" enable-background="new 0 0 256 256" xml:space="preserve">
       <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g><g><path fill="${load_colour}" d="M77.3,10.9c-0.9,0.5-2.2,1.6-3,2.5l-1.4,1.8l-0.1,12.2l-0.1,12.2h-7.3h-7.4v3.7v3.7h7.4h7.4v3.7v3.7h-7.4h-7.4v3.7v3.7h7.4h7.4V104v42.4h-7.4h-7.4v3.7v3.7h7.4h7.4v3.7v3.7h-7.4h-7.4v3.7v3.7h7.4h7.4v11.7c0,13,0.1,13.5,3.4,16.2c1.8,1.4,1.8,1.4,8.3,1.5l6.6,0.1l0.2,4.8c0.1,4.5,0.2,4.8,1.5,6.5c3,3.6,0.8,3.4,35.3,3.4c34.4,0,32.3,0.2,35.3-3.4c1.3-1.7,1.4-2,1.5-6.5l0.2-4.8l6.6-0.1c6.5-0.1,6.6-0.1,8.3-1.5c3.3-2.7,3.4-3.2,3.4-16.2v-11.7h7.4h7.4v-3.7v-3.7h-7.4h-7.4v-3.7v-3.7h7.4h7.4v-3.7v-3.7h-7.4h-7.4V104V61.6h7.4h7.4v-3.7v-3.7h-7.4h-7.4v-3.7v-3.7h7.4h7.4v-3.7v-3.7h-7.4h-7.3l-0.1-12.2l-0.1-12.2l-1.4-1.8c-0.8-0.9-2.1-2.1-3-2.5C177.2,10,175,10,128,10C81,10,78.8,10,77.3,10.9z M175.9,21.1v3.7H128H80.1v-3.7v-3.7H128h47.9V21.1z M175.9,93v60.8H128H80.1V93V32.1H128h47.9V93z M175.9,175.9v14.8H128H80.1v-14.8v-14.8H128h47.9V175.9z M157.5,201.8v3.7H128H98.5v-3.7v-3.7H128h29.5V201.8z"/><path fill="#000000" d="M125.7,66.1c-0.7,0.6-1.2,1.6-1.4,3.5c-0.4,3.2-1.9,6.5-5.7,12.5c-6.5,10.2-8.8,16.4-8.8,23c0,3.8,0.1,4.4,1.6,7.3c2,4.1,5.9,8,10,10c2.7,1.3,3.6,1.6,6.6,1.6c3,0,3.9-0.2,6.6-1.6c4.2-2,8-5.9,10-10c1.4-2.9,1.6-3.5,1.5-7.3c0-6.8-2.3-12.8-8.8-23c-3.7-6-5.3-9.3-5.7-12.5c-0.4-3-1.6-4.3-3.7-4.3C127.3,65.3,126.2,65.7,125.7,66.1z M132.4,88.5c6.5,11,8,16.7,5.6,21.8c-4.1,8.8-15.8,8.8-19.9,0c-2.4-5.1-0.9-10.8,5.6-21.8c2.3-3.8,4.2-7,4.4-7C128.1,81.4,130.1,84.6,132.4,88.5z"/><path fill="#000000" d="M91.1,102.2v3.7h3.7h3.7v-3.7v-3.7h-3.7h-3.7L91.1,102.2L91.1,102.2z"/><path fill="#000000" d="M157.5,102.2v3.7h3.7h3.7v-3.7v-3.7h-3.7h-3.7V102.2z"/><path fill="#000000" d="M125.2,169.4c-3.8,2.1-5.5,6.2-3.8,9.3c2.1,3.8,6.2,5.5,9.3,3.8c3.8-2.1,5.5-6.2,3.8-9.3C132.5,169.4,128.3,167.7,125.2,169.4z"/><path fill="#000000" d="M113.3,229.4v9.2H61.6H10v3.7v3.7h52.2c50,0,52.3,0,53.8-0.9c0.9-0.5,2.2-1.6,3-2.5l1.4-1.8l0.1-10.3l0.1-10.3H117h-3.7L113.3,229.4L113.3,229.4z"/><path fill="#000000" d="M135.5,230.5l0.1,10.3l1.4,1.8c0.8,0.9,2.1,2.1,3,2.5c1.5,0.8,3.8,0.9,53.8,0.9H246v-3.7v-3.7h-51.6h-51.6v-9.2v-9.2H139h-3.7L135.5,230.5z"/></g></g></g></svg>

       <svg xmlns="http://www.w3.org/2000/svg" id="aux_gen" x="0%" y="44%" width="5%" height="5%" viewBox="0 0 24 24"><path class="${
         aux_type === "gen" ? "" : "st12"
       }" display="${
        show_aux === "no" ? "none" : ""
      }" fill="${aux_colour}" d="M6 3a2 2 0 0 0-2 2v11h2v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h6v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h2V5a2 2 0 0 0-2-2H6m6 4V5h6v2h-6m0 2h6v2h-6V9M8 5v4h2l-3 6v-4H5l3-6m14 15v2H2v-2h20Z"/></svg>

       <svg xmlns="http://www.w3.org/2000/svg" id="aux_inverter" x="0%" y="44%" width="5%" height="5%" viewBox="0 0 74 91"  preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,91.000000) scale(0.100000,-0.100000)" class="${
         aux_type === "inverter" ? "" : "st12"
       }" display="${show_aux === "no" ? "none" : ""}" fill="${
        aux_status === "on" || aux_status === "1"
          ? `${aux_colour}`
          : `${aux_off_colour}`
      }" stroke="none"> <path d="M35 887 l-27 -23 0 -404 0 -404 27 -23 c26 -23 28 -23 329 -23 284 0 305 1 327 19 l24 19 0 412 0 412 -24 19 c-22 18 -43 19 -327 19 -301 0 -303 0 -329 -23z m585 -157 l0 -80 -255 0 -255 0 0 80 0 80 255 0 255 0 0 -80z m-242 -229 c44 -34 40 -46 -14 -46 -60 0 -97 -38 -93 -94 5 -64 -23 -80 -35 -20 -9 44 24 113 63 134 35 18 34 15 21 50 -11 29 -14 30 58 -24z m110 -129 c4 -51 -19 -97 -59 -117 -27 -14 -30 -20 -23 -48 l6 -31 -51 43 c-29 24 -49 46 -46 49 3 4 23 5 44 3 58 -4 95 32 97 95 3 60 1 57 17 52 6 -3 13 -23 15 -46z"/> </g> </svg>



          <a href="#" @click=${(e) =>
            this.handlePopup(e, config.entities.grid_connected_status_194)}>
              <svg xmlns="http://www.w3.org/2000/svg" id="transmission_on" x="0%" y="38%" width="5%" height="5%" display="${
                config.entities.grid_ct_power_172 === "none" ? "none" : ""
              }" viewBox="0 0 24 24"><path class="${
        grid_status === "off" || grid_status === "0" ? "st12" : ""
      }" fill="${grid_colour}" d="m8.28 5.45l-1.78-.9L7.76 2h8.47l1.27 2.55l-1.78.89L15 4H9l-.72 1.45M18.62 8h-4.53l-.79-3h-2.6l-.79 3H5.38L4.1 10.55l1.79.89l.73-1.44h10.76l.72 1.45l1.79-.89L18.62 8m-.85 14H15.7l-.24-.9L12 15.9l-3.47 5.2l-.23.9H6.23l2.89-11h2.07l-.36 1.35L12 14.1l1.16-1.75l-.35-1.35h2.07l2.89 11m-6.37-7l-.9-1.35l-1.18 4.48L11.4 15m3.28 3.12l-1.18-4.48l-.9 1.36l2.08 3.12Z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" id="transmission_off" x="0%" y="38%" width="5%" height="5%" display="${
                config.entities.grid_ct_power_172 === "none" ? "none" : ""
              }" viewBox="0 0 24 24"><path class="${
        grid_status === "on" || grid_status === "1" ? "st12" : ""
      }" fill="${no_grid_colour}" d="M22.1 21.5L2.4 1.7L1.1 3l5 5h-.7l-1.3 2.5l1.8.9l.7-1.4h1.5l1 1l-2.9 11h2.1l.2-.9l3.5-5.2l3.5 5.2l.2.9h2.1l-.8-3.2l3.9 3.9l1.2-1.2M9.3 18.1l1.2-4.5l.9 1.3l-2.1 3.2m5.4 0L12.6 15l.2-.3l1.3 1.3l.6 2.1m-.5-7.1h.7l.2.9l-.9-.9m-.1-3h4.5l1.3 2.6l-1.8.9l-.7-1.5h-4.2l-3-3l.5-2h2.6l.8 3M8.4 5.2L6.9 3.7L7.8 2h8.5l1.3 2.5l-1.8.9L15 4H9l-.6 1.2Z"/></svg></a>

            <!--            <svg xmlns="http://www.w3.org/2000/svg" id="essen" x="70%" y="32%" width="25%" height="25%" viewBox="0 0 24 24"><path fill="${load_colour}" d="M15 9h1V7.5h4V9h1c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1m1 2v3h4v-3h-4m-4-5.31l-5 4.5V18h5v2H5v-8H2l10-9l2.78 2.5H14v1.67l-.24.1L12 5.69Z"/></svg>
            -->
            <svg xmlns="http://www.w3.org/2000/svg" id="essen" x="67%" y="17%" width="35%" height="35%" fill="${load_colour}" class="bi bi-house" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/> <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/> </svg>


            <!-- 
             <a href="#" @click=${(e) =>
               this.handlePopup(e, config.entities.use_timer_248)}>
              <svg xmlns="http://www.w3.org/2000/svg" id="timer" x="46%" y="${
                useautarky != "no" ? "60.5%" : "65%"
              }" width="18" height="18" viewBox="0 0 24 24"><path display="${
        stateObj26.state == "on" && usetimer !== "no" ? "" : "none"
      }" fill="${inverter_colour}" d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0 0 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a8.994 8.994 0 0 0 7.03-14.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" id="timer_off" x="46%" y="${
                useautarky != "no" ? "60.5%" : "65%"
              }" width="18" height="18" viewBox="0 0 24 24"><path display="${
        stateObj26.state == "off" && usetimer !== "no" ? "" : "none"
      }" fill="${inverter_colour}" d="m19.95 17.15l-1.5-1.5q.275-.675.413-1.337T19 13q0-2.9-2.05-4.95T12 6q-.6 0-1.275.125t-1.4.4l-1.5-1.5q.95-.5 2.012-.763T12 4q1.5 0 2.938.5t2.712 1.45l1.4-1.4l1.4 1.4l-1.4 1.4q.95 1.275 1.45 2.713T21 13q0 1.05-.263 2.087t-.787 2.063ZM13 10.2V8h-2v.2l2 2Zm6.8 12.4l-2.4-2.4q-1.2.875-2.588 1.338T12 22q-1.85 0-3.488-.713T5.65 19.35q-1.225-1.225-1.938-2.863T3 13q0-1.5.463-2.888T4.8 7.6L1.4 4.2l1.4-1.4l18.4 18.4l-1.4 1.4ZM12 20q1.05 0 2.05-.325t1.875-.925L6.2 9.025q-.6.875-.9 1.875T5 13q0 2.9 2.05 4.95T12 20ZM9 3V1h6v2H9Zm2.075 10.875Zm2.825-2.8Z"/></svg>
              <text id="timer_text_on"x="50%" y="${
                useautarky != "no" ? "63.5%" : "68%"
              }" class="st3 left-align" display="${
        stateObj26.state == "on" && usetimer !== "no" ? "" : "none"
      }" fill="${inverter_colour}">On</text>
              <text id="timer_text_off"x="50%" y="${
                useautarky != "no" ? "63.5%" : "68%"
              }" class="st3 left-align" display="${
        stateObj26.state == "off" && usetimer !== "no" ? "" : "none"
      }" fill="${inverter_colour}">Off</text>
            </a>
            -->


            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.bat1_disch_sw)}>
            <rect x="18%" y="67%" width="4%" height="4%" rx="1%" ry="1%" fill="none" stroke="${inverter_colour}" pointer-events="all"/>
            <text id="Text" x="18%" y="66%" class="st3 left-align" fill="${battery_colour}">Disch</text>
            <text id="text_on" x="18.5%" y="69%" class="st3 left-align" display="${
              stateObj73.state == "on" && usetimer !== "no" ? "" : "none"
            }" fill="${inverter_colour}">On</text>
            <text id="text_off" x="18.5%" y="69%" class="st3 left-align" display="${
              stateObj73.state == "off" && usetimer !== "no" ? "" : "none"
            }" fill="${inverter_colour}">Off</text>
            </a>

            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.bat1_charg_sw)}>
            <rect x="27%" y="67%" width="4%" height="4%" rx="1%" ry="1%" fill="none" stroke="${inverter_colour}" pointer-events="all"/>
            <text id="Text" x="26.5%" y="66%" class="st3 left-align" fill="${battery_colour}">Charg</text>
            <text id="text_on" x="27.5%" y="69%" class="st3 left-align" display="${
              stateObj74.state == "on" && usetimer !== "no" ? "" : "none"
            }" fill="${inverter_colour}">On</text>
            <text id="text_off" x="27.5%" y="69%" class="st3 left-align" display="${
              stateObj74.state == "off" && usetimer !== "no" ? "" : "none"
            }" fill="${inverter_colour}">Off</text>
            </a>

            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.bat2_disch_sw)}>
            <rect x="33%" y="67%" width="4%" height="4%" rx="1%" ry="1%" display="${
              config.entities.battery2_soc_184 === "none" ? "none" : ""
            }" fill="none" stroke="${inverter_colour}" pointer-events="all"/>
            <text id="Text" x="33%" y="66%" class="st3 left-align" display="${
              config.entities.battery2_soc_184 === "none" ? "none" : ""
            }" fill="${battery_colour}">Disch</text>
            <text id="text_on" x="33.5%" y="69%" class="st3 left-align" display="${
              stateObj75.state == "on" && usetimer !== "no" ? "" : "none"
            }" fill="${inverter_colour}">On</text>
            <text id="text_off" x="33.5%" y="69%" class="st3 left-align" display="${
              stateObj75.state == "off" && usetimer !== "no" ? "" : "none"
            }" fill="${inverter_colour}">Off</text>
            </a>
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.bat2_charg_sw)}>
            <rect x="42%" y="67%" width="4%" height="4%" display="${
              config.entities.battery2_soc_184 === "none" ? "none" : ""
            }" rx="1%" ry="1%" fill="none" stroke="${inverter_colour}" pointer-events="all"/>
            <text id="Text" x="41.5%" y="66%" class="st3 left-align" display="${
              config.entities.battery2_soc_184 === "none" ? "none" : ""
            }" fill="${battery_colour}">Charg</text>
            <text id="text_on" x="42.5%" y="69%" class="st3 left-align" display="${
              stateObj76.state == "on" && usetimer !== "no" ? "" : "none"
            }" fill="${inverter_colour}">On</text>
            <text id="text_off" x="42.5%" y="69%" class="st3 left-align" display="${
              stateObj76.state == "off" && usetimer !== "no" ? "" : "none"
            }" fill="${inverter_colour}">Off</text>
            </a>

            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.bat3_disch_sw)}>
            <rect x="48%" y="67%" width="4%" height="4%" rx="1%" ry="1%" display="${
              config.entities.battery3_soc_184 === "none" ? "none" : ""
            }" fill="none" stroke="${inverter_colour}" pointer-events="all"/>
            <text id="Text" x="48%" y="66%" class="st3 left-align" display="${
              config.entities.battery3_soc_184 === "none" ? "none" : ""
            }" fill="${battery_colour}">Disch</text>
            <text id="text_on" x="48.5%" y="69%" class="st3 left-align" display="${
              stateObj77.state == "on" && usetimer !== "no" ? "" : "none"
            }" fill="${inverter_colour}">On</text>
            <text id="text_off" x="48.5%" y="69%" class="st3 left-align" display="${
              stateObj77.state == "off" && usetimer !== "no" ? "" : "none"
            }" fill="${inverter_colour}">Off</text>
            </a>
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.bat3_charg_sw)}>
            <rect x="57%" y="67%" width="4%" height="4%" rx="1%" ry="1%" display="${
              config.entities.battery3_soc_184 === "none" ? "none" : ""
            }" fill="none" stroke="${inverter_colour}" pointer-events="all"/>
            <text id="Text" x="56.5%" y="66%" class="st3 left-align" display="${
              config.entities.battery3_soc_184 === "none" ? "none" : ""
            }" fill="${battery_colour}">Charg</text>
            <text id="text_on" x="57.5%" y="69%" class="st3 left-align" display="${
              stateObj78.state == "on" && usetimer !== "no" ? "" : "none"
            }" fill="${inverter_colour}">On</text>
            <text id="text_off" x="57.5%" y="69%" class="st3 left-align" display="${
              stateObj78.state == "off" && usetimer !== "no" ? "" : "none"
            }" fill="${inverter_colour}">Off</text>
            </a>


          <a href="#" @click=${(e) =>
            this.handlePopup(e, config.entities.EV_moins)}>
          <rect x="66.5%" y="68%" width="4%" height="4%" rx="1%" ry="1%" fill="none" display="${
            config.show_ev === "no" ? "none" : ""
          }" stroke="${inverter_colour}" pointer-events="all"/>
          <text id="Text" x="68%" y="70%" class="st4 left-align" display="${
            config.show_ev === "no" ? "none" : ""
          }" fill="${load_colour}">-</text>
        </a>
          <a href="#" @click=${(e) =>
            this.handlePopup(e, config.entities.EV_amp)}>
          <rect x="71.5%" y="68%" width="4%" height="4%" rx="1%" ry="1%" display="${
            config.show_ev === "no" ? "none" : ""
          }" fill="none" stroke="${inverter_colour}" pointer-events="all"/>
          <text id="text_amp"x="73%" y="72%" class="st3 left-align" display="${
            config.show_ev === "no" ? "none" : ""
          }"  fill="${inverter_colour}">On</text>
          <text id="Text" x="77.5%" y="70%" class="st4 left-align" display="${
            config.show_ev === "no" ? "none" : ""
          }" fill="${load_colour}">+</text>
        </a>
          <a href="#" @click=${(e) =>
            this.handlePopup(e, config.entities.EV_plus)}>
          <rect x="76.5%" y="68%" width="4%" height="4%" rx="1%" ry="1%" fill="none" display="${
            config.show_ev === "no" ? "none" : ""
          }" stroke="${inverter_colour}" pointer-events="all"/>
          <text id="Text" x="77.5%" y="70%" class="st4 left-align" display="${
            config.show_ev === "no" ? "none" : ""
          }" fill="${load_colour}">+</text>
         </a>

         <a href="#" @click=${(e) =>
           this.handlePopup(e, config.entities.EV_moins)}>
         <rect x="66.5%" y="73%" width="4%" height="4%" rx="1%" ry="1%" fill="none" display="${
           config.show_ev === "no" ? "none" : ""
         }" stroke="${inverter_colour}" pointer-events="all"/>
         <text id="Text" x="68%" y="75%" class="st4 left-align" display="${
           config.show_ev === "no" ? "none" : ""
         }" fill="${load_colour}">-</text>
       </a>
         <a href="#" @click=${(e) =>
           this.handlePopup(e, config.entities.EV_amp)}>
         <rect x="71.5%" y="73%" width="4%" height="4%" rx="1%" ry="1%" display="${
           config.show_ev === "no" ? "none" : ""
         }" fill="none" stroke="${inverter_colour}" pointer-events="all"/>
         <text id="text_amp"x="73%" y="77%" class="st3 left-align" display="${
           config.show_ev === "no" ? "none" : ""
         }"  fill="${inverter_colour}">On</text>
         <text id="Text" x="77.5%" y="75%" class="st4 left-align" display="${
           config.show_ev === "no" ? "none" : ""
         }" fill="${load_colour}">+</text>
       </a>
         <a href="#" @click=${(e) =>
           this.handlePopup(e, config.entities.EV_plus)}>
         <rect x="76.5%" y="73%" width="4%" height="4%" rx="1%" ry="1%" fill="none" display="${
           config.show_ev === "no" ? "none" : ""
         }" stroke="${inverter_colour}" pointer-events="all"/>
         <text id="Text" x="77.5%" y="75%" class="st4 left-align" display="${
           config.show_ev === "no" ? "none" : ""
         }" fill="${load_colour}">+</text>
        </a>

        <svg id="sw1_3w" x="8%" y="24%"  width="190.000000pt" height="95.000000pt" viewBox="0 0 190.000000 95.000000" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g transform="translate(0.000000,0.000000)  scale(-0.010000,0.012000)" transform-origin="center" fill="${grid_colour}" stroke="none">
        <path fill="${aux_colour}" d="M2550 1872 c-89 -39 -134 -100 -143 -196 -28 -278 337 -380 466 -131 l28 55 450 0 449 0 0 50 0 50 -448 0 -448 0 -42 71 c-66 112 -194 153 -312 101z m201 -121 c90 -90 25 -251 -101 -251 -28 0 -74 22 -101 49 -90 90 -25 251 101 251 29 0 74 -22 101 -49z"/>
        <path fill="${grid_colour}" d="M1140 1275 c-27 -14 -72 -60 -98 -101 l-49 -74 -496 0 -497 0 0 -50 0 -50 498 0 498 0 41 -69 c80 -136 267 -170 375 -69 l48 45 425 -136 c234 -75 522 -166 640 -202 l215 -65 30 42 c38 54 97 30 -643 264 l-623 197 -10 79 c-22 159 -215 262 -354 189z m211 -124 c90 -90 25 -251 -101 -251 -28 0 -74 22 -101 49 -27 27 -49 73 -49 101 0 29 22 74 49 101 27 27 73 49 101 49 29 0 74 -22 101 -49z"/>
        <path fill="${grid_colour}" d="M2518 454 c-91 -61 -122 -125 -111 -233 23 -231 336 -294 455 -92 l42 71 448 0 448 0 0 50 0 50 -448 0 -448 0 -42 71 c-74 125 -227 162 -344 83z m233 -103 c90 -90 25 -251 -101 -251 -67 0 -150 83 -150 150 0 67 83 150 150 150 29 0 74 -22 101 -49z" /> </g> </svg> 

        <svg id="sw1_3w" x="8%" y="24%"  width="190.000000pt" height="95.000000pt" viewBox="0 0 190.000000 95.000000" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g transform="translate(0.000000,24) scale(-0.010000,-0.012)" transform-origin="center" fill="${aux_colour}" stroke="none">
        <path d="M1140 1275 c-27 -14 -72 -60 -98 -101 l-49 -74 -496 0 -497 0 0 -50 0 -50 498 0 498 0 41 -69 c80 -136 267 -170 375 -69 l48 45 425 -136 c234 -75 522 -166 640 -202 l215 -65 30 42 c38 54 97 30 -643 264 l-623 197 -10 79 c-22 159 -215 262 -354 189z m211 -124 c90 -90 25 -251 -101 -251 -28 0 -74 22 -101 49 -27 27 -49 73 -49 101 0 29 22 74 49 101 27 27 73 49 101 49 29 0 74 -22 101 -49z"/> </g> </svg> 

         <!-- 
         <svg id="sw1_3w" x="15%" y="35%" width="10%" height="10%" viewBox="0 0 190.000000 95.000000" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <metadata> Created by potrace 1.10, written by Peter Selinger 2001-2011 </metadata> <g transform="translate(0.000000,95.000000) scale(0.050000,-0.050000)" fill="${aux_colour}" stroke="none"> <path d="M2550 1872 c-89 -39 -134 -100 -143 -196 -28 -278 337 -380 466 -131 l28 55 450 0 449 0 0 50 0 50 -448 0 -448 0 -42 71 c-66 112 -194 153 -312 101z m201 -121 c90 -90 25 -251 -101 -251 -28 0 -74 22 -101 49 -90 90 -25 251 101 251 29 0 74 -22 101 -49z"/> <path d="M1140 1275 c-27 -14 -72 -60 -98 -101 l-49 -74 -496 0 -497 0 0 -50 0 -50 498 0 498 0 41 -69 c80 -136 267 -170 375 -69 l48 45 425 -136 c234 -75 522 -166 640 -202 l215 -65 30 42 c38 54 97 30 -643 264 l-623 197 -10 79 c-22 159 -215 262 -354 189z m211 -124 c90 -90 25 -251 -101 -251 -28 0 -74 22 -101 49 -27 27 -49 73 -49 101 0 29 22 74 49 101 27 27 73 49 101 49 29 0 74 -22 101 -49z"/> <path d="M2518 454 c-91 -61 -122 -125 -111 -233 23 -231 336 -294 455 -92 l42 71 448 0 448 0 0 50 0 50 -448 0 -448 0 -42 71 c-74 125 -227 162 -344 83z m233 -103 c90 -90 25 -251 -101 -251 -67 0 -150 83 -150 150 0 67 83 150 150 150 29 0 74 -22 101 -49z"/> </g> </svg>
         
         <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
           id="sw1_open"  x="20%" y="65%" width="800" height="800">
           <defs>
               <clipPath  id="1">
               <path id=""  clip-rule="evenodd"  width="20" height="20" transform="matrix(1 0 0 1 0 0)"  d="M600 600L0 600L0 600L0 0L0 0L600 0L600 0L600 600z" />    </clipPath>
           </defs>
           <g transform="matrix(0.05 0 0 0.05 0 0)" >
             <g clip-path="url(#1)" >
               <path id=""  transform="matrix(1 0 0 -1 0 600)"  d="M374.996 450.66846C 384.4329 450.66846 392.1101 442.98926 392.1101 433.55435L392.1101 433.55435L392.1101 433.55435C 392.1101 424.11746 384.4329 416.44028 374.996 416.44028L374.996 416.44028L374.996 416.44028C 365.56113 416.44028 357.8819 424.11746 357.8819 433.55435L357.8819 433.55435L357.8819 433.55435C 357.8819 442.98926 365.5591 450.66846 374.996 450.66846zM358.8886 600L358.8886 600L358.8886 600L358.8886 600L358.8886 600L358.8886 480.1671L358.8886 480.1671L358.8886 480.1671C 339.57587 473.47653 325.66714 455.11612 325.66714 433.55435L325.66714 433.55435L325.66714 433.55435C 325.66714 406.353 347.79465 384.2255 374.996 384.2255L374.996 384.2255L374.996 384.2255C 402.19736 384.2255 424.32486 406.353 424.32486 433.55435L424.32486 433.55435L424.32486 433.55435C 424.32486 455.11612 410.41614 473.47653 391.1034 480.1671L391.1034 480.1671L391.1034 480.1671L391.1034 480.1671L391.1034 600L391.1034 600L391.1034 600L391.1034 600L358.8886 600z" stroke="#FFFFFF" stroke-width="2.6845639" display="${
                 stateObj73.state == "off" && usetimer !== "no" ? "" : "none"
               }" fill="${battery_colour}" fill-rule="nonzero" />
               <path id=""  transform="matrix(1 0 0 -1 0 600)"  d="M374.9959 150.67249C 365.56104 150.67249 357.88184 158.34966 357.88184 167.78658L357.88184 167.78658L357.88184 167.78658C 357.88184 177.2235 365.56104 184.90067 374.9959 184.90067L374.9959 184.90067L374.9959 184.90067C 384.43283 184.90067 392.11002 177.2235 392.11002 167.78658L392.11002 167.78658L392.11002 167.78658C 392.11002 158.34966 384.43082 150.67249 374.9959 150.67249zM175.67516 344.3235L175.67516 344.3235L175.67516 344.3235L330.64227 189.35638L330.64227 189.35638L330.64227 189.35638C 327.45706 182.83693 325.6651 175.51813 325.6651 167.78658L325.6651 167.78658L325.6651 167.78658C 325.6651 146.22482 339.57385 127.864426 358.88657 121.17382L358.88657 121.17382L358.88657 121.17382L358.88657 121.17382L358.88657 -1.02407985E-05L358.88657 -1.02407985E-05L358.88657 -1.02407985E-05L358.88657 -1.02407985E-05L391.10135 -1.02407985E-05L391.10135 -1.02407985E-05L391.10135 -1.02407985E-05L391.10135 -1.02407985E-05L391.10135 121.17382L391.10135 121.17382L391.10135 121.17382C 410.4141 127.86442 424.3228 146.22482 424.3228 167.78658L424.3228 167.78658L424.3228 167.78658C 424.3228 194.98792 402.1953 217.11543 374.99396 217.11543L374.99396 217.11543L374.99396 217.11543C 367.26038 217.11543 359.94162 215.32147 353.4201 212.13826L353.4201 212.13826L198.455 367.10336L198.455 367.10336L175.67513 344.3235z" stroke="#FFFFFF" stroke-width="2.6845639" display="${
                 stateObj73.state == "off" && usetimer !== "no" ? "" : "none"
               }" fill="${battery_colour}" fill-rule="nonzero" />
             </g>
           </g>
           </svg>


           <svg id="sw1_close"  x="20.8%" y="65%" width="800" height="800" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
           <defs><clipPath  id="1"><path id=""  clip-rule="evenodd" transform="matrix(1 0 0 1 0 0)"  d="M600 600L0 600L0 600L0 0L0 0L600 0L600 0L600 600z" /></clipPath></defs>
           <g transform="matrix(0.05 0 0 0.05 0 0)" ><g clip-path="url(#1)" >
            <path id=""  transform="matrix(1 0 0 -1 0 600)"  d="M300 184.90065C 309.43494 184.90065 317.1141 177.22147 317.1141 167.78656L317.1141 167.78656L317.1141 167.78656C 317.1141 158.34964 309.43494 150.67245 300 150.67245L300 150.67245L300 150.67245C 290.5651 150.67245 282.88593 158.34964 282.88593 167.78656L282.88593 167.78656L282.88593 167.78656C 282.88593 177.22147 290.5651 184.90065 300 184.90065zM300 450.66846C 309.43494 450.66846 317.1141 442.98926 317.1141 433.55435L317.1141 433.55435L317.1141 433.55435C 317.1141 424.11746 309.43494 416.44028 300 416.44028L300 416.44028L300 416.44028C 290.5651 416.44028 282.88593 424.11746 282.88593 433.55435L282.88593 433.55435L282.88593 433.55435C 282.88593 442.98926 290.5651 450.66846 300 450.66846zM283.89264 600L283.89264 600L283.89264 600L283.89264 600L283.89264 600L283.89264 480.1671L283.89264 480.1671L283.89264 480.1671C 264.57986 473.47653 250.67116 455.11612 250.67116 433.55435L250.67116 433.55435L250.67116 433.55435C 250.67116 411.9926 264.57986 393.6322 283.89264 386.94162L283.89264 386.94162L283.89264 386.94162L283.89264 386.94162L283.89264 214.40134L283.89264 214.40134L283.89264 214.40134C 264.57986 207.71074 250.67116 189.35034 250.67116 167.78857L250.67116 167.78857L250.67116 167.78857C 250.67116 146.22682 264.57986 127.86643 283.89264 121.17583L283.89264 121.17583L283.89264 121.17583L283.89264 121.17583L283.89264 -2.0481597E-05L283.89264 -2.0481597E-05L283.89264 -2.0481597E-05L283.89264 -2.0481597E-05L316.1074 -2.0481597E-05L316.1074 -2.0481597E-05L316.1074 -2.0481597E-05L316.1074 -2.0481597E-05L316.1074 121.173805L316.1074 121.173805L316.1074 121.173805C 335.42014 127.86441 349.3289 146.22482 349.3289 167.78656L349.3289 167.78656L349.3289 167.78656C 349.3289 189.34828 335.42014 207.70871 316.1074 214.3993L316.1074 214.3993L316.1074 214.3993L316.1074 214.3993L316.1074 386.93954L316.1074 386.93954L316.1074 386.93954C 335.42014 393.63016 349.3289 411.99057 349.3289 433.5523L349.3289 433.5523L349.3289 433.5523C 349.3289 455.11407 335.42014 473.47446 316.1074 480.16507L316.1074 480.16507L316.1074 480.16507L316.1074 480.16507L316.1074 600L316.1074 600L316.1074 600L316.1074 600L283.89264 600z" 
            stroke="#FFFFFF" stroke-width="2.6845639" fill="${battery_colour}"  display="${
        stateObj73.state == "on" && usetimer !== "no" ? "" : "none"
      }" fill-rule="nonzero" />	</g></g></svg>
            -->


            <svg id="sw1disch_open"  x="20%" y="65%" width="800" height="800" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs>
            <clipPath  id="1"><path id=""  clip-rule="evenodd"  width="20" height="20" transform="matrix(1 0 0 1 0 0)"  d="M600 600L0 600L0 600L0 0L0 0L600 0L600 0L600 600z" /></clipPath></defs><g transform="matrix(0.05 0 0 0.05 0 0)" ><g clip-path="url(#1)" >
            <path id=""  transform="matrix(1 0 0 -1 0 600)"  d="M374.996 450.66846C 384.4329 450.66846 392.1101 442.98926 392.1101 433.55435L392.1101 433.55435L392.1101 433.55435C 392.1101 424.11746 384.4329 416.44028 374.996 416.44028L374.996 416.44028L374.996 416.44028C 365.56113 416.44028 357.8819 424.11746 357.8819 433.55435L357.8819 433.55435L357.8819 433.55435C 357.8819 442.98926 365.5591 450.66846 374.996 450.66846zM358.8886 600L358.8886 600L358.8886 600L358.8886 600L358.8886 600L358.8886 480.1671L358.8886 480.1671L358.8886 480.1671C 339.57587 473.47653 325.66714 455.11612 325.66714 433.55435L325.66714 433.55435L325.66714 433.55435C 325.66714 406.353 347.79465 384.2255 374.996 384.2255L374.996 384.2255L374.996 384.2255C 402.19736 384.2255 424.32486 406.353 424.32486 433.55435L424.32486 433.55435L424.32486 433.55435C 424.32486 455.11612 410.41614 473.47653 391.1034 480.1671L391.1034 480.1671L391.1034 480.1671L391.1034 480.1671L391.1034 600L391.1034 600L391.1034 600L391.1034 600L358.8886 600z" stroke="#FFFFFF" stroke-width="2.6845639" display="${
              stateObj74.state == "off" && usetimer !== "no" ? "" : "none"
            }" fill="${battery_colour}" fill-rule="nonzero" />
            <path id=""  transform="matrix(1 0 0 -1 0 600)"  d="M374.9959 150.67249C 365.56104 150.67249 357.88184 158.34966 357.88184 167.78658L357.88184 167.78658L357.88184 167.78658C 357.88184 177.2235 365.56104 184.90067 374.9959 184.90067L374.9959 184.90067L374.9959 184.90067C 384.43283 184.90067 392.11002 177.2235 392.11002 167.78658L392.11002 167.78658L392.11002 167.78658C 392.11002 158.34966 384.43082 150.67249 374.9959 150.67249zM175.67516 344.3235L175.67516 344.3235L175.67516 344.3235L330.64227 189.35638L330.64227 189.35638L330.64227 189.35638C 327.45706 182.83693 325.6651 175.51813 325.6651 167.78658L325.6651 167.78658L325.6651 167.78658C 325.6651 146.22482 339.57385 127.864426 358.88657 121.17382L358.88657 121.17382L358.88657 121.17382L358.88657 121.17382L358.88657 -1.02407985E-05L358.88657 -1.02407985E-05L358.88657 -1.02407985E-05L358.88657 -1.02407985E-05L391.10135 -1.02407985E-05L391.10135 -1.02407985E-05L391.10135 -1.02407985E-05L391.10135 -1.02407985E-05L391.10135 121.17382L391.10135 121.17382L391.10135 121.17382C 410.4141 127.86442 424.3228 146.22482 424.3228 167.78658L424.3228 167.78658L424.3228 167.78658C 424.3228 194.98792 402.1953 217.11543 374.99396 217.11543L374.99396 217.11543L374.99396 217.11543C 367.26038 217.11543 359.94162 215.32147 353.4201 212.13826L353.4201 212.13826L198.455 367.10336L198.455 367.10336L175.67513 344.3235z" stroke="#FFFFFF" stroke-width="2.6845639" 
            display="${
              stateObj73.state == "off" && usetimer !== "no" ? "" : "none"
            }" fill="${battery_colour}" fill-rule="nonzero" /></g></g></svg>
    
            <svg id="sw1dish_close"  x="20.8%" y="65%" width="800" height="800" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs>
            <clipPath  id="1"><path id=""  clip-rule="evenodd" transform="matrix(1 0 0 1 0 0)"  d="M600 600L0 600L0 600L0 0L0 0L600 0L600 0L600 600z" /></clipPath></defs><g transform="matrix(0.05 0 0 0.05 0 0)" ><g clip-path="url(#1)" >
            <path id=""  transform="matrix(1 0 0 -1 0 600)"  d="M300 184.90065C 309.43494 184.90065 317.1141 177.22147 317.1141 167.78656L317.1141 167.78656L317.1141 167.78656C 317.1141 158.34964 309.43494 150.67245 300 150.67245L300 150.67245L300 150.67245C 290.5651 150.67245 282.88593 158.34964 282.88593 167.78656L282.88593 167.78656L282.88593 167.78656C 282.88593 177.22147 290.5651 184.90065 300 184.90065zM300 450.66846C 309.43494 450.66846 317.1141 442.98926 317.1141 433.55435L317.1141 433.55435L317.1141 433.55435C 317.1141 424.11746 309.43494 416.44028 300 416.44028L300 416.44028L300 416.44028C 290.5651 416.44028 282.88593 424.11746 282.88593 433.55435L282.88593 433.55435L282.88593 433.55435C 282.88593 442.98926 290.5651 450.66846 300 450.66846zM283.89264 600L283.89264 600L283.89264 600L283.89264 600L283.89264 600L283.89264 480.1671L283.89264 480.1671L283.89264 480.1671C 264.57986 473.47653 250.67116 455.11612 250.67116 433.55435L250.67116 433.55435L250.67116 433.55435C 250.67116 411.9926 264.57986 393.6322 283.89264 386.94162L283.89264 386.94162L283.89264 386.94162L283.89264 386.94162L283.89264 214.40134L283.89264 214.40134L283.89264 214.40134C 264.57986 207.71074 250.67116 189.35034 250.67116 167.78857L250.67116 167.78857L250.67116 167.78857C 250.67116 146.22682 264.57986 127.86643 283.89264 121.17583L283.89264 121.17583L283.89264 121.17583L283.89264 121.17583L283.89264 -2.0481597E-05L283.89264 -2.0481597E-05L283.89264 -2.0481597E-05L283.89264 -2.0481597E-05L316.1074 -2.0481597E-05L316.1074 -2.0481597E-05L316.1074 -2.0481597E-05L316.1074 -2.0481597E-05L316.1074 121.173805L316.1074 121.173805L316.1074 121.173805C 335.42014 127.86441 349.3289 146.22482 349.3289 167.78656L349.3289 167.78656L349.3289 167.78656C 349.3289 189.34828 335.42014 207.70871 316.1074 214.3993L316.1074 214.3993L316.1074 214.3993L316.1074 214.3993L316.1074 386.93954L316.1074 386.93954L316.1074 386.93954C 335.42014 393.63016 349.3289 411.99057 349.3289 433.5523L349.3289 433.5523L349.3289 433.5523C 349.3289 455.11407 335.42014 473.47446 316.1074 480.16507L316.1074 480.16507L316.1074 480.16507L316.1074 480.16507L316.1074 600L316.1074 600L316.1074 600L316.1074 600L283.89264 600z" stroke="#FFFFFF" stroke-width="2.6845639" fill="${battery_colour}"  
            display="${
              stateObj73.state == "on" && usetimer !== "no" ? "" : "none"
            }" fill-rule="nonzero" />	</g></g></svg>
    
            <svg id="sw1charg_open"  x="21.6%" y="65%" width="800" height="800" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs>
            <clipPath  id="1"><path id=""  clip-rule="evenodd"  width="20" height="20" transform="matrix(1 0 0 1 0 0)"  d="M600 600L0 600L0 600L0 0L0 0L600 0L600 0L600 600z" /></clipPath></defs><g transform="matrix(0.05 0 0 0.05 0 0)" ><g clip-path="url(#1)" ><path id=""  transform="matrix(1 0 0 -1 0 600)"  d="M225.004 149.33154C 215.56711 149.33154 207.8899 157.01074 207.8899 166.44565L207.8899 166.44565L207.8899 166.44565C 207.8899 175.88254 215.56711 183.55972 225.004 183.55972L225.004 183.55972L225.004 183.55972C 234.43887 183.55972 242.1181 175.88254 242.1181 166.44565L242.1181 166.44565L242.1181 166.44565C 242.1181 157.01074 234.44089 149.33154 225.004 149.33154zM241.11139 0L241.11139 0L241.11139 0L241.11139 0L241.11139 0L241.11139 119.832886L241.11139 119.832886L241.11139 119.832886C 260.42413 126.52347 274.33286 144.88388 274.33286 166.44565L274.33286 166.44565L274.33286 166.44565C 274.33286 193.647 252.20535 215.7745 225.004 215.7745L225.004 215.7745L225.004 215.7745C 197.80264 215.7745 175.67514 193.647 175.67514 166.44565L175.67514 166.44565L175.67514 166.44565C 175.67514 144.88388 189.58386 126.52347 208.8966 119.832886L208.8966 119.832886L208.8966 119.832886L208.8966 119.832886L208.8966 0L208.8966 0L208.8966 0L208.8966 0L241.11139 0z" stroke="#FFFFFF" stroke-width="2.6845639" 
            display="${
              stateObj74.state == "off" && usetimer !== "no" ? "" : "none"
            }" fill="${battery_colour}" fill-rule="nonzero" />
            <path id=""  transform="matrix(1 0 0 -1 0 600)"  d="M225.00409 449.3275C 234.43896 449.3275 242.11816 441.65033 242.11816 432.21344L242.11816 432.21344L242.11816 432.21344C 242.11816 422.7765 234.43896 415.09933 225.00409 415.09933L225.00409 415.09933L225.00409 415.09933C 215.56717 415.09933 207.88998 422.7765 207.88998 432.21344L207.88998 432.21344L207.88998 432.21344C 207.88998 441.65033 215.56918 449.3275 225.00409 449.3275zM424.32483 255.67651L424.32483 255.67651L424.32483 255.67651L269.35773 410.64362L269.35773 410.64362L269.35773 410.64362C 272.54294 417.1631 274.3349 424.48187 274.3349 432.21344L274.3349 432.21344L274.3349 432.21344C 274.3349 453.77518 260.42615 472.13556 241.11343 478.82617L241.11343 478.82617L241.11343 478.82617L241.11343 478.82617L241.11343 600L241.11343 600L241.11343 600L241.11343 600L208.89865 600L208.89865 600L208.89865 600L208.89865 600L208.89865 478.82617L208.89865 478.82617L208.89865 478.82617C 189.5859 472.1356 175.67719 453.77518 175.67719 432.21344L175.67719 432.21344L175.67719 432.21344C 175.67719 405.0121 197.80469 382.88458 225.00604 382.88458L225.00604 382.88458L225.00604 382.88458C 232.73962 382.88458 240.05838 384.67853 246.5799 387.86176L246.5799 387.86176L401.54498 232.89664L401.54498 232.89664L424.3249 255.67651z" stroke="#FFFFFF" stroke-width="2.6845639" 
            display="${
              stateObj74.state == "off" && usetimer !== "no" ? "" : "none"
            }" fill="${battery_colour}" fill-rule="nonzero" /></g></g></svg>
    
            <svg id="sw1charg_close"  x="20.8%" y="65%" width="800" height="800" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><clipPath  id="1"><path id=""  
            clip-rule="evenodd" transform="matrix(1 0 0 1 0 0)"  d="M600 600L0 600L0 600L0 0L0 0L600 0L600 0L600 600z" /></clipPath></defs><g transform="matrix(0.05 0 0 0.05 0 0)" ><g clip-path="url(#1)" ><path id=""  transform="matrix(1 0 0 -1 0 600)"  d="M300 184.90065C 309.43494 184.90065 317.1141 177.22147 317.1141 167.78656L317.1141 167.78656L317.1141 167.78656C 317.1141 158.34964 309.43494 150.67245 300 150.67245L300 150.67245L300 150.67245C 290.5651 150.67245 282.88593 158.34964 282.88593 167.78656L282.88593 167.78656L282.88593 167.78656C 282.88593 177.22147 290.5651 184.90065 300 184.90065zM300 450.66846C 309.43494 450.66846 317.1141 442.98926 317.1141 433.55435L317.1141 433.55435L317.1141 433.55435C 317.1141 424.11746 309.43494 416.44028 300 416.44028L300 416.44028L300 416.44028C 290.5651 416.44028 282.88593 424.11746 282.88593 433.55435L282.88593 433.55435L282.88593 433.55435C 282.88593 442.98926 290.5651 450.66846 300 450.66846zM283.89264 600L283.89264 600L283.89264 600L283.89264 600L283.89264 600L283.89264 480.1671L283.89264 480.1671L283.89264 480.1671C 264.57986 473.47653 250.67116 455.11612 250.67116 433.55435L250.67116 433.55435L250.67116 433.55435C 250.67116 411.9926 264.57986 393.6322 283.89264 386.94162L283.89264 386.94162L283.89264 386.94162L283.89264 386.94162L283.89264 214.40134L283.89264 214.40134L283.89264 214.40134C 264.57986 207.71074 250.67116 189.35034 250.67116 167.78857L250.67116 167.78857L250.67116 167.78857C 250.67116 146.22682 264.57986 127.86643 283.89264 121.17583L283.89264 121.17583L283.89264 121.17583L283.89264 121.17583L283.89264 -2.0481597E-05L283.89264 -2.0481597E-05L283.89264 -2.0481597E-05L283.89264 -2.0481597E-05L316.1074 -2.0481597E-05L316.1074 -2.0481597E-05L316.1074 -2.0481597E-05L316.1074 -2.0481597E-05L316.1074 121.173805L316.1074 121.173805L316.1074 121.173805C 335.42014 127.86441 349.3289 146.22482 349.3289 167.78656L349.3289 167.78656L349.3289 167.78656C 349.3289 189.34828 335.42014 207.70871 316.1074 214.3993L316.1074 214.3993L316.1074 214.3993L316.1074 214.3993L316.1074 386.93954L316.1074 386.93954L316.1074 386.93954C 335.42014 393.63016 349.3289 411.99057 349.3289 433.5523L349.3289 433.5523L349.3289 433.5523C 349.3289 455.11407 335.42014 473.47446 316.1074 480.16507L316.1074 480.16507L316.1074 480.16507L316.1074 480.16507L316.1074 600L316.1074 600L316.1074 600L316.1074 600L283.89264 600z" stroke="#FFFFFF" stroke-width="2.6845639" fill="${battery_colour}"  
            display="${
              stateObj74.state == "on" && usetimer !== "no" ? "" : "none"
            }" fill-rule="nonzero" />	</g></g></svg>

            <svg id="sw2disch_open"  x="35.45%" y="65%" width="800" height="800" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs>
            <clipPath  id="1"><path id=""  clip-rule="evenodd"  width="20" height="20" transform="matrix(1 0 0 1 0 0)"  d="M600 600L0 600L0 600L0 0L0 0L600 0L600 0L600 600z" /></clipPath></defs><g transform="matrix(0.05 0 0 0.05 0 0)" ><g clip-path="url(#1)" >
            <path id=""  transform="matrix(1 0 0 -1 0 600)"  d="M374.996 450.66846C 384.4329 450.66846 392.1101 442.98926 392.1101 433.55435L392.1101 433.55435L392.1101 433.55435C 392.1101 424.11746 384.4329 416.44028 374.996 416.44028L374.996 416.44028L374.996 416.44028C 365.56113 416.44028 357.8819 424.11746 357.8819 433.55435L357.8819 433.55435L357.8819 433.55435C 357.8819 442.98926 365.5591 450.66846 374.996 450.66846zM358.8886 600L358.8886 600L358.8886 600L358.8886 600L358.8886 600L358.8886 480.1671L358.8886 480.1671L358.8886 480.1671C 339.57587 473.47653 325.66714 455.11612 325.66714 433.55435L325.66714 433.55435L325.66714 433.55435C 325.66714 406.353 347.79465 384.2255 374.996 384.2255L374.996 384.2255L374.996 384.2255C 402.19736 384.2255 424.32486 406.353 424.32486 433.55435L424.32486 433.55435L424.32486 433.55435C 424.32486 455.11612 410.41614 473.47653 391.1034 480.1671L391.1034 480.1671L391.1034 480.1671L391.1034 480.1671L391.1034 600L391.1034 600L391.1034 600L391.1034 600L358.8886 600z" stroke="#FFFFFF" stroke-width="2.6845639" 
            display="${
              stateObj75.state == "off" && usetimer !== "no" ? "" : "none"
            }" fill="${battery_colour}" fill-rule="nonzero" />
            <path id=""  transform="matrix(1 0 0 -1 0 600)"  d="M374.9959 150.67249C 365.56104 150.67249 357.88184 158.34966 357.88184 167.78658L357.88184 167.78658L357.88184 167.78658C 357.88184 177.2235 365.56104 184.90067 374.9959 184.90067L374.9959 184.90067L374.9959 184.90067C 384.43283 184.90067 392.11002 177.2235 392.11002 167.78658L392.11002 167.78658L392.11002 167.78658C 392.11002 158.34966 384.43082 150.67249 374.9959 150.67249zM175.67516 344.3235L175.67516 344.3235L175.67516 344.3235L330.64227 189.35638L330.64227 189.35638L330.64227 189.35638C 327.45706 182.83693 325.6651 175.51813 325.6651 167.78658L325.6651 167.78658L325.6651 167.78658C 325.6651 146.22482 339.57385 127.864426 358.88657 121.17382L358.88657 121.17382L358.88657 121.17382L358.88657 121.17382L358.88657 -1.02407985E-05L358.88657 -1.02407985E-05L358.88657 -1.02407985E-05L358.88657 -1.02407985E-05L391.10135 -1.02407985E-05L391.10135 -1.02407985E-05L391.10135 -1.02407985E-05L391.10135 -1.02407985E-05L391.10135 121.17382L391.10135 121.17382L391.10135 121.17382C 410.4141 127.86442 424.3228 146.22482 424.3228 167.78658L424.3228 167.78658L424.3228 167.78658C 424.3228 194.98792 402.1953 217.11543 374.99396 217.11543L374.99396 217.11543L374.99396 217.11543C 367.26038 217.11543 359.94162 215.32147 353.4201 212.13826L353.4201 212.13826L198.455 367.10336L198.455 367.10336L175.67513 344.3235z" stroke="#FFFFFF" stroke-width="2.6845639" 
            display="${
              stateObj75.state == "off" && usetimer !== "no" ? "" : "none"
            }" fill="${battery_colour}" fill-rule="nonzero" /></g></g></svg>
    
            <svg id="sw2dish_close"  x="36.25%" y="65%" width="800" height="800" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><clipPath  id="1"><path id=""  clip-rule="evenodd" transform="matrix(1 0 0 1 0 0)"  d="M600 600L0 600L0 600L0 0L0 0L600 0L600 0L600 600z" /></clipPath></defs><g transform="matrix(0.05 0 0 0.05 0 0)" ><g clip-path="url(#1)" >
            <path id=""  transform="matrix(1 0 0 -1 0 600)"  d="M300 184.90065C 309.43494 184.90065 317.1141 177.22147 317.1141 167.78656L317.1141 167.78656L317.1141 167.78656C 317.1141 158.34964 309.43494 150.67245 300 150.67245L300 150.67245L300 150.67245C 290.5651 150.67245 282.88593 158.34964 282.88593 167.78656L282.88593 167.78656L282.88593 167.78656C 282.88593 177.22147 290.5651 184.90065 300 184.90065zM300 450.66846C 309.43494 450.66846 317.1141 442.98926 317.1141 433.55435L317.1141 433.55435L317.1141 433.55435C 317.1141 424.11746 309.43494 416.44028 300 416.44028L300 416.44028L300 416.44028C 290.5651 416.44028 282.88593 424.11746 282.88593 433.55435L282.88593 433.55435L282.88593 433.55435C 282.88593 442.98926 290.5651 450.66846 300 450.66846zM283.89264 600L283.89264 600L283.89264 600L283.89264 600L283.89264 600L283.89264 480.1671L283.89264 480.1671L283.89264 480.1671C 264.57986 473.47653 250.67116 455.11612 250.67116 433.55435L250.67116 433.55435L250.67116 433.55435C 250.67116 411.9926 264.57986 393.6322 283.89264 386.94162L283.89264 386.94162L283.89264 386.94162L283.89264 386.94162L283.89264 214.40134L283.89264 214.40134L283.89264 214.40134C 264.57986 207.71074 250.67116 189.35034 250.67116 167.78857L250.67116 167.78857L250.67116 167.78857C 250.67116 146.22682 264.57986 127.86643 283.89264 121.17583L283.89264 121.17583L283.89264 121.17583L283.89264 121.17583L283.89264 -2.0481597E-05L283.89264 -2.0481597E-05L283.89264 -2.0481597E-05L283.89264 -2.0481597E-05L316.1074 -2.0481597E-05L316.1074 -2.0481597E-05L316.1074 -2.0481597E-05L316.1074 -2.0481597E-05L316.1074 121.173805L316.1074 121.173805L316.1074 121.173805C 335.42014 127.86441 349.3289 146.22482 349.3289 167.78656L349.3289 167.78656L349.3289 167.78656C 349.3289 189.34828 335.42014 207.70871 316.1074 214.3993L316.1074 214.3993L316.1074 214.3993L316.1074 214.3993L316.1074 386.93954L316.1074 386.93954L316.1074 386.93954C 335.42014 393.63016 349.3289 411.99057 349.3289 433.5523L349.3289 433.5523L349.3289 433.5523C 349.3289 455.11407 335.42014 473.47446 316.1074 480.16507L316.1074 480.16507L316.1074 480.16507L316.1074 480.16507L316.1074 600L316.1074 600L316.1074 600L316.1074 600L283.89264 600z" stroke="#FFFFFF" stroke-width="2.6845639" fill="${battery_colour}"  
            display="${
              stateObj75.state == "on" && usetimer !== "no" ? "" : "none"
            }" fill-rule="nonzero" />	</g></g></svg>
    
            <svg id="sw2charg_open"  x="37%" y="65%" width="800" height="800" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs>
            <clipPath  id="1"><path id=""  clip-rule="evenodd"  width="20" height="20" transform="matrix(1 0 0 1 0 0)"  d="M600 600L0 600L0 600L0 0L0 0L600 0L600 0L600 600z" /></clipPath></defs><g transform="matrix(0.05 0 0 0.05 0 0)" ><g clip-path="url(#1)" ><path id=""  transform="matrix(1 0 0 -1 0 600)"  d="M225.004 149.33154C 215.56711 149.33154 207.8899 157.01074 207.8899 166.44565L207.8899 166.44565L207.8899 166.44565C 207.8899 175.88254 215.56711 183.55972 225.004 183.55972L225.004 183.55972L225.004 183.55972C 234.43887 183.55972 242.1181 175.88254 242.1181 166.44565L242.1181 166.44565L242.1181 166.44565C 242.1181 157.01074 234.44089 149.33154 225.004 149.33154zM241.11139 0L241.11139 0L241.11139 0L241.11139 0L241.11139 0L241.11139 119.832886L241.11139 119.832886L241.11139 119.832886C 260.42413 126.52347 274.33286 144.88388 274.33286 166.44565L274.33286 166.44565L274.33286 166.44565C 274.33286 193.647 252.20535 215.7745 225.004 215.7745L225.004 215.7745L225.004 215.7745C 197.80264 215.7745 175.67514 193.647 175.67514 166.44565L175.67514 166.44565L175.67514 166.44565C 175.67514 144.88388 189.58386 126.52347 208.8966 119.832886L208.8966 119.832886L208.8966 119.832886L208.8966 119.832886L208.8966 0L208.8966 0L208.8966 0L208.8966 0L241.11139 0z" stroke="#FFFFFF" stroke-width="2.6845639" 
            display="${
              stateObj76.state == "off" && usetimer !== "no" ? "" : "none"
            }" fill="${battery_colour}" fill-rule="nonzero" />
            <path id=""  transform="matrix(1 0 0 -1 0 600)"  d="M225.00409 449.3275C 234.43896 449.3275 242.11816 441.65033 242.11816 432.21344L242.11816 432.21344L242.11816 432.21344C 242.11816 422.7765 234.43896 415.09933 225.00409 415.09933L225.00409 415.09933L225.00409 415.09933C 215.56717 415.09933 207.88998 422.7765 207.88998 432.21344L207.88998 432.21344L207.88998 432.21344C 207.88998 441.65033 215.56918 449.3275 225.00409 449.3275zM424.32483 255.67651L424.32483 255.67651L424.32483 255.67651L269.35773 410.64362L269.35773 410.64362L269.35773 410.64362C 272.54294 417.1631 274.3349 424.48187 274.3349 432.21344L274.3349 432.21344L274.3349 432.21344C 274.3349 453.77518 260.42615 472.13556 241.11343 478.82617L241.11343 478.82617L241.11343 478.82617L241.11343 478.82617L241.11343 600L241.11343 600L241.11343 600L241.11343 600L208.89865 600L208.89865 600L208.89865 600L208.89865 600L208.89865 478.82617L208.89865 478.82617L208.89865 478.82617C 189.5859 472.1356 175.67719 453.77518 175.67719 432.21344L175.67719 432.21344L175.67719 432.21344C 175.67719 405.0121 197.80469 382.88458 225.00604 382.88458L225.00604 382.88458L225.00604 382.88458C 232.73962 382.88458 240.05838 384.67853 246.5799 387.86176L246.5799 387.86176L401.54498 232.89664L401.54498 232.89664L424.3249 255.67651z" stroke="#FFFFFF" stroke-width="2.6845639" 
            display="${
              stateObj76.state == "off" && usetimer !== "no" ? "" : "none"
            }" fill="${battery_colour}" fill-rule="nonzero" /></g></g></svg>
    
            <svg id="sw2charg_close"  x="36.25%" y="65%" width="800" height="800" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><clipPath  id="1"><path id=""  
            clip-rule="evenodd" transform="matrix(1 0 0 1 0 0)"  d="M600 600L0 600L0 600L0 0L0 0L600 0L600 0L600 600z" /></clipPath></defs><g transform="matrix(0.05 0 0 0.05 0 0)" ><g clip-path="url(#1)" ><path id=""  transform="matrix(1 0 0 -1 0 600)"  d="M300 184.90065C 309.43494 184.90065 317.1141 177.22147 317.1141 167.78656L317.1141 167.78656L317.1141 167.78656C 317.1141 158.34964 309.43494 150.67245 300 150.67245L300 150.67245L300 150.67245C 290.5651 150.67245 282.88593 158.34964 282.88593 167.78656L282.88593 167.78656L282.88593 167.78656C 282.88593 177.22147 290.5651 184.90065 300 184.90065zM300 450.66846C 309.43494 450.66846 317.1141 442.98926 317.1141 433.55435L317.1141 433.55435L317.1141 433.55435C 317.1141 424.11746 309.43494 416.44028 300 416.44028L300 416.44028L300 416.44028C 290.5651 416.44028 282.88593 424.11746 282.88593 433.55435L282.88593 433.55435L282.88593 433.55435C 282.88593 442.98926 290.5651 450.66846 300 450.66846zM283.89264 600L283.89264 600L283.89264 600L283.89264 600L283.89264 600L283.89264 480.1671L283.89264 480.1671L283.89264 480.1671C 264.57986 473.47653 250.67116 455.11612 250.67116 433.55435L250.67116 433.55435L250.67116 433.55435C 250.67116 411.9926 264.57986 393.6322 283.89264 386.94162L283.89264 386.94162L283.89264 386.94162L283.89264 386.94162L283.89264 214.40134L283.89264 214.40134L283.89264 214.40134C 264.57986 207.71074 250.67116 189.35034 250.67116 167.78857L250.67116 167.78857L250.67116 167.78857C 250.67116 146.22682 264.57986 127.86643 283.89264 121.17583L283.89264 121.17583L283.89264 121.17583L283.89264 121.17583L283.89264 -2.0481597E-05L283.89264 -2.0481597E-05L283.89264 -2.0481597E-05L283.89264 -2.0481597E-05L316.1074 -2.0481597E-05L316.1074 -2.0481597E-05L316.1074 -2.0481597E-05L316.1074 -2.0481597E-05L316.1074 121.173805L316.1074 121.173805L316.1074 121.173805C 335.42014 127.86441 349.3289 146.22482 349.3289 167.78656L349.3289 167.78656L349.3289 167.78656C 349.3289 189.34828 335.42014 207.70871 316.1074 214.3993L316.1074 214.3993L316.1074 214.3993L316.1074 214.3993L316.1074 386.93954L316.1074 386.93954L316.1074 386.93954C 335.42014 393.63016 349.3289 411.99057 349.3289 433.5523L349.3289 433.5523L349.3289 433.5523C 349.3289 455.11407 335.42014 473.47446 316.1074 480.16507L316.1074 480.16507L316.1074 480.16507L316.1074 480.16507L316.1074 600L316.1074 600L316.1074 600L316.1074 600L283.89264 600z" stroke="#FFFFFF" stroke-width="2.6845639" fill="${battery_colour}"  
            display="${
              stateObj76.state == "on" && usetimer !== "no" ? "" : "none"
            }" fill-rule="nonzero" />	</g></g></svg>

            <svg id="sw3disch_open"  x="50.3%" y="65%" width="800" height="800" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs>
            <clipPath  id="1"><path id=""  clip-rule="evenodd"  width="20" height="20" transform="matrix(1 0 0 1 0 0)"  d="M600 600L0 600L0 600L0 0L0 0L600 0L600 0L600 600z" /></clipPath></defs><g transform="matrix(0.05 0 0 0.05 0 0)" ><g clip-path="url(#1)" >
            <path id=""  transform="matrix(1 0 0 -1 0 600)"  d="M374.996 450.66846C 384.4329 450.66846 392.1101 442.98926 392.1101 433.55435L392.1101 433.55435L392.1101 433.55435C 392.1101 424.11746 384.4329 416.44028 374.996 416.44028L374.996 416.44028L374.996 416.44028C 365.56113 416.44028 357.8819 424.11746 357.8819 433.55435L357.8819 433.55435L357.8819 433.55435C 357.8819 442.98926 365.5591 450.66846 374.996 450.66846zM358.8886 600L358.8886 600L358.8886 600L358.8886 600L358.8886 600L358.8886 480.1671L358.8886 480.1671L358.8886 480.1671C 339.57587 473.47653 325.66714 455.11612 325.66714 433.55435L325.66714 433.55435L325.66714 433.55435C 325.66714 406.353 347.79465 384.2255 374.996 384.2255L374.996 384.2255L374.996 384.2255C 402.19736 384.2255 424.32486 406.353 424.32486 433.55435L424.32486 433.55435L424.32486 433.55435C 424.32486 455.11612 410.41614 473.47653 391.1034 480.1671L391.1034 480.1671L391.1034 480.1671L391.1034 480.1671L391.1034 600L391.1034 600L391.1034 600L391.1034 600L358.8886 600z" stroke="#FFFFFF" stroke-width="2.6845639" 
            display="${
              stateObj77.state == "off" && usetimer !== "no" ? "" : "none"
            }" fill="${battery_colour}" fill-rule="nonzero" />
            <path id=""  transform="matrix(1 0 0 -1 0 600)"  d="M374.9959 150.67249C 365.56104 150.67249 357.88184 158.34966 357.88184 167.78658L357.88184 167.78658L357.88184 167.78658C 357.88184 177.2235 365.56104 184.90067 374.9959 184.90067L374.9959 184.90067L374.9959 184.90067C 384.43283 184.90067 392.11002 177.2235 392.11002 167.78658L392.11002 167.78658L392.11002 167.78658C 392.11002 158.34966 384.43082 150.67249 374.9959 150.67249zM175.67516 344.3235L175.67516 344.3235L175.67516 344.3235L330.64227 189.35638L330.64227 189.35638L330.64227 189.35638C 327.45706 182.83693 325.6651 175.51813 325.6651 167.78658L325.6651 167.78658L325.6651 167.78658C 325.6651 146.22482 339.57385 127.864426 358.88657 121.17382L358.88657 121.17382L358.88657 121.17382L358.88657 121.17382L358.88657 -1.02407985E-05L358.88657 -1.02407985E-05L358.88657 -1.02407985E-05L358.88657 -1.02407985E-05L391.10135 -1.02407985E-05L391.10135 -1.02407985E-05L391.10135 -1.02407985E-05L391.10135 -1.02407985E-05L391.10135 121.17382L391.10135 121.17382L391.10135 121.17382C 410.4141 127.86442 424.3228 146.22482 424.3228 167.78658L424.3228 167.78658L424.3228 167.78658C 424.3228 194.98792 402.1953 217.11543 374.99396 217.11543L374.99396 217.11543L374.99396 217.11543C 367.26038 217.11543 359.94162 215.32147 353.4201 212.13826L353.4201 212.13826L198.455 367.10336L198.455 367.10336L175.67513 344.3235z" stroke="#FFFFFF" stroke-width="2.6845639" 
            display="${
              stateObj77.state == "off" && usetimer !== "no" ? "" : "none"
            }" fill="${battery_colour}" fill-rule="nonzero" /></g></g></svg>

            <svg id="sw3dish_close"  x="51.1%" y="65%" width="800" height="800" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><clipPath  id="1"><path id=""  clip-rule="evenodd" transform="matrix(1 0 0 1 0 0)"  d="M600 600L0 600L0 600L0 0L0 0L600 0L600 0L600 600z" /></clipPath></defs><g transform="matrix(0.05 0 0 0.05 0 0)" ><g clip-path="url(#1)" >
            <path id=""  transform="matrix(1 0 0 -1 0 600)"  d="M300 184.90065C 309.43494 184.90065 317.1141 177.22147 317.1141 167.78656L317.1141 167.78656L317.1141 167.78656C 317.1141 158.34964 309.43494 150.67245 300 150.67245L300 150.67245L300 150.67245C 290.5651 150.67245 282.88593 158.34964 282.88593 167.78656L282.88593 167.78656L282.88593 167.78656C 282.88593 177.22147 290.5651 184.90065 300 184.90065zM300 450.66846C 309.43494 450.66846 317.1141 442.98926 317.1141 433.55435L317.1141 433.55435L317.1141 433.55435C 317.1141 424.11746 309.43494 416.44028 300 416.44028L300 416.44028L300 416.44028C 290.5651 416.44028 282.88593 424.11746 282.88593 433.55435L282.88593 433.55435L282.88593 433.55435C 282.88593 442.98926 290.5651 450.66846 300 450.66846zM283.89264 600L283.89264 600L283.89264 600L283.89264 600L283.89264 600L283.89264 480.1671L283.89264 480.1671L283.89264 480.1671C 264.57986 473.47653 250.67116 455.11612 250.67116 433.55435L250.67116 433.55435L250.67116 433.55435C 250.67116 411.9926 264.57986 393.6322 283.89264 386.94162L283.89264 386.94162L283.89264 386.94162L283.89264 386.94162L283.89264 214.40134L283.89264 214.40134L283.89264 214.40134C 264.57986 207.71074 250.67116 189.35034 250.67116 167.78857L250.67116 167.78857L250.67116 167.78857C 250.67116 146.22682 264.57986 127.86643 283.89264 121.17583L283.89264 121.17583L283.89264 121.17583L283.89264 121.17583L283.89264 -2.0481597E-05L283.89264 -2.0481597E-05L283.89264 -2.0481597E-05L283.89264 -2.0481597E-05L316.1074 -2.0481597E-05L316.1074 -2.0481597E-05L316.1074 -2.0481597E-05L316.1074 -2.0481597E-05L316.1074 121.173805L316.1074 121.173805L316.1074 121.173805C 335.42014 127.86441 349.3289 146.22482 349.3289 167.78656L349.3289 167.78656L349.3289 167.78656C 349.3289 189.34828 335.42014 207.70871 316.1074 214.3993L316.1074 214.3993L316.1074 214.3993L316.1074 214.3993L316.1074 386.93954L316.1074 386.93954L316.1074 386.93954C 335.42014 393.63016 349.3289 411.99057 349.3289 433.5523L349.3289 433.5523L349.3289 433.5523C 349.3289 455.11407 335.42014 473.47446 316.1074 480.16507L316.1074 480.16507L316.1074 480.16507L316.1074 480.16507L316.1074 600L316.1074 600L316.1074 600L316.1074 600L283.89264 600z" stroke="#FFFFFF" stroke-width="2.6845639" fill="${battery_colour}"  
            display="${
              stateObj77.state == "on" && usetimer !== "no" ? "" : "none"
            }" fill-rule="nonzero" />	</g></g></svg>

            <svg id="sw3charg_open"  x="51.85%" y="65%" width="800" height="800" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs>
            <clipPath  id="1"><path id=""  clip-rule="evenodd"  width="20" height="20" transform="matrix(1 0 0 1 0 0)"  d="M600 600L0 600L0 600L0 0L0 0L600 0L600 0L600 600z" /></clipPath></defs><g transform="matrix(0.05 0 0 0.05 0 0)" ><g clip-path="url(#1)" ><path id=""  transform="matrix(1 0 0 -1 0 600)"  d="M225.004 149.33154C 215.56711 149.33154 207.8899 157.01074 207.8899 166.44565L207.8899 166.44565L207.8899 166.44565C 207.8899 175.88254 215.56711 183.55972 225.004 183.55972L225.004 183.55972L225.004 183.55972C 234.43887 183.55972 242.1181 175.88254 242.1181 166.44565L242.1181 166.44565L242.1181 166.44565C 242.1181 157.01074 234.44089 149.33154 225.004 149.33154zM241.11139 0L241.11139 0L241.11139 0L241.11139 0L241.11139 0L241.11139 119.832886L241.11139 119.832886L241.11139 119.832886C 260.42413 126.52347 274.33286 144.88388 274.33286 166.44565L274.33286 166.44565L274.33286 166.44565C 274.33286 193.647 252.20535 215.7745 225.004 215.7745L225.004 215.7745L225.004 215.7745C 197.80264 215.7745 175.67514 193.647 175.67514 166.44565L175.67514 166.44565L175.67514 166.44565C 175.67514 144.88388 189.58386 126.52347 208.8966 119.832886L208.8966 119.832886L208.8966 119.832886L208.8966 119.832886L208.8966 0L208.8966 0L208.8966 0L208.8966 0L241.11139 0z" stroke="#FFFFFF" stroke-width="2.6845639" 
            display="${
              stateObj78.state == "off" && usetimer !== "no" ? "" : "none"
            }" fill="${battery_colour}" fill-rule="nonzero" />
            <path id=""  transform="matrix(1 0 0 -1 0 600)"  d="M225.00409 449.3275C 234.43896 449.3275 242.11816 441.65033 242.11816 432.21344L242.11816 432.21344L242.11816 432.21344C 242.11816 422.7765 234.43896 415.09933 225.00409 415.09933L225.00409 415.09933L225.00409 415.09933C 215.56717 415.09933 207.88998 422.7765 207.88998 432.21344L207.88998 432.21344L207.88998 432.21344C 207.88998 441.65033 215.56918 449.3275 225.00409 449.3275zM424.32483 255.67651L424.32483 255.67651L424.32483 255.67651L269.35773 410.64362L269.35773 410.64362L269.35773 410.64362C 272.54294 417.1631 274.3349 424.48187 274.3349 432.21344L274.3349 432.21344L274.3349 432.21344C 274.3349 453.77518 260.42615 472.13556 241.11343 478.82617L241.11343 478.82617L241.11343 478.82617L241.11343 478.82617L241.11343 600L241.11343 600L241.11343 600L241.11343 600L208.89865 600L208.89865 600L208.89865 600L208.89865 600L208.89865 478.82617L208.89865 478.82617L208.89865 478.82617C 189.5859 472.1356 175.67719 453.77518 175.67719 432.21344L175.67719 432.21344L175.67719 432.21344C 175.67719 405.0121 197.80469 382.88458 225.00604 382.88458L225.00604 382.88458L225.00604 382.88458C 232.73962 382.88458 240.05838 384.67853 246.5799 387.86176L246.5799 387.86176L401.54498 232.89664L401.54498 232.89664L424.3249 255.67651z" stroke="#FFFFFF" stroke-width="2.6845639" 
            display="${
              stateObj78.state == "off" && usetimer !== "no" ? "" : "none"
            }" fill="${battery_colour}" fill-rule="nonzero" /></g></g></svg>

            <svg id="sw3charg_close"  x="51.1%" y="65%" width="800" height="800" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><clipPath  id="1"><path id=""  
            clip-rule="evenodd" transform="matrix(1 0 0 1 0 0)"  d="M600 600L0 600L0 600L0 0L0 0L600 0L600 0L600 600z" /></clipPath></defs><g transform="matrix(0.05 0 0 0.05 0 0)" ><g clip-path="url(#1)" ><path id=""  transform="matrix(1 0 0 -1 0 600)"  d="M300 184.90065C 309.43494 184.90065 317.1141 177.22147 317.1141 167.78656L317.1141 167.78656L317.1141 167.78656C 317.1141 158.34964 309.43494 150.67245 300 150.67245L300 150.67245L300 150.67245C 290.5651 150.67245 282.88593 158.34964 282.88593 167.78656L282.88593 167.78656L282.88593 167.78656C 282.88593 177.22147 290.5651 184.90065 300 184.90065zM300 450.66846C 309.43494 450.66846 317.1141 442.98926 317.1141 433.55435L317.1141 433.55435L317.1141 433.55435C 317.1141 424.11746 309.43494 416.44028 300 416.44028L300 416.44028L300 416.44028C 290.5651 416.44028 282.88593 424.11746 282.88593 433.55435L282.88593 433.55435L282.88593 433.55435C 282.88593 442.98926 290.5651 450.66846 300 450.66846zM283.89264 600L283.89264 600L283.89264 600L283.89264 600L283.89264 600L283.89264 480.1671L283.89264 480.1671L283.89264 480.1671C 264.57986 473.47653 250.67116 455.11612 250.67116 433.55435L250.67116 433.55435L250.67116 433.55435C 250.67116 411.9926 264.57986 393.6322 283.89264 386.94162L283.89264 386.94162L283.89264 386.94162L283.89264 386.94162L283.89264 214.40134L283.89264 214.40134L283.89264 214.40134C 264.57986 207.71074 250.67116 189.35034 250.67116 167.78857L250.67116 167.78857L250.67116 167.78857C 250.67116 146.22682 264.57986 127.86643 283.89264 121.17583L283.89264 121.17583L283.89264 121.17583L283.89264 121.17583L283.89264 -2.0481597E-05L283.89264 -2.0481597E-05L283.89264 -2.0481597E-05L283.89264 -2.0481597E-05L316.1074 -2.0481597E-05L316.1074 -2.0481597E-05L316.1074 -2.0481597E-05L316.1074 -2.0481597E-05L316.1074 121.173805L316.1074 121.173805L316.1074 121.173805C 335.42014 127.86441 349.3289 146.22482 349.3289 167.78656L349.3289 167.78656L349.3289 167.78656C 349.3289 189.34828 335.42014 207.70871 316.1074 214.3993L316.1074 214.3993L316.1074 214.3993L316.1074 214.3993L316.1074 386.93954L316.1074 386.93954L316.1074 386.93954C 335.42014 393.63016 349.3289 411.99057 349.3289 433.5523L349.3289 433.5523L349.3289 433.5523C 349.3289 455.11407 335.42014 473.47446 316.1074 480.16507L316.1074 480.16507L316.1074 480.16507L316.1074 480.16507L316.1074 600L316.1074 600L316.1074 600L316.1074 600L283.89264 600z" stroke="#FFFFFF" stroke-width="2.6845639" fill="${battery_colour}"  
            display="${
              stateObj78.state == "on" && usetimer !== "no" ? "" : "none"
            }" fill-rule="nonzero" />	</g></g></svg>


        <!-- 
          <a href="#" @click=${(e) =>
            this.handlePopup(e, config.entities.priority_load_243)}>
              <svg xmlns="http://www.w3.org/2000/svg" id="pbat" x="20%" y="67%" width="18" height="18" viewBox="0 0 24 24"><path display="${
                stateObj25.state === "off" && priority !== "no" ? "" : "none"
              }" fill="${inverter_colour}" d="M15.95 21.175L13.1 18.35l1.425-1.4l1.425 1.4l3.525-3.525l1.425 1.4l-4.95 4.95ZM8 22q-.425 0-.713-.288T7 21V5q0-.425.288-.713T8 4h2V2h4v2h2q.425 0 .713.288T17 5v7q-.525 0-1.025.088T15 12.35V6H9v14h2.35q.2.575.488 1.075t.687.925H8Zm1-2h2.35H11h.35H9Z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" id="pload" x="20%" y="67%" width="18" height="18" viewBox="0 0 24 24"><path display="${
                stateObj25.state === "on" && priority !== "no" ? "" : "none"
              }" fill="${inverter_colour}" d="m15 13l-4 4v-3H2v-2h9V9l4 4M5 20v-4h2v2h10v-7.81l-5-4.5L7.21 10H4.22L12 3l10 9h-3v8H5Z"/></svg>
              <text id="priority_text_batt"x="26%" y="70%" class="st3 left-align" display="${
                stateObj25.state === "off" && priority !== "no" ? "" : "none"
              }" fill="${inverter_colour}">Off</text>
              <text id="priority_text_load"x="26%" y="70%" class="st3 left-align" display="${
                stateObj25.state === "on" && priority !== "no" ? "" : "none"
              }" fill="${inverter_colour}">On</text>
            </a>
            -->
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.solar_sell_247)}>
              <svg xmlns="http://www.w3.org/2000/svg" id="solar_sell_on" x="245" y="150" width="18" height="18" viewBox="0 0 30 30"><path display="${
                !config.entities.solar_sell_247 ||
                stateObj44.state === "off" ||
                stateObj44.state === "0" ||
                config.show_solar === "no"
                  ? "none"
                  : ""
              }" fill="${solar_colour}" d="m5.18 5.45l-1.78-.9L4.66 2h8.47l1.27 2.55l-1.78.89L11.9 4h-6l-.72 1.45M15.5 8H11l-.8-3H7.6l-.79 3H2.28L1 10.55l1.79.89L3.5 10h10.78l.72 1.45l1.79-.89L15.5 8m-.83 14H12.6l-.24-.9l-3.46-5.2l-3.47 5.2l-.23.9H3.13L6 11h2.09l-.36 1.35L8.9 14.1l1.16-1.75L9.71 11h2.07l2.89 11M8.3 15l-.9-1.35l-1.18 4.48L8.3 15m3.28 3.12l-1.18-4.48L9.5 15l2.08 3.12M23 16l-4-4v3h-4v2h4v3l4-4Z"/></svg>

              <svg xmlns="http://www.w3.org/2000/svg" id="solar_sell_off" x="245" y="150" width="18" height="18" viewBox="0 0 30 30"><path display="${
                !config.entities.solar_sell_247 ||
                stateObj44.state === "on" ||
                stateObj44.state === "1" ||
                config.show_solar === "no"
                  ? "none"
                  : ""
              }" fill="${solar_colour}" d="M 26 16 L 22 12 L 22 15 L 18 15 L 18 17 L 22 17 L 22 20 L 26 16 Z M 22.1 21.5 L 2.4 1.7 L 1.1 3 L 6.1 8 L 5.4 8 L 4.1 10.5 L 5.9 11.4 L 6.6 10 L 8.1 10 L 9.1 11 L 6.2 22 L 8.3 22 L 8.5 21.1 L 12 15.9 L 15.5 21.1 L 15.7 22 L 17.8 22 L 17 18.8 L 20.9 22.7 L 22.1 21.5 M 9.3 18.1 L 10.5 13.6 L 11.4 14.9 L 9.3 18.1 M 14.7 18.1 L 12.6 15 L 12.8 14.7 L 14.1 16 L 14.7 18.1 M 14.2 11 L 14.9 11 L 15.1 11.9 L 14.2 11 M 14.1 8 L 18.6 8 L 19.9 10.6 L 18.1 11.5 L 17.4 10 L 13.2 10 L 10.2 7 L 10.7 5 L 13.3 5 L 14.1 8 M 8.4 5.2 L 6.9 3.7 L 7.8 2 L 16.3 2 L 17.6 4.5 L 15.8 5.4 L 15 4 L 9 4 L 8.4 5.2 Z"/></svg>
            </a>


            <svg x="89%" y="94%" width="10%" height="10%" viewBox="0 0 570.118 82.033" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="12pt" stroke="#000" stroke-width="0.5mm" fill="#fff" style="stroke:#000;stroke-width:0.1mm;fill:#000"><path fill="#0589b6" d="M 149.317 75 L 148.145 72.559 A 41 41 0 0 1 136.909 76.175 A 36.833 36.833 0 0 1 130.957 76.66 A 33.385 33.385 0 0 1 118.032 74.217 A 31.364 31.364 0 0 1 107.715 67.187 A 32.983 32.983 0 0 1 98.07 45.589 A 44.298 44.298 0 0 1 97.949 42.285 A 42.351 42.351 0 0 1 99.231 31.599 A 31.282 31.282 0 0 1 106.348 18.262 Q 114.649 9.277 128.125 9.277 A 28.858 28.858 0 0 1 140.574 11.928 A 28.532 28.532 0 0 1 148.731 17.773 A 32.037 32.037 0 0 1 157.235 34.245 A 46.425 46.425 0 0 1 158.106 43.457 Q 158.106 49.679 156.289 53.644 A 11.242 11.242 0 0 1 151.66 58.887 A 8.065 8.065 0 0 1 148.784 59.961 A 7.656 7.656 0 0 1 147.559 60.059 Q 142.578 59.863 142.481 54.102 L 142.481 36.328 A 17.659 17.659 0 0 0 141.611 30.827 Q 139.662 25.173 133.354 23.576 A 22.798 22.798 0 0 0 127.93 22.949 A 33.441 33.441 0 0 0 123.345 23.239 Q 116.956 24.127 114.453 27.734 Q 113.623 29.118 113.577 30.414 A 4.281 4.281 0 0 0 113.574 30.566 Q 114.113 33.26 116.551 33.807 A 5.359 5.359 0 0 0 116.992 33.887 A 5.022 5.022 0 0 0 118.572 33.655 Q 120.084 33.155 120.77 31.578 A 5.567 5.567 0 0 0 120.996 30.957 A 17.975 17.975 0 0 1 121.051 30.743 Q 121.114 30.504 121.203 30.187 A 64.392 64.392 0 0 1 121.289 29.883 A 11.143 11.143 0 0 1 121.747 28.381 Q 122.534 26.367 123.926 25.781 A 6.11 6.11 0 0 1 125.41 25.325 Q 126.128 25.195 126.953 25.195 Q 135.031 25.39 135.156 34.216 A 19.409 19.409 0 0 1 135.156 34.277 L 135.156 39.844 A 80.694 80.694 0 0 0 127.996 40.174 Q 116.479 41.268 113.018 45.968 A 7.78 7.78 0 0 0 112.793 46.289 A 9.43 9.43 0 0 0 111.329 49.956 A 12.823 12.823 0 0 0 111.133 52.246 A 12.334 12.334 0 0 0 111.665 56.002 Q 112.876 59.797 116.836 61.439 A 13.059 13.059 0 0 0 117.871 61.816 A 15.566 15.566 0 0 0 122.168 62.402 Q 128.711 62.402 133.008 57.715 A 11.064 11.064 0 0 0 134.45 55.807 A 9.442 9.442 0 0 0 135.059 54.59 A 8.169 8.169 0 0 0 139.337 60.733 A 13.247 13.247 0 0 0 142.285 61.914 A 15.434 15.434 0 0 0 145.668 62.472 A 18.015 18.015 0 0 0 146.68 62.5 A 17.714 17.714 0 0 0 153.472 61.237 A 16.489 16.489 0 0 0 159.961 56.348 Q 164.453 50.977 164.453 42.48 Q 164.453 23.34 151.172 13.477 A 35.372 35.372 0 0 0 132.534 6.68 A 44.712 44.712 0 0 0 129.004 6.543 A 46.45 46.45 0 0 0 116.082 8.239 A 33.436 33.436 0 0 0 97.949 20.898 A 38.217 38.217 0 0 0 90.822 40.308 A 48.58 48.58 0 0 0 90.625 44.727 A 36.456 36.456 0 0 0 92.887 57.8 A 32.495 32.495 0 0 0 102.442 71.094 A 38.239 38.239 0 0 0 126.36 80.14 A 48.514 48.514 0 0 0 128.223 80.176 A 45.502 45.502 0 0 0 149.317 75 Z M 183.887 24.414 L 191.211 24.414 L 191.211 21.973 L 171.875 21.973 L 171.875 24.414 L 176.27 24.414 L 188.477 57.129 Q 190.527 62.695 192.676 63.574 Q 193.561 63.896 194.777 63.953 A 11.503 11.503 0 0 0 195.313 63.965 L 197.266 63.965 L 205.762 38.379 L 212.305 57.129 Q 214.015 62.17 215.809 63.394 A 2.62 2.62 0 0 0 216.113 63.574 Q 216.777 63.84 217.757 63.925 A 11.519 11.519 0 0 0 218.75 63.965 L 220.313 63.965 L 232.129 27.93 A 13.268 13.268 0 0 1 232.575 26.731 Q 233.405 24.817 234.473 24.512 A 4.931 4.931 0 0 1 235.053 24.433 A 6.304 6.304 0 0 1 235.547 24.414 Q 236.529 24.414 237.124 24.128 A 1.497 1.497 0 0 0 237.988 23.047 A 4.931 4.931 0 0 0 238.067 22.467 A 6.304 6.304 0 0 0 238.086 21.973 L 223.633 21.973 L 223.633 24.414 L 230.469 24.414 L 219.629 58.105 L 208.203 24.414 L 215.039 24.414 L 215.039 21.973 L 200 21.973 L 204.395 34.375 L 196.289 58.398 L 183.887 24.414 Z M 437.109 61.035 L 432.227 61.035 L 432.227 39.941 A 20.105 20.105 0 0 1 432.82 34.893 A 12.857 12.857 0 0 1 438.379 27.051 A 10.394 10.394 0 0 1 441.131 25.756 A 8.879 8.879 0 0 1 443.652 25.391 Q 448.828 25.391 451.276 29.592 A 11.814 11.814 0 0 1 451.953 30.957 A 14.572 14.572 0 0 1 452.938 35.002 A 17.926 17.926 0 0 1 453.027 36.816 L 453.027 55.176 Q 453.027 58.382 451.933 59.748 A 2.598 2.598 0 0 1 450.879 60.547 A 5.838 5.838 0 0 1 450.015 60.772 Q 448.63 61.035 446.192 61.035 L 446.192 63.477 L 467.676 63.477 A 4.699 4.699 0 0 0 467.611 62.657 Q 467.367 61.287 466.211 61.133 Q 465.92 61.06 465.519 61.041 A 6.178 6.178 0 0 0 465.234 61.035 L 460.352 61.035 L 460.352 36.816 Q 460.352 26.172 453.32 22.363 Q 450.586 20.996 447.461 20.996 A 16.187 16.187 0 0 0 439.9 22.753 A 16.609 16.609 0 0 0 435.352 26.27 Q 433.301 28.516 432.227 31.348 L 432.227 0 L 417.578 0 L 417.578 2.441 L 424.902 2.441 L 424.902 55.176 A 12.133 12.133 0 0 1 424.781 56.968 Q 424.454 59.146 423.249 60.073 A 3.109 3.109 0 0 1 422.363 60.547 A 6.814 6.814 0 0 1 421.424 60.777 Q 419.991 61.035 417.578 61.035 L 417.578 63.477 L 439.551 63.477 A 4.699 4.699 0 0 0 439.486 62.657 Q 439.242 61.287 438.086 61.133 Q 437.795 61.06 437.394 61.041 A 6.178 6.178 0 0 0 437.109 61.035 Z M 348.633 61.035 L 344.238 61.035 L 344.238 46.582 L 349.609 41.602 L 363.379 63.477 L 376.367 63.477 A 4.699 4.699 0 0 0 376.302 62.657 Q 376.058 61.287 374.902 61.133 Q 374.611 61.06 374.211 61.041 A 6.178 6.178 0 0 0 373.926 61.035 L 370.41 61.035 L 354.688 36.816 L 363.867 28.223 Q 367.087 25.187 368.834 24.664 A 3.005 3.005 0 0 1 369.043 24.609 A 6.339 6.339 0 0 1 369.928 24.457 A 8.487 8.487 0 0 1 370.801 24.414 A 4.699 4.699 0 0 0 371.62 24.349 Q 372.991 24.105 373.145 22.949 Q 373.242 22.461 373.242 21.973 L 356.641 21.973 L 356.641 24.414 L 363.965 24.414 L 344.238 42.676 L 344.238 0 L 329.59 0 L 329.59 2.441 L 336.914 2.441 L 336.914 55.176 A 12.133 12.133 0 0 1 336.793 56.968 Q 336.466 59.146 335.261 60.073 A 3.109 3.109 0 0 1 334.375 60.547 A 6.814 6.814 0 0 1 333.435 60.777 Q 332.002 61.035 329.59 61.035 L 329.59 63.477 L 351.074 63.477 A 4.699 4.699 0 0 0 351.009 62.657 Q 350.765 61.287 349.609 61.133 Q 349.318 61.06 348.918 61.041 A 6.178 6.178 0 0 0 348.633 61.035 Z M 79.199 61.035 L 74.317 61.035 L 74.317 21.973 L 58.984 21.973 L 58.984 24.414 L 66.992 24.414 L 66.992 45.508 A 19.81 19.81 0 0 1 66.391 50.543 A 13.119 13.119 0 0 1 60.84 58.398 A 11.158 11.158 0 0 1 58.101 59.775 A 9.205 9.205 0 0 1 55.176 60.254 A 11.494 11.494 0 0 1 51.495 59.709 Q 47.936 58.508 46.548 54.666 A 13.989 13.989 0 0 1 45.899 52.051 A 19.35 19.35 0 0 1 45.731 50.266 A 23.303 23.303 0 0 1 45.703 49.121 L 45.703 21.973 L 30.859 21.973 L 30.859 24.414 L 38.379 24.414 L 38.379 47.656 Q 38.466 62.544 49.497 64.237 A 19.69 19.69 0 0 0 52.344 64.453 A 14.419 14.419 0 0 0 63.299 59.728 A 18.733 18.733 0 0 0 64.356 58.496 Q 66.113 56.25 67.188 53.516 L 67.871 63.477 L 81.641 63.477 A 4.699 4.699 0 0 0 81.576 62.657 Q 81.332 61.287 80.176 61.133 Q 79.884 61.06 79.484 61.041 A 6.178 6.178 0 0 0 79.199 61.035 Z M 544.336 79.59 L 537.5 79.59 L 537.5 59.375 Q 542.871 64.063 549.902 64.453 A 18.635 18.635 0 0 0 563.71 58.702 A 23.099 23.099 0 0 0 564.453 57.91 A 22.065 22.065 0 0 0 569.827 46.046 A 30.063 30.063 0 0 0 570.117 41.797 A 32.133 32.133 0 0 0 569.486 35.216 Q 568.147 28.819 563.965 24.902 A 14.903 14.903 0 0 0 553.898 21 A 19.11 19.11 0 0 0 553.516 20.996 Q 544.043 20.996 539.356 28.516 Q 538.184 30.469 537.402 32.617 L 536.914 21.973 L 522.852 21.973 L 522.852 24.414 L 530.176 24.414 L 530.176 73.73 A 12.133 12.133 0 0 1 530.054 75.523 Q 529.728 77.7 528.522 78.628 A 3.109 3.109 0 0 1 527.637 79.102 A 6.814 6.814 0 0 1 526.697 79.332 Q 525.264 79.59 522.852 79.59 L 522.852 82.031 L 546.777 82.031 A 4.699 4.699 0 0 0 546.712 81.212 Q 546.468 79.842 545.313 79.688 Q 545.021 79.615 544.621 79.596 A 6.178 6.178 0 0 0 544.336 79.59 Z M 408.887 20.41 L 408.887 32.617 L 406.348 32.617 Q 406.195 25.571 400.155 23.991 A 15.539 15.539 0 0 0 396.387 23.535 A 19.05 19.05 0 0 0 393.271 23.769 Q 391.686 24.033 390.486 24.595 A 6.038 6.038 0 0 0 387.305 27.832 A 6.287 6.287 0 0 0 386.817 30.273 Q 386.817 33.496 390.383 35.971 A 18.492 18.492 0 0 0 392.871 37.402 A 25.805 25.805 0 0 0 393.652 37.775 Q 394.971 38.379 397.168 39.258 A 67.61 67.61 0 0 1 400.794 40.851 Q 405.737 43.213 407.715 45.41 A 10.681 10.681 0 0 1 410.547 52.832 Q 410.547 58.998 405.443 61.96 A 16.241 16.241 0 0 1 402.149 63.379 A 21.055 21.055 0 0 1 397.213 64.368 A 25.362 25.362 0 0 1 395.117 64.453 Q 388.086 64.355 382.91 60.938 A 7.784 7.784 0 0 1 382.858 61.88 Q 382.652 63.556 381.641 63.867 Q 381.055 63.965 380.274 63.965 L 380.274 49.121 L 383.008 49.121 A 21.648 21.648 0 0 0 383.56 53.88 Q 385.175 60.53 391.493 61.609 A 15.416 15.416 0 0 0 393.945 61.816 A 17.142 17.142 0 0 0 397.171 61.535 Q 401.297 60.743 403.027 57.715 Q 403.906 56.25 403.906 54.492 A 5.757 5.757 0 0 0 402.463 50.739 Q 400.985 48.962 397.994 47.483 A 23.826 23.826 0 0 0 397.949 47.461 Q 396.727 46.803 393.967 45.602 A 161.457 161.457 0 0 0 393.75 45.508 Q 385.742 42.188 383.106 39.258 A 11.037 11.037 0 0 1 380.274 31.738 Q 380.274 26.481 384.792 23.661 A 15.766 15.766 0 0 1 387.695 22.266 A 20.528 20.528 0 0 1 393.515 21.048 A 24.19 24.19 0 0 1 395.117 20.996 A 25.545 25.545 0 0 1 400.597 21.558 A 19.377 19.377 0 0 1 406.25 23.73 Q 406.25 20.898 407.617 20.508 A 7.146 7.146 0 0 1 408.388 20.424 A 8.832 8.832 0 0 1 408.887 20.41 Z M 312.988 61.035 L 305.957 61.035 L 305.957 41.602 A 23.402 23.402 0 0 1 306.775 35.254 A 17.536 17.536 0 0 1 311.426 27.344 Q 313.112 25.735 314.377 25.328 A 2.771 2.771 0 0 1 315.039 25.195 A 2.428 2.428 0 0 1 316.484 25.697 Q 317.265 26.263 317.97 27.468 A 10.411 10.411 0 0 1 318.067 27.637 A 15.603 15.603 0 0 0 318.788 28.79 Q 319.544 29.879 320.251 30.385 A 2.443 2.443 0 0 0 320.996 30.762 A 3.69 3.69 0 0 0 322.15 30.957 A 3.522 3.522 0 0 0 322.168 30.957 A 4.546 4.546 0 0 0 323.646 30.733 Q 325.317 30.161 325.879 28.125 A 3.69 3.69 0 0 0 326.074 26.971 A 3.522 3.522 0 0 0 326.074 26.953 A 6.396 6.396 0 0 0 325.738 24.805 Q 324.846 22.292 321.582 21.582 A 10.169 10.169 0 0 0 320.4 21.414 A 8.438 8.438 0 0 0 319.727 21.387 Q 313.867 21.387 309.277 26.367 Q 307.129 28.711 305.859 31.641 L 305.469 21.973 L 291.309 21.973 L 291.309 24.414 L 298.633 24.414 L 298.633 55.176 A 12.133 12.133 0 0 1 298.511 56.968 Q 298.185 59.146 296.979 60.073 A 3.109 3.109 0 0 1 296.094 60.547 A 6.814 6.814 0 0 1 295.154 60.777 Q 293.721 61.035 291.309 61.035 L 291.309 63.477 L 315.43 63.477 A 4.699 4.699 0 0 0 315.365 62.657 Q 315.121 61.287 313.965 61.133 Q 313.674 61.06 313.273 61.041 A 6.178 6.178 0 0 0 312.988 61.035 Z M 21.289 21.973 L 6.152 21.973 L 6.152 24.414 L 13.965 24.414 L 13.965 70.117 A 36.055 36.055 0 0 1 13.749 73.187 Q 13.005 79.51 9.961 79.59 A 2.279 2.279 0 0 1 7.964 78.485 Q 7.565 77.883 7.324 76.953 Q 6.59 74.343 5.924 73.436 A 1.808 1.808 0 0 0 5.664 73.145 A 3.445 3.445 0 0 0 3.711 72.559 Q 1.001 72.559 0.213 74.815 A 4.827 4.827 0 0 0 0.098 75.195 Q 0 75.684 0 76.074 A 4.784 4.784 0 0 0 1.94 79.954 Q 2.683 80.549 3.71 81.033 A 12.331 12.331 0 0 0 4.199 81.25 Q 6.152 82.031 8.203 82.031 Q 14.942 82.031 18.652 75.977 A 18.175 18.175 0 0 0 20.671 70.747 Q 21.289 68.01 21.289 64.746 L 21.289 21.973 Z M 263.379 20.996 A 22.374 22.374 0 0 0 254.908 22.557 A 20.755 20.755 0 0 0 247.754 27.441 A 20.284 20.284 0 0 0 242.015 41.186 A 26.594 26.594 0 0 0 241.992 42.285 A 26.611 26.611 0 0 0 243.042 49.978 A 19.554 19.554 0 0 0 250.977 60.742 A 21.097 21.097 0 0 0 263.086 64.453 A 21.669 21.669 0 0 0 271.412 62.895 A 20.296 20.296 0 0 0 278.613 57.812 Q 284.277 51.758 284.277 42.676 A 26.344 26.344 0 0 0 283.3 35.284 A 19.01 19.01 0 0 0 275.195 24.414 Q 269.824 20.996 263.379 20.996 Z M 495.508 20.996 A 22.374 22.374 0 0 0 487.036 22.557 A 20.755 20.755 0 0 0 479.883 27.441 A 20.284 20.284 0 0 0 474.144 41.186 A 26.594 26.594 0 0 0 474.121 42.285 A 26.611 26.611 0 0 0 475.171 49.978 A 19.554 19.554 0 0 0 483.106 60.742 A 21.097 21.097 0 0 0 495.215 64.453 A 21.669 21.669 0 0 0 503.541 62.895 A 20.296 20.296 0 0 0 510.742 57.812 Q 516.406 51.758 516.406 42.676 A 26.344 26.344 0 0 0 515.429 35.284 A 19.01 19.01 0 0 0 507.324 24.414 Q 501.953 20.996 495.508 20.996 Z M 250.69 36.619 A 42.481 42.481 0 0 0 250.293 42.676 A 45.436 45.436 0 0 0 250.433 46.321 A 34.318 34.318 0 0 0 250.977 50.293 Q 252.683 58.167 257.695 60.75 A 12.239 12.239 0 0 0 263.379 62.012 A 13.437 13.437 0 0 0 266.992 61.523 A 10.262 10.262 0 0 0 270.867 59.311 Q 274.521 55.983 275.562 48.708 A 45.562 45.562 0 0 0 275.977 42.285 Q 275.977 39.453 275.684 37.109 A 31.555 31.555 0 0 0 275.326 34.917 Q 273.786 27.255 268.848 24.707 A 12.403 12.403 0 0 0 263.086 23.438 A 13.043 13.043 0 0 0 258.594 24.219 A 10.633 10.633 0 0 0 255.587 26.036 Q 251.743 29.341 250.69 36.619 Z M 482.819 36.619 A 42.481 42.481 0 0 0 482.422 42.676 A 45.436 45.436 0 0 0 482.562 46.321 A 34.318 34.318 0 0 0 483.106 50.293 Q 484.812 58.167 489.824 60.75 A 12.239 12.239 0 0 0 495.508 62.012 A 13.437 13.437 0 0 0 499.121 61.523 A 10.262 10.262 0 0 0 502.996 59.311 Q 506.65 55.983 507.691 48.708 A 45.562 45.562 0 0 0 508.106 42.285 Q 508.106 39.453 507.813 37.109 A 31.555 31.555 0 0 0 507.455 34.917 Q 505.915 27.255 500.977 24.707 A 12.403 12.403 0 0 0 495.215 23.438 A 13.043 13.043 0 0 0 490.723 24.219 A 10.633 10.633 0 0 0 487.716 26.036 Q 483.872 29.341 482.819 36.619 Z M 555.739 26.307 A 9.929 9.929 0 0 0 550.391 24.902 A 10.657 10.657 0 0 0 543.945 27.051 A 14.193 14.193 0 0 0 539.483 32.794 Q 538.383 35.267 537.864 38.436 A 38.461 38.461 0 0 0 537.402 44.629 Q 537.402 50.098 538.867 54.102 A 16.086 16.086 0 0 0 540.275 57.094 Q 543.29 62.012 549.219 62.012 A 12.853 12.853 0 0 0 549.383 62.011 A 11.131 11.131 0 0 0 554.102 60.937 Q 560.008 58.022 561.393 48.923 A 41.047 41.047 0 0 0 561.817 42.773 A 40.863 40.863 0 0 0 561.666 39.191 A 30.452 30.452 0 0 0 561.133 35.547 A 26.565 26.565 0 0 0 560.867 34.408 Q 559.36 28.557 555.739 26.307 Z M 135.156 42.285 L 135.156 49.121 A 15.854 15.854 0 0 1 133.655 53.182 A 11.456 11.456 0 0 1 128.711 58.008 A 9.56 9.56 0 0 1 126.88 58.667 A 7.521 7.521 0 0 1 125.098 58.887 A 6.215 6.215 0 0 1 122.583 58.403 Q 120.32 57.413 119.336 54.395 A 11.654 11.654 0 0 1 118.75 50.699 A 12.647 12.647 0 0 1 118.75 50.684 A 6.682 6.682 0 0 1 122.625 44.474 Q 125.362 42.998 130.033 42.537 A 38.183 38.183 0 0 1 130.664 42.48 A 48.131 48.131 0 0 1 133.997 42.297 A 54.521 54.521 0 0 1 135.156 42.285 Z M 22.266 7.715 A 5.973 5.973 0 0 0 21.924 5.639 Q 21.338 4.048 19.749 3.106 A 6.843 6.843 0 0 0 19.238 2.832 A 6.672 6.672 0 0 0 18.091 2.466 A 5.163 5.163 0 0 0 16.992 2.344 A 5.777 5.777 0 0 0 14.873 2.713 Q 13.395 3.291 12.482 4.775 A 6.97 6.97 0 0 0 12.109 5.469 A 5.368 5.368 0 0 0 11.621 7.715 Q 11.621 11.018 14.314 12.444 A 6.836 6.836 0 0 0 14.844 12.695 Q 15.918 13.086 16.992 13.086 A 5.745 5.745 0 0 0 19.015 12.749 Q 20.859 12.061 21.777 9.961 A 5.368 5.368 0 0 0 22.266 7.715 Z" vector-effect="non-scaling-stroke"/></g></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="solar_sell_off" x="25%" y="35%" width="18" height="18" viewBox="0 0 30 30">
            <path fill="${solar_colour}" d="M 26 16 L 22 12 L 22 15 L 18 15 L 18 17 L 22 17 L 22 20 L 26 16 Z M 22.1 21.5 L 2.4 1.7 L 1.1 3 L 6.1 8 L 5.4 8 L 4.1 10.5 L 5.9 11.4 L 6.6 10 L 8.1 10 L 9.1 11 L 6.2 22 L 8.3 22 L 8.5 21.1 L 12 15.9 L 15.5 21.1 L 15.7 22 L 17.8 22 L 17 18.8 L 20.9 22.7 L 22.1 21.5 M 9.3 18.1 L 10.5 13.6 L 11.4 14.9 L 9.3 18.1 M 14.7 18.1 L 12.6 15 L 12.8 14.7 L 14.1 16 L 14.7 18.1 M 14.2 11 L 14.9 11 L 15.1 11.9 L 14.2 11 M 14.1 8 L 18.6 8 L 19.9 10.6 L 18.1 11.5 L 17.4 10 L 13.2 10 L 10.2 7 L 10.7 5 L 13.3 5 L 14.1 8 M 8.4 5.2 L 6.9 3.7 L 7.8 2 L 16.3 2 L 17.6 4.5 L 15.8 5.4 L 15 4 L 9 4 L 8.4 5.2 Z"/></svg>


            <svg xmlns="http://www.w3.org/2000/svg" id="solar_sell_on" x="30%" y="35%" width="18" height="18" viewBox="0 0 30 30">
            <path fill="${solar_colour}" d="m5.18 5.45l-1.78-.9L4.66 2h8.47l1.27 2.55l-1.78.89L11.9 4h-6l-.72 1.45M15.5 8H11l-.8-3H7.6l-.79 3H2.28L1 10.55l1.79.89L3.5 10h10.78l.72 1.45l1.79-.89L15.5 8m-.83 14H12.6l-.24-.9l-3.46-5.2l-3.47 5.2l-.23.9H3.13L6 11h2.09l-.36 1.35L8.9 14.1l1.16-1.75L9.71 11h2.07l2.89 11M8.3 15l-.9-1.35l-1.18 4.48L8.3 15m3.28 3.12l-1.18-4.48L9.5 15l2.08 3.12M23 16l-4-4v3h-4v2h4v3l4-4Z"/></svg>
            <svg x="89%" y="94%" width="10%" height="10%" viewBox="0 0 570.118 82.033" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="12pt" stroke="#000" stroke-width="0.5mm" fill="#fff" style="stroke:#000;stroke-width:0.1mm;fill:#000"><path fill="#0589b6" d="M 149.317 75 L 148.145 72.559 A 41 41 0 0 1 136.909 76.175 A 36.833 36.833 0 0 1 130.957 76.66 A 33.385 33.385 0 0 1 118.032 74.217 A 31.364 31.364 0 0 1 107.715 67.187 A 32.983 32.983 0 0 1 98.07 45.589 A 44.298 44.298 0 0 1 97.949 42.285 A 42.351 42.351 0 0 1 99.231 31.599 A 31.282 31.282 0 0 1 106.348 18.262 Q 114.649 9.277 128.125 9.277 A 28.858 28.858 0 0 1 140.574 11.928 A 28.532 28.532 0 0 1 148.731 17.773 A 32.037 32.037 0 0 1 157.235 34.245 A 46.425 46.425 0 0 1 158.106 43.457 Q 158.106 49.679 156.289 53.644 A 11.242 11.242 0 0 1 151.66 58.887 A 8.065 8.065 0 0 1 148.784 59.961 A 7.656 7.656 0 0 1 147.559 60.059 Q 142.578 59.863 142.481 54.102 L 142.481 36.328 A 17.659 17.659 0 0 0 141.611 30.827 Q 139.662 25.173 133.354 23.576 A 22.798 22.798 0 0 0 127.93 22.949 A 33.441 33.441 0 0 0 123.345 23.239 Q 116.956 24.127 114.453 27.734 Q 113.623 29.118 113.577 30.414 A 4.281 4.281 0 0 0 113.574 30.566 Q 114.113 33.26 116.551 33.807 A 5.359 5.359 0 0 0 116.992 33.887 A 5.022 5.022 0 0 0 118.572 33.655 Q 120.084 33.155 120.77 31.578 A 5.567 5.567 0 0 0 120.996 30.957 A 17.975 17.975 0 0 1 121.051 30.743 Q 121.114 30.504 121.203 30.187 A 64.392 64.392 0 0 1 121.289 29.883 A 11.143 11.143 0 0 1 121.747 28.381 Q 122.534 26.367 123.926 25.781 A 6.11 6.11 0 0 1 125.41 25.325 Q 126.128 25.195 126.953 25.195 Q 135.031 25.39 135.156 34.216 A 19.409 19.409 0 0 1 135.156 34.277 L 135.156 39.844 A 80.694 80.694 0 0 0 127.996 40.174 Q 116.479 41.268 113.018 45.968 A 7.78 7.78 0 0 0 112.793 46.289 A 9.43 9.43 0 0 0 111.329 49.956 A 12.823 12.823 0 0 0 111.133 52.246 A 12.334 12.334 0 0 0 111.665 56.002 Q 112.876 59.797 116.836 61.439 A 13.059 13.059 0 0 0 117.871 61.816 A 15.566 15.566 0 0 0 122.168 62.402 Q 128.711 62.402 133.008 57.715 A 11.064 11.064 0 0 0 134.45 55.807 A 9.442 9.442 0 0 0 135.059 54.59 A 8.169 8.169 0 0 0 139.337 60.733 A 13.247 13.247 0 0 0 142.285 61.914 A 15.434 15.434 0 0 0 145.668 62.472 A 18.015 18.015 0 0 0 146.68 62.5 A 17.714 17.714 0 0 0 153.472 61.237 A 16.489 16.489 0 0 0 159.961 56.348 Q 164.453 50.977 164.453 42.48 Q 164.453 23.34 151.172 13.477 A 35.372 35.372 0 0 0 132.534 6.68 A 44.712 44.712 0 0 0 129.004 6.543 A 46.45 46.45 0 0 0 116.082 8.239 A 33.436 33.436 0 0 0 97.949 20.898 A 38.217 38.217 0 0 0 90.822 40.308 A 48.58 48.58 0 0 0 90.625 44.727 A 36.456 36.456 0 0 0 92.887 57.8 A 32.495 32.495 0 0 0 102.442 71.094 A 38.239 38.239 0 0 0 126.36 80.14 A 48.514 48.514 0 0 0 128.223 80.176 A 45.502 45.502 0 0 0 149.317 75 Z M 183.887 24.414 L 191.211 24.414 L 191.211 21.973 L 171.875 21.973 L 171.875 24.414 L 176.27 24.414 L 188.477 57.129 Q 190.527 62.695 192.676 63.574 Q 193.561 63.896 194.777 63.953 A 11.503 11.503 0 0 0 195.313 63.965 L 197.266 63.965 L 205.762 38.379 L 212.305 57.129 Q 214.015 62.17 215.809 63.394 A 2.62 2.62 0 0 0 216.113 63.574 Q 216.777 63.84 217.757 63.925 A 11.519 11.519 0 0 0 218.75 63.965 L 220.313 63.965 L 232.129 27.93 A 13.268 13.268 0 0 1 232.575 26.731 Q 233.405 24.817 234.473 24.512 A 4.931 4.931 0 0 1 235.053 24.433 A 6.304 6.304 0 0 1 235.547 24.414 Q 236.529 24.414 237.124 24.128 A 1.497 1.497 0 0 0 237.988 23.047 A 4.931 4.931 0 0 0 238.067 22.467 A 6.304 6.304 0 0 0 238.086 21.973 L 223.633 21.973 L 223.633 24.414 L 230.469 24.414 L 219.629 58.105 L 208.203 24.414 L 215.039 24.414 L 215.039 21.973 L 200 21.973 L 204.395 34.375 L 196.289 58.398 L 183.887 24.414 Z M 437.109 61.035 L 432.227 61.035 L 432.227 39.941 A 20.105 20.105 0 0 1 432.82 34.893 A 12.857 12.857 0 0 1 438.379 27.051 A 10.394 10.394 0 0 1 441.131 25.756 A 8.879 8.879 0 0 1 443.652 25.391 Q 448.828 25.391 451.276 29.592 A 11.814 11.814 0 0 1 451.953 30.957 A 14.572 14.572 0 0 1 452.938 35.002 A 17.926 17.926 0 0 1 453.027 36.816 L 453.027 55.176 Q 453.027 58.382 451.933 59.748 A 2.598 2.598 0 0 1 450.879 60.547 A 5.838 5.838 0 0 1 450.015 60.772 Q 448.63 61.035 446.192 61.035 L 446.192 63.477 L 467.676 63.477 A 4.699 4.699 0 0 0 467.611 62.657 Q 467.367 61.287 466.211 61.133 Q 465.92 61.06 465.519 61.041 A 6.178 6.178 0 0 0 465.234 61.035 L 460.352 61.035 L 460.352 36.816 Q 460.352 26.172 453.32 22.363 Q 450.586 20.996 447.461 20.996 A 16.187 16.187 0 0 0 439.9 22.753 A 16.609 16.609 0 0 0 435.352 26.27 Q 433.301 28.516 432.227 31.348 L 432.227 0 L 417.578 0 L 417.578 2.441 L 424.902 2.441 L 424.902 55.176 A 12.133 12.133 0 0 1 424.781 56.968 Q 424.454 59.146 423.249 60.073 A 3.109 3.109 0 0 1 422.363 60.547 A 6.814 6.814 0 0 1 421.424 60.777 Q 419.991 61.035 417.578 61.035 L 417.578 63.477 L 439.551 63.477 A 4.699 4.699 0 0 0 439.486 62.657 Q 439.242 61.287 438.086 61.133 Q 437.795 61.06 437.394 61.041 A 6.178 6.178 0 0 0 437.109 61.035 Z M 348.633 61.035 L 344.238 61.035 L 344.238 46.582 L 349.609 41.602 L 363.379 63.477 L 376.367 63.477 A 4.699 4.699 0 0 0 376.302 62.657 Q 376.058 61.287 374.902 61.133 Q 374.611 61.06 374.211 61.041 A 6.178 6.178 0 0 0 373.926 61.035 L 370.41 61.035 L 354.688 36.816 L 363.867 28.223 Q 367.087 25.187 368.834 24.664 A 3.005 3.005 0 0 1 369.043 24.609 A 6.339 6.339 0 0 1 369.928 24.457 A 8.487 8.487 0 0 1 370.801 24.414 A 4.699 4.699 0 0 0 371.62 24.349 Q 372.991 24.105 373.145 22.949 Q 373.242 22.461 373.242 21.973 L 356.641 21.973 L 356.641 24.414 L 363.965 24.414 L 344.238 42.676 L 344.238 0 L 329.59 0 L 329.59 2.441 L 336.914 2.441 L 336.914 55.176 A 12.133 12.133 0 0 1 336.793 56.968 Q 336.466 59.146 335.261 60.073 A 3.109 3.109 0 0 1 334.375 60.547 A 6.814 6.814 0 0 1 333.435 60.777 Q 332.002 61.035 329.59 61.035 L 329.59 63.477 L 351.074 63.477 A 4.699 4.699 0 0 0 351.009 62.657 Q 350.765 61.287 349.609 61.133 Q 349.318 61.06 348.918 61.041 A 6.178 6.178 0 0 0 348.633 61.035 Z M 79.199 61.035 L 74.317 61.035 L 74.317 21.973 L 58.984 21.973 L 58.984 24.414 L 66.992 24.414 L 66.992 45.508 A 19.81 19.81 0 0 1 66.391 50.543 A 13.119 13.119 0 0 1 60.84 58.398 A 11.158 11.158 0 0 1 58.101 59.775 A 9.205 9.205 0 0 1 55.176 60.254 A 11.494 11.494 0 0 1 51.495 59.709 Q 47.936 58.508 46.548 54.666 A 13.989 13.989 0 0 1 45.899 52.051 A 19.35 19.35 0 0 1 45.731 50.266 A 23.303 23.303 0 0 1 45.703 49.121 L 45.703 21.973 L 30.859 21.973 L 30.859 24.414 L 38.379 24.414 L 38.379 47.656 Q 38.466 62.544 49.497 64.237 A 19.69 19.69 0 0 0 52.344 64.453 A 14.419 14.419 0 0 0 63.299 59.728 A 18.733 18.733 0 0 0 64.356 58.496 Q 66.113 56.25 67.188 53.516 L 67.871 63.477 L 81.641 63.477 A 4.699 4.699 0 0 0 81.576 62.657 Q 81.332 61.287 80.176 61.133 Q 79.884 61.06 79.484 61.041 A 6.178 6.178 0 0 0 79.199 61.035 Z M 544.336 79.59 L 537.5 79.59 L 537.5 59.375 Q 542.871 64.063 549.902 64.453 A 18.635 18.635 0 0 0 563.71 58.702 A 23.099 23.099 0 0 0 564.453 57.91 A 22.065 22.065 0 0 0 569.827 46.046 A 30.063 30.063 0 0 0 570.117 41.797 A 32.133 32.133 0 0 0 569.486 35.216 Q 568.147 28.819 563.965 24.902 A 14.903 14.903 0 0 0 553.898 21 A 19.11 19.11 0 0 0 553.516 20.996 Q 544.043 20.996 539.356 28.516 Q 538.184 30.469 537.402 32.617 L 536.914 21.973 L 522.852 21.973 L 522.852 24.414 L 530.176 24.414 L 530.176 73.73 A 12.133 12.133 0 0 1 530.054 75.523 Q 529.728 77.7 528.522 78.628 A 3.109 3.109 0 0 1 527.637 79.102 A 6.814 6.814 0 0 1 526.697 79.332 Q 525.264 79.59 522.852 79.59 L 522.852 82.031 L 546.777 82.031 A 4.699 4.699 0 0 0 546.712 81.212 Q 546.468 79.842 545.313 79.688 Q 545.021 79.615 544.621 79.596 A 6.178 6.178 0 0 0 544.336 79.59 Z M 408.887 20.41 L 408.887 32.617 L 406.348 32.617 Q 406.195 25.571 400.155 23.991 A 15.539 15.539 0 0 0 396.387 23.535 A 19.05 19.05 0 0 0 393.271 23.769 Q 391.686 24.033 390.486 24.595 A 6.038 6.038 0 0 0 387.305 27.832 A 6.287 6.287 0 0 0 386.817 30.273 Q 386.817 33.496 390.383 35.971 A 18.492 18.492 0 0 0 392.871 37.402 A 25.805 25.805 0 0 0 393.652 37.775 Q 394.971 38.379 397.168 39.258 A 67.61 67.61 0 0 1 400.794 40.851 Q 405.737 43.213 407.715 45.41 A 10.681 10.681 0 0 1 410.547 52.832 Q 410.547 58.998 405.443 61.96 A 16.241 16.241 0 0 1 402.149 63.379 A 21.055 21.055 0 0 1 397.213 64.368 A 25.362 25.362 0 0 1 395.117 64.453 Q 388.086 64.355 382.91 60.938 A 7.784 7.784 0 0 1 382.858 61.88 Q 382.652 63.556 381.641 63.867 Q 381.055 63.965 380.274 63.965 L 380.274 49.121 L 383.008 49.121 A 21.648 21.648 0 0 0 383.56 53.88 Q 385.175 60.53 391.493 61.609 A 15.416 15.416 0 0 0 393.945 61.816 A 17.142 17.142 0 0 0 397.171 61.535 Q 401.297 60.743 403.027 57.715 Q 403.906 56.25 403.906 54.492 A 5.757 5.757 0 0 0 402.463 50.739 Q 400.985 48.962 397.994 47.483 A 23.826 23.826 0 0 0 397.949 47.461 Q 396.727 46.803 393.967 45.602 A 161.457 161.457 0 0 0 393.75 45.508 Q 385.742 42.188 383.106 39.258 A 11.037 11.037 0 0 1 380.274 31.738 Q 380.274 26.481 384.792 23.661 A 15.766 15.766 0 0 1 387.695 22.266 A 20.528 20.528 0 0 1 393.515 21.048 A 24.19 24.19 0 0 1 395.117 20.996 A 25.545 25.545 0 0 1 400.597 21.558 A 19.377 19.377 0 0 1 406.25 23.73 Q 406.25 20.898 407.617 20.508 A 7.146 7.146 0 0 1 408.388 20.424 A 8.832 8.832 0 0 1 408.887 20.41 Z M 312.988 61.035 L 305.957 61.035 L 305.957 41.602 A 23.402 23.402 0 0 1 306.775 35.254 A 17.536 17.536 0 0 1 311.426 27.344 Q 313.112 25.735 314.377 25.328 A 2.771 2.771 0 0 1 315.039 25.195 A 2.428 2.428 0 0 1 316.484 25.697 Q 317.265 26.263 317.97 27.468 A 10.411 10.411 0 0 1 318.067 27.637 A 15.603 15.603 0 0 0 318.788 28.79 Q 319.544 29.879 320.251 30.385 A 2.443 2.443 0 0 0 320.996 30.762 A 3.69 3.69 0 0 0 322.15 30.957 A 3.522 3.522 0 0 0 322.168 30.957 A 4.546 4.546 0 0 0 323.646 30.733 Q 325.317 30.161 325.879 28.125 A 3.69 3.69 0 0 0 326.074 26.971 A 3.522 3.522 0 0 0 326.074 26.953 A 6.396 6.396 0 0 0 325.738 24.805 Q 324.846 22.292 321.582 21.582 A 10.169 10.169 0 0 0 320.4 21.414 A 8.438 8.438 0 0 0 319.727 21.387 Q 313.867 21.387 309.277 26.367 Q 307.129 28.711 305.859 31.641 L 305.469 21.973 L 291.309 21.973 L 291.309 24.414 L 298.633 24.414 L 298.633 55.176 A 12.133 12.133 0 0 1 298.511 56.968 Q 298.185 59.146 296.979 60.073 A 3.109 3.109 0 0 1 296.094 60.547 A 6.814 6.814 0 0 1 295.154 60.777 Q 293.721 61.035 291.309 61.035 L 291.309 63.477 L 315.43 63.477 A 4.699 4.699 0 0 0 315.365 62.657 Q 315.121 61.287 313.965 61.133 Q 313.674 61.06 313.273 61.041 A 6.178 6.178 0 0 0 312.988 61.035 Z M 21.289 21.973 L 6.152 21.973 L 6.152 24.414 L 13.965 24.414 L 13.965 70.117 A 36.055 36.055 0 0 1 13.749 73.187 Q 13.005 79.51 9.961 79.59 A 2.279 2.279 0 0 1 7.964 78.485 Q 7.565 77.883 7.324 76.953 Q 6.59 74.343 5.924 73.436 A 1.808 1.808 0 0 0 5.664 73.145 A 3.445 3.445 0 0 0 3.711 72.559 Q 1.001 72.559 0.213 74.815 A 4.827 4.827 0 0 0 0.098 75.195 Q 0 75.684 0 76.074 A 4.784 4.784 0 0 0 1.94 79.954 Q 2.683 80.549 3.71 81.033 A 12.331 12.331 0 0 0 4.199 81.25 Q 6.152 82.031 8.203 82.031 Q 14.942 82.031 18.652 75.977 A 18.175 18.175 0 0 0 20.671 70.747 Q 21.289 68.01 21.289 64.746 L 21.289 21.973 Z M 263.379 20.996 A 22.374 22.374 0 0 0 254.908 22.557 A 20.755 20.755 0 0 0 247.754 27.441 A 20.284 20.284 0 0 0 242.015 41.186 A 26.594 26.594 0 0 0 241.992 42.285 A 26.611 26.611 0 0 0 243.042 49.978 A 19.554 19.554 0 0 0 250.977 60.742 A 21.097 21.097 0 0 0 263.086 64.453 A 21.669 21.669 0 0 0 271.412 62.895 A 20.296 20.296 0 0 0 278.613 57.812 Q 284.277 51.758 284.277 42.676 A 26.344 26.344 0 0 0 283.3 35.284 A 19.01 19.01 0 0 0 275.195 24.414 Q 269.824 20.996 263.379 20.996 Z M 495.508 20.996 A 22.374 22.374 0 0 0 487.036 22.557 A 20.755 20.755 0 0 0 479.883 27.441 A 20.284 20.284 0 0 0 474.144 41.186 A 26.594 26.594 0 0 0 474.121 42.285 A 26.611 26.611 0 0 0 475.171 49.978 A 19.554 19.554 0 0 0 483.106 60.742 A 21.097 21.097 0 0 0 495.215 64.453 A 21.669 21.669 0 0 0 503.541 62.895 A 20.296 20.296 0 0 0 510.742 57.812 Q 516.406 51.758 516.406 42.676 A 26.344 26.344 0 0 0 515.429 35.284 A 19.01 19.01 0 0 0 507.324 24.414 Q 501.953 20.996 495.508 20.996 Z M 250.69 36.619 A 42.481 42.481 0 0 0 250.293 42.676 A 45.436 45.436 0 0 0 250.433 46.321 A 34.318 34.318 0 0 0 250.977 50.293 Q 252.683 58.167 257.695 60.75 A 12.239 12.239 0 0 0 263.379 62.012 A 13.437 13.437 0 0 0 266.992 61.523 A 10.262 10.262 0 0 0 270.867 59.311 Q 274.521 55.983 275.562 48.708 A 45.562 45.562 0 0 0 275.977 42.285 Q 275.977 39.453 275.684 37.109 A 31.555 31.555 0 0 0 275.326 34.917 Q 273.786 27.255 268.848 24.707 A 12.403 12.403 0 0 0 263.086 23.438 A 13.043 13.043 0 0 0 258.594 24.219 A 10.633 10.633 0 0 0 255.587 26.036 Q 251.743 29.341 250.69 36.619 Z M 482.819 36.619 A 42.481 42.481 0 0 0 482.422 42.676 A 45.436 45.436 0 0 0 482.562 46.321 A 34.318 34.318 0 0 0 483.106 50.293 Q 484.812 58.167 489.824 60.75 A 12.239 12.239 0 0 0 495.508 62.012 A 13.437 13.437 0 0 0 499.121 61.523 A 10.262 10.262 0 0 0 502.996 59.311 Q 506.65 55.983 507.691 48.708 A 45.562 45.562 0 0 0 508.106 42.285 Q 508.106 39.453 507.813 37.109 A 31.555 31.555 0 0 0 507.455 34.917 Q 505.915 27.255 500.977 24.707 A 12.403 12.403 0 0 0 495.215 23.438 A 13.043 13.043 0 0 0 490.723 24.219 A 10.633 10.633 0 0 0 487.716 26.036 Q 483.872 29.341 482.819 36.619 Z M 555.739 26.307 A 9.929 9.929 0 0 0 550.391 24.902 A 10.657 10.657 0 0 0 543.945 27.051 A 14.193 14.193 0 0 0 539.483 32.794 Q 538.383 35.267 537.864 38.436 A 38.461 38.461 0 0 0 537.402 44.629 Q 537.402 50.098 538.867 54.102 A 16.086 16.086 0 0 0 540.275 57.094 Q 543.29 62.012 549.219 62.012 A 12.853 12.853 0 0 0 549.383 62.011 A 11.131 11.131 0 0 0 554.102 60.937 Q 560.008 58.022 561.393 48.923 A 41.047 41.047 0 0 0 561.817 42.773 A 40.863 40.863 0 0 0 561.666 39.191 A 30.452 30.452 0 0 0 561.133 35.547 A 26.565 26.565 0 0 0 560.867 34.408 Q 559.36 28.557 555.739 26.307 Z M 135.156 42.285 L 135.156 49.121 A 15.854 15.854 0 0 1 133.655 53.182 A 11.456 11.456 0 0 1 128.711 58.008 A 9.56 9.56 0 0 1 126.88 58.667 A 7.521 7.521 0 0 1 125.098 58.887 A 6.215 6.215 0 0 1 122.583 58.403 Q 120.32 57.413 119.336 54.395 A 11.654 11.654 0 0 1 118.75 50.699 A 12.647 12.647 0 0 1 118.75 50.684 A 6.682 6.682 0 0 1 122.625 44.474 Q 125.362 42.998 130.033 42.537 A 38.183 38.183 0 0 1 130.664 42.48 A 48.131 48.131 0 0 1 133.997 42.297 A 54.521 54.521 0 0 1 135.156 42.285 Z M 22.266 7.715 A 5.973 5.973 0 0 0 21.924 5.639 Q 21.338 4.048 19.749 3.106 A 6.843 6.843 0 0 0 19.238 2.832 A 6.672 6.672 0 0 0 18.091 2.466 A 5.163 5.163 0 0 0 16.992 2.344 A 5.777 5.777 0 0 0 14.873 2.713 Q 13.395 3.291 12.482 4.775 A 6.97 6.97 0 0 0 12.109 5.469 A 5.368 5.368 0 0 0 11.621 7.715 Q 11.621 11.018 14.314 12.444 A 6.836 6.836 0 0 0 14.844 12.695 Q 15.918 13.086 16.992 13.086 A 5.745 5.745 0 0 0 19.015 12.749 Q 20.859 12.061 21.777 9.961 A 5.368 5.368 0 0 0 22.266 7.715 Z" vector-effect="non-scaling-stroke"/></g></svg>


            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" id="inverter_icon" x="31.5%" y="35%" width="17%" height="17%" viewBox="0 0 74 91"  preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,91.000000) scale(0.100000,-0.100000)" fill="${inverter_colour}" stroke="none"> <path d="M35 887 l-27 -23 0 -404 0 -404 27 -23 c26 -23 28 -23 329 -23 284 0 305 1 327 19 l24 19 0 412 0 412 -24 19 c-22 18 -43 19 -327 19 -301 0 -303 0 -329 -23z m585 -157 l0 -80 -255 0 -255 0 0 80 0 80 255 0 255 0 0 -80z m-242 -229 c44 -34 40 -46 -14 -46 -60 0 -97 -38 -93 -94 5 -64 -23 -80 -35 -20 -9 44 24 113 63 134 35 18 34 15 21 50 -11 29 -14 30 58 -24z m110 -129 c4 -51 -19 -97 -59 -117 -27 -14 -30 -20 -23 -48 l6 -31 -51 43 c-29 24 -49 46 -46 49 3 4 23 5 44 3 58 -4 95 32 97 95 3 60 1 57 17 52 6 -3 13 -23 15 -46z"/> </g> </svg>

          <svg id="multi" x="34%" y="35%"  width="18%" height="18%" class="${
            inverter_modern === "multi" ? "" : "st12"
          }"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" > <g transform="matrix(1 0 0 1 0 0)"> <image  x="0" y="0" xlink:href="data:image/png;base64,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" preserveAspectRatio="none" width="55" height="70"/> </g> </svg>

          <image x="34%" y="35%" width="11.5%" height="17%" class="${
            inverter_modern === "sunsynk" ? "" : "st12"
          }" xlink:href="data:image/png;base64,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" preserveAspectRatio="none"/>

          <svg id="axpert" x="31%" y="34%" width="16%" height="19%"  viewBox="0 0 208 232" enable-background="new 0 0 208 232" xml:space="preserve" class="${
            inverter_modern === "axpert" ? "" : "st12"
          }" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ><g> <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M9.6,8.6c63.206,0,126.411,0,189.617,0 c0,70.806,0,141.612,0,212.418c-63.206,0-126.411,0-189.616,0C9.6,150.212,9.6,79.406,9.6,8.6z M196.024,162.004 c-60.813,0-121.162,0-181.987,0c0,1.14,0.001,2.302,0,3.464c-0.01,14.597,0.064,29.194-0.101,43.788 c-0.034,3.04,1.153,4.239,3.911,4.303c4.994,0.116,9.989,0.172,14.984,0.248c2.171,0.033,3.664,0.453,2.117,3.101 c-0.291,0.497-0.042,1.31-0.042,2.105c1.979,0,3.847,0,5.925,0c-0.165-1.657-0.312-3.144-0.46-4.63 c1.645-0.151,3.29-0.302,4.451-0.409c0.804,1.675,1.378,2.87,1.953,4.065c0.688-1.201,1.376-2.402,2.333-4.072 c1.171,0.145,3.167-0.132,4.309,0.727c0.711,0.535,0.132,2.786,0.132,4.288c1.966,0,3.817,0,5.684,0 c-0.106-1.665-0.674-4.197-0.207-4.405c1.49-0.663,3.365-0.463,5.068-0.595c0.38,3.82,0.38,3.82,2.37,3.772 c0.149-1.137,0.299-2.282,0.44-3.358c3.193,0,6.136,0,9.361,0c0,1.432-0.197,2.661,0.067,3.781 c0.184,0.776,0.979,1.979,1.542,2.002c4.15,0.171,8.312,0.093,12.542,0.093c0.174-2.148,0.322-3.986,0.464-5.74 c2.148,0,3.99,0,5.838,0c0.217,1.4,0.185,2.666,0.646,3.714c0.372,0.845,1.311,1.994,2.047,2.032 c3.972,0.199,7.959,0.094,12.033,0.094c0.531-2.119,1.005-4.011,1.456-5.813c5.218,0,10.281,0,15.239,0 c0.329,1.371,0.424,2.601,0.932,3.625c0.414,0.838,1.236,1.896,2.025,2.04c1.793,0.327,3.678,0.162,5.524,0.177 c5.994,0.045,5.994,0.041,7.214-5.851c2.811,0,5.652,0,8.361,0c0.346,1.348,0.438,2.611,0.997,3.617 c0.488,0.878,1.448,2.002,2.29,2.084c2.842,0.273,5.741-0.059,8.585,0.206c2.718,0.253,3.421-1.373,3.888-3.407 c0.173-0.752,0.12-1.556,0.19-2.654c1.271,0,2.449,0.027,3.626-0.004c6.984-0.188,13.969-0.388,20.953-0.585 c2.508-0.07,3.614-1.054,3.584-3.863c-0.164-14.994-0.11-29.992-0.143-44.987C196.166,163.979,196.075,163.005,196.024,162.004z M148.473,89.331c0.096-24.013-19.448-43.832-43.386-43.996c-24.463-0.167-44.235,19.684-44.254,44.431 c-0.018,23.663,19.737,43.189,43.778,43.271C128.953,133.118,148.375,113.766,148.473,89.331z M195.934,17.412 c0.554-3.84-0.26-5-4.556-5.171c-4.59-0.182-9.19-0.139-13.785-0.137c-50.891,0.031-101.78,0.058-152.67,0.152 c-2.868,0.005-5.767,0.427-8.584,0.989c-0.899,0.179-2.16,1.366-2.266,2.215c-0.459,3.703-0.72,7.45-0.75,11.183 c-0.104,12.897-0.084,25.795-0.095,38.693c0,0.77,0.138,1.539,0.211,2.309c0.79-0.984,0.976-1.925,0.99-2.871 c0.224-14.091,0.439-28.182,0.623-42.274c0.052-3.99,0.253-4.517,4.382-4.727c8.172-0.416,16.358-0.727,24.539-0.75 c45.883-0.124,91.766-0.167,137.648-0.18C186.373,16.841,191.125,17.212,195.934,17.412z M107.439,149.987 c-1.444,0.819-3.018,1.462-3.648-0.926c-2.974,1.634-3.905,3.923-2.67,6.141c1.161,2.086,3.99,2.761,5.971,1.424 C109.257,155.164,109.421,152.924,107.439,149.987z M196.761,66.904c0.142,0,0.282,0,0.423,0c0-13.992,0-27.985,0-41.977 c-0.141,0-0.281,0-0.423,0C196.761,38.92,196.761,52.913,196.761,66.904z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M196.024,162.004c0.051,1.001,0.142,1.976,0.144,2.952 c0.032,14.995-0.021,29.993,0.143,44.987c0.03,2.81-1.076,3.793-3.584,3.863c-6.984,0.197-13.969,0.397-20.953,0.585 c-1.177,0.031-2.355,0.004-3.626,0.004c-0.07,1.099-0.018,1.902-0.19,2.654c-0.467,2.034-1.17,3.66-3.888,3.407 c-2.844-0.265-5.743,0.067-8.585-0.206c-0.842-0.082-1.802-1.206-2.29-2.084c-0.559-1.006-0.651-2.27-0.997-3.617 c-2.709,0-5.551,0-8.361,0c-1.22,5.892-1.22,5.896-7.214,5.851c-1.847-0.015-3.731,0.15-5.524-0.177 c-0.789-0.144-1.611-1.202-2.025-2.04c-0.508-1.024-0.603-2.254-0.932-3.625c-4.958,0-10.021,0-15.239,0 c-0.451,1.802-0.925,3.693-1.456,5.813c-4.074,0-8.061,0.105-12.033-0.094c-0.736-0.038-1.675-1.188-2.047-2.032 c-0.461-1.048-0.429-2.313-0.646-3.714c-1.848,0-3.69,0-5.838,0c-0.142,1.754-0.291,3.592-0.464,5.74 c-4.23,0-8.392,0.078-12.542-0.093c-0.563-0.022-1.359-1.226-1.542-2.002c-0.265-1.12-0.067-2.35-0.067-3.781 c-3.225,0-6.167,0-9.361,0c-0.141,1.076-0.291,2.222-0.44,3.358c-1.99,0.048-1.99,0.048-2.37-3.772 c-1.704,0.132-3.578-0.068-5.068,0.595c-0.467,0.208,0.101,2.74,0.207,4.405c-1.867,0-3.718,0-5.684,0 c0-1.502,0.58-3.753-0.132-4.288c-1.142-0.858-3.137-0.582-4.309-0.727c-0.957,1.67-1.645,2.871-2.333,4.072 c-0.575-1.195-1.149-2.391-1.953-4.065c-1.161,0.107-2.806,0.258-4.451,0.409c0.148,1.486,0.295,2.973,0.46,4.63 c-2.079,0-3.946,0-5.925,0c0-0.796-0.249-1.608,0.042-2.105c1.547-2.647,0.054-3.067-2.117-3.101 c-4.995-0.076-9.99-0.132-14.984-0.248c-2.758-0.063-3.945-1.263-3.911-4.303c0.165-14.594,0.09-29.191,0.101-43.788 c0.001-1.162,0-2.324,0-3.464C74.863,162.004,135.211,162.004,196.024,162.004z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M148.473,89.331c-0.098,24.435-19.52,43.787-43.862,43.705 c-24.041-0.081-43.796-19.607-43.778-43.271c0.019-24.747,19.792-44.598,44.254-44.431 C129.024,45.499,148.568,65.318,148.473,89.331z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M195.934,17.412c-4.809-0.2-9.561-0.57-14.313-0.569 c-45.883,0.014-91.766,0.057-137.648,0.18c-8.181,0.022-16.367,0.334-24.539,0.75c-4.129,0.21-4.33,0.737-4.382,4.727 c-0.184,14.092-0.399,28.183-0.623,42.274c-0.015,0.945-0.2,1.887-0.99,2.871c-0.073-0.77-0.212-1.539-0.211-2.309 c0.011-12.898-0.008-25.796,0.095-38.693c0.03-3.733,0.291-7.48,0.75-11.183c0.105-0.849,1.367-2.036,2.266-2.215 c2.818-0.562,5.716-0.983,8.584-0.989c50.89-0.094,101.78-0.121,152.67-0.152c4.595-0.002,9.195-0.045,13.785,0.137 C195.674,12.412,196.487,13.572,195.934,17.412z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M107.439,149.987c1.981,2.937,1.817,5.177-0.348,6.639 c-1.98,1.337-4.81,0.662-5.971-1.424c-1.234-2.218-0.304-4.507,2.67-6.141C104.422,151.449,105.995,150.807,107.439,149.987z M104.689,150.58c-0.806,1.157-1.695,1.891-1.581,2.399c0.167,0.742,1.054,1.323,1.635,1.974c0.559-0.567,1.567-1.136,1.563-1.699 C106.303,152.53,105.486,151.812,104.689,150.58z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M196.761,66.904c0-13.992,0-27.984,0-41.977c0.142,0,0.282,0,0.423,0 c0,13.992,0,27.984,0,41.977C197.043,66.904,196.902,66.904,196.761,66.904z"/> <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M104.689,150.58c0.797,1.231,1.613,1.95,1.618,2.674 c0.004,0.563-1.005,1.132-1.563,1.699c-0.581-0.65-1.468-1.231-1.635-1.974C102.995,152.471,103.884,151.737,104.689,150.58z"/> </g> </svg>

          <svg id="wks_max" x="34%" y="35%" class="${
            inverter_modern === "wks_max" ? "" : "st12"
          }" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="matrix(1.3333334 0 0 1.3333334 0 0)"> <image  x="0" y="0" width="42" height="53" xlink:href="data:image/png;base64,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" preserveAspectRatio="none" /></g></svg>

          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
          id="wks1"  x="34%" y="35%" width="30%" height="60%" class="${
            inverter_modern === "wks" ? "" : "st12"
          }" >
          <g transform="matrix(1.3333334 0 0 1.3333334 0 0)">
              <image  x="0" y="0" width="42" height="53" xlink:href="data:image/png;base64,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" preserveAspectRatio="none" />
          </g>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
          id="wks1"  x="34%" y="35%" width="30%" height="60%" class="${
            inverter_modern === "wksold" ? "" : "st12"
          }" >
          <g transform="matrix(1.3333334 0 0 1.3333334 0 0)">
              <image  x="0" y="0"  width="42" height="55" xlink:href="data:image/png;base64,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" preserveAspectRatio="none" />
          </g>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
          id="wks_max" x="34%" y="35%"   class="${
            inverter_modern === "wks_maxold" ? "" : "st12"
          }" >
          <g transform="matrix(1.3333334 0 0 1.3333334 0 0)">
              <image  x="0" y="0" width="42" height="55" xlink:href="data:image/png;base64,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" preserveAspectRatio="none" />
          </g>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
          id="multi_rs" x="34%" y="35%"   class="${
            inverter_modern === "multi_rs" ? "" : "st12"
          }" >
          <g transform="matrix(1.3333334 0 0 1.3333334 0 0)">
              <image  x="0" y="0" width="42" height="53" xlink:href="data:image/png;base64,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" preserveAspectRatio="none" />
          </g>
          </svg>



            <a href="#" @click=${(e) =>
              this.handlePopup(e, inverter_prog.entityID)}>
              <svg xmlns="http://www.w3.org/2000/svg" id="prog_grid_on" x="323" y="243" width="20" height="18" viewBox="0 0 24 24"><path display="${
                inverter_prog.show === "no" ||
                config.entities.use_timer_248 === "none"
                  ? "none"
                  : ""
              }" class="${
        inverter_prog.charge === "none" ? "st12" : ""
      }" fill="${inverter_colour}" d="M11.5 19h1v-1.85l3.5-3.5V9H8v4.65l3.5 3.5V19Zm-2 2v-3L6 14.5V9q0-.825.588-1.413T8 7h1L8 8V3h2v4h4V3h2v5l-1-1h1q.825 0 1.413.588T18 9v5.5L14.5 18v3h-5Zm2.5-7Z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" id="prog_grid_off" x="323" y="243" width="20" height="18" viewBox="0 0 24 24"><path display="${
                inverter_prog.show === "no" ||
                config.entities.use_timer_248 === "none"
                  ? "none"
                  : ""
              }" class="${
        inverter_prog.charge === "none" ? "" : "st12"
      }" fill="${inverter_colour}" d="M10 3H8v1.88l2 2zm6 6v3.88l1.8 1.8l.2-.2V9c0-1.1-.9-2-2-2V3h-2v4h-3.88l2 2H16zM4.12 3.84L2.71 5.25L6 8.54v5.96L9.5 18v3h5v-3l.48-.48l4.47 4.47l1.41-1.41L4.12 3.84zm8.38 13.33V19h-1v-1.83L8 13.65v-3.11l5.57 5.57l-1.07 1.06z"/></svg>
            </a>

            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.day_pv_energy_108)}>
              <text id="daily_solar_value" x="20%" y="2%" class="st14 left-align" display="${
                solar_showdaily === "no" ||
                config.show_solar === "no" ||
                remaining_solar != "false"
                  ? "none"
                  : ""
              }" fill="${solar_colour}" >${
        parseFloat(stateObj4.state).toFixed(1)
          ? parseFloat(stateObj4.state).toFixed(1)
          : "0"
      } kWh</text>
            </a>
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.day_pv_energy_108)}>
              <text id="remaining_solar_value" x="18.5%" y="2.5%" class="st14 left-align" display="${
                solar_showdaily === "no" ||
                config.show_solar === "no" ||
                remaining_solar === "false"
                  ? "none"
                  : ""
              }" fill="${solar_colour}" >${
        parseFloat(stateObj4.state).toFixed(1)
          ? parseFloat(stateObj4.state).toFixed(1)
          : "0"
      } kWh/ ${remaining_solar} kWh / ${remaining_solar} kWh / ${effsolar.toFixed(
        2
      )} / ${wm2.toFixed(0)}</text>
            </a>


            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.day_battery_charge_70)}>
              <text id="daily_bat_charge_value" x="0%" y="92%" class= "st14 left-align" display="${
                battery_showdaily === "no" ? "none" : ""
              }" fill="${battery_colour}">${
        parseFloat(stateObj1.state).toFixed(1)
          ? parseFloat(stateObj1.state).toFixed(1)
          : "0"
      } kWh</text>
            </a> 
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.day_battery_discharge_71)}>
              <text id="daily_bat_discharge_value" x="0%" y="97%" class="st14 left-align" display="${
                battery_showdaily === "no" ? "none" : ""
              }" fill="${battery_colour}" >${
        parseFloat(stateObj.state).toFixed(1)
          ? parseFloat(stateObj.state).toFixed(1)
          : "0"
      } kWh</text>
            </a>

            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.day_bat1_charge)}>
            <text id="daily_bat1_charge_value" x="17%" y="99%"  class= "st15 left-align" display="${
              battery_showdaily === "no" ? "none" : ""
            }" fill="${battery_colour}">${
        parseFloat(stateObj68.state).toFixed(1)
          ? parseFloat(stateObj68.state).toFixed(1)
          : "0"
      } kWh/${
        parseFloat(stateObj67.state).toFixed(1)
          ? parseFloat(stateObj67.state).toFixed(1)
          : "0"
      } kWh</text>
            </a> 
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.day_bat2_charge)}>
            <text id="daily_bat2_charge_value" x="32%" y="99%"  class= "st15 left-align" display="${
              config.entities.battery2_soc_184 === "none" ? "none" : ""
            }" fill="${battery_colour}">${
        parseFloat(stateObj70.state).toFixed(1)
          ? parseFloat(stateObj70.state).toFixed(1)
          : "0"
      } kWh/${
        parseFloat(stateObj69.state).toFixed(1)
          ? parseFloat(stateObj69.state).toFixed(1)
          : "0"
      } kWh</text>
            </a> 
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.day_bat3_charge)}>
            <text id="daily_bat3_charge_value" x="47%" y="99%"  class= "st15 left-align" display="${
              config.entities.battery3_soc_184 === "none" ? "none" : ""
            }" fill="${battery_colour}">${
        parseFloat(stateObj72.state).toFixed(1)
          ? parseFloat(stateObj72.state).toFixed(1)
          : "0"
      } kWh/${
        parseFloat(stateObj71.state).toFixed(1)
          ? parseFloat(stateObj71.state).toFixed(1)
          : "0"
      } kWh</text>
            </a> 

            <!--
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.day_load_energy_84)}>
              <text id="daily_load_value" x="${
                additional_load === "two" ? "365" : "400.4"
              }" y="${
        additional_load === "two" ? "168" : "267.9"
      }" class="st10 left-align" display="${
        load_showdaily === "no" ? "none" : ""
      }" fill="${load_colour}" >${
        parseFloat(stateObj2.state).toFixed(1)
          ? parseFloat(stateObj2.state).toFixed(1)
          : "0"
      } kWh</text>
            </a>
            -->

            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.day_load_energy_84)}>
              <text id="daily_load_value" x="58%" y="36%" class="st14 left-align" display="${
                load_showdaily === "no" ? "none" : ""
              }" fill="${load_colour}" >${
        parseFloat(stateObj2.state).toFixed(1)
          ? parseFloat(stateObj2.state).toFixed(1)
          : "0"
      } kWh</text>
              </a>

            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.day_grid_import_76)}>
              <text id="daily_grid_buy_value" x="0%" y="34%" class="st14 left-align" display="${
                grid_showdailybuy === "no" ? "none" : ""
              }" fill="${grid_colour}" >${
        parseFloat(stateObj3.state).toFixed(1)
          ? parseFloat(stateObj3.state).toFixed(1)
          : "0"
      } kWh</text>
            </a>
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.day_grid_export_77)}>
              <text id="daily_grid_sell_value" x="0%" y="29%" class="st14 left-align" display="${
                grid_showdailysell === "no" ? "none" : ""
              }" fill="${grid_colour}" >${
        parseFloat(stateObj33.state).toFixed(1)
          ? parseFloat(stateObj33.state).toFixed(1)
          : "0"
      } kWh</text>
            </a>
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.inverter_voltage_154)}>
              <text id="inverter_voltage_154" x="46%" y="37%" display="${
                config.entities.inverter_voltage_154 === "none" ||
                !config.entities.inverter_voltage_154
                  ? "none"
                  : ""
              }" class="st3 left-align" fill="${inverter_colour}" >${inverter_voltage} V</text>
            </a>
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.load_frequency_192)}>
              <text id="load_frequency_192" x="46%" y="39%" display="${
                config.entities.load_frequency_192 === "none" ||
                !config.entities.load_frequency_192
                  ? "none"
                  : ""
              }" class="st3 left-align" fill="${inverter_colour}">${load_frequency} Hz</text>
            </a>
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.inverter_current_164)}>
              <text id="inverter_current_164" x="46%" y="41%" display="${
                config.entities.inverter_current_164 === "none" ||
                !config.entities.inverter_current_164
                  ? "none"
                  : ""
              }" class="st3 left-align" fill="${inverter_colour}">${inverter_current} A</text>
            </a>

            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.battery_voltage_183)}>
              <text id="battery_voltage_183" x="40%" y="55%" display="${
                config.entities.battery_voltage_183 === "none" ||
                !config.entities.battery_voltage_183
                  ? "none"
                  : ""
              }" fill=${battery_colour} class="st3 left-align" st8">${battery_voltage} V</text>
            </a>
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.battery_soc_184)}>
              <text id="battery_soc_184" x="47%" y="56%" display="${
                config.entities.battery_soc_184 === "none" ? "none" : ""
              }" fill=${battery_colour} class="st13 st8 left-align">${
        parseInt(stateObj12.state) ? parseInt(stateObj12.state) : "0"
      } %</text>
            </a> 
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.battery_soc_184)}>
              <text id="battery_soc_184" x="345" y="250" fill=${battery_colour} class="st13 st8 left-align" display="${
        inverter_prog.show === "no" ||
        config.entities.battery_soc_184 === "none"
          ? "none"
          : ""
      }"> | ${inverter_prog.capacity ? inverter_prog.capacity : "0"} %</text>
            </a>  
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.battery_power_190)}>
              <text id="battery_power_190" x="40%" y="61.5%" display="${
                config.entities.battery_power_190 === "none" ? "none" : ""
              }" fill=${battery_colour} class="${
        font === "no" ? "st14" : "st4"
      } st8">${
        battery_power < "0" ? battery_power * -1 : battery_power
      } W</text>
            </a>
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.battery_current_191)}>
            <text id="battery_current_191" x="40%" y="57%" display="${
              config.entities.battery_current_191 === "none" ? "none" : ""
            }" fill=${battery_colour} class="st3 left-align" st8">${
        stateObj35.state ? stateObj35.state : "0"
      } A</text>
            </a>

            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.battery1_voltage_183)}>
              <text id="battery1_voltage_183" x="17%" y="74%" display="${
                config.entities.battery1_voltage_183 === "none" ||
                !config.entities.battery1_voltage_183
                  ? "none"
                  : ""
              }" fill=${battery_colour} class="st3 left-align" st8">${
        stateObj52.state ? stateObj52.state : "0"
      } V</text>
            </a>
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.battery1_soc_184)}>
              <text id="battery1_soc_184" x="17%" y="82%" display="${
                config.entities.battery1_soc_184 === "none" ? "none" : ""
              }" fill=${battery_colour} class="st14 st8 left-align">${
        parseInt(stateObj53.state) ? parseInt(stateObj53.state) : "0"
      } %</text>
            </a> 
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.battery1_soc_184)}>
              <text id="battery1_soc_184" x="130" y="385" fill=${battery_colour} class="st13 st8 left-align" display="${
        inverter_prog.show === "no" ||
        config.entities.battery1_soc_184 === "none"
          ? "none"
          : ""
      }"> | ${inverter_prog.capacity ? inverter_prog.capacity : "0"} %</text>
            </a>  
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.battery1_power)}>
              <text id="battery1_power" x="20%" y="78%" display="${
                config.entities.battery1_power === "none" ? "none" : ""
              }" fill=${battery_colour} class="${
        font === "no" ? "st14" : "st4"
      } st8 left-align">${
        parseInt(stateObj54.state) ? parseInt(stateObj54.state) : "0"
      } W</text>
            </a>
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.battery1_current_191)}>
            <text id="battery1_current_191" x="25%" y="74%" display="${
              config.entities.battery1_current_191 === "none" ? "none" : ""
            }" fill=${battery_colour} class="st3 left-align" st8">${
        stateObj61.state ? stateObj61.state : "0"
      } A</text>
            </a>

            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.battery2_voltage_183)}>
              <text id="battery2_voltage_183" x="32%" y="74%" display="${
                config.entities.battery2_voltage_183 === "none" ||
                !config.entities.battery2_voltage_183
                  ? "none"
                  : ""
              }" fill=${battery_colour} class="st3 left-align" st8">${
        stateObj55.state ? stateObj55.state : "0"
      } V</text>
            </a>
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.battery2_soc_184)}>
              <text id="battery2_soc_184" x="32%" y="82%" display="${
                config.entities.battery2_soc_184 === "none" ? "none" : ""
              }" fill=${battery_colour} class="st14 st8 left-align">${
        parseInt(stateObj56.state) ? parseInt(stateObj56.state) : "0"
      } %</text>
            </a> 
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.battery2_soc_184)}>
              <text id="battery2_soc_184" x="290" y="385" fill=${battery_colour} class="st13 st8 left-align" display="${
        inverter_prog.show === "no" ||
        config.entities.battery2_soc_184 === "none"
          ? "none"
          : ""
      }"> | ${inverter_prog.capacity ? inverter_prog.capacity : "0"} %</text>
            </a>  
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.battery2_power)}>
              <text id="battery2_power" x="35%" y="78%" display="${
                config.entities.battery2_power === "none" ? "none" : ""
              }" fill=${battery_colour} class="${
        font === "no" ? "st14" : "st4"
      } st8 left-align">${
        parseInt(stateObj57.state) ? parseInt(stateObj57.state) : "0"
      } W</text>
            </a>
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.battery2_current_191)}>
            <text id="battery2_current_191" x="40%" y="74%" display="${
              config.entities.battery2_current_191 === "none" ? "none" : ""
            }" fill=${battery_colour} class="st3 left-align" st8">${
        stateObj62.state ? stateObj62.state : "0"
      } A</text>
            </a>

            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.battery3_voltage_183)}>
              <text id="battery3_voltage_183" x="47%" y="74%" display="${
                config.entities.battery3_voltage_183 === "none" ||
                !config.entities.battery3_voltage_183
                  ? "none"
                  : ""
              }" fill=${battery_colour} class="st3 left-align" st8">${
        stateObj58.state ? stateObj58.state : "0"
      } V</text>
            </a>
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.battery3_soc_184)}>
              <text id="battery3_soc_184" x="47%" y="82%" display="${
                config.entities.battery3_soc_184 === "none" ? "none" : ""
              }" fill=${battery_colour} class="st14 st8 left-align">${
        parseInt(stateObj59.state) ? parseInt(stateObj59.state) : "0"
      } %</text>
            </a> 
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.battery3_soc_184)}>
              <text id="battery3_soc_184" x="450" y="385" fill=${battery_colour} class="st13 st8 left-align" display="${
        inverter_prog.show === "no" ||
        config.entities.battery3_soc_184 === "none"
          ? "none"
          : ""
      }"> | ${inverter_prog.capacity ? inverter_prog.capacity : "0"} %</text>
            </a>  
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.battery3_power)}>
              <text id="battery3_power" x="50%" y="78%" display="${
                config.entities.battery3_power === "none" ? "none" : ""
              }" fill=${battery_colour} class="${
        font === "no" ? "st14" : "st4"
      } st8 left-align">${
        parseInt(stateObj60.state) ? parseInt(stateObj60.state) : "0"
      } W</text>
            </a>
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.battery3_current_191)}>
            <text id="battery3_current_191" x="55%" y="74%" display="${
              config.entities.battery3_current_191 === "none" ? "none" : ""
            }" fill=${battery_colour} class="st3 left-align" st8">${
        stateObj63.state ? stateObj63.state : "0"
      } A</text></a>

            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.pv1_voltage_109)}>
              <text id="pv1_voltage" x="31.5%" y="19%" class="st3 left-align" display="${
                config.show_solar === "no" ||
                !config.entities.pv1_voltage_109 ||
                config.entities.pv1_voltage_109 === "none"
                  ? "none"
                  : ""
              }" fill="${solar_colour}" >${
        stateObj16.state ? stateObj16.state : "0"
      } V</text></a><svg x="89%" y="94%" width="10%" height="10%" viewBox="0 0 570.118 82.033" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="12pt" stroke="#000" stroke-width="0.5mm" fill="#fff" style="stroke:#000;stroke-width:0.1mm;fill:#000"><path fill="#0589b6" d="M 149.317 75 L 148.145 72.559 A 41 41 0 0 1 136.909 76.175 A 36.833 36.833 0 0 1 130.957 76.66 A 33.385 33.385 0 0 1 118.032 74.217 A 31.364 31.364 0 0 1 107.715 67.187 A 32.983 32.983 0 0 1 98.07 45.589 A 44.298 44.298 0 0 1 97.949 42.285 A 42.351 42.351 0 0 1 99.231 31.599 A 31.282 31.282 0 0 1 106.348 18.262 Q 114.649 9.277 128.125 9.277 A 28.858 28.858 0 0 1 140.574 11.928 A 28.532 28.532 0 0 1 148.731 17.773 A 32.037 32.037 0 0 1 157.235 34.245 A 46.425 46.425 0 0 1 158.106 43.457 Q 158.106 49.679 156.289 53.644 A 11.242 11.242 0 0 1 151.66 58.887 A 8.065 8.065 0 0 1 148.784 59.961 A 7.656 7.656 0 0 1 147.559 60.059 Q 142.578 59.863 142.481 54.102 L 142.481 36.328 A 17.659 17.659 0 0 0 141.611 30.827 Q 139.662 25.173 133.354 23.576 A 22.798 22.798 0 0 0 127.93 22.949 A 33.441 33.441 0 0 0 123.345 23.239 Q 116.956 24.127 114.453 27.734 Q 113.623 29.118 113.577 30.414 A 4.281 4.281 0 0 0 113.574 30.566 Q 114.113 33.26 116.551 33.807 A 5.359 5.359 0 0 0 116.992 33.887 A 5.022 5.022 0 0 0 118.572 33.655 Q 120.084 33.155 120.77 31.578 A 5.567 5.567 0 0 0 120.996 30.957 A 17.975 17.975 0 0 1 121.051 30.743 Q 121.114 30.504 121.203 30.187 A 64.392 64.392 0 0 1 121.289 29.883 A 11.143 11.143 0 0 1 121.747 28.381 Q 122.534 26.367 123.926 25.781 A 6.11 6.11 0 0 1 125.41 25.325 Q 126.128 25.195 126.953 25.195 Q 135.031 25.39 135.156 34.216 A 19.409 19.409 0 0 1 135.156 34.277 L 135.156 39.844 A 80.694 80.694 0 0 0 127.996 40.174 Q 116.479 41.268 113.018 45.968 A 7.78 7.78 0 0 0 112.793 46.289 A 9.43 9.43 0 0 0 111.329 49.956 A 12.823 12.823 0 0 0 111.133 52.246 A 12.334 12.334 0 0 0 111.665 56.002 Q 112.876 59.797 116.836 61.439 A 13.059 13.059 0 0 0 117.871 61.816 A 15.566 15.566 0 0 0 122.168 62.402 Q 128.711 62.402 133.008 57.715 A 11.064 11.064 0 0 0 134.45 55.807 A 9.442 9.442 0 0 0 135.059 54.59 A 8.169 8.169 0 0 0 139.337 60.733 A 13.247 13.247 0 0 0 142.285 61.914 A 15.434 15.434 0 0 0 145.668 62.472 A 18.015 18.015 0 0 0 146.68 62.5 A 17.714 17.714 0 0 0 153.472 61.237 A 16.489 16.489 0 0 0 159.961 56.348 Q 164.453 50.977 164.453 42.48 Q 164.453 23.34 151.172 13.477 A 35.372 35.372 0 0 0 132.534 6.68 A 44.712 44.712 0 0 0 129.004 6.543 A 46.45 46.45 0 0 0 116.082 8.239 A 33.436 33.436 0 0 0 97.949 20.898 A 38.217 38.217 0 0 0 90.822 40.308 A 48.58 48.58 0 0 0 90.625 44.727 A 36.456 36.456 0 0 0 92.887 57.8 A 32.495 32.495 0 0 0 102.442 71.094 A 38.239 38.239 0 0 0 126.36 80.14 A 48.514 48.514 0 0 0 128.223 80.176 A 45.502 45.502 0 0 0 149.317 75 Z M 183.887 24.414 L 191.211 24.414 L 191.211 21.973 L 171.875 21.973 L 171.875 24.414 L 176.27 24.414 L 188.477 57.129 Q 190.527 62.695 192.676 63.574 Q 193.561 63.896 194.777 63.953 A 11.503 11.503 0 0 0 195.313 63.965 L 197.266 63.965 L 205.762 38.379 L 212.305 57.129 Q 214.015 62.17 215.809 63.394 A 2.62 2.62 0 0 0 216.113 63.574 Q 216.777 63.84 217.757 63.925 A 11.519 11.519 0 0 0 218.75 63.965 L 220.313 63.965 L 232.129 27.93 A 13.268 13.268 0 0 1 232.575 26.731 Q 233.405 24.817 234.473 24.512 A 4.931 4.931 0 0 1 235.053 24.433 A 6.304 6.304 0 0 1 235.547 24.414 Q 236.529 24.414 237.124 24.128 A 1.497 1.497 0 0 0 237.988 23.047 A 4.931 4.931 0 0 0 238.067 22.467 A 6.304 6.304 0 0 0 238.086 21.973 L 223.633 21.973 L 223.633 24.414 L 230.469 24.414 L 219.629 58.105 L 208.203 24.414 L 215.039 24.414 L 215.039 21.973 L 200 21.973 L 204.395 34.375 L 196.289 58.398 L 183.887 24.414 Z M 437.109 61.035 L 432.227 61.035 L 432.227 39.941 A 20.105 20.105 0 0 1 432.82 34.893 A 12.857 12.857 0 0 1 438.379 27.051 A 10.394 10.394 0 0 1 441.131 25.756 A 8.879 8.879 0 0 1 443.652 25.391 Q 448.828 25.391 451.276 29.592 A 11.814 11.814 0 0 1 451.953 30.957 A 14.572 14.572 0 0 1 452.938 35.002 A 17.926 17.926 0 0 1 453.027 36.816 L 453.027 55.176 Q 453.027 58.382 451.933 59.748 A 2.598 2.598 0 0 1 450.879 60.547 A 5.838 5.838 0 0 1 450.015 60.772 Q 448.63 61.035 446.192 61.035 L 446.192 63.477 L 467.676 63.477 A 4.699 4.699 0 0 0 467.611 62.657 Q 467.367 61.287 466.211 61.133 Q 465.92 61.06 465.519 61.041 A 6.178 6.178 0 0 0 465.234 61.035 L 460.352 61.035 L 460.352 36.816 Q 460.352 26.172 453.32 22.363 Q 450.586 20.996 447.461 20.996 A 16.187 16.187 0 0 0 439.9 22.753 A 16.609 16.609 0 0 0 435.352 26.27 Q 433.301 28.516 432.227 31.348 L 432.227 0 L 417.578 0 L 417.578 2.441 L 424.902 2.441 L 424.902 55.176 A 12.133 12.133 0 0 1 424.781 56.968 Q 424.454 59.146 423.249 60.073 A 3.109 3.109 0 0 1 422.363 60.547 A 6.814 6.814 0 0 1 421.424 60.777 Q 419.991 61.035 417.578 61.035 L 417.578 63.477 L 439.551 63.477 A 4.699 4.699 0 0 0 439.486 62.657 Q 439.242 61.287 438.086 61.133 Q 437.795 61.06 437.394 61.041 A 6.178 6.178 0 0 0 437.109 61.035 Z M 348.633 61.035 L 344.238 61.035 L 344.238 46.582 L 349.609 41.602 L 363.379 63.477 L 376.367 63.477 A 4.699 4.699 0 0 0 376.302 62.657 Q 376.058 61.287 374.902 61.133 Q 374.611 61.06 374.211 61.041 A 6.178 6.178 0 0 0 373.926 61.035 L 370.41 61.035 L 354.688 36.816 L 363.867 28.223 Q 367.087 25.187 368.834 24.664 A 3.005 3.005 0 0 1 369.043 24.609 A 6.339 6.339 0 0 1 369.928 24.457 A 8.487 8.487 0 0 1 370.801 24.414 A 4.699 4.699 0 0 0 371.62 24.349 Q 372.991 24.105 373.145 22.949 Q 373.242 22.461 373.242 21.973 L 356.641 21.973 L 356.641 24.414 L 363.965 24.414 L 344.238 42.676 L 344.238 0 L 329.59 0 L 329.59 2.441 L 336.914 2.441 L 336.914 55.176 A 12.133 12.133 0 0 1 336.793 56.968 Q 336.466 59.146 335.261 60.073 A 3.109 3.109 0 0 1 334.375 60.547 A 6.814 6.814 0 0 1 333.435 60.777 Q 332.002 61.035 329.59 61.035 L 329.59 63.477 L 351.074 63.477 A 4.699 4.699 0 0 0 351.009 62.657 Q 350.765 61.287 349.609 61.133 Q 349.318 61.06 348.918 61.041 A 6.178 6.178 0 0 0 348.633 61.035 Z M 79.199 61.035 L 74.317 61.035 L 74.317 21.973 L 58.984 21.973 L 58.984 24.414 L 66.992 24.414 L 66.992 45.508 A 19.81 19.81 0 0 1 66.391 50.543 A 13.119 13.119 0 0 1 60.84 58.398 A 11.158 11.158 0 0 1 58.101 59.775 A 9.205 9.205 0 0 1 55.176 60.254 A 11.494 11.494 0 0 1 51.495 59.709 Q 47.936 58.508 46.548 54.666 A 13.989 13.989 0 0 1 45.899 52.051 A 19.35 19.35 0 0 1 45.731 50.266 A 23.303 23.303 0 0 1 45.703 49.121 L 45.703 21.973 L 30.859 21.973 L 30.859 24.414 L 38.379 24.414 L 38.379 47.656 Q 38.466 62.544 49.497 64.237 A 19.69 19.69 0 0 0 52.344 64.453 A 14.419 14.419 0 0 0 63.299 59.728 A 18.733 18.733 0 0 0 64.356 58.496 Q 66.113 56.25 67.188 53.516 L 67.871 63.477 L 81.641 63.477 A 4.699 4.699 0 0 0 81.576 62.657 Q 81.332 61.287 80.176 61.133 Q 79.884 61.06 79.484 61.041 A 6.178 6.178 0 0 0 79.199 61.035 Z M 544.336 79.59 L 537.5 79.59 L 537.5 59.375 Q 542.871 64.063 549.902 64.453 A 18.635 18.635 0 0 0 563.71 58.702 A 23.099 23.099 0 0 0 564.453 57.91 A 22.065 22.065 0 0 0 569.827 46.046 A 30.063 30.063 0 0 0 570.117 41.797 A 32.133 32.133 0 0 0 569.486 35.216 Q 568.147 28.819 563.965 24.902 A 14.903 14.903 0 0 0 553.898 21 A 19.11 19.11 0 0 0 553.516 20.996 Q 544.043 20.996 539.356 28.516 Q 538.184 30.469 537.402 32.617 L 536.914 21.973 L 522.852 21.973 L 522.852 24.414 L 530.176 24.414 L 530.176 73.73 A 12.133 12.133 0 0 1 530.054 75.523 Q 529.728 77.7 528.522 78.628 A 3.109 3.109 0 0 1 527.637 79.102 A 6.814 6.814 0 0 1 526.697 79.332 Q 525.264 79.59 522.852 79.59 L 522.852 82.031 L 546.777 82.031 A 4.699 4.699 0 0 0 546.712 81.212 Q 546.468 79.842 545.313 79.688 Q 545.021 79.615 544.621 79.596 A 6.178 6.178 0 0 0 544.336 79.59 Z M 408.887 20.41 L 408.887 32.617 L 406.348 32.617 Q 406.195 25.571 400.155 23.991 A 15.539 15.539 0 0 0 396.387 23.535 A 19.05 19.05 0 0 0 393.271 23.769 Q 391.686 24.033 390.486 24.595 A 6.038 6.038 0 0 0 387.305 27.832 A 6.287 6.287 0 0 0 386.817 30.273 Q 386.817 33.496 390.383 35.971 A 18.492 18.492 0 0 0 392.871 37.402 A 25.805 25.805 0 0 0 393.652 37.775 Q 394.971 38.379 397.168 39.258 A 67.61 67.61 0 0 1 400.794 40.851 Q 405.737 43.213 407.715 45.41 A 10.681 10.681 0 0 1 410.547 52.832 Q 410.547 58.998 405.443 61.96 A 16.241 16.241 0 0 1 402.149 63.379 A 21.055 21.055 0 0 1 397.213 64.368 A 25.362 25.362 0 0 1 395.117 64.453 Q 388.086 64.355 382.91 60.938 A 7.784 7.784 0 0 1 382.858 61.88 Q 382.652 63.556 381.641 63.867 Q 381.055 63.965 380.274 63.965 L 380.274 49.121 L 383.008 49.121 A 21.648 21.648 0 0 0 383.56 53.88 Q 385.175 60.53 391.493 61.609 A 15.416 15.416 0 0 0 393.945 61.816 A 17.142 17.142 0 0 0 397.171 61.535 Q 401.297 60.743 403.027 57.715 Q 403.906 56.25 403.906 54.492 A 5.757 5.757 0 0 0 402.463 50.739 Q 400.985 48.962 397.994 47.483 A 23.826 23.826 0 0 0 397.949 47.461 Q 396.727 46.803 393.967 45.602 A 161.457 161.457 0 0 0 393.75 45.508 Q 385.742 42.188 383.106 39.258 A 11.037 11.037 0 0 1 380.274 31.738 Q 380.274 26.481 384.792 23.661 A 15.766 15.766 0 0 1 387.695 22.266 A 20.528 20.528 0 0 1 393.515 21.048 A 24.19 24.19 0 0 1 395.117 20.996 A 25.545 25.545 0 0 1 400.597 21.558 A 19.377 19.377 0 0 1 406.25 23.73 Q 406.25 20.898 407.617 20.508 A 7.146 7.146 0 0 1 408.388 20.424 A 8.832 8.832 0 0 1 408.887 20.41 Z M 312.988 61.035 L 305.957 61.035 L 305.957 41.602 A 23.402 23.402 0 0 1 306.775 35.254 A 17.536 17.536 0 0 1 311.426 27.344 Q 313.112 25.735 314.377 25.328 A 2.771 2.771 0 0 1 315.039 25.195 A 2.428 2.428 0 0 1 316.484 25.697 Q 317.265 26.263 317.97 27.468 A 10.411 10.411 0 0 1 318.067 27.637 A 15.603 15.603 0 0 0 318.788 28.79 Q 319.544 29.879 320.251 30.385 A 2.443 2.443 0 0 0 320.996 30.762 A 3.69 3.69 0 0 0 322.15 30.957 A 3.522 3.522 0 0 0 322.168 30.957 A 4.546 4.546 0 0 0 323.646 30.733 Q 325.317 30.161 325.879 28.125 A 3.69 3.69 0 0 0 326.074 26.971 A 3.522 3.522 0 0 0 326.074 26.953 A 6.396 6.396 0 0 0 325.738 24.805 Q 324.846 22.292 321.582 21.582 A 10.169 10.169 0 0 0 320.4 21.414 A 8.438 8.438 0 0 0 319.727 21.387 Q 313.867 21.387 309.277 26.367 Q 307.129 28.711 305.859 31.641 L 305.469 21.973 L 291.309 21.973 L 291.309 24.414 L 298.633 24.414 L 298.633 55.176 A 12.133 12.133 0 0 1 298.511 56.968 Q 298.185 59.146 296.979 60.073 A 3.109 3.109 0 0 1 296.094 60.547 A 6.814 6.814 0 0 1 295.154 60.777 Q 293.721 61.035 291.309 61.035 L 291.309 63.477 L 315.43 63.477 A 4.699 4.699 0 0 0 315.365 62.657 Q 315.121 61.287 313.965 61.133 Q 313.674 61.06 313.273 61.041 A 6.178 6.178 0 0 0 312.988 61.035 Z M 21.289 21.973 L 6.152 21.973 L 6.152 24.414 L 13.965 24.414 L 13.965 70.117 A 36.055 36.055 0 0 1 13.749 73.187 Q 13.005 79.51 9.961 79.59 A 2.279 2.279 0 0 1 7.964 78.485 Q 7.565 77.883 7.324 76.953 Q 6.59 74.343 5.924 73.436 A 1.808 1.808 0 0 0 5.664 73.145 A 3.445 3.445 0 0 0 3.711 72.559 Q 1.001 72.559 0.213 74.815 A 4.827 4.827 0 0 0 0.098 75.195 Q 0 75.684 0 76.074 A 4.784 4.784 0 0 0 1.94 79.954 Q 2.683 80.549 3.71 81.033 A 12.331 12.331 0 0 0 4.199 81.25 Q 6.152 82.031 8.203 82.031 Q 14.942 82.031 18.652 75.977 A 18.175 18.175 0 0 0 20.671 70.747 Q 21.289 68.01 21.289 64.746 L 21.289 21.973 Z M 263.379 20.996 A 22.374 22.374 0 0 0 254.908 22.557 A 20.755 20.755 0 0 0 247.754 27.441 A 20.284 20.284 0 0 0 242.015 41.186 A 26.594 26.594 0 0 0 241.992 42.285 A 26.611 26.611 0 0 0 243.042 49.978 A 19.554 19.554 0 0 0 250.977 60.742 A 21.097 21.097 0 0 0 263.086 64.453 A 21.669 21.669 0 0 0 271.412 62.895 A 20.296 20.296 0 0 0 278.613 57.812 Q 284.277 51.758 284.277 42.676 A 26.344 26.344 0 0 0 283.3 35.284 A 19.01 19.01 0 0 0 275.195 24.414 Q 269.824 20.996 263.379 20.996 Z M 495.508 20.996 A 22.374 22.374 0 0 0 487.036 22.557 A 20.755 20.755 0 0 0 479.883 27.441 A 20.284 20.284 0 0 0 474.144 41.186 A 26.594 26.594 0 0 0 474.121 42.285 A 26.611 26.611 0 0 0 475.171 49.978 A 19.554 19.554 0 0 0 483.106 60.742 A 21.097 21.097 0 0 0 495.215 64.453 A 21.669 21.669 0 0 0 503.541 62.895 A 20.296 20.296 0 0 0 510.742 57.812 Q 516.406 51.758 516.406 42.676 A 26.344 26.344 0 0 0 515.429 35.284 A 19.01 19.01 0 0 0 507.324 24.414 Q 501.953 20.996 495.508 20.996 Z M 250.69 36.619 A 42.481 42.481 0 0 0 250.293 42.676 A 45.436 45.436 0 0 0 250.433 46.321 A 34.318 34.318 0 0 0 250.977 50.293 Q 252.683 58.167 257.695 60.75 A 12.239 12.239 0 0 0 263.379 62.012 A 13.437 13.437 0 0 0 266.992 61.523 A 10.262 10.262 0 0 0 270.867 59.311 Q 274.521 55.983 275.562 48.708 A 45.562 45.562 0 0 0 275.977 42.285 Q 275.977 39.453 275.684 37.109 A 31.555 31.555 0 0 0 275.326 34.917 Q 273.786 27.255 268.848 24.707 A 12.403 12.403 0 0 0 263.086 23.438 A 13.043 13.043 0 0 0 258.594 24.219 A 10.633 10.633 0 0 0 255.587 26.036 Q 251.743 29.341 250.69 36.619 Z M 482.819 36.619 A 42.481 42.481 0 0 0 482.422 42.676 A 45.436 45.436 0 0 0 482.562 46.321 A 34.318 34.318 0 0 0 483.106 50.293 Q 484.812 58.167 489.824 60.75 A 12.239 12.239 0 0 0 495.508 62.012 A 13.437 13.437 0 0 0 499.121 61.523 A 10.262 10.262 0 0 0 502.996 59.311 Q 506.65 55.983 507.691 48.708 A 45.562 45.562 0 0 0 508.106 42.285 Q 508.106 39.453 507.813 37.109 A 31.555 31.555 0 0 0 507.455 34.917 Q 505.915 27.255 500.977 24.707 A 12.403 12.403 0 0 0 495.215 23.438 A 13.043 13.043 0 0 0 490.723 24.219 A 10.633 10.633 0 0 0 487.716 26.036 Q 483.872 29.341 482.819 36.619 Z M 555.739 26.307 A 9.929 9.929 0 0 0 550.391 24.902 A 10.657 10.657 0 0 0 543.945 27.051 A 14.193 14.193 0 0 0 539.483 32.794 Q 538.383 35.267 537.864 38.436 A 38.461 38.461 0 0 0 537.402 44.629 Q 537.402 50.098 538.867 54.102 A 16.086 16.086 0 0 0 540.275 57.094 Q 543.29 62.012 549.219 62.012 A 12.853 12.853 0 0 0 549.383 62.011 A 11.131 11.131 0 0 0 554.102 60.937 Q 560.008 58.022 561.393 48.923 A 41.047 41.047 0 0 0 561.817 42.773 A 40.863 40.863 0 0 0 561.666 39.191 A 30.452 30.452 0 0 0 561.133 35.547 A 26.565 26.565 0 0 0 560.867 34.408 Q 559.36 28.557 555.739 26.307 Z M 135.156 42.285 L 135.156 49.121 A 15.854 15.854 0 0 1 133.655 53.182 A 11.456 11.456 0 0 1 128.711 58.008 A 9.56 9.56 0 0 1 126.88 58.667 A 7.521 7.521 0 0 1 125.098 58.887 A 6.215 6.215 0 0 1 122.583 58.403 Q 120.32 57.413 119.336 54.395 A 11.654 11.654 0 0 1 118.75 50.699 A 12.647 12.647 0 0 1 118.75 50.684 A 6.682 6.682 0 0 1 122.625 44.474 Q 125.362 42.998 130.033 42.537 A 38.183 38.183 0 0 1 130.664 42.48 A 48.131 48.131 0 0 1 133.997 42.297 A 54.521 54.521 0 0 1 135.156 42.285 Z M 22.266 7.715 A 5.973 5.973 0 0 0 21.924 5.639 Q 21.338 4.048 19.749 3.106 A 6.843 6.843 0 0 0 19.238 2.832 A 6.672 6.672 0 0 0 18.091 2.466 A 5.163 5.163 0 0 0 16.992 2.344 A 5.777 5.777 0 0 0 14.873 2.713 Q 13.395 3.291 12.482 4.775 A 6.97 6.97 0 0 0 12.109 5.469 A 5.368 5.368 0 0 0 11.621 7.715 Q 11.621 11.018 14.314 12.444 A 6.836 6.836 0 0 0 14.844 12.695 Q 15.918 13.086 16.992 13.086 A 5.745 5.745 0 0 0 19.015 12.749 Q 20.859 12.061 21.777 9.961 A 5.368 5.368 0 0 0 22.266 7.715 Z" vector-effect="non-scaling-stroke"/></g></svg>
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.pv1_current_110)}>
              <text id="pv1_current" x="31.5%" y="21%" class="st3 left-align" display="${
                config.show_solar === "no" ||
                !config.entities.pv1_current_110 ||
                config.entities.pv1_current_110 === "none"
                  ? "none"
                  : ""
              }" fill="${solar_colour}" >${
        stateObj17.state ? stateObj17.state : "0"
      } A</text></a>
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.pv2_voltage_111)}>
              <text id="pv2_voltage" x="49%" y="19%" class="st3 left-align" display="${
                config.show_solar === "no" ||
                !config.entities.pv2_voltage_111 ||
                config.entities.pv2_voltage_111 === "none" ||
                config.solar.mppts === "one"
                  ? "none"
                  : ""
              }" fill="${solar_colour}" >${
        stateObj18.state ? stateObj18.state : "0"
      } V</text></a>
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.pv2_current_112)}>
              <text id="pv2_current" x="49%" y="21%" class="st3 left-align" display="${
                config.show_solar === "no" ||
                !config.entities.pv2_current_112 ||
                config.entities.pv2_current_112 === "none" ||
                config.solar.mppts === "one"
                  ? "none"
                  : ""
              }" fill="${solar_colour}" >${
        stateObj19.state ? stateObj19.state : "0"
      } A</text>
            </a>
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.pv3_voltage_113)}>
              <text id="pv3_voltage" x="17.5%" y="19%" class="st3 left-align" display="${
                config.show_solar === "no" ||
                !config.entities.pv3_voltage_113 ||
                config.entities.pv3_voltage_113 === "none" ||
                config.solar.mppts === "one" ||
                config.solar.mppts === "two"
                  ? "none"
                  : ""
              }" fill="${solar_colour}" >${
        stateObj27.state ? stateObj27.state : "0"
      } V</text>
            </a>
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.pv3_current_114)}>
              <text id="pv3_current" x="17.5%" y="21%" class="st3 left-align" display="${
                config.show_solar === "no" ||
                !config.entities.pv3_current_114 ||
                config.entities.pv3_current_114 === "none" ||
                config.solar.mppts === "one" ||
                config.solar.mppts === "two"
                  ? "none"
                  : ""
              }" fill="${solar_colour}" >${
        stateObj28.state ? stateObj28.state : "0"
      } A</text>
            </a>
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.pv4_voltage_115)}>
              <text id="pv4_voltage" x="62.5%" y="19%" class="st3 left-align" display="${
                config.show_solar === "no" ||
                !config.entities.pv4_voltage_115 ||
                config.entities.pv4_voltage_115 === "none" ||
                config.solar.mppts === "one" ||
                config.solar.mppts === "two" ||
                config.solar.mppts === "three"
                  ? "none"
                  : ""
              }" fill="${solar_colour}" >${
        stateObj29.state ? stateObj29.state : "0"
      } V</text>
            </a>
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.pv4_current_116)}>
              <text id="pv4_current" x="62.5%" y="21%" class="st3 left-align" display="${
                config.show_solar === "no" ||
                !config.entities.pv4_current_116 ||
                config.entities.pv4_current_116 === "none" ||
                config.solar.mppts === "one" ||
                config.solar.mppts === "two" ||
                config.solar.mppts === "three"
                  ? "none"
                  : ""
              }" fill="${solar_colour}" >${
        stateObj30.state ? stateObj30.state : "0"
      } A</text>
            </a>
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.battery_temp_182)}>
              <text id="battery_temp_182" x="250" y="324.5" class="${
                config.entities.battery_temp_182 === "none"
                  ? "st12"
                  : "st3 left-align"
              }" fill="${battery_colour}" display="${
        config?.entities?.battery_temp_182 ? "" : "none"
      }" >${stateObj37.state ? stateObj37.state : ""}°</text>
            </a>
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.radiator_temp_91)}>
            <text id="ac_temp" x="173" y="168.2" class="${
              config.entities.radiator_temp_91 === "none"
                ? "st12"
                : "st3 left-align"
            }" fill="${inverter_colour}" display="${
        config?.entities?.radiator_temp_91 ? "" : "none"
      }" >AC: ${stateObj39.state ? stateObj39.state : ""}°</text>
            </a>
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.dc_transformer_temp_90)}>
              <text id="dc_temp" x="173" y="180.4" class="${
                config.entities.dc_transformer_temp_90 === "none"
                  ? "st12"
                  : "st3 left-align"
              }" fill="${inverter_colour}" display="${
        config?.entities?.dc_transformer_temp_90 ? "" : "none"
      }" >DC: ${stateObj38.state ? stateObj38.state : ""}°</text>
            </a>
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.energy_cost)}>
              <text id="energy_cost" x="105" y="195" class="${
                config.entities.energy_cost === "none"
                  ? "st12"
                  : "st3 left-align"
              }" fill="${grid_colour}" display="${
        config?.entities?.energy_cost ? "" : "none"
      }" >${stateObj43.state ? stateObj43.state : ""}</text>
     </a>

            ${
              config?.entities?.pv_total !== "none"
                ? svg`<a href="#" @click=${(e) =>
                    this.handlePopup(e, config.entities.pv_total)}>
                    <text id="pvtotal_power" x="40%" y="28%" class="${
                      font === "no" ? "st14" : "st4"
                    } st8" display="${
                    config.show_solar === "no" ? "none" : ""
                  }" fill="${solar_colour}">${
                    total_pv ? total_pv : "0"
                  } W</text>
                  </a>`
                : svg`
            <text id="pvtotal_power" x="40%" y="26.5%" class="${
              font === "no" ? "st14" : "st4"
            } st8" display="${
                    config.show_solar === "no" ? "none" : ""
                  }" fill="${solar_colour}">${
                    total_pv ? total_pv : "0"
                  } W</text>`
            }

            ${
              config.entities.pv1_power_186 !== "none"
                ? svg`<a href="#" @click=${(e) =>
                    this.handlePopup(e, config.entities.pv1_power_186)}>
                    <text id="pv1_power_186" x="32%" y="12.5%" class="${
                      font === "no" ? "st14" : "st4"
                    } st8" display="${
                    config.show_solar === "no" ? "none" : ""
                  }" fill="${solar_colour}">${
                    parseFloat(stateObj9.state).toFixed(0)
                      ? parseFloat(stateObj9.state).toFixed(0)
                      : "0"
                  } W</text>
                  </a>`
                : svg`<text id="pv1_power_186" x="29%" y="12.5%" class="${
                    font === "no" ? "st14" : "st4"
                  } st8" display="${
                    config.show_solar === "no" ||
                    config.entities.pv1_power_186 === "none"
                      ? "none"
                      : ""
                  }" fill="${solar_colour}">${
                    parseFloat(stateObj9.state).toFixed(0)
                      ? parseFloat(stateObj9.state).toFixed(0)
                      : "0"
                  } W</text>`
            }
            ${
              config.entities.pv2_power_187 !== "none"
                ? svg`<a href="#" @click=${(e) =>
                    this.handlePopup(e, config.entities.pv2_power_187)}>
                    <text id="pv2_power_187" x="49%" y="12.5%" class="${
                      font === "no" ? "st14" : "st4"
                    } st8" display="${
                    config.show_solar === "no" || config.solar.mppts === "one"
                      ? "none"
                      : ""
                  }" fill="${solar_colour}">${
                    parseFloat(stateObj8.state).toFixed(0)
                      ? parseFloat(stateObj8.state).toFixed(0)
                      : "0"
                  } W</text>
                  </a>`
                : svg`<text id="pv2_power_187" x="49%" y="12.5%" class="${
                    font === "no" ? "st14" : "st4"
                  } st8" display="${
                    config.show_solar === "no" ||
                    config.entities.pv2_power_187 === "none" ||
                    config.solar.mppts === "one"
                      ? "none"
                      : ""
                  }" fill="${solar_colour}">${
                    parseFloat(stateObj8.state).toFixed(0)
                      ? parseFloat(stateObj8.state).toFixed(0)
                      : "0"
                  } W</text>`
            }
            ${
              config.entities.pv3_power_188 !== "none"
                ? svg`<a href="#" @click=${(e) =>
                    this.handlePopup(e, config.entities.pv3_power_188)}>
                    <text id="pv3_power_188" x="18%" y="12.5%" class="${
                      font === "no" ? "st14" : "st4"
                    } st8" display="${
                    config.show_solar === "no" ||
                    config.solar.mppts === "one" ||
                    config.solar.mppts === "two"
                      ? "none"
                      : ""
                  }" fill="${solar_colour}">${
                    parseFloat(stateObj31.state).toFixed(0)
                      ? parseFloat(stateObj31.state).toFixed(0)
                      : "0"
                  } W</text>
                  </a>`
                : svg`<text id="pv3_power_188" x="14%" y="12.5%" class="${
                    font === "no" ? "st14" : "st4"
                  } st8" display="${
                    config.show_solar === "no" ||
                    config.entities.pv3_power_188 === "none" ||
                    config.solar.mppts === "one" ||
                    config.solar.mppts === "two"
                      ? "none"
                      : ""
                  }" fill="${solar_colour}">${
                    parseFloat(stateObj31.state).toFixed(0)
                      ? parseFloat(stateObj31.state).toFixed(0)
                      : "0"
                  } W</text>`
            }
            ${
              config.entities.pv4_power_189 !== "none"
                ? svg`<a href="#" @click=${(e) =>
                    this.handlePopup(e, config.entities.pv4_power_189)}>
                    <text id="pv4_power_189" x="63%" y="12.5%" class="${
                      font === "no" ? "st14" : "st4"
                    } st8" display="${
                    config.show_solar === "no" ||
                    config.solar.mppts === "one" ||
                    config.solar.mppts === "two" ||
                    config.solar.mppts === "three"
                      ? "none"
                      : ""
                  }" fill="${solar_colour}">${
                    parseFloat(stateObj32.state).toFixed(0)
                      ? parseFloat(stateObj32.state).toFixed(0)
                      : "0"
                  } W</text>
                  </a>`
                : svg`<text id="pv4_power_189" x="64%" y="12.5%" class="${
                    font === "no" ? "st14" : "st4"
                  } st8" display="${
                    config.show_solar === "no" ||
                    config.entities.pv4_power_189 === "none" ||
                    config.solar.mppts === "one" ||
                    config.solar.mppts === "two" ||
                    config.solar.mppts === "three"
                      ? "none"
                      : ""
                  }" fill="${solar_colour}">${
                    parseFloat(stateObj32.state).toFixed(0)
                      ? parseFloat(stateObj32.state).toFixed(0)
                      : "0"
                  } W</text>`
            }

            ${
              config.entities.essential_power !== "none"
                ? svg`<a href="#" @click=${(e) =>
                    this.handlePopup(e, config.entities.essential_power)}>
                    <text id="ess_power" x="64%" y="43%" class="${
                      font === "no" ? "st14" : "st4"
                    } st8" fill="${load_colour}">${
                    essential ? essential : "0"
                  } W</text>
                  </a>`
                : svg`<text id="ess_power" x="60%" y="50%" class="${
                    font === "no" ? "st14" : "st4"
                  } st8" fill="${load_colour}">${
                    essential ? essential : "0"
                  } W</text>`
            }
            ${
              config.entities.nonessential_power !== "none"
                ? svg`<a href="#" @click=${(e) =>
                    this.handlePopup(e, config.entities.nonessential_power)}>
                    <text id="non_ess_power" x="7.5%" y="62%" display="${
                      grid_show_noness === "no" ? "none" : ""
                    }" class="${
                    font === "no" ? "st14" : "st4"
                  } st8" fill="${grid_colour}">${
                    nonessential ? nonessential : "0"
                  } W</text>
                  </a>`
                : svg`<text id="non_ess_power" x="71%" y="76%" display="${
                    grid_show_noness === "no" ? "none" : ""
                  }" class="${
                    font === "no" ? "st14" : "st4"
                  } st8" fill="${grid_colour}">${
                    nonessential ? nonessential : "0"
                  } W</text> `
            }
 
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.grid_ct_power_172)}>
              <text id="grid_ct_power_172" x="12%" y="42%" display="${
                config.entities.grid_ct_power_172 === "none" ? "none" : ""
              }" class="${
        font === "no" ? "st14" : "st4"
      } st8" fill="${grid_colour}">${grid_power ? grid_power : "0"} W</text>
            </a>

            ${
              config.entities.aux_power_166 !== "none"
                ? svg`
                <a href="#" @click=${(e) =>
                  this.handlePopup(e, config.entities.aux_power_166)}>
                    <text id="aux_power_166" x="12%" y="47%" class="${
                      font === "no" ? "st14" : "st4"
                    } st8" display="${
                    show_aux === "no" ? "none" : ""
                  }" fill="${aux_colour}">${
                    aux_power < "0" ? aux_power * -1 : aux_power
                  } W</text> 
                  </a>`
                : svg`<text id="aux_power_166" x="20%" y="56%" class="${
                    font === "no" ? "st14" : "st4"
                  } st8" display="${
                    show_aux === "no" ? "none" : ""
                  }" fill="${aux_colour}">${
                    aux_power < "0" ? aux_power * -1 : aux_power
                  } W</text> `
            }

            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.inverter_power_175)}>
              <text id="inverter_power_175" x="49%" y="46%" display="${
                config.entities.inverter_power_175 === "none" ? "none" : ""
              }" class="${
        font === "no" ? "st3" : "st3"
      } st8" fill="${inverter_colour}">${
        stateObj22.state ? stateObj22.state : "0"
      } W</text>
            </a>
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.battery_temp_182)}>
              <text id="battery_temp_182" x="20.5%" y="77%" class="${
                config.entities.battery_temp_182 === "none"
                  ? "st12"
                  : "st3 left-align"
              }" fill="${battery_colour}" display="${
        config?.entities?.battery_temp_182 ? "" : "none"
      }" >${stateObj37.state ? stateObj37.state : ""}°</text>
            </a>
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.radiator_temp_91)}>
              <text id="ac_temp" x="${
                config?.solar?.mppts === "four" ? "30%" : "34.5%"
              }"  y="${
        config?.solar?.mppts === "four" ? "58%" : "40%"
      }" class="${
        config.entities.radiator_temp_91 === "none" ? "st12" : "st3 left-align"
      }" fill="${inverter_colour}" display="${
        config?.entities?.radiator_temp_91 ? "" : "none"
      }" >AC: ${stateObj39.state ? stateObj39.state : ""}°</text>
            </a>
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.dc_transformer_temp_90)}>
              <text id="dc_temp" x="24%" y="69.5%" class="${
                config.entities.dc_transformer_temp_90 === "none"
                  ? "st12"
                  : "st3 left-align"
              }" fill="${inverter_colour}" display="${
        config?.entities?.dc_transformer_temp_90 ? "" : "none"
      }" >DC: ${stateObj38.state ? stateObj38.state : ""}°</text>
            </a>
            <a href="#" @click=${(e) =>
              this.handlePopup(e, config.entities.energy_cost)}>
              <text id="energy_cost" x="93.5%" y="67%"  class="${
                config.entities.energy_cost === "none"
                  ? "st12"
                  : "st3 left-align"
              }" fill="${grid_colour}" display="${
        config?.entities?.energy_cost ? "" : "none"
      }" >${stateObj43.state ? stateObj43.state : ""}</text>
            </a>

          </svg>
        </div>
        </ha-card>
      `;
    }
  }

  setConfig(config) {
    if (!config.cardstyle) {
      throw Error(
        "Please include the cardstyle attribute and value; lite, simple or full e.g. cardstyle: simple"
      );
    }
    if (!config.show_solar) {
      throw Error(
        "Please include the show_solar attribute e.g. show_solar: yes"
      );
    }
    if (!config.battery) {
      throw Error("No battery attributes defined");
    } else {
      if (!config.battery.energy) {
        throw new Error(
          "Please include the battery energy attribute and value in Wh e.g. 5.32 Battery energy: 5320"
        );
      }
      if (!config.battery.shutdown_soc) {
        throw new Error(
          "Please include the battery shutdown_soc attribate and value e.g shutdown_soc: 20"
        );
      }
      if (config.battery.full_capacity < 80) {
        throw new Error("Full capacity needs to be between 80 and 100");
      }
      if (config.battery.empty_capacity > 30) {
        throw new Error("Empty capacity needs to be <= 30");
      }
      if (
        config.battery.show_daily === "yes" &&
        (!config.entities.day_battery_charge_70 ||
          !config.entities.day_battery_discharge_71)
      ) {
        throw Error(
          "Please include the day_battery_charge_70 and day_battery_discharge_71 attributes and entity IDs"
        );
      }
    }
    if (config.show_solar === "yes" && !config.solar) {
      throw Error("No solar attributes defined");
    } else {
      if (config.show_solar === "yes" && !config.solar.mppts) {
        throw Error(
          "Please include the solar mppts attribute and value; one,two,three or four e.g. mppts: two"
        );
      }
      if (
        config &&
        config.solar &&
        config.show_solar === "yes" &&
        config.solar.show_daily === "yes" &&
        !config.entities.day_pv_energy_108
      ) {
        throw Error(
          "Please include the day_pv_energy_108 attribute and entity ID"
        );
      }
    }

    if (
      (config &&
        config.grid &&
        config.grid.show_daily_buy === "yes" &&
        !config.entities.day_grid_import_76) ||
      (config &&
        config.grid &&
        config.grid.show_daily_sell === "yes" &&
        !config.entities.day_grid_export_77)
    ) {
      throw Error(
        "Please include the day_grid_import_76 and day_grid_export_77 attributes and entity IDs"
      );
    }

    if (
      (config &&
        config.entities &&
        config.entities.essential_power === "none" &&
        !config.entities.inverter_power_175) ||
      (config &&
        config.entities &&
        config.entities.essential_power === "none" &&
        config.entities.inverter_power_175 === "none")
    ) {
      throw Error(
        "The essential_power attribute is set to none. Please include the inverter_power_175 attribute and entity ID in order for the card to calculate this value."
      );
    }

    if (
      config &&
      config.entities &&
      config.entities.nonessential_power === "none" &&
      !config.entities.grid_power_169
    ) {
      throw Error(
        "The nonessential_power attribute is set to none. Please include the grid_power_169 attribute and entity ID in order for the card to calculate this value."
      );
    }

    const all_attributes = [
      "battery_soc_184",
      "battery_power_190",
      "battery_current_191",
      "grid_ct_power_172",
    ];

    for (const attr of all_attributes) {
      if (!config.entities[attr]) {
        throw new Error(
          `Please include the ${attr} attribute and entity ID e.g. ${attr}: sensor.example`
        );
      }
    }

    const solar_attributes = ["pv1_power_186"];

    for (const attr1 of solar_attributes) {
      if (config.show_solar === "yes" && !config.entities[attr1]) {
        throw new Error(
          `Please include the ${attr1} attribute and entity ID e.g. ${attr1}: sensor.example`
        );
      }
    }

    this._config = config;
  }

  handlePopup(e, entity) {
    e.stopPropagation();
    const entityId = entity;
    //console.log(entity);
    this._handleClick(
      this,
      this.hass,
      this._config,
      { action: "more-info" },
      entityId
    );
  }

  _handleClick(node, hass, config, actionConfig, entityId) {
    let e;
    // eslint-disable-next-line default-case
    switch (actionConfig.action) {
      case "more-info": {
        e = new Event("hass-more-info", { composed: true });
        e.detail = { entityId };
        node.dispatchEvent(e);
        break;
      }
    }
  }

  getCardSize() {
    return 2;
  }
}

customElements.define("power-flow-card", PowerFlowCard);
customElements.define("power-flow-card-editor", PowerFlowCardEditor);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "power-flow-card",
  name: "Power Flow Card",
  preview: false, // Optional - defaults to false
  description:
    "A Home Assistant card to emulate the Power flow that's shown on the Inverter screen", // Optional
});
