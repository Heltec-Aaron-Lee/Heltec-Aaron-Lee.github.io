# Heltec LoRa Node Products Difference Table



------

**“Heltec LoRa” product family already included follow options:**

- LoRa spread spectrum communication (node);
- Battery powered;
- Good RF circuit design and impedance matching.

&nbsp;

|                           Product                            | Type<sup>①</sup> |                             MCU                              | FLASH |                 Battery                 | Battery Detect | Vext<sup>③</sup> | Low Power<sup>④</sup> |    Display    |
| :----------------------------------------------------------: | :--------------: | :----------------------------------------------------------: | :---: | :-------------------------------------: | :------------: | :--------------: | :-------------------: | :-----------: |
|   [WiFi LoRa 32](https://heltec.org/project/wifi-lora-32)    |    Dev-Board     | [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf) |  4MB  |           Lithium<sup>②</sup>           |       x        |        x         |           x           | OLED (128x64) |
| [WiFi LoRa 32(V2)](https://heltec.org/project/wifi-lora-32)  |    Dev-Board     | [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf) |  8MB  |           Lithium<sup>②</sup>           |       √        |        √         |         800uA         | OLED (128x64) |
| [Wireless Stick](https://heltec.org/project/wireless-stick)  |    Dev-Board     | [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf) |  8MB  |           Lithium<sup>②</sup>           |       √        |        √         |         800uA         | OLED (64x32)  |
| [Wireless Stick Lite](https://heltec.org/project/wireless-stick-lite/) |    Dev-Board     | [ESP32-PICO](https://www.espressif.com/sites/default/files/documentation/esp32-pico-d4_datasheet_en.pdf) |  4MB  |           Lithium<sup>②</sup>           |       √        |        √         |         35uA          |       x       |
| [Wireless Shell](https://heltec.org/project/wireless-shell/) |      Module      | [ESP32-PICO](https://www.espressif.com/sites/default/files/documentation/esp32-pico-d4_datasheet_en.pdf) |  4MB  |                   --                    |       √        |        x         |         10uA          |       x       |
|   [LoRa Kit 151](https://heltec.org/project/lora-kit-151)    |    Dev-Board     | [STM32L151CBU6](https://www.st.com/content/st_com/en/products/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus/stm32-ultra-low-power-mcus/stm32l1-series/stm32l151-152/stm32l151cb.html) | 128kB |                 Lithium                 |       x        |        x         |          7uA          |       x       |
|  [LoRa Node 151](https://heltec.org/project/lora-node-151)   |    Dev-Board     | [STM32L151CCU6](https://www.st.com/content/st_com/en/products/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus/stm32-ultra-low-power-mcus/stm32l1-series/stm32l151-152/stm32l151cc.html) | 256kB | 1/2 AA Lithium chlorine sulfite battery |       √        |        √         |         1.8uA         |       x       |
|  [Turtle Board](<https://heltec.org/project/turtle-board/>)  |    Dev-Board     | [STM32L432KC](https://www.st.com/content/st_com/en/products/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus/stm32-ultra-low-power-mcus/stm32l4-series/stm32l4x2/stm32l432kc.html) | 256kB |                 AAA x 2                 |       √        |        √         |          5uA          |       x       |

&nbsp;

**Notes：**

① -- Type：
- Dev-Board -- Can be used directly;
- Module -- Only core function, need to cooperate with external PCB or circuit.

② -- Lithium: All lithium battery socket for Heltec boards is SH1.25-2；

③ -- Vext：3.3V(500mA) output, for external devices (e.g. sensors) power supply, in deep sleep mode, Vext can be shut down via software;

④ -- Low Power: Products' low power design,  of Whole Circuit, the measured data are the current of the system during deep sleep.

