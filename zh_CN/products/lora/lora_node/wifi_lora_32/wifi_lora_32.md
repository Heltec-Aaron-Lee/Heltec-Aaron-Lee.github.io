# WiFi LoRa 32
***
&nbsp;


<img src="img/products/lora/lora_node/wifi_lora_32/01.jpg">

* * *

**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **[Quick Start](https://github.com/Heltec-Aaron-Lee/WiFi_Kit_series)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **[Example](https://github.com/HelTecAutomation/Heltec_ESP32)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **[For More Information](http://www.heltec.cn/project/wifi-lora-32/)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **[Purchase](https://item.taobao.com/item.htm?spm=2013.1.20141001.1.18545cc3k9jZcF&id=575306601114&scm=1007.12144.95220.42296_0&pvid=e65b35cd-abf8-4d33-b0b0-bc8517921844&utparam=%7B%22x_hestia_source%22%3A%2242296%22%2C%22x_object_type%22%3A%22item%22%2C%22x_mt%22%3A0%2C%22x_src%22%3A%2242296%22%2C%22x_pos%22%3A1%2C%22x_pvid%22%3A%22e65b35cd-abf8-4d33-b0b0-bc8517921844%22%2C%22x_object_id%22%3A575306601114%7D)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **[Other Links](#Other-Links)**

## Description

*WiFi LoRa 32*

**The WiFi LoRa 32** is a Self-developed LoRa node by heltec based on LoRa chip and 32-bit dual core **ESP32** chip. 
 - Support **WIFI802.11 b/g/n/e/i** and **traditional Bluetooth** and **BLE low power dual mode Bluetooth**;
 - Integrated the MCU, SX125x LoRa chip, RF circuit switch switch, RF circuit, lithium battery management, USB to serial port and other functions.
 - Low power design: **sleep current**：800uA ± 50uA.
 - The upgraded version of LoRa perfectly inherits all the routines of the old version, and adds a series of routines such as **Deep-Sleep** mode, **power display**, **dual-core** control, etc.
 - Under the premise of supporting the LoRa gateway, a gateway can communicate with more than **1000** nodes.
 - Adopt advanced LoRa spread spectrum communication technology, ultra long-distance transmission and reception, ultra-low power consumption, strong anti-interference ability, and the measured communication distance of open area is **3Km** (package loss rate **<0.3%**)

*The LoRa Resolution*

 - LoRa spread spectrum communication has the characteristics of long communication distance
 - A gateway can communicate with more than 1000 nodes.
 - LoRaWAN is the first Internet of Things to propose double encryption
 - Improve the low-power part of the lorawan source to reduce the use of the battery to a greater extent 
 
*The OLED Resolution: 128x64*

<table>
 <tr><td>ESP32 Chip</td><td>GPIO15</td><td>GPIO4</td><td>GPIO16</td></tr>
 <tr><td>SSD1306</td><td>OLED_SCL</td><td>OLED_SDA</td><td>OLED_RST</td></tr>

</table>
 
 ## Parameter

<table>
   <tr style="font-weight:bold">
      <td>Source</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>ESP32</td>
      <td>240MHz dual core, 600 DMIPS, 520KB SRAM, Wi-Fi, dual mode Bluetooth</td>
   </tr>
   <tr>
      <td>Flash</td>
      <td>64M-bits</td>
   </tr>
   <tr>
      <td>Input</td>
      <td>5V @ 500mA</td>
   </tr>
   <tr>
      <td>Interface</td>
      <td>MircoUSB x 1, LoRa(IPEX) x 1</td>
   </tr>
   <tr>
      <td>OLED</td>
      <td>0.96 inch, 128x64 </td>
   </tr>
   <tr>
      <td>LoRa support frequency band</td>
      <td>SX1276(868-915, 923MHz);SX1278(433-510MHz)</td>
   </tr>
   <tr>
      <td>Processor</td>
      <td>2 Tensilica LX6 + 1 ULP processor</td>
   </tr>
   <tr>
      <td>Op.Temp.</td>
      <td>–30°C to +80°C</td>
   </tr>
   <tr>
      <td>Operating Voltage</td>
      <td>3.3v ~ 7v</td>
   </tr>
   <tr>
      <td>Size</td>
      <td>50.2 x 25.5 x 9.74 mm</td>
   </tr>
   <tr>
      <td>USB transfer interface chip</td>
      <td>CP2102</td>
   </tr>
</table>

## PinoutDiagram

<img src="img/products/lora/lora_node/wifi_lora_32/02.png">

## Other Links

-  **Datasheet** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf)
