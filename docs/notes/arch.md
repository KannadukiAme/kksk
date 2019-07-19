# arch

>　记录archlinux的安装与配置

## 安装

### 准备工作

下载镜像

使用dd写入U盘

### 磁盘分区与格式化

fdisk分区

MBR/BIOS

UEFI/GPT

格式化

mkfs.ext4

mkfs.fat

挂载

### 安装base包

更换源

[mirrors生成器](https://www.archlinux.org/mirrorlist/)

设置时间服务器

base-devel linux-headers linux-lts

### 语言设置

locale-gen

### 安装grub启动器

MBR

UEFI

## 配置

### DHCP

dhcpcd

### SSH

openSSH

修改sshd配置

### 添加用户

useradd

## 参考链接

1. [arch安装向导](https://wiki.archlinux.org/index.php/Installation_guide)
2. [mirrors生成器](https://www.archlinux.org/mirrorlist/)
