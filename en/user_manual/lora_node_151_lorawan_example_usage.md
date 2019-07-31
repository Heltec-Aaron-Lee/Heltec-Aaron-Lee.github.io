# LoRa Node 151 LoRaWAN Example Usage

[LoRa Node 151](https://heltec.org/zh/project/lora-node-151/) is based on [STM32L151CCU6](https://www.st.com/resource/en/datasheet/stm32l151cc.pdf), Our company is gradually replacing the IDE to [CubeIDE](https://www.st.com/en/development-tools/stm32cubeide.html), which is the STMicroelectronics official just launched development tools for their own MCUs. Based on Eclipse, include code tracking, code completion, compilation, download, single-step debugging, and integrated with CubdeMX.

The LoRaWAN example code of LoRa Node 151 is a CubeIDE project, here is the basic config steps.

&nbsp;

#### 1. Download and correctly install [CubeIDE](https://www.st.com/en/development-tools/stm32cubeide.html)

&nbsp;

#### 2. Double click `.project`, open project

The first time you run, may have the following dialog box will, click Yes and then OK.

<img src="img/lora_node_151_lorawan_example_usage/01.png">

<img src="img/lora_node_151_lorawan_example_usage/02.png">

&nbsp;

#### 3. Modify `DEVICE_EUI`, `APPLICATION_KEY`, `APPLICATION_EUI` in the `Commissioning.h` file according to your needs

<img src="img/lora_node_151_lorawan_example_usage/03.png">

Note this macro definition:

- OVER_THE_AIR_ACTIVATION -- 1：OTAA mode
- OVER_THE_AIR_ACTIVATION -- 0：ABP mode

&nbsp;

#### 4. Set the working bands in the macro definition

<img src="img/lora_node_151_lorawan_example_usage/04.png">

The content in the red box can only be one of the following bands:

`USE_BAND_433`
`USE_BAND_470`
`USE_BAND_470PREQUEL`
`USE_BAND_780`
`USE_BAND_868`
`USE_BAND_915`
`USE_BAND_915_HYBRID`

&nbsp;

#### 5. Ensure that the listening frequency of the gateway is the same as the transmitting frequency of the node

The code for the node transmit frequency is in the `LoRaMac.c` file.

<img src="img/lora_node_151_lorawan_example_usage/05.png">

Now, if download the program into your board, if everything is normal, it should be able to run.

- You may need: [How to Download Firmware into LoRa Node 151](https://docs.heltec.cn/#/en/user_manual/how_to_download_firmware_into_lora_node_151?id=how-to-download-firmware-into-lora-node-151)

&nbsp;

#### 6. Debug Log

The LoRa Node 151 can print debugging information through USB CDC (USB Virtual Serial Poart) or UART, but the USB to UART chip is not integrated on the board. If the debugging information is to be output through the UART, an external USB to UART module is required.

##### 	6.1 Via UART

Add `USE_DEBUGGER` in macro definitions.

The LoRa Node 151 and USB-UART module are connect as below *(if the LoRa Node 151 is powered via USB or battery, the UART mode's 3.3 / 5V pin do not need connect, just need TXD, RXD, GND)*:

![](http://community.heltec.cn/uploads/default/original/1X/ceaa9817fb727c053d71ec1da93ecb09e740a00a.jpeg)

&nbsp;

![](http://community.heltec.cn/uploads/default/original/1X/aac8f73ed1c1f5474b6abe0e1244ded5859f3a3d.png)

&nbsp;

##### 		6.2 Via USB CDC (Virtual Serial Port)

Connect LoRa Node 151 to computer via a Micro USB cable. Add both `USB_VCP` and `USE_DEBUGGER` macro definitions.

<img src="img/lora_node_151_lorawan_example_usage/06.png">

![](http://community.heltec.cn/uploads/default/original/1X/5c7b04a3e39e7af3ae5ffee1bcc6457c2f1254f0.png)

&nbsp;

#### 7. Low power

Remove the `USB_VCP` and `USE_DEBUGGER` in the macro definition, compile and download to LoRa Node 151 again, connect an ammeter to the positive pole of the battery. After the network is successfully sent and a set of data is sent, the system will automatically enter the sleep state. If everything is ok, the value read on the ammeter should approach the value in [this table](https://docs.heltec.cn/#/en/products/lora/lora_node/heltec_lora_node_list_eu).

![](http://community.heltec.cn/uploads/default/original/1X/c029cedd80649c5eb97aa4f301a6a6c4b4eb808b.png)