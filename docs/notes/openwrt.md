# OpenWrt

> 记录OpenWrt的安装与实践经验

## Install

### 在VirtualBox虚拟机中安装OpenWrt

#### 准备工作

在[snapshots/targets/x86/64/](https://downloads.openwrt.org/snapshots/targets/x86/64/)处下载镜像

combined-ext4.img.gz(linux)
combined-squashfs.img.gz(win)

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

***具体细节待完善***

#### 网络设置

1.第一个网卡设置仅主机模式

2.第二个网卡设置网络地址转换(NAT)

***具体细节待完善***

#### 配置代理

```bash
# /etc/opkg.conf

option http_proxy http://xxx
```

#### 安装luci

```bash
opkg install luci
```

#### 编译固件

***待续***

## 参考链接

1. [在Virtualbox虚拟机中运行OpenWrt](https://openwrt.org/zh/docs/guide-user/virtualization/virtualbox-vm)
