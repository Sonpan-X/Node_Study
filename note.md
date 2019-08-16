# 常用模块
- 1.http
- 2.assert(断言)
- 3.Buffer----二进制
    Files   Styterm
- 4. C++ Addons
- 5.多进程
    Child Prosses
    Cluster
    Process
- 6.Crypto--签名
 MD5、sha
- 7.Os
- 8.Events 事件队列
    async
- 9.Query String
     Url
- 10.网络
     TCP---稳定 Net
     UDP---快 UPD/Datagram

- 11.域名解析
     DNS
     Domain
- 12.流操作
       连续数据都是流---视频流、网络流、文件流、语音流
- 13.TLS/SSL
       加密、安全      


# 如何理解进程和线程

1.进程：拥有独立的执行空间、存储
2.同一个进程内的所有线程共享一套空间、代码

多进程 成本高（慢）安全（进程间隔离）；进程间的通信麻烦、代码简单
多线程 成本低 不安全（线程一挂全挂）线程间通信简单。

# 原生NodeJs 服务器
  1.http.createServer()
  2.解析数据（get，post）、响应静态资源（fs）
  3.



