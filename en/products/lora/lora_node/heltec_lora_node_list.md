# Heltec LoRa Node Products Difference Table

**“Heltec LoRa” product family already included follow options:**

- LoRa spread spectrum communication (node);
- Battery powered;
- Good RF circuit design and impedance matching;
- **LoRaWAN protocol support.**

There are three main branches of the Heltec LoRa series:

- [CubeCell Series](#cubecell-series)
- [ESP32 LoRa Series](#esp32-lora-series)
- [STM32 LoRa Series](#stm32-lora-series)

&nbsp;

## CubeCell Series

Based on ASR6501 ASR6502 series SiP combinations with PSoC 4000 (M0+ core, 48MHz) and SX1262. Super low power design with **solar panel support**, and best price / performance ratio!

- **Perfect [Arduino](https://github.com/HelTecAutomation/ASR650x-Arduino) and [Platform.io](https://github.com/HelTecAutomation/platform-asrmicro650x) support;**
- Ultra low power design, **3.5uA in deep sleep;**
- Onboard solar energy management system, **can directly connect with a 5.5~7V solar panel;**

*More details please refer to [CubeCell overview page](https://heltec.org/cubecell_overview/) and [CubeCell series summary & documents](https://heltec-automation-docs.readthedocs.io/en/latest/cubecell/index.html).*

|                           Product                            | Type<sup>①</sup> |   SiP   |       Battery       | Solar Panel | Low Power<sup>④</sup> |
| :----------------------------------------------------------: | :--------------: | :-----: | :-----------------: | :---------: | :-------------------: |
|      [HTCC-AB01](https://heltec.org/project/htcc-ab01/)      |    Dev-Board     | ASR6501 | Lithium<sup>②</sup> |      √      |        3.5 uA         |
|      [HTCC-AB02](https://heltec.org/project/htcc-ab02/)      |    Dev-Board     | ASR6502 | Lithium<sup>②</sup> |      √      |        3.5 uA         |
|     [HTCC-AB02A](https://heltec.org/project/htcc-ab02a/)     |    Dev-Board     | ASR6502 |       1/2 AA        |      x      |        3.5 uA         |
|     [HTCC-AB02S](https://heltec.org/project/htcc-ab02s/)     |    Dev-Board     | ASR6502 | Lithium<sup>②</sup> |      √      |         50 uA         |
|      [HTCC-AM01](https://heltec.org/project/htcc-am01/)      |      Module      | ASR6501 |         --          |     --      |        3.5 uA         |
|      [HTCC-AM02](https://heltec.org/project/htcc-am02/)      |      Module      | ASR6502 |         --          |     --      |        3.5 uA         |
|   [Capsule Sensor](https://heltec.org/project/htcc-ac01/)    |   LoRa Sensor    | ASR6501 | Lithium<sup>②</sup> |      x      |         9 uA          |
| [Capsule Solar Sensor](https://heltec.org/project/htcc-ac02/) |   LoRa Sensor    | ASR6501 | Lithium<sup>②</sup> |      √      |         9 uA          |

&nbsp;

## ESP32 LoRa Series

Strong computing ability, huge FLASH, and rich hardware resources.

[ESP32 LoRa series summary & documents](https://heltec-automation-docs.readthedocs.io/en/latest/esp32/index.html)

|                           Product                            | Type<sup>①</sup> |                             MCU                              | FLASH |       Battery       | Battery Detect | Vext<sup>③</sup> | Low Power<sup>④</sup> |    Display    |
| :----------------------------------------------------------: | :--------------: | :----------------------------------------------------------: | :---: | :-----------------: | :------------: | :--------------: | :-------------------: | :-----------: |
|   [WiFi LoRa 32](https://heltec.org/project/wifi-lora-32)    |    Dev-Board     | [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf) |  4MB  | Lithium<sup>②</sup> |       x        |        x         |           x           | OLED (128x64) |
| [WiFi LoRa 32(V2)](https://heltec.org/project/wifi-lora-32)  |    Dev-Board     | [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf) |  8MB  | Lithium<sup>②</sup> |       √        |        √         |         800uA         | OLED (128x64) |
| [Wireless Stick](https://heltec.org/project/wireless-stick)  |    Dev-Board     | [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf) |  8MB  | Lithium<sup>②</sup> |       √        |        √         |         800uA         | OLED (64x32)  |
| [Wireless Stick Lite](https://heltec.org/project/wireless-stick-lite/) |    Dev-Board     | [ESP32-PICO](https://www.espressif.com/sites/default/files/documentation/esp32-pico-d4_datasheet_en.pdf) |  4MB  | Lithium<sup>②</sup> |       √        |        √         |         35uA          |       x       |
| [Wireless Shell](https://heltec.org/project/wireless-shell/) |      Module      | [ESP32-PICO](https://www.espressif.com/sites/default/files/documentation/esp32-pico-d4_datasheet_en.pdf) |  4MB  |         --          |       √        |        x         |         10uA          |       x       |
| [Wireless Bridge](https://heltec.org/project/wireless-bridge) |    Dev-Board     | [ESP32-D0WDQ6](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf) |  8MB  | Lithium<sup>②</sup> |       √        |        x         |         800uA         |       x       |

&nbsp;

## STM32 LoRa Series

Use STM32 as the main control chip, suitable for experienced ARM engineers.

[STM32 LoRa series summary & documents](https://heltec-automation-docs.readthedocs.io/en/latest/stm32/index.html)

|                          Product                           | Type<sup>①</sup> |                             MCU                              | FLASH | Battery | Battery Detect | Vext<sup>③</sup> | Low Power<sup>④</sup> | Display |
| :--------------------------------------------------------: | :--------------: | :----------------------------------------------------------: | :---: | :-----: | :------------: | :--------------: | :-------------------: | :-----: |
|  [LoRa Kit 151](https://heltec.org/project/lora-kit-151)   |    Dev-Board     | [STM32L151CBU6](https://www.st.com/content/st_com/en/products/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus/stm32-ultra-low-power-mcus/stm32l1-series/stm32l151-152/stm32l151cb.html) | 128kB | Lithium |       x        |        x         |          7uA          |    x    |
| [LoRa Node 151](https://heltec.org/project/lora-node-151)  |    Dev-Board     | [STM32L151CCU6](https://www.st.com/content/st_com/en/products/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus/stm32-ultra-low-power-mcus/stm32l1-series/stm32l151-152/stm32l151cc.html) | 256kB | 1/2 AA  |       √        |        √         |         1.8uA         |    x    |
| [Turtle Board](<https://heltec.org/project/turtle-board/>) |    Dev-Board     | [STM32L432KC](https://www.st.com/content/st_com/en/products/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus/stm32-ultra-low-power-mcus/stm32l4-series/stm32l4x2/stm32l432kc.html) | 256kB | AAA x 2 |       √        |        √         |          5uA          |    x    |

&nbsp;

**Notes：**

① -- Type：
- Dev-Board -- Can be used directly;
- LoRa Sensor -- Can be used in application directly;
- Module -- Only core function, need to cooperate with external PCB or circuit.

② -- Lithium: All lithium battery socket for Heltec boards is SH1.25-2；

③ -- Vext：3.3V (500mA) output, for external devices (e.g. sensors) power supply, in deep sleep mode, Vext can be shut down via software;

④ -- Low Power: Products' low power design of whole circuit, the measured data are the current of the system during deep sleep.

