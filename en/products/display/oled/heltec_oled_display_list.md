---
title: "Heltec LoRa Gateway 产品差异对比"
description: |
  Heltec 的 LoRa Gateway 系列设备支持标准 LoRaWAN，
  拥有完善的文档、出色的 RF 设计和阻抗匹配能力13131313131
  1313131。
bgImage: "https://resource.heltec.cn/img/docs/lora_gateway/ht_m02.jpg"
link: "https://heltec.cn/project/htcc-ab01"
---

# Heltec OLED Display Products Difference Table

## Contents

- [OLED Module](#OLED-Module)
- [OLED Display](#OLED-Display-(No-PCB))

------

## OLED Module

**“Heltec OLED Display” product family already included follow options:**

- On-board power-on auto reset circuit;
- 2.54 x 4 socket for IIC interface;
- 2.54 x 6 socket for SPI interface.

&nbsp;

|                           Product                            |           Color            |                          Driver IC                           | Resolution |   Second Connector    |
| :----------------------------------------------------------: | :------------------------: | :----------------------------------------------------------: | :--------: | :-------------------: |
|      [0.49" IIC](https://heltec.org/project/049-oled/)       |           White            | [SSD1306](https://docs.heltec.cn/download/oled/SSD1306-Revision_1.1_(Charge_Pump).pdf) |  64 x 32   |         None          |
|      [0.91" IIC](https://heltec.org/project/091-oled/)       |           White            | [SSD1306](https://docs.heltec.cn/download/oled/SSD1306-Revision_1.1_(Charge_Pump).pdf) |  128 x 32  |         None          |
|      [0.96" IIC](https://heltec.org/project/096-oled/)       | white, blue, yellow & blue | [SSD1306](https://docs.heltec.cn/download/oled/SSD1306-Revision_1.1_(Charge_Pump).pdf) |  128 x 64  |         None          |
|      [0.96" SPI](https://heltec.org/project/096-oled/)       | white, blue, yellow & blue | [SSD1306](https://docs.heltec.cn/download/oled/SSD1306-Revision_1.1_(Charge_Pump).pdf) |  128 x 64  | 0.5 x 6 FFC footprint |
| [0.96" SPI CN library](https://heltec.org/project/096-oled/) | white, blue, yellow & blue | [SH1106](https://docs.heltec.cn/download/oled/SH1106_V2.3.pdf) |  128 x 64  |         None          |
|       [1.3" IIC](https://heltec.org/project/13-oled/)        |        white, blue         | [SH1106](https://docs.heltec.cn/download/oled/SH1106_V2.3.pdf) |  128 x 64  | 1.0 x 4 FFC footprint |
| [1.3" IIC Expump](https://heltec.org/project/13-oled/)<sup>①</sup> |        white, blue         | [SH1106](https://docs.heltec.cn/download/oled/SH1106_V2.3.pdf) |  128 x 64  |  1.0 x 4 FFC socket   |
|       [1.3" SPI](https://heltec.org/project/13-oled/)        |        white, blue         | [SH1106](https://docs.heltec.cn/download/oled/SH1106_V2.3.pdf) |  128 x 64  | 0.5 x 6 FFC footprint |
|  [1.3" SPI CN library](https://heltec.org/project/13-oled/)  |        white, blue         | [SH1106](https://docs.heltec.cn/download/oled/SH1106_V2.3.pdf) |  128 x 64  |         None          |
|      [1.54" IIC](https://heltec.org/project/154-oled/)       |           White            | [SPD0301](https://docs.heltec.cn/download/oled/SPD0301_0.1.pdf) |  128 x 64  |  1.0 x 4 FFC socket   |
|       [2.4" IIC](https://heltec.org/project/13-oled/)        |           White            | [SPD0301](https://docs.heltec.cn/download/oled/SPD0301_0.1.pdf) |  128 x 64  |  1.0 x 4 FFC socket   |

&nbsp;

**Note:**

① -- Expump: The power supply of the OLED liquid crystal panel is powered by an external charge pump, it's the most stable version.

&nbsp; 

## OLED Display (No PCB)

**“Heltec OLED Display” product family already included follow options:**

- 1.7 ~ 6 V power supply;
- Internal driver chip;

- -30 ~ 80 ℃ working temperature.

  

|                   Size (Inch)                   |        Color Option        |                          Driver IC                           |                 Interface                 | Charge Pump | Connector |   Assemble Method    | Resolution |
| :---------------------------------------------: | :------------------------: | :----------------------------------------------------------: | :---------------------------------------: | :---------: | :-------: | :------------------: | :--------: |
| [0.49](https://heltec.org/product/oled-no-pcb/) |           white            | [SSD1306](https://docs.heltec.cn/download/oled/SSD1306-Revision_1.1_(Charge_Pump).pdf) |                    IIC                    |  Internal   |  14P FPC  |      soldering       |  64 x 32   |
| [0.91](https://heltec.org/product/oled-no-pcb/) |           white            | [SSD1306](https://docs.heltec.cn/download/oled/SSD1306-Revision_1.1_(Charge_Pump).pdf) |                    IIC                    |  Internal   |  14P FPC  |      soldering       |  128 x 32  |
| [0.96](https://heltec.org/product/oled-no-pcb/) | white, blue, yellow & blue | [SSD1306](https://docs.heltec.cn/download/oled/SSD1306-Revision_1.1_(Charge_Pump).pdf) | 8-bit 68XX/80XX Parallel, 4-wire SPI, I2C |  Internal   |  30P FPC  |      soldering       |  128 x 64  |
| [1.3](https://heltec.org/product/oled-no-pcb/)  |        white, blue         | [SH1106](https://docs.heltec.cn/download/oled/SH1106_V2.3.pdf) | 8-bit 68XX/80XX Parallel, 4-wire SPI, I2C |  Internal   |  30P FPC  |      soldering       |  128 x 64  |
| [1.54](https://heltec.org/product/oled-no-pcb/) |           white            | [SPD0301](https://docs.heltec.cn/download/oled/SPD0301_0.1.pdf) | 8-bit 68XX/80XX Parallel, 4-wire SPI, I2C |  External   |  24P FFC  | 0.5 x 24P FFC Socket |  128 x 64  |
| [2.4](https://heltec.org/product/oled-no-pcb/)  |           white            | [SPD0301](https://docs.heltec.cn/download/oled/SPD0301_0.1.pdf) | 8-bit 68XX/80XX Parallel, 4-wire SPI, I2C |  External   |  24P FFC  | 0.5 x 24P FFC Socket |  128 x 64  |


