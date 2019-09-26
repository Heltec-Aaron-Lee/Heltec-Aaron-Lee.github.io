# What's the Upgrade of New WiFi Kit 32

&nbsp;

## How to distinguish between old and new versions

<img src="img\the_upgrade_of_new_wifi_kit_32\01.png">

&nbsp;

## What's the Upgrade of New WiFi Kit 32

- 4MB (32M-bits) FLASH upgrade to 8MB (64M-bits) FLASH;

- Better 2.4GHz antenna design and impendence matching;

- Basic low power design (800uA in deep sleep);

- Add battery power detection circuit. Use ADC2_4 (GPIO 13) to read battery voltage. Please refer to this example:

  [https://github.com/HelTecAutomation/Heltec_ESP32/blob/master/examples/ESP32/ADC_Read_Voltage/Battery_power/Battery_power.ino](https://github.com/HelTecAutomation/Heltec_ESP32/blob/master/examples/ESP32/ADC_Read_Voltage/Battery_power/Battery_power.ino)

- Add Vext power output pin, users can use this pin to drive some external device (sensor, motor etc.), when system need into deep sleep mode, Vext can be turn off.

  **This pin was controlled by GPIO21, for example:**

  ​		Turn ON:  `digitalWrite(21, LOW);`

  ​		Turn OFF: `digitalWrite(21, HIGH);`

- New WiFi Kit 32 pinout diagram: 

  - [https://github.com/Heltec-Aaron-Lee/WiFi_Kit_series/blob/master/PinoutDiagram/WIFI_Kit_32(New).pdf](https://github.com/Heltec-Aaron-Lee/WiFi_Kit_series/blob/master/PinoutDiagram/WIFI_Kit_32(New).pdf)

- New  WiFi Kit 32 schematic diagram:

  - [https://github.com/Heltec-Aaron-Lee/WiFi_Kit_series/blob/master/SchematicDiagram/New_WIFI_Kit_32_Schematic_diagram.pdf](https://github.com/Heltec-Aaron-Lee/WiFi_Kit_series/blob/master/SchematicDiagram/New_WIFI_Kit_32_Schematic_diagram.pdf)

- Circuit optimization, system more stable;

- Better power manage system design.

