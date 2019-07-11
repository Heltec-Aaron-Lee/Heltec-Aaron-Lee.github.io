# LoRa Node 151常见问题汇总

此页汇总了我们在日常工作中被最常问到的问题。如果这个页面的内容依然不能解决您的问题，您可以到我们的论坛上进一步讨论：[community.heltec.cn](http://community.heltec.cn/)

&nbsp;

## 目录

1. **[LoRa Node 151烧写程序的方法](#LoRa-Node-151烧写程序的方法)**

2. **[LoRa Node 151的LoRaWAN例程串口打印调试信息问题](#LoRa-Node-151的LoRaWAN例程串口打印调试信息问题)**

3. **[LoRaWAN例程配置和使用简要说明](#LoRaWAN例程配置和使用简要说明)**

   &nbsp;

## LoRa Node 151烧写程序的方法

请参考这篇文档:

[https://docs.heltec.cn/#/zh_CN/user_manual/how_to_download_firmware_into_lora_node_151](https://docs.heltec.cn/#/zh_CN/user_manual/how_to_download_firmware_into_lora_node_151)

&nbsp;

## LoRa Node 151的LoRaWAN例程串口打印调试信息问题

截至2016年6月26日，LoRa Node 151的LoRaWAN例程中，调试信息依然使用UART1输出：

[http://community.heltec.cn/t/lora-node-151-debug-log-print-problem/100](http://community.heltec.cn/t/lora-node-151-debug-log-print-problem/100)

USB_CDC (virtual serial port)的版本正在调试中，新版本的例程将不会存在此类问题了。



## LoRaWAN例程配置和使用简要说明

以连接到TTN为例，如果连接到其他平台（私有的loraserver，阿里云等），也可以参考这个。

[http://community.heltec.cn/t/how-to-use-lora-node-151-and-send-data-to-ttn/124/9?u=hunter8801](http://community.heltec.cn/t/how-to-use-lora-node-151-and-send-data-to-ttn/124/9?u=hunter8801)