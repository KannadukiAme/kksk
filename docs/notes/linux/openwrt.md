# OpenWrt

> 记录OpenWrt的安装与实践经验

## 前言

OpenWrt是开源的基于Linux的路由器系统，除官方版本，还有其他社区或个人的定制版。如koolshare的lede,Lean的OpenWrt(lede),Lienol的OpenWrt等等...

这里推荐使用[Lean的OpenWrt(lede)](https://github.com/coolsnowwolf/lede)

截至到2020年3月11日，推荐使用[Lienol的OpenWrt](https://github.com/Lienol/openwrt)

## 安装OpenWrt系统

在安装OpenWrt系统之前，需要准备OpenWrt的固件，有两种方法可以获取，一种是直接从官方或者第三方社区下载已经编译好的固件，另一种是自己下载OpenWrt的源码进行编译固件。

这里以OpenWrt的[官方版](https://openwrt.org/)为例，其他定制版的操作流程基本相同。

### 准备编译环境

不同Linux系统下的需要的编译环境不同，推荐在Ubuntu系统中编译，其他定制版都是推荐在该系统下编译，也可以使用docker容器进行编译。

::: warning 注意
各个定制版的OpenWrt系统在相同Linux系统下的所需要的编译环境也是不同的，需要到相应git仓库阅读README文档。
:::

- Ubuntu 18.04 LTS

```bash
sudo apt-get install subversion build-essential libncurses5-dev zlib1g-dev gawk git ccache gettext libssl-dev xsltproc zip
```

- Arch Linux

```bash
pacman -S --needed asciidoc bash bc binutils bzip2 fastjar flex git gcc util-linux gawk intltool zlib make cdrkit ncurses openssl patch perl-extutils-makemaker rsync unzip wget gettext libxslt boost libusb bin86 sharutils b43-fwcutter findutils time
```

其他Linux系统参考[这里](https://openwrt.org/docs/guide-developer/build-system/install-buildsystem)

### 编译固件

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

::: tip Note
如果是在VirtualBox,VMWare虚拟机中安装，则可以勾选编译选项中的vmdk或vdi输出选项。
:::

编译好的固件放在bin目录下。

### 开始安装

使用自己编译好的固件或者是在[snapshots/targets/x86/64/](https://downloads.openwrt.org/snapshots/targets/x86/64/)处下载镜像

解压缩后，拿到squashfs文件格式的img镜像，写入到U盘作为启动盘即可。

#### 写入到tf卡

```bash
# img镜像512字节对齐
dd if=openwrt-x86-64-combined-squashfs.img of=/dev/sdx bs=512 conv=sync
```

#### img镜像转换为vdi/vmdk虚拟介质

如果是在VirtualBox,VMWare虚拟机中安装，则需要将img镜像转换为vdi,vmdk等虚拟介质，一般编译固件会直接输出vmdk或vdi直接使用。

通过VirtualBox的命令行的工具可以转换img镜像为vdi或vmdk虚拟介质。

```bash
# img镜像转换为vdi
VBoxManage convertfromraw --format VDI lede-x86-64-combined-squashfs.img lede-x86-64-combined-squashfs.vdi
```

::: warning 注意事项
VirtualBox需要img镜像512字节对齐,需要先将img镜像进行字节对其后，再进行转换
:::

## 配置OpenWrt系统

### 修改lan口IP

OpenWrt的lan口默认地址为192.168.1.1，需要根据实际情况修改该默认IP

```bash
# 编辑lan口地址
vi /etc/config/network
```

也可以通过web后台管理界面直接修改lan口IP

## 使用OpenWrt系统

根据使用场景的不同，OpenWrt可以有多种使用方法。

### OpenWrt作为普通主路由

### openwrt作为普通/单臂旁路由(旁路网关)

### openwrt作为单臂主路由

## 相关插件

### 主题美化

推荐使用Argon主题，[仓库地址](https://github.com/jerrykuku/luci-theme-argon)

该主题1.7.0版本支持自定义图片、视频，并且还有主题配置面板。

该主题的ipk可从仓库地址里的release版下载，一共有两个ipk，另外一个是主题配置面板。

由于该主题使用了backdrop-filter属性，此属性在firefox下默认是关闭的。下面图中可以看到各浏览器对此属性的支持情况。

![backdrop-filter属性支持](/img/backdrop-filter.jpg)

因此firefox需要在about:config将layout.css.backdrop-filter.enabled的值置为true

![firefox开启backdrop-filter支持](/img/firefox-aboutconfig.jpg)

在主题配置面板选好背景上传之后，如图所示。

![openwrt登录背景](/img/openwrt-bg.jpg)

## 参考链接

1. [在Virtualbox虚拟机中运行OpenWrt](https://openwrt.org/zh/docs/guide-user/virtualization/virtualbox-vm)
2. [OpenWrt构建系统安装](https://openwrt.org/docs/guide-developer/build-system/install-buildsystem)
