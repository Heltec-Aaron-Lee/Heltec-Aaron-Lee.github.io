# Heltec ESP8266 

?>  `USB `, `Git` and `Arduino IDE`  .  [](/zh_CN/user_manual/establish_serial_connection)  [ Git  Arduino IDE](/zh_CN/user_manual/how_to_install_git_and_arduino).

## 

1. [](#)

    - [1. esp8266](#esp8266)

    - [2. esp8266](#esp8266)

2. [](#)

## 1. 

*()*

### esp8266

 Arduino IDE,  `File`->`Peferences`->`Settings`

<img src="img/how_to_install_esp8266_Arduino/01.png">

<img src="img/how_to_install_esp8266_Arduino/02.png">

esp32URL

*URL: https://github.com/Heltec-Aaron-Lee/WiFi_Kit_series/releases/download/0.0.1/package_heltec_esp8266_index.json*

<img src="img/how_to_install_esp8266_Arduino/03.png">

 `Tools`->`Board:`->`Boards Manager...`,  `Heltec ` ,  `install`

<img src="img/how_to_install_esp8266_Arduino/04.png">

<img src="img/how_to_install_esp8266_Arduino/05.png">

### esp8266

 Arduino IDE,  `Sketch`->`Include Library`->`Manage Libraries...`
 `Heltec ESP8266` 

<img src="img/how_to_install_esp8266_Arduino/06.png">

<img src="img/how_to_install_esp8266_Arduino/07.jpg">


## 

Arduino USBHeltec ESP8266Heltec ESP8266



### 1.  `FactoryTest.ino`

: e.g. WiFi Kit 8, COM3( `COM3`)

<img src="img/how_to_install_esp8266_Arduino/08.png">

 `XXXXXX_FactoryTest.ino`

<img src="img/how_to_install_esp8266_Arduino/09.png">

upload

<img src="img/how_to_install_esp8266_Arduino/10.png">

### 2. 

 Arduino IDE, new `.ino` , 

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

ArduinoHeltec ESP32


