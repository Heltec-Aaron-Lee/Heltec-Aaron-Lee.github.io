# Heltec ESP Series Products Common Problems Summary

This page contains the most popular questions we had connection from user. if this page's detail can't solve your problem, you can also talk in our forum: [community.heltec.cn](http://community.heltec.cn/)

&nbsp;

## CONTENT

1. [Can't Download Firmware](#can't-download-firmware)
2. [Another Communication Bus Usage Example](#another-communication-bus-usage-example)
   - [SPI0 / SPI1 / SPI2 / SPI3](#spi0-/-spi1-/-spi2-/-spi3)
   - [I2C0 / I2C1](#i2c0-/-i2c1)
   - [UART0 / UART1](#uart0-/-uart1)
3. [Orange LED Blink Problem](#orange-led-blink-problem)
4. [System Reset All the Time](#system-reset-all-the-time)
5. [About WiFi LoRa 32(V2) sleep current test](#about-wifi-lora-32(v2)-sleep-current-test)

&nbsp;

## Can't Download Firmware

- Use a better USB cable, or change a USB socket;
- Check and make sure the CP210x drive had been correctly installed, users can refer to this document: [https://docs.heltec.cn/#/en/user_manual/establish_serial_connection](https://docs.heltec.cn/#/en/user_manual/establish_serial_connection)
- Press "PRG" button before upload.

## Another Communication Bus Usage Example

### SPI0 / SPI1 / SPI2 / SPI3

[https://github.com/Heltec-Aaron-Lee/WiFi_Kit_series/tree/master/esp32/libraries/SPI/examples/SPI_Multiple_Buses](https://github.com/Heltec-Aaron-Lee/WiFi_Kit_series/tree/master/esp32/libraries/SPI/examples/SPI_Multiple_Buses)

### I2C0 / I2C1

[https://github.com/HelTecAutomation/Heltec_ESP32/blob/master/examples/ESP32/I2C1_Scanner/I2C1_Scanner.ino](https://github.com/HelTecAutomation/Heltec_ESP32/blob/master/examples/ESP32/I2C1_Scanner/I2C1_Scanner.ino)

### UART0 / UART1

[https://github.com/HelTecAutomation/Heltec_ESP32/blob/master/examples/ESP32/Serial2/Serial2.ino](https://github.com/HelTecAutomation/Heltec_ESP32/blob/master/examples/ESP32/Serial2/Serial2.ino)



## Orange LED Blink Problem

Annoying orange LED lights are always flashing? It's because the battery management chip MCP73831. with the following control logic:

- Blink -- Power on
- Bight -- Charging
- Turn OFF -- Battery filled

Change this capacitor to 220nF to temporarily correct this problem.

<img src="en/faq/img/replcae.png">

&nbsp;

We had use the TP4054 to replace MCP73831, the orange LED have new control logic:

- Dim -- Power on
- Bight -- Charging
- Turn OFF -- Battery filled

## System Reset All the Time

<img src="en/faq/img/resetallthetime.png">

According to the situation we have collected so far, the most likely to cause a constant reset problem may have two reasons:

- Power supply problem: please make sure the voltage of USB ≥ 4.7V, 300mA;

- You chose an error board: because each type of board may have a different FLASH size, and they have a different partition map, it will cause the internal logic error.



## About WiFi LoRa 32(V2) Sleep Current Test

Use the battery to power the development board, and connect an ammeter to the positive pole of the battery. Download this example code:

[https://github.com/HelTecAutomation/Heltec_ESP32/blob/master/examples/Low_Power/Low_Power.ino](https://github.com/HelTecAutomation/Heltec_ESP32/blob/master/examples/Low_Power/Low_Power.ino)

This video is the test effect:

[https://v.youku.com/v_show/id_XNDI2NTE1NTQ3Ng==.html?spm=a2h3j.8428770.3416059.1](https://v.youku.com/v_show/id_XNDI2NTE1NTQ3Ng==.html?spm=a2h3j.8428770.3416059.1)