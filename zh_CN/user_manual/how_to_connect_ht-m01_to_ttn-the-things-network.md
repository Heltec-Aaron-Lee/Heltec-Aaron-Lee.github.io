# 如何将HT-M01连接到TTN(The-Things-Network)

-------------------------------------------------------------------------------------------------------

## 目录

1. [总览](#总览)
2. [事前准备](#事前准备)
3. [连接到TTN](#连接到TTN)

## 总览

​		The Things Network是覆盖全世界的物联网开源基础设施，旨在提供免费的LoRaWAN网络覆盖。TTN社区的哲学是提供一个完全自由和开放的网络。

​		本文旨在描述如何将[HT-M01网关](https://heltec.org/project/ht-m01)连接到TTN，为LoRa设备的二次开发与快速部署提供了便利。

## 事前准备
- 首先我们需要一个TTN的注册账号，如果没有账号请点击[这里](https://console.thethingsnetwork.org/)，进入TTN官网并注册您的账号。
- 将HT-M01与树莓派(Linux)或者Windows电脑连接。

## 连接到TTN

在TTN的个人界面中选择Gateway。

<img src="img\how_to_connect_ht-m01_to_ttn-the-things-network\01.png">

如下所示填写HT-M01信息并完成添加。

<img src="img\how_to_connect_ht-m01_to_ttn-the-things-network\02.png">

- 如果您正在Windows®中使用packet_forwarder_UI并将消息转发到TTN，则需要：

1. 选择频段。

2. 选中内容框。

3. 单击确定开始转发。

<img src="img\how_to_connect_ht-m01_to_ttn-the-things-network\03.png">

- 如果您在Raspberry Pi（Linux）中使用packet_forwarder转发
  global_conf文件需要进行一些更改。 要编辑它，请输入：

  ```
  nano /home/pi/lora/packet_forwarder/lora_pkt_fwd/global_conf.json/global_conf.json
  ```
  
  在文件末尾进行以下更改：
  
  ```
  “gateway_ID”: “YOUR_GATEWAY_ID”,
  “server_address”: “router.eu.thethings.network”,
  “serv_port_up”: 1700,
  “serv_port_down”: 1700,
  ```
  
  其中**“YOUR_GATEWAY_ID”**填入配置树莓派时得到的Gateway ID。
  
  更改完成后，重新启动转发服务。
  
  回到TTN，您将获得以下信息：
  
  <img src="img\how_to_connect_ht-m01_to_ttn-the-things-network\04.png">
  
  

至此HT-M01已经成功连接到TTN。