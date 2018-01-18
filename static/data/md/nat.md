# <p align="center">内网穿透</p> #
&nbsp;&nbsp;&nbsp;&nbsp;内网穿透即NAT穿透，网络连接时术语，计算机是局域网内时，外网与内网的计算机节点需要连接通信，有时就会出现不支持内网穿透。<br>
&nbsp;&nbsp;&nbsp;&nbsp;就是说[映射端口](https://baike.baidu.com/item/%E6%98%A0%E5%B0%84%E7%AB%AF%E5%8F%A3),能让外网的电脑找到处于内网的电脑,提高下载速度。<br>
&nbsp;&nbsp;&nbsp;&nbsp;不管是内网穿透还是其他类型的网络穿透，都是网络穿透的统一方法来研究和解决。<br>
&nbsp;&nbsp;&nbsp;&nbsp;在百科词条[NAT穿越](https://baike.baidu.com/item/NAT%E7%A9%BF%E8%B6%8A)，[nat穿透](https://baike.baidu.com/item/nat%E7%A9%BF%E9%80%8F)中有关于网络穿透的详细信息。
### 如何进行
&nbsp;&nbsp;&nbsp;&nbsp;[端口映射](https://baike.baidu.com/item/%E7%AB%AF%E5%8F%A3%E6%98%A0%E5%B0%84)，其实就是常说的NAT地址转换的一种，其功能就是把在公网的地址转翻译成私有地址， 采用路由方式的ADSL宽带路由器拥有一个动态或固定的公网IP，ADSL直接接在HUB或交换机上，所有的电脑共享上网。<br>
&nbsp;&nbsp;&nbsp;&nbsp;在[局域网](https://baike.baidu.com/item/%E5%B1%80%E5%9F%9F%E7%BD%91)内部的任一PC或[服务器](https://baike.baidu.com/item/%E6%9C%8D%E5%8A%A1%E5%99%A8)上运行到[花生壳](https://hsk.oray.com/)、[FRP](https://github.com/fatedier/frp)内网穿透客户端，此时[域名解析](https://baike.baidu.com/item/%E5%9F%9F%E5%90%8D%E8%A7%A3%E6%9E%90)到的IP地址是局域网[网关](https://baike.baidu.com/item/%E7%BD%91%E5%85%B3)出口处的公网IP地址，再在网关处做[端口映射](https://baike.baidu.com/item/%E7%AB%AF%E5%8F%A3%E6%98%A0%E5%B0%84)指向监控设备即可。
### 免费的FRP服务器
1 frpzj.lu8.win:7000 ,[服务器信息](https://diannaobos.com/frp/)<br>
2 freefrp.ml:7000 ,[服务器信息](http://freenat.win/)<br>
3 其他,[frps免费服务器收集](https://diannaobos.com/post/475.html)
### FRP客户端下载
1 [国内下载](http://diannaobos.iok.la:81/frp/)<br>
2 [国外下载](https://github.com/fatedier/frp/releases)
### FRP教程
1 [官网帮助](https://github.com/fatedier/frp/blob/master/README_zh.md#%E9%80%9A%E8%BF%87%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%90%8D%E8%AE%BF%E9%97%AE%E9%83%A8%E7%BD%B2%E4%BA%8E%E5%86%85%E7%BD%91%E7%9A%84-web-%E6%9C%8D%E5%8A%A1)<br>
2 [小白教程](https://diannaobos.com/post/470.html)
### FRP简单使用实例
1. 修改 frps.ini 文件，这里使用了最简化的配置：

```ini
#frpc.ini
[common]
server_addr = freefrp.ml
server_port = 7000
log_file = ./frpc.log
log_level = info
log_max_days = 3
privilege_token = frp888

[http_54321] 
type = http 
custom_domains = 54321.freefrp.ml
local_ip = 127.0.0.1
local_port = 8080
privilege_mode = true 
authentication_timeout = 0 
use_encryption = true 
use_gzip = true 
```
2. 启动 frpc：

  `./frpc -c ./frpc.ini`
  
3. 外网访问本机8080端口网站，浏览器地址栏输入：

  `54321.freefrp.ml`





