# LoRa Node 151 LoRaWAN例程配置方法

[LoRa Node 151](https://heltec.org/zh/project/lora-node-151/)开发板的主控芯片是基于[STM32L151CCU6](https://www.st.com/resource/en/datasheet/stm32l151cc.pdf)的，因为正版Keil售价实在太高，我司正逐步将开发平台和编译工具换成[CubeIDE](https://www.st.com/en/development-tools/stm32cubeide.html)，这是ST官方刚刚推出的一款针对自家MCU的开发工具，基于Eclipse，具有代码追踪、代码补全、编译、下载、单步调试等功能，而且集成了CubdeMX。

LoRa Node 151的LoRaWAN协议例程是基于CubeIDE的工程，以下是配置方法简介。

&nbsp;

#### 1. 下载并正确安装[CubeIDE](https://www.st.com/en/development-tools/stm32cubeide.html)。

&nbsp;

#### 2. 双击工程文件`.project`，打开项目。

首次运行时可能会弹出如下对话框，依次点击Yes和OK。

<img src="img/lora_node_151_lorawan_example_usage/01.png">

<img src="img/lora_node_151_lorawan_example_usage/02.png">

&nbsp;

#### 3. 根据自己的需求，在`Commissioning.h`文件中修改`DEVICE_EUI`，`APPLICATION_KEY`，`APPLICATION_EUI`。

<img src="img/lora_node_151_lorawan_example_usage/03.png">

说明一下：

- OVER_THE_AIR_ACTIVATION宏定义 -- 1：OTAA模式
- OVER_THE_AIR_ACTIVATION宏定义 -- 0：ABP模式

&nbsp;

#### 4. 在宏定义中设置工作频率（Properties）

<img src="img/lora_node_151_lorawan_example_usage/04.png">

红框内的内容仅能是以下频段中的一个：

`USE_BAND_433`
`USE_BAND_470`
`USE_BAND_470PREQUEL`
`USE_BAND_780`
`USE_BAND_868`
`USE_BAND_915`
`USE_BAND_915_HYBRID`

&nbsp;

#### 5. 确保网关的监听频率和节点的发射频率一致

节点发射频率相关的代码在`LoRaMac.c`文件中。

<img src="img/lora_node_151_lorawan_example_usage/05.png">

此时，将程序[下载到开发板](https://docs.heltec.cn/#/zh_CN/user_manual/how_to_download_firmware_into_lora_node_151)中，若一切正常，应该是可以运行的。

&nbsp;

#### 6. 串口打印调试信息

LoRa Node 151可通过USB CDC或UART来打印调试信息，但板上并未集成USB转UART芯片，如果要通过UART输出调试信息，需要外接USB转UART模块。

##### 	6.1 通过UART打印

在宏定义中增加`USE_DEBUGGER`

开发板和USB-UART模块如下图所示连线*（若开发板通过USB或电池供电，不需要接UART模式的电源引脚，共地即可）*：

![](http://community.heltec.cn/uploads/default/original/1X/ceaa9817fb727c053d71ec1da93ecb09e740a00a.jpeg)

&nbsp;

![](http://community.heltec.cn/uploads/default/original/1X/aac8f73ed1c1f5474b6abe0e1244ded5859f3a3d.png)

&nbsp;

##### 		6.2 通过USB CDC来打印调试信息

开发板和电脑通过Micro USB线相连。宏定义中**同时**增加`USB_VCP`和`USE_DEBUGGER`。

<img src="img/lora_node_151_lorawan_example_usage/06.png">

&nbsp;

通过USB_CDC打印调试信息：

![](http://community.heltec.cn/uploads/default/original/1X/5c7b04a3e39e7af3ae5ffee1bcc6457c2f1254f0.png)

&nbsp;

#### 7. 低功耗

将宏定义中的`USB_VCP`和`USE_DEBUGGER`移除，从新编译并下载到开发板中，在电池的正极上串联一个电流表，当入网成功并发送完一组数据之后，系统会自动进入休眠状态。若一切正常，电流表上读得的值应该趋近[此表格](https://docs.heltec.cn/#/en/products/lora/lora_node/heltec_lora_node_list_eu)中的值。

![](http://community.heltec.cn/uploads/default/original/1X/c029cedd80649c5eb97aa4f301a6a6c4b4eb808b.png)