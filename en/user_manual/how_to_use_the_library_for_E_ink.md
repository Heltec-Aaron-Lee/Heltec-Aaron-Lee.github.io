

## How to use the library for E-ink

* Definition of Model data of display Pictures in **"imagedata.h"** and **"imagedata.cpp"**.

<img src="img/how_to_use_the_library_for_E_ink/1.png">

* In the **"Display()"** function in the **"select.h"** file, modify the array name of the modulus data of the corresponding size screen

<img src="img/how_to_use_the_library_for_E_ink/2.png">

* In the **"e ink.h"** file, please change the **"/////#define USE_260_BW"** to **"#define USE_XX_XX"**(Macro definition of corresponding size)

  <img src="img/how_to_use_the_library_for_E_ink/3.png">

