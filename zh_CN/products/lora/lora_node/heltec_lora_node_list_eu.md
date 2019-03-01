# Heltec LoRa节点各型号差异对照表



------

**“Heltec LoRa” 产品系列已包含以下选项**

- LoRa扩频通信（节点）;
- 电池供电;
- 良好的RF电路设计和阻抗匹配。

&nbsp;

|                             产品                             |  类型  |                             MCU                              | FLASH |          电池           | 电池检测 | Vext* | 低功耗 |    显示屏     |
| :----------------------------------------------------------: | :----: | :----------------------------------------------------------: | :---: | :---------------------: | :------: | :---: | :----: | :-----------: |
| [WiFi LoRa 32](http://www.heltec.cn/project/wifi-lora-32/?lang=en) | 开发版 | [ESP32](https://www.espressif.com/en/products/hardware/esp32/resources) |  4MB  |         锂电池*         |    x     |   x   |   x    | OLED (128x64) |
| [WiFi LoRa 32(V2)](http://www.heltec.cn/project/wifi-lora-32/?lang=en) | 开发版 | [ESP32](https://www.espressif.com/en/products/hardware/esp32/resources) |  8MB  |         锂电池*         |    √     |   √   | 800uA  | OLED (128x64) |
| [Wireless Stick](https://docs.heltec.cn/#/en/products/lora/lora_node/wireless_stick/wireless_stick) | 开发版 | [ESP32](https://www.espressif.com/en/products/hardware/esp32/resources) |  8MB  |         锂电池*         |    √     |   √   | 800uA  | OLED (64x32)  |
|                     Wireless Stick Lite                      | 开发版 | [ESP32-PICO](https://www.espressif.com/en/products/hardware/esp32/resources) |  4MB  |         锂电池*         |    √     |   √   |  35uA  |       x       |
|                        Wireless Shell                        |  模块  | [ESP32-PICO](https://www.espressif.com/en/products/hardware/esp32/resources) |  4MB  |           --            |    √     |   x   |  35uA  |       x       |
|                         LoRa Kit 151                         | 开发版 | [STM32L151CBU6](https://www.st.com/content/st_com/en/products/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus/stm32-ultra-low-power-mcus/stm32l1-series/stm32l151-152/stm32l151cb.html) | 128kB |         锂电池          |    x     |   x   |  7uA   |       x       |
|                        LoRa Node 151                         | 开发版 | [STM32L151CCU6](https://www.st.com/content/st_com/en/products/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus/stm32-ultra-low-power-mcus/stm32l1-series/stm32l151-152/stm32l151cc.html) | 256kB | 1/2 AA 锂氯亚硫酸盐电池 |    √     |   √   | 1.8uA  |       x       |
|                         Turtle Board                         | 开发版 | [STM32L432KC](https://www.st.com/content/st_com/en/products/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus/stm32-ultra-low-power-mcus/stm32l4-series/stm32l4x2/stm32l432kc.html) | 256kB |         AAA x 2         |    √     |   √   |  5uA   |       x       |

&nbsp;

**注意：**

1. 类型：
   - 开发版 -- 可直接使用;
   - 模块 -- 只有核心功能，需要配合外部PCB或电路。

2. 锂电池：Heltec电路板的所有锂电池插座均为SH1.25-2;
3. Vext：3.3V（500mA）输出，对于外部设备（例如传感器）电源，在深度睡眠模式下，Vext可以通过软件关闭;
4. 低功耗：产品的低功耗设计，整个电路，测量数据是深度睡眠期间系统的电流。