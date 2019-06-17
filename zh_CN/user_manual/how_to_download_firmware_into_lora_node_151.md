# LoRa Node 151烧写程序的方法 

[LoRa Node 151](https://heltec.org/zh/project/lora-node-151/)开发板的主控芯片是基于[STM32L151CCU6](https://www.st.com/resource/en/datasheet/stm32l151cc.pdf)的，内置具有DFU功能的Bootloader。所以，用户可以通过DFU和SW两种方式对LoRa Node 151烧写程序，根据自己的情况，二选一即可。

## 目录

- [使用ST-LINK，通过SW方式烧写程序](#使用ST-LINK，通过SW方式烧写程序)
- [使用Micro SB线，通过DUF模式烧写程序](#使用Micro SB线，通过DUF模式烧写程序)
  - [如何进入DFU模式](#如何进入DFU模式)
  - [烧写程序](#烧写程序)

&nbsp;

## 使用ST-LINK，通过SW方式烧写程序

采用此种方式烧写程序，先要准备一个ST-LINK下载器（大概U盘大小，10多元钱就能买一个）。然后将ST-LINK与LoRa Node 151按如下图的线序相连：

<img src="img/how_to_download_firmware_into_lora_node_151/01.png">

接线时，请参照[LoRa Node 151引脚图](https://docs.heltec.cn/download/LoRa_Node_151.pdf)

&nbsp;

**注意：ST-LINK是具有供电功能的！如果LoRa Node 151已通过Micro USB接口连接到电脑，ST-LINK的3.3V就不用接到开发板的VDD上！否则可能导致开发板损坏！**

下载并安装ST-LINK的[驱动程序](https://www.st.com/content/st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/stsw-link004.html)，点击如下图箭头1所指的图标，读取芯片信息，若可以看到红色方框内的信息，则表示一切正常。

<img src="img/how_to_download_firmware_into_lora_node_151/02.png">



箭头1 -- 读取芯片信息；

箭头2 -- 打开要烧写的.hex/.bin文件

箭头3 -- 开始烧写

&nbsp;

***使用ST-LINK方式的好处在于可以结合IDE进行单步调试（比如说……可以在Keil MDK中看到寄存器、变量的值），但缺点是需要ST-LINK这一工具。***



## 使用Micro SB线，通过DUF模式烧写程序

STM32L151CCU6芯片内部已经集成了DFU Bootloader，只需要通过一根Micro USB连接线，通过USB协议，就能将编译好的.hex/.bin文件下载到开发板中。

下载并安装[STM32CubeProg](https://www.st.com/content/st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/stm32cubeprog.html)软件，它是ST官方提供的一款专用于STM32烧写固件的软件，安装包内已经包含了STM32相关的所有驱动程序。

#### 如何进入DFU模式

**以下两种方式二选一**

- 在开发板未连接到电脑的情况下——先按住板上的USR键保持不放，再将板子通过Micro USB连接到电脑上*（一定注意先后顺序！）*；
- 在开发板已连接到电脑的情况下——按住USR键保持不放 → 按以下RST键 → 松开RST键 → 松开USR键。

&nbsp;

若成功进入DFU模式（在驱动程序安装正确的前提下），可以在设备管理器中看到名为“STM32 BOOTLOADER”的设备。在STM32CubeProg软件中，选择USB，点击“Connect”，可以读取到芯片信息。

<img src="img/how_to_download_firmware_into_lora_node_151/03.png">

&nbsp;

#### 烧写程序

打开编译好的.hex/.bin文件，Download即可。

<img src="img/how_to_download_firmware_into_lora_node_151/04.png">



***使用DFU模式的好处在于方便就地取材，除USB线以外无需任何的硬件工具，但缺点是没办法在线仿真。***

