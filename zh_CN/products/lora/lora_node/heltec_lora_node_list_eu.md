# Heltec LoRa节点产品差异表

**“Heltec LoRa” 产品系列已包括以下选项:**

- LoRa扩频通信（节点）;
- 电池供电;
- 良好的射频电路设计和阻抗匹配;
- **LoRaWAN 协议支持.**

Heltec LoRa 系列有三个主要分支:

- [CubeCell 系列](#cubecell-系列)
- [ESP32 LoRa 系列](#esp32-lora-系列)
- [STM32 LoRa 系列](#stm32-lora-系列)

&nbsp;

## CubeCell 系列

基于ASR6501 ASR6502系列SiP组合和PSoC 4000（M0+core，48MHz）和SX1262。超低功耗设计，太阳能电池板支持，最佳性价比！

- **完美的[Arduino](https://github.com/HelTecAutomation/ASR650x-Arduino) 和[Platform.io](https://github.com/HelTecAutomation/platform-asrmicro650x) 支持;**
- 超低功耗设计, **3.5uA 深度睡眠;**
- 板载太阳能管理系统，**可直接连接5.5~7V太阳能电池板**；

更多信息请参考 [CubeCell 系列概览](https://heltec.org/cubecell_overview/) 和 [CubeCell 系列摘要 & 文档](https://heltec-automation-docs.readthedocs.io/en/latest/cubecell/index.html) 。

|                             产品                             | 类型 <sup>①</sup> |  封装   |        电池         | 太阳能 | 低功耗 <sup>④</sup> |
| :----------------------------------------------------------: | :---------------: | :-----: | :-----------------: | :----: | :-----------------: |
|      [HTCC-AB01](https://heltec.org/project/htcc-ab01/)      |      开发板       | ASR6501 | 锂电池 <sup>②</sup> |   √    |       3.5 uA        |
|      [HTCC-AB02](https://heltec.org/project/htcc-ab02/)      |      开发板       | ASR6502 | 锂电池 <sup>②</sup> |   √    |       3.5 uA        |
|     [HTCC-AB02A](https://heltec.org/project/htcc-ab02a/)     |      开发板       | ASR6502 |       1/2 AA        |   x    |       3.5 uA        |
|     [HTCC-AB02S](https://heltec.org/project/htcc-ab02s/)     |      开发板       | ASR6502 | 锂电池 <sup>②</sup> |   √    |        50 uA        |
|      [HTCC-AM01](https://heltec.org/project/htcc-am01/)      |       模块        | ASR6501 |         --          |   --   |       3.5 uA        |
|      [HTCC-AM02](https://heltec.org/project/htcc-am02/)      |       模块        | ASR6502 |         --          |   --   |       3.5 uA        |
|   [Capsule Sensor](https://heltec.org/project/htcc-ac01/)    |    LoRa 传感器    | ASR6501 | 锂电池 <sup>②</sup> |   x    |        9 uA         |
| [Capsule Solar Sensor](https://heltec.org/project/htcc-ac02/) |    LoRa 传感器    | ASR6501 | 锂电池 <sup>②</sup> |   √    |        9 uA         |

&nbsp;

## ESP32 LoRa 系列

强大的计算能力，大FLASH和丰富的硬件资源 。

[ESP32 LoRa 系列摘要 & 文档](https://heltec-automation-docs.readthedocs.io/en/latest/esp32/index.html)

|                             产品                             | 类型 <sup>①</sup> |                             MCU                              | FLASH |       电池       | 电池检测 | Vext<sup>③</sup> | 低功耗 <sup>④</sup> |    显示屏    |
| :----------------------------------------------------------: | :--------------: | :----------------------------------------------------------: | :---: | :-----------------: | :------------: | :--------------: | :-------------------: | :-----------: |
|   [WiFi LoRa 32](https://heltec.org/project/wifi-lora-32)    |    开发板     | [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf) |  4MB  | 锂电池 <sup>②</sup> |       x        |        x         |           x           | OLED (128x64) |
| [WiFi LoRa 32(V2)](https://heltec.org/project/wifi-lora-32)  |    开发板  | [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf) |  8MB  | 锂电池 <sup>②</sup> |       √        |        √         |         800uA         | OLED (128x64) |
| [Wireless Stick](https://heltec.org/project/wireless-stick)  |    开发板  | [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf) |  8MB  | 锂电池 <sup>②</sup> |       √        |        √         |         800uA         | OLED (64x32)  |
| [Wireless Stick Lite](https://heltec.org/project/wireless-stick-lite/) |    开发板  | [ESP32-PICO](https://www.espressif.com/sites/default/files/documentation/esp32-pico-d4_datasheet_en.pdf) |  4MB  | 锂电池 <sup>②</sup> |       √        |        √         |         35uA          |       x       |
| [Wireless Shell](https://heltec.org/project/wireless-shell/) |      开发板      | [ESP32-PICO](https://www.espressif.com/sites/default/files/documentation/esp32-pico-d4_datasheet_en.pdf) |  4MB  |         --          |       √        |        x         |         10uA          |       x       |

&nbsp;

## STM32 LoRa 系列

采用STM32作为主控芯片，适合有经验的ARM工程师使用。

[STM32 LoRa 系列摘要 & 文档](https://heltec-automation-docs.readthedocs.io/en/latest/stm32/index.html)

|                            产品                            | 类型 <sup>①</sup> |                             MCU                              | FLASH | 电池 | 电池检测 | Vext<sup>③</sup> | 低功耗 <sup>④</sup> | 显示屏 |
| :--------------------------------------------------------: | :--------------: | :----------------------------------------------------------: | :---: | :-----: | :------------: | :--------------: | :-------------------: | :-----: |
|  [LoRa Kit 151](https://heltec.org/project/lora-kit-151)   |    开发板  | [STM32L151CBU6](https://www.st.com/content/st_com/en/products/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus/stm32-ultra-low-power-mcus/stm32l1-series/stm32l151-152/stm32l151cb.html) | 128kB | 锂电池 <sup>②</sup> |       x        |        x         |          7uA          |    x    |
| [LoRa Node 151](https://heltec.org/project/lora-node-151)  |    开发板  | [STM32L151CCU6](https://www.st.com/content/st_com/en/products/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus/stm32-ultra-low-power-mcus/stm32l1-series/stm32l151-152/stm32l151cc.html) | 256kB | 1/2 AA  |       √        |        √         |         1.8uA         |    x    |
| [Turtle Board](<https://heltec.org/project/turtle-board/>) |    开发板  | [STM32L432KC](https://www.st.com/content/st_com/en/products/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus/stm32-ultra-low-power-mcus/stm32l4-series/stm32l4x2/stm32l432kc.html) | 256kB | AAA x 2 |       √        |        √         |          5uA          |    x    |

&nbsp;

**注意：**

① -- 类型：
- 开发板 -- 可直接使用;
- LoRa 传感器-- 可直接应用;
- 模块 -- 只有核心功能，需要与外部PCB或电路配合。

② -- 锂电池: 所有用于 Heltec 驱动板的锂电池插座为SH1.25-2；

③ -- Vext：3.3V（500mA）输出，对于外部设备（如传感器）电源，在深度睡眠模式下，Vext可通过软件关闭；

④ -- 低功耗: 整个电路采用低功耗设计，测量数据为系统在睡眠状态下的电流。

