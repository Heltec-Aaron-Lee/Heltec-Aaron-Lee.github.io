# Turtle Board LoRaWAN Example Usage

[Turtle Board](https://heltec.org/project/turtle-board/) is based on [STM32L432KC](https://www.st.com/resource/en/datasheet/stm32l432KC.pdf), Our company is gradually replacing the IDE to [CubeIDE](https://www.st.com/en/development-tools/stm32cubeide.html), which is the STMicroelectronics official just launched development tools for their own MCUs. Based on Eclipse, include code tracking, code completion, compilation, download, single-step debugging, and integrated with CubdeMX.

The LoRaWAN example code of Turtle Board is a CubeIDE project, here is the basic config steps.

&nbsp;

#### 1. Download and correctly install [CubeIDE](https://www.st.com/en/development-tools/stm32cubeide.html)

&nbsp;



&nbsp;

#### 2. Modify `DEVICE_EUI`, `APPLICATION_KEY`, `APPLICATION_EUI` in the `Commissioning.h` file according to your needs

<img src="img/Turtle_Board_lorawan_example_usage/01.png">

Note this macro definition:

- OVER_THE_AIR_ACTIVATION -- 1：OTAA mode
- OVER_THE_AIR_ACTIVATION -- 0：ABP mode

&nbsp;

#### 3. Set the working bands in the “board.h”

<img src="img/Turtle_Board_lorawan_example_usage/02.png">

The content in the red box can only be one of the following bands:

`USE_BAND_433`
`USE_BAND_470`
`USE_BAND_470PREQUEL`
`USE_BAND_780`
`USE_BAND_868`
`USE_BAND_915`
`USE_BAND_915_HYBRID`

&nbsp;

#### 4. Ensure that the listening frequency of the gateway is the same as the transmitting frequency of the node

The code for the node transmit frequency is in the `LoRaMac.c` file.

<img src="img/Turtle_Board_lorawan_example_usage/03.png">

Now, if download the program into your board, if everything is normal, it should be able to run.

- You may need: [How to Download Firmware into Turtle Board](https://docs.heltec.cn/#/en/user_manual/how_to_download_firmware_into_Turtle_Board?id=how-to-download-firmware-into-Turtle-Board)

&nbsp;

#### 5. Debug Log

The Turtle Board can print debugging information through USB CDC (USB Virtual Serial Poart) or UART, but the USB to UART chip is not integrated on the board. If the debugging information is to be output through the UART, an external USB to UART module is required.

##### 	5.1 Via UART

Add `USE_DEBUGGER` in macro definitions.

The Turtle Board and USB-UART module are connect as below *(if the Turtle Board is powered via USB or battery, the UART mode's 3.3 / 5V pin do not need connect, just need TXD, RXD, GND)*:

<img src="img/Turtle_Board_lorawan_example_usage/04.png">

&nbsp;

![](http://community.heltec.cn/uploads/default/original/1X/aac8f73ed1c1f5474b6abe0e1244ded5859f3a3d.png)

&nbsp;

##### 		5.2 Via USB CDC (Virtual Serial Port)

Connect Turtle Board to computer via a Micro USB cable. Add both `USB_VCP` and `USE_DEBUGGER` macro definitions.

<img src="img/Turtle_Board_lorawan_example_usage/05.png">

![](http://community.heltec.cn/uploads/default/original/1X/5c7b04a3e39e7af3ae5ffee1bcc6457c2f1254f0.png)

&nbsp;

#### 6. Low power

Remove the `USB_VCP` and `USE_DEBUGGER` in the macro definition, compile and download to Turtle Board again, connect an ammeter to the positive pole of the battery. After the network is successfully sent and a set of data is sent, the system will automatically enter the sleep state. If everything is ok, the value read on the ammeter should approach the value in [this table](https://docs.heltec.cn/#/en/products/lora/lora_node/heltec_lora_node_list_eu).

![](http://community.heltec.cn/uploads/default/original/1X/c029cedd80649c5eb97aa4f301a6a6c4b4eb808b.png)