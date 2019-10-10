# OpenWrt

> 记录OpenWrt的安装与实践经验

## 前言

OpenWrt是开源的基于Linux的路由器系统，除官方版本，还有其他社区或个人的定制版。如koolshare的lede,Lean的lede等等...

这里推荐使用[Lean的lede](https://github.com/coolsnowwolf/lede)

## 编译

### 准备编译环境

- Arch Linux

```bash
pacman -S --needed asciidoc bash bc binutils bzip2 fastjar flex git gcc util-linux gawk intltool zlib make cdrkit ncurses openssl patch perl-extutils-makemaker rsync unzip wget gettext libxslt boost libusb bin86 sharutils b43-fwcutter findutils time
```

- Ubuntu 18.04 LTS

```bash
sudo apt-get install subversion build-essential libncurses5-dev zlib1g-dev gawk git ccache gettext libssl-dev xsltproc zip
```

其他Linux系统参考[这里](https://openwrt.org/docs/guide-developer/build-system/install-buildsystem)

### 编译固件

这里以官方版为例，其他定制版的操作流程基本相同。

```bash
# clone源代码
git clone https://github.com/openwrt/openwrt.git

# 切换分支
git checkout openwrt-18.06

# 更新package
./scripts/feeds update -a

# 安装package
./scripts/feeds install -a

# 选择编译的硬件架构及模块
make menuconfig

# 开始编译(第一次编译推荐单线程)
make -j1 V=s
```

编译好的固件放在bin目录下。

## 安装

使用自己编译好的固件或者是在[snapshots/targets/x86/64/](https://downloads.openwrt.org/snapshots/targets/x86/64/)处下载镜像

解压缩后，拿到squashfs文件格式的img镜像，写入到U盘作为启动盘即可。

```bash
# img镜像512字节对齐
dd if=openwrt-x86-64-combined-squashfs.img of=/dev/sdx bs=512 conv=sync
```

如果是在VirtualBox,VMWare虚拟机中安装，则需要img镜像转换为vmdk,vdi等虚拟介质，一般编译固件会直接提供vmdk直接使用。

通过VirtualBox的命令行的工具可以转换img镜像为vdi虚拟介质。

```bash
# img镜像转换为vdi
VBoxManage convertfromraw --format VDI lede-x86-64-combined-squashfs.img lede-x86-64-combined-squashfs.vdi
```

::: warning 注意事项
VirtualBox需要img镜像512字节对齐,需要先将img镜像进行字节对其后，再进行转换
:::

## 配置

### 修改lan口IP

openwrt的lan口默认地址为192.168.1.1，需要根据实际情况修改该默认IP

```bash
# 编辑lan口地址
vi /etc/config/network
```

也可以通过web界面直接修改lan口IP

### 配置代理

```bash
# /etc/opkg.conf

option http_proxy http://xxx
```

### 更新源

```bash
opkg update
```

### 安装luci

```bash
opkg install luci
```

## 使用

### openwrt作为主路由

#### 配置wan口

待续...

#### 配置lan口

待续...

#### 配置DHCP

待续...

### openwrt作为旁路由

关键操作有以下两点：

1. 主路由的DHCP的网关IP配置为旁路由的IP
2. 旁路由的网关IP配置为主路由的IP，关闭旁路由的DHCP

## 后记

### 开启SS/SSR/V2RAY插件

在lean的lede中，可以通过这样的方法开启这个插件。

进入ssh输入以下命令，刷新web界面即可显示该插件。

```bash
echo 0xDEADBEEF > /etc/config/google_fu_mode
```

## 参考链接

1. [在Virtualbox虚拟机中运行OpenWrt](https://openwrt.org/zh/docs/guide-user/virtualization/virtualbox-vm)
2. [OpenWrt构建系统安装](https://openwrt.org/docs/guide-developer/build-system/install-buildsystem)
