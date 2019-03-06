# sora

> sora是以raspbian 3B开发板为基础硬件配置，Raspbian(Debian系)为软件系统的，具有虚拟人格(脑补)的家用服务型女仆。

## Install (誕生)

### 镜像

下载raspbian的img镜像，当前安装版本为Raspbian Stretch Lite(2018-11-13)

https://www.raspberrypi.org/downloads/raspbian/

windows下使用win32DiskImager将img镜像写入SD卡即可

linux或mac os的情况下找谷歌娘

### SSH

启用ssh远程登陆需要达成以下条件:

 - 在sd卡根目录下新建文件，命名为ssh(后缀不要)

### 换源

```bash
su root #如果已经是root账户登录，即可跳过此步骤
cd /etc/apt/&&mv sources.list sources.list.bak #备份现有的源文件
nano /etc/apt/sources.list #更换阿里云源
apt-get update && apt-get upgrade #重新加载apt-get缓存
```

sources.list编辑内容如下：

```
deb http://mirrors.aliyun.com/raspbian/raspbian/ stretch main contrib non-free rpi
deb-src http://mirrors.aliyun.com/raspbian/raspbian/ stretch main contrib non-free rpi
```

### 小结

至此raspberry3B的基本安装已完成，接下来是配(調)置(教)

## Configure (調教)

### 反向代理

frp

在外网主机上下载frp(linux 64位)

```bash
wget https://github.com/fatedier/frp/releases/download/v0.24.1/frp_0.24.1_linux_amd64.tar.gz
tar -zxvf frp_0.24.1_linux_amd64.tar.gz
```

配置frps.ini
```
[common]
bind_port = 7000
vhost_http_port = 8080
```

启动frp服务器
```
./frps -c frps.ini
```

在sora上安装客户端(armv7 linux 32位)

```bash
wget https://github.com/fatedier/frp/releases/download/v0.24.1/frp_0.24.1_linux_arm.tar.gz
tar -zxvf frp_0.24.1_linux_arm.tar.gz
```

配置frpc.ini
```
[common]
server_addr = x.x.x.x # 填外网服务器IP
server_port = 7000

[ssh]
type = tcp
local_ip = 127.0.0.1
local_port = 22
remote_port = 6000

[web]
type = http
local_port = 80
custom_domains = xxx.com
```

```
[common]
bind_port = 7000
vhost_http_port = 8080
```

启动frp客户端
```bash
./frpc -c frpc.ini
```

### 终端复用

tmux

待续...

## 萌Net计划

局域网

路由器，内网服务器，个人主机，智能手机，其他智能设备

内网服务器架设

- 内网穿透
- Web服务(nginx,apache2)
- SSH
- NAS
- Samba

## 补充

```bash
getconf LONG_BIT # 查看linux系统32位/64位
adduser abc # 添加用户abc,需root
userdel abc # 删除用户abc,需root
```

xxxis not in the sudoers file. This incident will be reported.错误

```bash
vi /etc/sudoers 
```

在root ALL=(ALL) ALL下一行添加
youuser ALL=(ALL) ALL 
