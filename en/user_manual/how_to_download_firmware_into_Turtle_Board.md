# How to Download Firmware into Turtle Board 

[Turtle Board](https://heltec.org/project/turtle-board/) is based on [STM32L432KC](https://www.st.com/resource/en/datasheet/stm32l432KC.pdf), it's already included DFU Bootloader. Therefore, the user can program the Turtle Board through DFU and SW method.

## 目录

- [Use ST-LINK Debugger, Via SW Debug Mode](#Use-ST-LINK-Debugger,-Via-SW-Debug-Mode)
- [Use Micro USB cable, via DUF Mode](#Use-Micro-USB-cable,-via-DUF-Mode)
  - [How to Access DFU Mode](#How-to-Access-DFU-Mode)
  - [Download Firmware](#Download-Firmware)

&nbsp;

## Use ST-LINK Debugger, Via SW Debug Mode

To program in this way, you need prepare an ST-LINK debugger. Connect the ST-LINK to the Turtle Board correctly:

<img src="img/how_to_download_firmware_into_Turtle_Board/01.png">

<img src="img/how_to_download_firmware_into_Turtle_Board/02.png">

You may need refer to the [Turtle_Board Pinout Diagrame](https://docs.heltec.cn/download/Turtle_Board.pdf)

&nbsp;

**Note: ST-LINK can provide power to target device! If the Turtle Board is connected to the computer via the Micro USB interface, the ST-LINK 3.3V CAN NOT be connected to the VDD! Do so may result in damage to the development board!**

Download and install [STM32 ST-LINK Utility](https://www.st.com/content/st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/stsw-link004.html), click the icon indicated by arrow 1 to read the chip information. If you can see the information in the red box, it means everything is normal.

<img src="img/how_to_download_firmware_into_Turtle_Board/03.png">



Arrow 1 -- Open the .hex/.bin files you will download;

Arrow 2 -- Read Chip information；

Arrow 3 -- Begin Download.

&nbsp;

***The advantage of using the ST-LINK method is that it can be single-stepped debugging with the IDE (for example, the value of registers and variables can be seen in the Keil MDK), but the disadvantage is that the ST-LINK debugger tool is required.***



## Use Micro USB cable, via DUF Mode

STM32L432KC had already included DFU Bootloader, it means just need a Micro USB cable, users can download .hex/.bin files into the board.

Download and install [STM32CubeProg](https://www.st.com/content/st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/stm32cubeprog.html) software, which is a software provided by ST official for STM32 programming firmware. All the drivers related to STM32 are included in the installation package.

#### How to Access DFU Mode

**Choose one of the following ways**

- If the board is not connected to the computer —— Press the “USR” button of the Turtle Board while plugging it to any USB port of the computer *(must keep press the USR key before plug in and release when it's connected USB port)*;
- If the board had connected to the computer —— Keep press the "USR" button → Click the "RST" button → Release "USR" button.

&nbsp;

If enter DFU mode successfully (with the driver is installed correctly), you can see the device named "STM32 BOOTLOADER" in the device manager. In the STM32CubeProg software, select USB, then click the "Refresh" symbol next to it, when you see a string of numbers in the serial number and click “Connect” to read the chip information.

<img src="img/how_to_download_firmware_into_Turtle_Board/04.png">
<img src="img/how_to_download_firmware_into_Turtle_Board/05.png">

&nbsp;

#### Download Firmware

Open a .hex/.bin file and click the "Download" icon.

<img src="img/how_to_download_firmware_into_Turtle_Board/06.png">

After the program is successfully downloaded, press the "RST" button to run.



***The advantage of using the DFU mode is that it is convenient to find a Micro USB cable near your hand. But the disadvantage is that there is no way to simulate online.***