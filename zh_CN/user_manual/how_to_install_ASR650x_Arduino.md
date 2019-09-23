# 基于Heltec ASR650x CubeCell系列开发板的开发环境 
- 首先我们建议你确认 `USB 驱动`, `Git` 和 `Arduino IDE` 已经成功安装. 如果没有, 请参阅这两篇文章 [建立串口通信](/zh_CN/user_manual/establish_serial_connection) 和 [安装 Git 和 Arduino IDE](/zh_CN/user_manual/how_to_install_git_and_arduino).

## 总览

1. [编译环境和例程下载](#编译环境和例程下载)
- [ASR650x CubeCell开发版编译环境下载](#ASR650x-CubeCell开发版编译环境下载)

- [示例](#示例)  

## 编译环境和例程下载

*(只需一步即可获得CubeCell开发板编译环境和例程)*

### ASR650x CubeCell开发版编译环境下载

打开 Arduino IDE, 点击 `File`->`Peferences`->`Settings`

<img src="img/how_to_install_ASR650x_Arduino/01.png">

<img src="img/how_to_install_ASR650x_Arduino/02.png">

输入ASR650x CubeCell开发板管理器网址

* 现在最新的ASR650x CubeCell开发版网址: [https://github.com/HelTecAutomation/ASR650x-Arduino/releases/download/0.0.1/package_CubeCell_index.json](https://github.com/HelTecAutomation/ASR650x-Arduino/releases/download/0.0.1/package_CubeCell_index.json)

<img src="img/how_to_install_ASR650x_Arduino/03.png">

点击 `Tools`->`Board:`->`Boards Manager...`, 在弹出框中搜索 `Heltec cubecell` , 点击 `install`

<img src="img/how_to_install_ASR650x_Arduino/04.png">

<img src="img/how_to_install_ASR650x_Arduino/05.png">

Heltec ASR650x CubeCell系列(ASR6501&ASR6502)开发环境源码: [https://github.com/HelTecAutomation/ASR650x-Arduino](https://github.com/HelTecAutomation/ASR650x-Arduino)


## 示例

本部分用于验证您是否可以使用Arduino进行编程。 现在，USB线连接到Heltec CubeCell板，然后选择连接到Heltec CubeCell板的串口。

选择一个演示示例，编译并上传

### 1. 执行一个示例程序如 `LoRaWan.ino`

正确选择已连接到计算机的板和指定的串行端口: e.g. CubeCell-Board, CubeCell-Module, CubeCell-Cupsule, COM4(my PC is `COM4`)

<img src="img/how_to_install_ASR650x_Arduino/06.png">

Then select an example likes `LoRaWan.ino`

<img src="img/how_to_install_ASR650x_Arduino/07.png">

Upload it 上传

<img src="img/how_to_install_esp32_Arduino/8.png">

### 2. 新建 Heltec ASR650x CubeCell系列的示例

打开 Arduino IDE, 新建一个 `.ino` 程序, 复制以下代码。

```arduino
#include <heltec.h>

// the setup routine runs once when starts up
void setup(){

  // Initialize the Heltec ASR650x object


// the loop routine runs over and over again forever
void loop() {

}
```

编译，上传, the on board screen (if have) will show and Arduino's serial monitor will print something, it means Heltec ASR650x board is running successfully!

Enjoy!

