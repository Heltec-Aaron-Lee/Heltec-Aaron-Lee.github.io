# Heltec ASR650x Based Dev-baords Develop Environment

- We suggest you confirm whether the `USB driver`, `Git` and `Arduino IDE` has installed first. If not, please view this two articles [establish serial connection](/en/related_documents/establish_serial_connection) and [Install Git and Arduino IDE](/en/related_documents/how_to_install_git_and_arduino).

## CONTENT

1. [Setting Environment](#1.-setting-environment)
- [Step1. Download Heltec Arduino-ASR650x CubeCell Support](#step1-download-arduino-asr650x-cubecell-support)
  
2. [Example](#example)

## 1. Setting Environment

*(Only one steps to complete setting)*

### Step1. Download Arduino-ASR650x CubeCell Support

Open Arduino IDE, and click `File`->`Peferences`->`Settings`

<img src="img/how_to_install_ASR650x_Arduino/01.png">

<img src="img/how_to_install_ASR650x_Arduino/02.png">

Input last ASR650x board manager URL

*Now the last board manager URL: [https://github.com/HelTecAutomation/ASR650x-Arduino/releases/download/``releases``/package_CubeCell_index.json](https://github.com/HelTecAutomation/ASR650x-Arduino/releases/download/0.0.1/package_CubeCell_index.json)*

The ```releases``` please refer to the latest version of github (for example: 0.0.2)

[https://github.com/HelTecAutomation/ASR650x-Arduino/releases](https://github.com/HelTecAutomation/ASR650x-Arduino/releases)

<img src="img/how_to_install_ASR650x_Arduino/03.png">

Click `Tools`->`Board:`->`Boards Manager...`, search `Heltec cubecell`in the new pop-up dialog, select the latest `releases` and  click `install`

<img src="img/how_to_install_ASR650x_Arduino/04.png">

<img src="img/how_to_install_ASR650x_Arduino/05.png">

The source code of Heltec ASR650x series (ASR6501&ASR6502) framework available here: [https://github.com/HelTecAutomation/ASR650x-Arduino](https://github.com/HelTecAutomation/ASR650x-Arduino)


## Example

This section for verifying whether you can program with Arduino or not. Now, The USB cable connects to Heltec CubeCell board, then select your serial port which is connected to Heltec CubeCell board.

Select a demo example, compile and upload

### 1. Execute a example likes `LoRaWan.ino`

Correct select the board you had connected to computer and the specified serial port: e.g. CubeCell-Board, CubeCell-Module, CubeCell-Cupsule, COM4(my PC is `COM4`)

<img src="img/how_to_install_ASR650x_Arduino/06.png">

Then select an example likes `LoRaWan.ino`

<img src="img/how_to_install_ASR650x_Arduino/07.png">

Upload it

<img src="img/how_to_install_esp32_Arduino/08.png">

### 2. New a Heltec ASR650x program

Open Arduino IDE, then new a `.ino` file, then copy the below code.

```arduino
// the setup routine runs once when starts up
void setup(){

  // Initialize the Heltec ASR650x object


// the loop routine runs over and over again forever
void loop() {

}
```

compile it and upload, the on board screen (if have) will show and Arduino's serial monitor will print something, it means Heltec ASR650x board is running successfully!

Enjoy!

