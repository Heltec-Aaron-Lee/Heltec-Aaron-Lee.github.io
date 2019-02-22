# Heltec ESP8266 Based Dev-baords Develop Environment

?> We suggest you confirm whether the `USB driver`, `Git` and `Arduino IDE` has installed first. If not, please view this two articles [establish serial connection](/en/related_documents/establish_serial_connection) and [Install Git and Arduino IDE](/en/related_documents/how_to_install_git_and_arduino).

## CONTENT

1. [Setting Environment](#setting-environment)

    - [Step1. Download Heltec Arduino-ESP8266 Support](#step1-download-arduino-esp8266-support)

    - [Step2. Download the Heltec ESP8266 Library](#step2-download-the-heltec-esp8266-library)

2. [Example](#example)

## 1. Setting Environment

*(Only two steps to complete setting)*

### Step1. Download Arduino-ESP8266 Support

Open Arduino IDE, and click `File`->`Peferences`->`Settings`

<img src="img/how_to_install_esp8266_Arduino/01.png">

<img src="img/how_to_install_esp8266_Arduino/02.png">

Input last esp32 board manager URL

*Now the last board manager URL: https://github.com/Heltec-Aaron-Lee/WiFi_Kit_series/releases/download/0.0.1/package_heltec_esp8266_index.json*

<img src="img/how_to_install_esp8266_Arduino/03.png">

Click `Tools`->`Board:`->`Boards Manager...`, search `Heltec ` in the new pop-up dialog, then click `install`

<img src="img/how_to_install_esp8266_Arduino/04.png">

<img src="img/how_to_install_esp8266_Arduino/05.png">

### Step2. Download the Heltec ESP8266 Library

Open Arduino IDE, then Select `Sketch`->`Include Library`->`Manage Libraries...`
Search `Heltec ESP8266` and install it

<img src="img/how_to_install_esp8266_Arduino/06.png">

<img src="img/how_to_install_esp8266_Arduino/07.jpg">


## Example

This section for verifying whether you can program with Arduino or not. Now, The USB cable connects to Heltec ESP8266 board, then select your serial port which is connected to Heltec ESP8266 board.

Select a demo example, compile and upload

### 1. Execute a example likes `FactoryTest.ino`

Correct select the board you had connected to computer and the specified serial port: e.g. WiFi Kit 8, COM3(my PC is `COM3`)

<img src="img/how_to_install_esp8266_Arduino/08.png">

Then select an example likes `XXXXXX_FactoryTest.ino`

<img src="img/how_to_install_esp8266_Arduino/09.png">

Upload it

<img src="img/how_to_install_esp8266_Arduino/10.png">

### 2. New a Heltec ESP8266 program

Open Arduino IDE, then new a `.ino` file, then copy the below code.

```arduino
#include <heltec.h>

// the setup routine runs once when starts up
void setup(){

  // Initialize the Heltec ESP32 object
  Heltec.begin(true /*DisplayEnable Enable*/, true /*PABOOST Enable*/, 470E6 /**/);
}

// the loop routine runs over and over again forever
void loop() {

}
```

compile it and upload, the on board screen (if have) will show and Arduino's serial monitor will print something, it means Heltec ESP32 board is running successfully!

Enjoy!

