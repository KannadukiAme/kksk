# OpenWrt

> 记录OpenWrt的安装与实践经验

## 编译固件

### 安装构建环境

- Arch Linux

```bash
pacman -S --needed asciidoc bash bc binutils bzip2 fastjar flex git gcc util-linux gawk intltool zlib make cdrkit ncurses openssl patch perl-extutils-makemaker rsync unzip wget gettext libxslt boost libusb bin86 sharutils b43-fwcutter findutils time
```

- Ubuntu 18.04 LTS

```bash
sudo apt-get install subversion build-essential libncurses5-dev zlib1g-dev gawk git ccache gettext libssl-dev xsltproc zip
```

其他Linux系统参考[这里](https://openwrt.org/docs/guide-developer/build-system/install-buildsystem)

### 开始编译

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
make -j 1 V=s
```

## 安装

### 在VirtualBox虚拟机中安装OpenWrt

#### 准备工作

使用自己编译好的固件或者是在[snapshots/targets/x86/64/](https://downloads.openwrt.org/snapshots/targets/x86/64/)处下载镜像

* combined-ext4.img.gz(linux)
* combined-squashfs.img.gz(win)

```bash
# img镜像转换为vdi
VBoxManage convertfromraw --format VDI lede-x86-64-combined-squashfs.img lede-x86-64-combined-squashfs.vdi
```

::: warning 注意事项
VirtualBox需要img镜像512字节对齐
:::

```bash
# img镜像512字节对齐
dd if=openwrt-x86-64-combined-squashfs.img of=new.img bs=512 conv=sync
```

#### 新建虚拟机

**具体细节待完善**

#### 网络设置

1.第一个网卡设置仅主机模式

2.第二个网卡设置网络地址转换(NAT)

**具体细节待完善**

## 配置

### 网卡设置

**具体细节待完善**

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

## 参考链接

1. [在Virtualbox虚拟机中运行OpenWrt](https://openwrt.org/zh/docs/guide-user/virtualization/virtualbox-vm)
2. [OpenWrt构建系统安装](https://openwrt.org/docs/guide-developer/build-system/install-buildsystem)
