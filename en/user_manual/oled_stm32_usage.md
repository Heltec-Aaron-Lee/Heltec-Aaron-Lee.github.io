# OLED Display with STM32 Usage

####  If you want to modify code to became other models, you must have make sure already installed [STM32CubeIED ](https://www.stmcu.com.cn/Index/search?search_keywords=ide)software(version 1.0.2) on your computer.

software download link: [STM32CubeIED ](https://www.stmcu.com.cn/Index/search?search_keywords=ide)

download Code ：[IIC_0.96_SSD1306](https://github.com/15883893721/STM32CubeIED_OLED)

model : stm32L151ccu6  

product : LoRa_Node_151

#### 1. How To modify the code?

1) Please open a file with ".CPROJECT" suffix with [STM32CubeIED](https://www.stmcu.com.cn/Index/search?search_keywords=ide).

<img src="img/stm32_oled_picture/1.PNG">

2) open inc -> OLED.h

<img src="img/stm32_oled_picture/.PNG">

3) choose your OLED display

<img src="img/stm32_oled_picture/3.PNG">

4) build



<img src="/img/stm32_oled_picture/4.PNG">

#### 2. Program write

1) [stm32programmer download](https://www.st.com/zh/development-tools/stm32cubeprog.html)

2)  [Pin map](https://docs.heltec.cn/download/LoRa_Node_151.pdf)

PA1 is CS line，PA2 is D/C line

<img src="img/stm32_oled_picture/10.PNG">





3) [Program write(Chinese)](https://docs.heltec.cn/#/zh_CN/user_manual/how_to_download_firmware_into_lora_node_151)

4) [Program write(English)](https://docs.heltec.cn/#/en/user_manual/how_to_download_firmware_into_lora_node_151)