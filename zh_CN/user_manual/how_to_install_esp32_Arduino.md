# 基于Heltec ESP32开发板的开发环境 

?> 首先我们建议你确认 `USB 驱动`, `Git` 和 `Arduino IDE` 已经成功安装. 如果没有, 请参阅这两篇文章 [建立串口通信](/zh_CN/user_manual/establish_serial_connection) 和 [安装 Git 和 Arduino IDE](/zh_CN/user_manual/how_to_install_git_and_arduino).

## 总览

1. [编译环境和例程下载](#编译环境和例程下载)

    -1. [ESP32开发版编译环境下载](#ESP32开发版编译环境下载)

    -2. [ESP32开发板例程下载](#ESP32开发板例程下载)
    
2. [示例](#示例)    
  
## 编译环境和例程下载

*(只需两步即可获得ESP8266开发板编译环境和例程)*

### ESP32开发版编译环境下载

打开 Arduino IDE, 点击 `File`->`Peferences`->`Settings`

<img src="img/how_to_install_esp32_Arduino/01.png">

<img src="img/how_to_install_esp32_Arduino/02.png">

输入附加开发板管理器网址

现在最新的ESP32开发版网址: [https://docs.heltec.cn/download/package_heltec_esp32_index.json](https://docs.heltec.cn/download/package_heltec_esp32_index.json)

<img src="img/how_to_install_esp32_Arduino/03.png">

点击 `Tools`->`Board:`->`Boards Manager...`, 在弹出框中搜索 `Heltec ESP32` , 点击 `install`

<img src="img/how_to_install_esp32_Arduino/04.png">

<img src="img/how_to_install_esp32_Arduino/05.jpg">

### ESP32开发板例程下载

打开 Arduino IDE, 选择 `Sketch`->`Include Library`->`Manage Libraries...`
搜索 `Heltec ESP32` 并安装。

<img src="img/how_to_install_esp32_Arduino/06.png">

<img src="img/how_to_install_esp32_Arduino/07.jpg">


## 示例

本部分用于验证您是否可以使用Arduino进行编程。 现在，USB线连接到Heltec ESP32板，然后选择连接到Heltec ESP32板的串口。

选择一个演示示例，编译并上传

### 1. 执行一个示例程序如 `FactoryTest.ino`

正确选择已连接到计算机的板和指定的串行端口: e.g. WiFi Kit 32, WiFi LoRa 32, COM3(端口号可能不一致，无影响)

<img src="img/how_to_install_esp32_Arduino/08.png">

Then select an example likes `XXXXXX_FactoryTest.ino`

<img src="img/how_to_install_esp32_Arduino/09.png">

`Upload`上传

<img src="img/how_to_install_esp32_Arduino/10.png">

### 2. 新建Heltec ESP32开发版程序

打开 Arduino IDE, 新建一个 `.ino` 程序, 复制以下代码。

```arduino
#include <heltec.h>

// the setup routine runs once when starts up
void setup(){

  // Initialize the Heltec ESP32 object
  Heltec.begin(true /*DisplayEnable Enable*/, true /*LoRa Disable*/, true /*Serial Enable*/, true /*PABOOST Enable*/, 470E6 /**/);
}

// the loop routine runs over and over again forever
void loop() {

}
```


编译并上传，板载屏幕（如果有）将显示和Arduino串口监视器将打印的东西，这意味着Heltec ESP32板运行成功！


