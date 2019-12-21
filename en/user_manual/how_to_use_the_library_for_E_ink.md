## How to use the library for E-ink

* [If you just want to show the default picture](#if-you-just-want-to-show-the-default-picture)

* [If you need to show a new picture](#if-you-need-to-show-a-new-picture)

------

#### If you just want to show the default picture

* Just modify the macro definition in the "e_ink.h" file.

  * **Such as displaying a 2.9-inch black-and-white screen picture**

    <img src="img/how_to_use_the_library_for_E_ink/1.png">

------



#### If you need to show a new picture

* First, you need to take the image as a model, and put the data in the **"imagedata. h"** and **"imagedata. cpp"** files (**following the format in the example**), and remember the array name of the data you take.

  <img src="img/how_to_use_the_library_for_E_ink/2.png">

  <img src="img/how_to_use_the_library_for_E_ink/3.png">

  <img src="img/how_to_use_the_library_for_E_ink/4.png">

  <img src="img/how_to_use_the_library_for_E_ink/5.png">

  ------

* Then find the **"Display ()"** function in **"select.h"** header file. At the corresponding macro definition, change the actual parameter of the **"Display_picture()"** function to the name of the array just now.

  <img src="img/how_to_use_the_library_for_E_ink/6.png">

  <img src="img/how_to_use_the_library_for_E_ink/7.png">

* Finally, you can modify the macro definition in the **"e_ink.h"** file.

  <img src="img/how_to_use_the_library_for_E_ink/1.png">

  * **Show a 2.9-inch black and white screen image as shown above.**
  

