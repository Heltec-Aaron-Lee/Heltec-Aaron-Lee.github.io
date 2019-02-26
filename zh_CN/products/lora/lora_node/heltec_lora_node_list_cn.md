##“Heltec LoRa” 系列产品型号对照表##

***

**“Heltec LoRa”全系列产品部具有如下特性：**

- **LoRa扩频通信，并任意频率可选；**
- **可电池供电；**
- **良好的射频电路设计和阻抗匹配。**

&nbsp;

| 产品名称 | 类型* | MCU | FLASH | 电池种类* | 电池检测 | Vext* | 低功耗* | 显示屏 |
| :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| [WiFi LoRa 32](http://www.heltec.cn/project/wifi-lora-32/) | 整板 | [ESP32](https://www.espressif.com/zh-hans/products/hardware/esp32/resources) | 片外4MB | 锂电池 | x | x | x | OLED(128x64) |
| [WiFi LoRa 32(V2)](http://www.heltec.cn/project/wifi-lora-32/) | 整板 | [ESP32](https://www.espressif.com/zh-hans/products/hardware/esp32/resources) | 片外8MB | 锂电池 | √ | √ | 800uA | OLED(128x64) |
| [Wireless Stick](http://www.heltec.cn/project/wireless-stick/) | 整板 | [ESP32](https://www.espressif.com/zh-hans/products/hardware/esp32/resources) | 片外8MB | 锂电池 | √ | √ | 800uA | OLED(64x32) |
| [Wireless Stick Lite](http://www.heltec.cn/project/wireless-stick/) | 整板 | [ESP32-PICO](https://www.espressif.com/zh-hans/products/hardware/esp32/resources) | 片内4MB | 锂电池 | √ | √ | 35uA | x |
| Wireless Shell | 模块 | [ESP32-PICO](https://www.espressif.com/zh-hans/products/hardware/esp32/resources) | 片内4MB | -- | √ | x | 35uA | x |
| [LoRa Kit 151](http://www.heltec.cn) | 整板 | [STM32L151CBU6](https://www.st.com/content/st_com/en/products/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus/stm32-ultra-low-power-mcus/stm32l1-series/stm32l151-152/stm32l151cb.html) | 片内128kB | 锂电池 | x | x | 7uA | x |
| [LoRa Node 151](http://www.heltec.cn) | 整板 | [STM32L151CCU6](https://www.st.com/content/st_com/en/products/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus/stm32-ultra-low-power-mcus/stm32l1-series/stm32l151-152/stm32l151cc.html) | 片内256kB | 1/2AA锂亚硫酸氯电池 | √ | √ | 1.8uA | x |
| [Turtle Board](http://www.heltec.cn) | 整板 | [STM32L432KC](https://www.st.com/content/st_com/en/products/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus/stm32-ultra-low-power-mcus/stm32l4-series/stm32l4x2/stm32l432kc.html) | 片内256kB | 7号干电池x2 | √ | √ | 5uA | x |

&nbsp;

**注释：**

1. 类型：
  - 整板 -- 通电直接可以使用的；
  - 模块 -- 仅有核心功能，需要配合外部电路才能使用的。
2. 适配电池种类：若适配锂电池，接口均为SH1.25-2；
3. Vext：3.3V(500mA)输出，为外部设备（如传感器）供电，低功耗时，可以通过程序关闭Vext电源；
4. 低功耗：是指整体电路的低功耗设计，所测数据是系统处于深度睡眠时的电流。
