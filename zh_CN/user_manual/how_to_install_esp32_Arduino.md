# Heltec ESP32 

?>   `USB driver`, `Git` and `Arduino IDE` .  [](/zh_CN/related_documents/establish_serial_connection) [ Git  Arduino IDE](/zh_CN/related_documents/how_to_install_git_and_arduino).

## 

1. [](#)

    - [1. esp32](#esp32)

    - [2. esp32](#esp32)

2. [](#)

## 1. 

*()*

### esp32

 Arduino IDE,  `File`->`Peferences`->`Settings`

<img src="img/how_to_install_esp32_Arduino/01.png">

<img src="img/how_to_install_esp32_Arduino/02.png">

esp32URL

*URL: https://github.com/Heltec-Aaron-Lee/WiFi_Kit_series/releases/download/0.0.1/package_heltec_esp32_index.json*

<img src="img/how_to_install_esp32_Arduino/03.png">

 `Tools`->`Board:`->`Boards Manager...`,  `Heltec ESP32`  `install`

<img src="img/how_to_install_esp32_Arduino/04.png">

<img src="img/how_to_install_esp32_Arduino/05.jpg">

### esp32

 Arduino IDE,  `Sketch`->`Include Library`->`Manage Libraries...`
 `Heltec ESP32` 

<img src="img/how_to_install_esp32_Arduino/06.png">

<img src="img/how_to_install_esp32_Arduino/07.jpg">


## 

Arduino USBHeltec ESP8266Heltec ESP8266



### 1.  `FactoryTest.ino`

: e.g. WiFi Kit 8, COM3( `COM3`)

<img src="img/how_to_install_esp32_Arduino/08.png">

Then select an example likes `XXXXXX_FactoryTest.ino`

<img src="img/how_to_install_esp32_Arduino/09.png">

upload

<img src="img/how_to_install_esp32_Arduino/10.png">

### 2. 

 Arduino IDE, new `.ino` , 

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

ArduinoHeltec ESP32


