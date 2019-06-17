# 基于Heltec ESP8266开发板的开发环境 

?> 首先我们建议你确认 `USB 驱动`, `Git` 和 `Arduino IDE` 已经成功安装. 如果没有, 请参阅这两篇文章 [建立串口通信](/zh_CN/user_manual/establish_serial_connection) 和 [安装 Git 和 Arduino IDE](/zh_CN/user_manual/how_to_install_git_and_arduino).

## 总览

- [编译环境和例程下载](#编译环境和例程下载)
  - [ESP8266开发版编译环境下载](#ESP8266开发版编译环境下载)
  - [ESP8266开发板例程下载](#ESP8266开发板例程下载)

- [示例](#示例)

## 编译环境和例程下载

*(只需两步即可获得ESP8266开发板编译环境和例程)*

### ESP8266开发板编译环境下载

打开 Arduino IDE, 点击 `File`->`Peferences`->`Settings`

<img src="img/how_to_install_esp8266_Arduino/01.png">

<img src="img/how_to_install_esp8266_Arduino/02.png">

输入附加开发版管理器网址

*最新的ESP8266开发板网址: https://github.com/Heltec-Aaron-Lee/WiFi_Kit_series/releases/download/0.0.1/package_heltec_esp8266_index.json*

<img src="img/how_to_install_esp8266_Arduino/03.png">

点击 `Tools`->`Board:`->`Boards Manager...`, 在弹出框中搜索 `Heltec ` , 点击 `install`

<img src="img/how_to_install_esp8266_Arduino/04.png">

<img src="img/how_to_install_esp8266_Arduino/05.png">

### ESP8266开发板例程下载

打开 Arduino IDE, 选择 `Sketch`->`Include Library`->`Manage Libraries...`
搜索 `Heltec ESP8266` 并安装

<img src="img/how_to_install_esp8266_Arduino/06.png">

<img src="img/how_to_install_esp8266_Arduino/07.png">


## 示例

本部分用于验证您是否可以使用Arduino进行编程。 现在，USB连接到Heltec ESP8266板，然后选择连接到Heltec ESP8266板的串口。

选择一个示例程序 ，编译并上传

### 1. 执行一个例子如 `FactoryTest.ino`

正确选择已连接到计算机的开发板和指定的串行端口： e.g. WiFi Kit 8, COM3(端口可能不一致)

<img src="img/how_to_install_esp8266_Arduino/08.png">

然后选择一个程序： `XXXXXX_FactoryTest.ino`

<img src="img/how_to_install_esp8266_Arduino/09.png">

点击`Upload`上传

<img src="img/how_to_install_esp8266_Arduino/10.png">

### 2. 新建一个	Heltec ESP8266开发版程序

打开 Arduino IDE, 新建一个 `.ino` 程序, 复制以下代码。

```arduino
#include <heltec.h>

// the setup routine runs once when starts up
void setup(){

  // Initialize the Heltec ESP32 object
  Heltec.begin(true /*DisplayEnable Enable*/, true /*Serial Enable*/);
}

// the loop routine runs over and over again forever
void loop() {

}
```


编译并上传，板载屏幕（如果有）将显示和Arduino串口监视器将打印的东西，这意味着Heltec ESP8266板运行成功！

