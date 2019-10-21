[English](#OLED-Display-Common-Problems-Summary)       [简体中文](#中文版)

# OLED Display Common Problems Summary

​	**This document is only applicable to the OLED display produced by HelTec AutoMation [community.heltec.cn](http://community.heltec.cn/).**

​	**If the method described in this document is used on products of other companies,may cause damage to the product.**



#### 1. The screen is not fully displayed?

* **The Reason**

​    *Since the 1.3-inch screen requires more current to ensure the normal brightness of the OLED panel, the SH1106 with higher driving capability is used as the driver chip, and its register size is 132x64.*

​	*Since the dot matrix on the screen is 128x64, the dot matrix of the register is four columns larger than the dot matrix of the OLED (two columns on the left and the right). If the screen is operated, the data is written from the first column as usual... The problem of incomplete screen display.  Refer to the figure below.  1_1*

<img src="img/oled_questions/1.png">



* **Solution**

  *When writing data to the screen, the X-axis direction is written to the right from 2 (3rd point).Sample code as shown.  1_2*

<img src="img/oled_questions/102.png">

#### 2. There is a vertical bright line or spot on the right side

* **The Reason**

​      *The same reason 1 ,the data written to the first column and the second column of the register is garbled by the driver chip and displayed in the last column of the display.  2_1*

<img src="img/oled_questions/201.png">



* **Solution**

*Change the value of the "All X" axis in the program to 132, as defined in the figure below for the X and Y axes. 2_2*

<img src="img/oled_questions/202.png">

#### 3. How to set the screen brightness?

* **Solution**

​     *Brightness adjustment needs to set the contrast register 0x81, which has 256 (0x00~0xFF) brightness positions can be adjusted.The meaning is: first write the 0x81 command to the screen, and then write the brightness value you need to the screen, the specific method is shown in Figure 3_1.*

<img src="img/oled_questions/301.png">

#### 4. How does the screen show upside down?

* **Solution**

​       *As long as the left and right are reversed, the screen can be displayed upside down, which can facilitate the flexible wiring and installation of the device.*

​		*As shown in Figure 4_1, the 0xa1/0xa0 command can control the order display on the left and right of the screen. 0xc8/0xc0 can control the upper and lower order display of the screen. The default display effect is shown in Figure 4_2.*

<img src="img/oled_questions/401.png">

<img src="img/oled_questions/402.png">

**(1) Reverse left and right (see Figure 4_3):**

​				OLED_WrCmd(0xa0);

​					OLED_WrCmd(0xC8);

<img src="img/oled_questions/403.png">

**(2) Upside down (see Figure 4_4):**

​				OLED_WrCmd(0xa1); 

​					OLED_WrCmd(0xC0);

<img src="img/oled_questions/404.png">

**(3) Completely inverted (Figure 4_5):**

​				OLED_WrCmd(0xa0); 

​					OLED_WrCmd(0xC0);

<img src="img/oled_questions/405.png">

#### 5. Can the screen reverse the settings?

* **Solution**

​     *Control the 0xa6 and 0xa7 commands in the SH1106 register to control the forward and reverse display. As shown in Figure 5.1:*

***OLED_WrCmd(0xa6);//Full screen Forward display***

***OLED_WrCmd(0xa7);//Full screen reverse display***

<img src="img/oled_questions/501.png">

#### 6. How to make the screen sleep?

* **Solution**

​     *The OLED module produced by the company uses a charge pump (a booster device) on the driver chip to provide sufficient driving voltage for the liquid crystal panel, and the energy consumption of the charge pump occupies a high proportion in the entire module. So to make the screen sleep, first turn off the screen, and turn off the "charge pump."*

* ***wake  and Sleep***

  * **Sleep**

    <img src="img/oled_questions/602.png">

  * **wake**

    <img src="img/oled_questions/603.png">



​     *The OLED module in hibernation is shown in Figure 6_1, which is the same effect as no lighting, but it should be noted that the module still has a certain power consumption, about 15uA.*

<img src="img/oled_questions/601.png">

* ***Buy this OLED display:[check](http://heltec.taobao.com/category-777108260-713176956.htm?spm=a1z10.1-c.w4010-5582706673.7.dv4yUO&search=y&catName=OLED#bd)***

* ***Purchase a matching test board:[check](http://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-5582706675.35.dv4yUO&id=40204154784)***

* ***For more questions, please feel free to send an email to :[check](support@heltec.cn)***

### 			

### 				contact us

* ***HelTec AutoMation***

* ***Official website: [www.heltec.cn](http://www.heltec.cn)***

* ***telephone / fax***: ***028-62374838***

* ***Official online store:[heltec.taobao.com](http://www.14blog.com)***

* ***email: [heltec_tech@gmail.com](mailto:heltec_tech@gmail.com)***



##### 中文版

### OLED常见技术问题汇总

本文档仅适用于成都惠利特自动化(HelTec AutoMation)所生产的OLED显示屏，若将此文档所述方法用于其他公司的产品上，可能对产品造成毁坏。

#### 1.     屏幕显示不全？

* 原因：

  由于1.3寸屏需要更大的电流来保证液晶面板的正常亮度，所以驱动能力更强的SH1106来作为驱动芯片，它是的寄存器大小是132x64的。

  由于屏幕上的点阵是128x64的，这样寄存器的点阵就比OLED的点阵多了四列（左右各两列），如果操作屏幕时按照常规的从第一列开始写数据……就出现了屏幕显示不全的问题。情况参考下图1.1

<img src="img/oled_questions/1.png">

* 解决方法

向屏幕写数据时，X轴方向从2（第3个点）开始向右写。示例代码如图1.2

<img src="img/oled_questions/102.png">

#### 2.     右侧有一条竖着的亮线或斑点

* 原因：

​      原因同问题1，写到寄存器第一列和第二列的数据被驱动芯片当做乱码并在显示屏的最后一列显示出来。参考图2.1

<img src="img/oled_questions/201.png">

* 解决方法

​     把程序中“所有X”轴的值改成132，如下图定义的是X轴与Y轴。

<img src="img/oled_questions/202.png">

#### 3.     屏幕亮度怎么设置？

* 解决方法

​       亮度调节需要设置对比度寄存器0x81,它有256（0x00~0xFF）个亮度档位可以调节。意思就是：先向屏幕写0x81这个命令，再向屏幕写您需要的亮度值，具体方法如图3.1

<img src="img/oled_questions/301.png">

#### 4.     屏幕怎么倒过来显示？

* 解决方法

​       只要把左右反置一下，再上下反置一下就可以把屏幕倒过来显示，这样可以方便设备的灵活布线和安装。如图4.1所示，0xa1/0xa0命令可以控制屏幕左右的顺序显示，0xc8/0xc0可以控制屏幕的上下顺序显示，默认的显示效果见图4.2。

<img src="img/oled_questions/401.png">

<img src="img/oled_questions/402.png">

* 左右反置（见图4.3）：

OLED_WrCmd(0xa0);

OLED_WrCmd(0xC8);

<img src="img/oled_questions/403.png">



* 上下反置（见图4.4）：

OLED_WrCmd(0xa1); 

OLED_WrCmd(0xC0);

<img src="img/oled_questions/404.png">



* 完全倒置（如图4.5）：

OLED_WrCmd(0xa0); 

OLED_WrCmd(0xC0);

<img src="img/oled_questions/405.png">

#### 5.  屏幕能够反显设置吗？

* 解决方法

控制SH1106寄存器中的0xa6与0xa7两条命令来控制正反显示。具体如图5.1：

OLED_WrCmd(0xa6);//全屏正显

OLED_WrCmd(0xa7);//全屏反显

<img src="img/oled_questions/501.png">



#### 6. 怎么让屏幕休眠？

* 解决方法：

​       本公司生产的OLED模块使用了驱动芯片上的电荷泵（一种升压装置）来为液晶面板提供足够的驱动电压，电荷泵的能耗在整个模块中占有较高的比例。因此要让屏幕休眠首先要关闭屏幕，还要关闭“电荷泵”。

* 休眠

<img src="img/oled_questions/602.png">

* 唤醒

<img src="img/oled_questions/603.png">



休眠中的OLED模块如图6.1，跟没有点亮是一样的效果，但是要注意哦，此时的模块还是有一定的功耗的，大约15uA左右。

<img src="img/oled_questions/601.png">

更多问题，欢迎发送邮件到support@heltec.cn补充。

购买这种OLED显示屏：[**点击这里**](http://heltec.taobao.com/category-777108260-713176956.htm?spm=a1z10.1-c.w4010-5582706673.7.dv4yUO&search=y&catName=OLED#bd)

购买配套的测试底板：[**点击这里**](http://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-5582706675.35.dv4yUO&id=40204154784)



### 联系我们

* **成都惠特自动化科技有限公司（HelTec AutoMation）**

* **四川省 成都市 成华区 成华大道三段 华林二路19号**

* **电话/传真：028-62374838**

*  **官方网站：**[www.heltec.cn](http://www.heltec.cn)

* **官方网店：**[heltec.taobao.com](http://www.14blog.com)

* **电子邮件：**[heltec_tech@gmail.com](mailto:heltec_tech@gmail.com)

* **联系人：赵经理**

