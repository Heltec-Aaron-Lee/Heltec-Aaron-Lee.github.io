# 如何将CubeCell连接到TTN(The-Things-Network)

-------------------------------------------------------------------------------------------------------

## 目录

1. [总览](#总览)
2. [事前准备](#事前准备)
3. [配置节点入网信息](#配置节点入网信息)

## 总览

​		[CubeCell系列](https://heltec.org/cubecell)是HelTec AutoMation开发团队开发的高效率、低成本的LoRa节点方案解决设备。

​		CubeCell拥有比ESP32更低的功耗(睡眠电流3.5uA)，更优秀的阻抗匹配设计，更好的发射功率(内核集成SX126x)，并预留太阳能板接口，支持5.5V至7V的太阳能电池板。

​		CubeCell系列设备可通过HelTec团队开发的专属底层，完美支持便捷的Arduino IDE进行开发。

可通过Arduino IDE一键下载自动安装开发环境，[如何安装开发CubeCell Arduino开发环境](https://docs.heltec.cn/#/zh_CN/user_manual/how_to_install_ASR650x_Arduino)。



​		本文旨在描述如何将[CubeCell系列(CubeCell-Board)](https://heltec.org/cubecell)通过LoRaWAN例程中的OTAA方式连接到TTN。

<img src="img\how_to_connect_cubecell_to_ttn-the-things-network\01.png">

## 事前准备
- Arduino IDE.

- 首先我们需要一个连接到TTN的网关(例如HT-M01)，如何将网关(HT-M01、HT-M02)连接到TTN请参考[这里](https://docs.heltec.cn/#/zh_CN/user_manual/how_to_connect_ht-m01_to_ttn-the-things-network)。

- 准备一个[CubeCell-Board](https://heltec.org/project/htcc-ab01/)或者[CubeCell-Cupsule](https://heltec.org/project/htcc-ac01/)和一根优质的USB线缆。

- 在TTN中配置一个CubeCell-Board节点。

  本例程我使用[HT-M01网关](https://heltec.org/project/ht-m01/)并通过USB在Windows **®**中驱动，搭配CubeCell-Board完成快速连接到TTN。


## 配置节点入网信息

首先我们必须在TTN中创建一个新的CubeCell-Board节点。

<img src="img\how_to_connect_cubecell_to_ttn-the-things-network\02.png">

安装完毕CubeCell Arduino IDE开发环境之后,在Arduino中选中CubeCell-Board，和工作的频段，并选择LoRaWAN example.

- 我需要CubeCell-Board以Class A模式，工作在EU868频段，则需要：

<img src="img\how_to_connect_cubecell_to_ttn-the-things-network\03.png">

<img src="img\how_to_connect_cubecell_to_ttn-the-things-network\04.png">

- 1. 保证AT命令模式打开,以及开启需要的功能。
```
#define  AT_SUPPORT  1
```

   例如开启RGB灯。
```
#define LoraWan_RGB 1
```

- 2. 点击下载。
- 3. 通过AT指令配置节点入网信息。

打开串口(COM4)并复位CubeCell-Board，节点启动完毕可观察到打印:

<img src="img\how_to_connect_cubecell_to_ttn-the-things-network\05.png">

#### 开始我们需要向COM发送任意数据，用以唤醒MCU

<img src="img\how_to_connect_cubecell_to_ttn-the-things-network\06.png">

我们会看见CubeCell-Board返回的信息
```
ASR is Waked,LowPower Mode Stopped
```


唤醒MCU之后，我们就可以开始向CubeCell-Board配置注册完毕的节点的DevEui、AppEui、AppKey.

例如:
```
AT+DevEui=2232330000******
AT+AppKey=888888888888888888888888********
AT+AppEui=70B3D57ED00*****
```

PS:'*'为实际注册的数字。我们需要小心，尽可能保证每一条指令之间的时间间隔>100ms，避免某些不必要的bug。

<img src="img\how_to_connect_cubecell_to_ttn-the-things-network\07.png">

节点默认工作在Class A模式，发送周期为15s，默认开启ADR。

例如我需要修改发送周期为60s，并查询该节点的EUI:

```
AT+DutyCycle=60000
AT+DevEui=?
```

<img src="img\how_to_connect_cubecell_to_ttn-the-things-network\08.png">

#### 请注意，节点入网信息的配置，必须在节点复位或者下一次入网时才会生效。复位之后会打印节点已配置的参数。

通过发送```AT+RESET=1```可以让CubeCell-Board复位。

<img src="img\how_to_connect_cubecell_to_ttn-the-things-network\09.png">

CubeCell-Board完成复位，开始入网。

返回TTN查看:

<img src="img\how_to_connect_cubecell_to_ttn-the-things-network\10.png">

CubeCell-Board已成功连接到TTN！

享受！

```

```