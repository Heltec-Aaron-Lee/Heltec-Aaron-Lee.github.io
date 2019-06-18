# E-Ink Display Usage Precautions

If you are using an E-Ink module, we recommend the following power supply circuit（GPIO LOW，MOS-FET ON）。

Current of VDD ≥ 100mA

![](http://119.23.153.38/img/e-ink_power.png)



Display some stuff on E-Ink display is a series of chemical changes. For E-Ink display, power only needed during refresh time. But pay attention to one point: **When you don't need to refresh, be sure to put it into deep sleep state!**

&nbsp;

Because if you do not enter deep sleep, the screen panel will remain high voltage, which will damage the ink screen panel. Even if the circuit is recommended for power supply, the ink screen should be placed in a deep sleep state before the power is turned off, so as to ensure better homing of the ink capsule microcapsules.

&nbsp;

Different driver chips enter deep sleep mode differently, please refer to the corresponding Datasheet.

