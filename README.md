![2023_temp](https://repository-images.githubusercontent.com/677873929/a44a3b52-f940-4578-b359-eb3b1308bf4b)



# Power Flow Card 

Work in progress...

### Pictures

![](img/level.png) 

## Install

### USING HACS

Add to HACS as a Custom Repo

### Manual install

1. Download and copy `power-flow-card.js` from the [latest release](https://github.com/JuWorkshop/power-flow-card/releases/latest) into your `config/www` directory.

2. Add the resource reference as decribed below.

### Add resource reference

If you configure Dashboards via YAML, add a reference to `power-flow-card.js` inside your `configuration.yaml`:

```yaml
resources:
  - url: /local/power-flow-card.js
    type: module![2023_1](https://github.com/JuWorkshop/power-flow-card/assets/89390048/5cfc1764-4dcd-4514-b376-40051ab9d0a6)
![Capture d’écran de 2023-08-15 13-00-02](https://github.com/JuWorkshop/power-flow-card/assets/89390048/d1c89f1d-043f-4c21-978c-600469f59462)

```

Else, if you prefer the graphical editor, use the menu to add the resource:

1. Make sure, advanced mode is enabled in your user profile (click on your user name to get there)
2. Navigate to Settings -> Dashboards
3. Click three dot icon
4. Select Resources
5. Hit (+ ADD RESOURCE) icon
6. Enter URL `/local/power-flow-card.js` and select type "JavaScript Module".
   (Use `/hacsfiles/power-flow-card/power-flow-card.js` and select "JavaScript Module" for HACS install if HACS didn't do it already)

## Using the card



In conf card:
 
inverter:
  modern: multi_rs
 .
![](img/multi_rs.png) 
inverter:
  modern: wks
![](img/wks.png) 

inverter:
  modern: wks_max
![](img/wks_max.png) 

### Video
![](MosFet_BMS_cmd.mp4) 

## Usefull links
Many thanks. @slipx06:
. https://github.com/slipx06/sunsynk-power-flow-card

![GitHub total downloads](https://img.shields.io/github/downloads/JuWorkshop/power-flow-card/total?style=flat-square)

## Donate

If you would like to support this project, you can make a donation using PayPal. Thank you!

[![Donate](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/donate/?business=2HTV9RH5BPWX6&no_recurring=0&currency_code=EUR)
