# Heltec LoRa Node Products Difference Table



------

**“Heltec LoRa” product family already included follow options:**

- LoRa spread spectrum communication (node);
- Battery powered;
- Good RF circuit design and impedance matching.

&nbsp;

|                           Product                            |   Type*   |                             MCU                              | FLASH |                 Battery                 | Battery Detect | Vext* | Low Power* |    Display    |
| :----------------------------------------------------------: | :-------: | :----------------------------------------------------------: | :---: | :-------------------------------------: | :------------: | :---: | :--------: | :-----------: |
| [WiFi LoRa 32](http://www.heltec.cn/project/wifi-lora-32/?lang=en) | Dev-Board | [ESP32](https://www.espressif.com/en/products/hardware/esp32/resources) |  4MB  |                Lithium*                 |       x        |   x   |     x      | OLED (128x64) |
| [WiFi LoRa 32(V2)](http://www.heltec.cn/project/wifi-lora-32/?lang=en) | Dev-Board | [ESP32](https://www.espressif.com/en/products/hardware/esp32/resources) |  8MB  |                Lithium*                 |       √        |   √   |   800uA    | OLED (128x64) |
| [Wireless Stick](https://docs.heltec.cn/#/en/products/lora/lora_node/wireless_stick/wireless_stick) | Dev-Board | [ESP32](https://www.espressif.com/en/products/hardware/esp32/resources) |  8MB  |                Lithium*                 |       √        |   √   |   800uA    | OLED (64x32)  |
|                     Wireless Stick Lite                      | Dev-Board | [ESP32-PICO](https://www.espressif.com/en/products/hardware/esp32/resources) |  4MB  |                Lithium*                 |       √        |   √   |    35uA    |       x       |
|                        Wireless Shell                        |  Module   | [ESP32-PICO](https://www.espressif.com/en/products/hardware/esp32/resources) |  4MB  |                   --                    |       √        |   x   |    35uA    |       x       |
|                         LoRa Kit 151                         | Dev-Board | [STM32L151CBU6](https://www.st.com/content/st_com/en/products/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus/stm32-ultra-low-power-mcus/stm32l1-series/stm32l151-152/stm32l151cb.html) | 128kB |                 Lithium                 |       x        |   x   |    7uA     |       x       |
|                        LoRa Node 151                         | Dev-Board | [STM32L151CCU6](https://www.st.com/content/st_com/en/products/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus/stm32-ultra-low-power-mcus/stm32l1-series/stm32l151-152/stm32l151cc.html) | 256kB | 1/2 AA Lithium chlorine sulfite battery |       √        |   √   |   1.8uA    |       x       |
|                         Turtle Board                         | Dev-Board | [STM32L432KC](https://www.st.com/content/st_com/en/products/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus/stm32-ultra-low-power-mcus/stm32l4-series/stm32l4x2/stm32l432kc.html) | 256kB |                 AAA x 2                 |       √        |   √   |    5uA     |       x       |

&nbsp;

**Notes：**

1. Type：
   - Dev-Board -- Can be used directly;
   - Module -- Only core function, need to cooperate with external PCB or circuit.

2. Lithium：All lithium battery socket for Heltec boards is SH1.25-2；
3. Vext：3.3V(500mA) output, for external devices (e.g. sensors) power supply, in deep sleep mode, Vext can be shut down via software;
4. Low Power：Products' low power design,  of Whole Circuit, the measured data are the current of the system during deep sleep.