# PicoGW_UI软件无法选择China的解决办法

## 1. 原因
原因很简单，PicoGW_UI的默认安装包里面，并未包含中国使用的470~510MHz频段的配置文件。



## 2. 解决办法

[https://github.com/HelTecAutomation/lorasdk](https://github.com/HelTecAutomation/lorasdk)

- 将此GitHub仓库克隆或者下载下来；
- 将其中的`global_conf_CN470.json`文件更名为**“default_global_conf_CN.json”**；
- 将`default_global_conf_CN.json`文件复制到`C:\Users\username\AppData\Roaming\Semtech\PicoGW_UI\Config`路径，若已存在同名文件，覆盖之。

若一切正常，就可以PicoGW_UI就可以正常打开了。

![](https://heltec.org/wp-content/uploads/2018/08/picogw_cn-config.png)