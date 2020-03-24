<div class="product_page">
<div id="search_note" style="display:none;position:fixed;top:30%">
  <h3>not obtained the content, please enter the first letter of the product and search again.</h3>
</div>
</div>

<script>
    const gateway_list = [
      //Core
      {a:"https://heltec.org/project/ht-m01", img:"http://resource.heltec.cn/img/docs/ht_m01.jpg", p:"HT-M01"},
      {a:"https://heltec.org/project/ht-m02", img:"http://resource.heltec.cn/img/docs/ht_m02.jpg", p:"HT-M02"},
    ];
    
    const cubecell_list = [
      //CubeCell
      {a:"https://heltec.org/project/htcc-ab01", img:"http://resource.heltec.cn/img/docs/cubecell/htcc-ab01.jpg", p:"CubeCell Dev-Board"},
      {a:"https://heltec.org/project/htcc-ac01", img:"http://resource.heltec.cn/img/docs/cubecell/htcc-ac01.jpg", p:"CubeCell Capsule Sensor"},
      {a:"https://heltec.org/project/htcc-am01", img:"http://resource.heltec.cn/img/docs/cubecell/htcc-am01.jpg", p:"CubeCell Module"},
    ];
    
    const esp32_lora_list = [
      //esp32 lora node
      {a:"https://heltec.org/project/wireless-stick", img:"http://resource.heltec.cn/img/docs/wireless_stick.jpg",p:"Wireless Stick"},
      {a:"https://heltec.org/project/wifi-lora-32", img:"http://resource.heltec.cn/img/docs/wifi_lora_32.jpg",p:"WiFi LoRa 32"},
      {a:"https://heltec.org/project/wireless-stick-lite", img:"http://resource.heltec.cn/img/docs/wireless_stick_lite.jpg",p:"WirelessStick lite"},
      {a:"https://heltec.org/project/wireless-shell", img:"http://resource.heltec.cn/img/docs/wireless_shell.jpg",p:"Wireless Shell"},
    ];
    
    const stm32_lora_list = [
      //stm32 lora node
      {a:"https://heltec.org/project/lora-node-151/", img:"http://resource.heltec.cn/img/docs/lora_node_151.jpg",p:"LoRa Node 151"},
      {a:"https://heltec.org/project/turtle", img:"http://resource.heltec.cn/img/docs/turtle.jpg",p:"Turtle"},
      {a:"https://heltec.org/project/lora-kit-151/", img:"http://resource.heltec.cn/img/docs/lora_kit_151.jpg",p:"LoRa kit 151"},
    ];


   const esp32_arduino_list = [
      //esp32 
      {a:"https://heltec.org/project/wifi-kit-32", img:"http://resource.heltec.cn/img/docs/wifi_kit_32.jpg",p:"WiFi Kit 32"}
   ];


    const esp8266_arduino_list = [
      //esp8266
      {a:"https://heltec.org/project/wifi-kit-8", img:"http://resource.heltec.cn/img/docs/wifi_kit_8.jpg",p:"WiFi Kit 8"}
    ];



   const oled_list = [
      //oled screen
      //0.49"
      {a:"https://heltec.org/project/049-oled", img:"http://resource.heltec.cn/img/docs/oled/0.49iic.jpg", p:'0.49"White IIC'},
      //0.91"
      {a:"https://heltec.org/project/091-oled", img:"http://resource.heltec.cn/img/docs/oled/0.91iic.jpg", p:'0.91"White IIC'},
      //0.96"
      {a:"https://heltec.org/project/096-oled", img:"http://resource.heltec.cn/img/docs/oled/0.96ssd1306_blue.jpg",p:'0.96" Blue SPI'},  
      {a:"https://heltec.org/project/096-oled", img:"http://resource.heltec.cn/img/docs/oled/0.96ssd1306.jpg",p:'0.96" Blue&Yellow SPI'}, 
      {a:"https://heltec.org/project/096-oled", img:"http://resource.heltec.cn/img/docs/oled/0.96ssd1306_white.jpg",p:'0.96" White SPI'},
      {a:"https://heltec.org/project/096-oled", img:"http://resource.heltec.cn/img/docs/oled/0.96ssd1306_iic_yellow.jpg",p:'0.96" Blue&Yellow IIC'}, 
      {a:"https://heltec.org/project/096-oled", img:"http://resource.heltec.cn/img/docs/oled/0.96ssd1306_iic_white.jpg",p:'0.96" White IIC'}, 
      {a:"https://heltec.org/project/096-oled", img:"http://resource.heltec.cn/img/docs/oled/0.96ssd1306_iic_blue.jpg",p:'0.96" Blue IIC'}, 
      // 1.3"
      {a:"https://heltec.org/project/13-oled", img:"http://resource.heltec.cn/img/docs/oled/1.3sh1106_blue.jpg",p:'1.3" Blue SPI'},  
      {a:"https://heltec.org/project/13-oled", img:"http://resource.heltec.cn/img/docs/oled/1.3sh1106_white.jpg",p:'1.3" White SPI'},
      {a:"https://heltec.org/project/13-oled", img:"http://resource.heltec.cn/img/docs/oled/1.3sh1106_iic_blue.jpg",p:'1.3" Blue IIC'},
      {a:"https://heltec.org/project/13-oled", img:"http://resource.heltec.cn/img/docs/oled/1.3sh1106_iic_white.jpg",p:'1.3" White IIC '},
      //1.54"
      {a:"https://heltec.org/project/154-oled", img:"http://resource.heltec.cn/img/docs/oled/1.54spd0301_white.jpg",p:'1.54" White SPI'}, 
      {a:"https://heltec.org/project/154-oled", img:"http://resource.heltec.cn/img/docs/oled/1.54spd0301_iic_white.jpg",p:'1.54" White IIC'} 
    ];

   const e_ink_list = [
      //e-ink screen
      //1.54"
      {a:"https://heltec.org/project/154-e-ink/", img:"http://resource.heltec.cn/img/docs/e_ink/154bw.jpg",p:'1.54" E-ink Display(B&W)'},
      {a:"https://heltec.org/project/154-e-ink/", img:"http://resource.heltec.cn/img/docs/e_ink/154bwr.jpg",p:'1.54" E-ink Display(B&W&R)'},
      {a:"https://heltec.org/project/154-e-ink/", img:"http://resource.heltec.cn/img/docs/e_ink/154bwy.jpg",p:'1.54" E-ink Display(B&W&Y)'},
      {a:"https://heltec.org/project/154-e-ink/", img:"http://resource.heltec.cn/img/docs/e_ink/154bwm.jpg",p:'1.54" E-ink Module(B&W)'},
      // 2.13"
      {a:"https://heltec.org/project/213-e-ink/", img:"http://resource.heltec.cn/img/docs/e_ink/213bw.jpg",p:'2.13" E-ink Display(B&W)'},
      {a:"https://heltec.org/project/213-e-ink/", img:"http://resource.heltec.cn/img/docs/e_ink/213bwr.jpg",p:'2.13" E-ink Display(B&W&R)'},
      {a:"https://heltec.org/project/213-e-ink/", img:"http://resource.heltec.cn/img/docs/e_ink/213bwy.jpg",p:'2.13" E-ink Display(B&W&Y)'},
      {a:"https://heltec.org/project/213-e-ink/", img:"http://resource.heltec.cn/img/docs/e_ink/213bwf.jpg",p:'2.13" E-ink Display(B&W)'},
      {a:"https://heltec.org/project/213-e-ink/", img:"http://resource.heltec.cn/img/docs/e_ink/213bwrm.jpg",p:'2.13" E-ink Module(B&W)'},
      //2.6"
      {a:"https://heltec.org/project/26-e-ink/", img:"http://resource.heltec.cn/img/docs/e_ink/260bw.jpg",p:'2.6" E-ink Display(B&W)'},
      {a:"https://heltec.org/project/26-e-ink/", img:"http://resource.heltec.cn/img/docs/e_ink/260bwr.jpg",p:'2.6" E-ink Display(B&W&R)'},
      //2.7"
      {a:"https://heltec.org/project/27-e-ink/", img:"http://resource.heltec.cn/img/docs/e_ink/270bw.jpg",p:'2.7" E-ink Display(B&W)'},
      {a:"https://heltec.org/project/27-e-ink/", img:"http://resource.heltec.cn/img/docs/e_ink/270bwr.jpg",p:'2.7" E-ink Display(B&W&R)'},
      //2.9"
      {a:"https://heltec.org/project/290-e-ink/", img:"http://resource.heltec.cn/img/docs/e_ink/290bw.jpg",p:'2.9" E-ink Display(B&W)'},
      {a:"https://heltec.org/project/290-e-ink/", img:"http://resource.heltec.cn/img/docs/e_ink/290bwr.jpg",p:'2.9" E-ink Display(B&W&R)'},
      {a:"https://heltec.org/project/290-e-ink/", img:"http://resource.heltec.cn/img/docs/e_ink/290bwy.jpg",p:'2.9" E-ink Display(B&W&Y)'},
      {a:"https://heltec.org/project/290-e-ink/", img:"http://resource.heltec.cn/img/docs/e_ink/290bwf.jpg",p:'2.9" E-ink Display(B&W)'},
      {a:"https://heltec.org/project/290-e-ink/", img:"http://resource.heltec.cn/img/docs/e_ink/290bwm.jpg",p:'2.9" E-ink Module(B&W)'},
      //4.2"
      {a:"https://heltec.org/project/42-e-ink/", img:"http://resource.heltec.cn/img/docs/e_ink/420bw.jpg",p:'4.2" E-ink Display(B&W)'},
      {a:"https://heltec.org/project/42-e-ink/", img:"http://resource.heltec.cn/img/docs/e_ink/420bwr.jpg",p:'4.2" E-ink Display(B&W&R)'},
      {a:"https://heltec.org/project/42-e-ink/", img:"http://resource.heltec.cn/img/docs/e_ink/420bwy.jpg",p:'4.2" E-ink Display(B&W&Y)'},
      //5.83"
      {a:"https://heltec.org/project/583-e-ink/", img:"http://resource.heltec.cn/img/docs/e_ink/583bw.jpg",p:'5.83" E-ink Display(B&W)'},
      {a:"https://heltec.org/project/583-e-ink/", img:"http://resource.heltec.cn/img/docs/e_ink/583bwr.jpg",p:'5.83" E-ink Display(B&W&R)'},
      {a:"https://heltec.org/project/583-e-ink/", img:"http://resource.heltec.cn/img/docs/e_ink/583bwy.jpg",p:'5.83" E-ink Display(B&W&Y)'},
      //7.5"
      {a:"https://heltec.org/project/75-e-ink/", img:"http://resource.heltec.cn/img/docs/e_ink/750bw.jpg",p:'7.5" E-ink Display(B&W)'},
      {a:"https://heltec.org/project/75-e-ink/", img:"http://resource.heltec.cn/img/docs/e_ink/750bwr.jpg",p:'7.5" E-ink Display(B&W&R)'},
      {a:"https://heltec.org/project/75-e-ink/", img:"http://resource.heltec.cn/img/docs/e_ink/750bwy.jpg",p:'7.5" E-ink Display(B&W&Y)'}
    ];

   const accessories_list = [
      // solar charging panel
      {a:'https://heltec.org/product/solar-charging-panel/', img:'http://resource.heltec.cn/img/docs/accessories/Solar.jpg', p:'Solar charging panel'},
      //wireless shell test bottom board
      {a:' https://heltec.org/product/shell-bottom/', img:'http://resource.heltec.cn/img/docs/accessories/test_bottom_board.jpg', p:'Wireless Shell Test Bottom Board'},
      //bread board
      {a:' https://heltec.org/product/bread-board/', img:'http://resource.heltec.cn/img/docs/accessories/bread_board.jpg',p:'Bread Board'},
      //BH1750 light intensity sensor
      {a:'https://heltec.org/product/capsule-sensor/', img:'http://resource.heltec.cn/img/docs/accessories/BH1750.jpg', p:'BH1750 Light Intensity Sensor'},
      //BMP180 barometric pressure sensor
      {a:'https://heltec.org/product/capsule-sensor/', img:'http://resource.heltec.cn/img/docs/accessories/BMP180.jpg', p:'BMP180 Barometric Pressure Sensor'},
      //CCS811B Air Quality Sensor
      {a:'https://heltec.org/product/capsule-sensor/', img:'http://resource.heltec.cn/img/docs/accessories/CCS811B.jpg', p:'CCS811B Air Quality Sensor'},
      //DCH1080 Temperature and Humidity Sensor
      {a:'https://heltec.org/product/capsule-sensor/', img:'http://resource.heltec.cn/img/docs/accessories/HDC1080.jpg', p:'DCH1080 Temperature and Humidity Sensor'},
      //MPU9250 9-axis Attitude Sensor
      {a:'https://heltec.org/product/capsule-sensor/', img:'http://resource.heltec.cn/img/docs/accessories/MPU9250.jpg', p:'MPU9250 9-axis Attitude Sensor'},
      //
      // {a:'https://heltec.org/product/touch-button/', img:'https://heltec.org/wp-content/uploads/2019/04/%E8%93%9D800.png', p:'Touch Button'}
      //cubecell-capsule-debug
      {a:'https://heltec.org/product/cubecell-capsule-debug/', img:'http://resource.heltec.cn/img/docs/accessories/Debug_Board.jpg', p:'Cubecell Capsule Debug'},
      //E-Ink Display Module Acrylic protect Surface
      {a:'https://heltec.org/product/acrylic-surface/', img:'http://resource.heltec.cn/img/docs/accessories/protect_surface.jpg',p:'E-Ink Display Module Acrylic Protect Surface'},
      //HT-M01 to RPI Special converter
      {a:'https://heltec.org/product/m01-converter/', img:'http://resource.heltec.cn/img/docs/accessories/M01_To_RPI.jpg',p:'HT-M01 to RPI Special converter'}
   ];
    // var product = [core,module,unit,base,application,accessory,aluminium];
    var product_class = [gateway_list,cubecell_list,esp32_lora_list,stm32_lora_list,esp32_arduino_list,esp8266_arduino_list,oled_list,e_ink_list,accessories_list];
    var product_class_name = ["gateway","cubecell","esp32_lora","stm32_lora","esp32_arduino","esp8266_arduino","oled","e_ink","accessories"];
    
    for (var i=0; i<product_class_name.length; i++){
      $(".product_page").append("<div></div>");
      $(".product_page div:last-child").attr("id",product_class_name[i]);
    }
    
    for (var class_num=0; class_num<product_class.length; class_num++ ){
      for (var i=0; i<product_class[class_num].length; i++ ) {
         //append的内容将显示在product_class.p名称的上方，并作为一行的开始
         /*lora gateway*/
        if(product_class[class_num][i].p === "HT-M01"){
           $("#"+product_class_name[class_num]).append('<br><p> <a href="#/en/products/lora/lora_gateway/heltec_lora_gateway_list_eu"> <strong>LoRa Gateway</strong> </a> </p>');
        }
        /*cubecell*/
        if(product_class[class_num][i].p === "CubeCell Dev-Board"){
           $("#"+product_class_name[class_num]).append('<br><p> <a href="#/en/products/lora/lora_node/heltec_lora_node_list_eu"> <strong>CubeCell LoRa Nodes</strong> </a> </p>');
        }
        /*esp32 lora*/
        if(product_class[class_num][i].a === "https://heltec.org/project/wireless-stick"){
           $("#"+product_class_name[class_num]).append('<br><p> <a href="#/en/products/lora/lora_node/heltec_lora_node_list_eu"> <strong>ESP32 LoRa</strong> </a> </p>');
        }
        /*stm32 lora node*/
        if(product_class[class_num][i].a === "https://heltec.org/project/lora-node-151/"){
           $("#"+product_class_name[class_num]).append('<br><p> <a href="#/en/products/lora/lora_node/heltec_lora_node_list_eu"> <strong>STM32 LoRa</strong> </a> </p>');
        }
        /*esp32 arduino*/
        if(product_class[class_num][i].a === "https://heltec.org/project/wifi-kit-32"){
           $("#"+product_class_name[class_num]).append('<br><p> <a href="#/en/products/esp_arduino/heltec_esp_arduino_list_eu"> <strong>ESP32 Arduino</strong> </a> </p>');
        }
        /*esp8266 arduino*/
        if(product_class[class_num][i].a === "https://heltec.org/project/wifi-kit-8"){
           $("#"+product_class_name[class_num]).append('<br><p> <a href="#/en/products/esp_arduino/heltec_esp_arduino_list_eu"> <strong>ESP8266 Arduino</strong> </a> </p>');
        }
        /*oled screen*/
        /*0.49*/
        if(product_class[class_num][i].p === '0.49"White IIC'){
            $("#"+product_class_name[class_num]).append('<br><p> <a href="#/en/products/display/oled/heltec_oled_display_list_eu"> <strong>OLED</strong> </a> </p> <p>0.49" OLED Display</p>');
        }
        /*0.91*/
        if(product_class[class_num][i].p === '0.91"White IIC'){
            $("#"+product_class_name[class_num]).append('<br> <p>0.91" OLED Display</p>');
        }
        /*0.96"*/
        if(product_class[class_num][i].img === "http://resource.heltec.cn/img/docs/oled/0.96ssd1306_blue.jpg"){
            $("#"+product_class_name[class_num]).append('<br> <p>0.96" OLED Display</p>');
        }
        /*1.3"*/
        if (product_class[class_num][i].img === "http://resource.heltec.cn/img/docs/oled/1.3sh1106_blue.jpg") {
            $("#"+product_class_name[class_num]).append('<br><p>1.3" OLED Display</p>');
        }
        /*1.54"*/
        if (product_class[class_num][i].p === '1.54" White SPI') {
            $("#"+product_class_name[class_num]).append('<br><p>1.54" OLED Display</p>');
        }
        /* e-ink screen*/
        /*1.54" */
        if(product_class[class_num][i].img === "http://resource.heltec.cn/img/docs/e_ink/154bw.jpg"){
           $("#"+product_class_name[class_num]).append('<br><p> <a href="#/en/products/display/eink/heltec_eink_display_list_eu"> <strong>E-ink</strong> </a> </p> <p>1.54" E-ink Display</p>');
        } 
        /*2.13" */
        if(product_class[class_num][i].img === "http://resource.heltec.cn/img/docs/e_ink/213bw.jpg"){
           $("#"+product_class_name[class_num]).append('<br><p>2.13" E-ink Display</p>');
        } 
        /*2.6" */
        if(product_class[class_num][i].img === "http://resource.heltec.cn/img/docs/e_ink/260bw.jpg"){
           $("#"+product_class_name[class_num]).append('<br><p>2.6" E-ink Display</p>');
        } 
        /*2.7" */
        if(product_class[class_num][i].img === "http://resource.heltec.cn/img/docs/e_ink/270bw.jpg"){
           $("#"+product_class_name[class_num]).append('<br><p>2.7" E-ink Display</p>');
        } 
        /*2.9" */
        if(product_class[class_num][i].img === "http://resource.heltec.cn/img/docs/e_ink/290bw.jpg"){
           $("#"+product_class_name[class_num]).append('<br><p>2.9" E-ink Display</p>');
        } 
        /*4.2" */
        if(product_class[class_num][i].img === "http://resource.heltec.cn/img/docs/e_ink/420bw.jpg"){
           $("#"+product_class_name[class_num]).append('<br><p>4.2" E-ink Display</p>');
        } 
        /*5.83" */
        if(product_class[class_num][i].img === "http://resource.heltec.cn/img/docs/e_ink/583bw.jpg"){
           $("#"+product_class_name[class_num]).append('<br><p>5.83" E-ink Display</p>');
        } 
        /*7.5" */
        if(product_class[class_num][i].img === "http://resource.heltec.cn/img/docs/e_ink/750bw.jpg"){
           $("#"+product_class_name[class_num]).append('<br><p>7.5" E-ink Display</p>');
        }
        /*Accessories*/
        if(product_class[class_num][i].a === 'https://heltec.org/product/solar-charging-panel/' ){
           $("#"+product_class_name[class_num]).append('<br><p><strong>Accessories</strong></p>');
        }

        $("#"+product_class_name[class_num]).append("<div class='item'><a><img><p class='item-title'></p><br></a></div> ");
        $("#"+product_class_name[class_num]+" .item:last-child a").attr("href", product_class[class_num][i].a);//允许图片链接
        $("#"+product_class_name[class_num]+" .item:last-child img").attr("src", product_class[class_num][i].img);//产品的图片
        $("#"+product_class_name[class_num]+" .item:last-child p").text(product_class[class_num][i].p);//具体产品小格子下面的名字
      }
    }
    $(document).ready(function(){
        var mask_html = `<div class="mask"><a href="#" style="color:white;text-decoration:none" ><button type="button" class="btn-sm btn-primary mask-btn1">Docs Pages</button></a><button type="button" class="btn-sm btn-primary mask-btn2">Product Info</button></div>`
        $("#gateway div.item a:lt(2)").append(mask_html);//lt后面括号内的数字代表该类中需要添加掩盖页的数量
        $("#gateway .mask a").attr("href", "https://heltec-automation-docs.readthedocs.io/en/latest/index.html");
        $("#cubecell div.item a:lt(3)").append(mask_html);//lt后面括号内的数字代表该类中需要添加掩盖页的数量
        $("#cubecell .mask a").attr("href", "https://heltec-automation-docs.readthedocs.io/en/latest/cubecell/quick_start.html");
        $("#esp32_lora div.item a:lt(4)").append(mask_html);//lt后面括号内的数字代表该类中需要添加掩盖页的数量
        $("#esp32_lora .mask a").attr("href", "https://heltec-automation-docs.readthedocs.io/en/latest/esp32+arduino/quick_start.html");
        $("#stm32_lora div.item a:lt(4)").append(mask_html);//lt后面括号内的数字代表该类中需要添加掩盖页的数量
        $("#stm32_lora .mask a").attr("href", "https://heltec-automation-docs.readthedocs.io/en/latest/stm32/quick_start.html");

        $("#esp32_arduino div.item a:lt(4)").append(mask_html);//lt后面括号内的数字代表该类中需要添加掩盖页的数量
        $("#esp32_arduino .mask a").attr("href", "https://heltec-automation-docs.readthedocs.io/en/latest/esp32+arduino/quick_start.html");

        $("#esp8266_arduino div.item a:lt(4)").append(mask_html);//lt后面括号内的数字代表该类中需要添加掩盖页的数量
        $("#esp8266_arduino .mask a").attr("href", "https://heltec-automation-docs.readthedocs.io/en/latest/esp8266+arduino/quick_start.html#");

        $("#oled div.item a:lt(14)").append(mask_html);//lt后面括号内的数字代表该类中需要添加掩盖页的数量
        $("#oled .mask a").attr("href", "https://docs.heltec.cn/#/en/products/display/oled/heltec_oled_display_list_eu");

        $("#e_ink div.item a:lt(28)").append(mask_html);//lt后面括号内的数字代表该类中需要添加掩盖页的数量
        $("#e_ink .mask a").attr("href", "https://docs.heltec.cn/#/en/products/display/eink/heltec_eink_display_list_eu");

        $("#accessories div.item a:lt(13)").append(mask_html);//lt后面括号内的数字代表该类中需要添加掩盖页的数量
        $("#accessories .mask a").attr("href", "#");
      //   $("#gateway div.item a:lt(9)").append(mask_html);
      //   $("#unit div.item a:lt(5)").append(mask_html);
      //   $("#gateway .mask a").attr("href", "https://heltec-automation-docs.readthedocs.io/en/latest/cubecell/quick_start.html");
      //   $("#gateway .mask a").eq(6).attr("href", "http://www.baidu.com");
      //   $("#gateway .mask a").eq(7).attr("href", "#en/quick_start/m5stickc/m5stickc_quick_start");
      //   $("#gateway .mask a").eq(8).attr("href", "#en/quick_start/m5stickv/m5stickv_quick_start");
      //   $("#unit .mask a").attr("href", "#en/quick_start/m5camera/m5camera_quick_start");
      //   $("#unit .mask a").eq(4).attr("href", "#en/quick_start/unitv/unitv_quick_start");
      //   $(".product_page strong").parent('p').css("margin-bottom","0px");
        anchor_search();
        scrollFunc();
     });

</script>
