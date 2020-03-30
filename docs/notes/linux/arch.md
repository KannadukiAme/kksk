# Arch

>　记录archlinux的安装与配置

## 安装

### 准备工作

[下载镜像](https://www.archlinux.org/download/)

将下载好的镜像写入U盘

```bash
# arch.iso为下载镜像的名称,sdx根据设备名称自行替换
dd if=~/Downloads/arch.iso of=/dev/sdx bs=4M

# 写入完毕，查看分区情况，若有sdx1,sdx2则表明写入成功
lsblk
```

### 磁盘分区

### UEFI/GPT分区方案

| device    | 挂载点        | 分区大小 | 分区类型 | 说明                     |
| --------- | ------------- | -------- | -------- | ------------------------ |
| /dev/sdx1 | /mnt/boot/efi | 300-500M | fat32    | EFI系统分区 用于引导启动 |
| /dev/sdx2 |               | >=1G     | swap     | arch的swap               |
| /dev/sdx3 | /mnt          | 任意     | ext4     | arch安装分区             |

### 分区

```bash
fdisk /dev/sdx

g # 创建gpt分区表
n # 创建新分区
t # 改变分区类型

w # 提交操作
```

### 格式化及挂载

```bash
# 格式化为ext4格式
mkfs.ext4 /dev/sdx3

# 格式化为fat32格式
mkfs.fat -F32 /dev/sdx1

# 挂载
mount /dev/sdx3 /mnt
mount /dev/sdx1 /mnt/boot/efi

# 制作swap分区
mkswap /dev/sdX2
swapon /dev/sdX2
```

### 安装base包

#### 设置源

[mirrors生成器](https://www.archlinux.org/mirrorlist/)

根据国家地区生成后，配置到这里

```bash
# /etc/pacman.d/mirrorlist

Server = xxxx
```

#### base

```bash
# 安装base
pacstrap /mnt base
```

#### config

```bash
# 生成fstab配置
genfstab -U /mnt >> /mnt/etc/fstab

# 进入/mnt里安装的系统
arch-chroot /mnt
```

### 时区与语言设置

```bash
# 设置时区
ln -sf /usr/share/zoneinfo/Region/City /etc/localtime
hwclock --systohc

# 配置语言
# /etc/locale.conf
LANG=en_US.UTF-8

# 生成语言
locale-gen
```

### 网络配置

编辑以下文件

```bash
# /etc/hostname
myhostname

# /etc/hosts
127.0.0.1	localhost
::1		localhost
127.0.1.1	myhostname.localdomain	myhostname
```

### 安装其他包

```bash
pacman -S base-devel linux-headers linux-lts
```

### 安装grub启动器

UEFI

```bash
# 安装grub
pacman -S grub efibootmgr

# 指定efi安装路径
grub-install --target=x86_64-efi --efi-directory=/mnt/boot/efi --bootloader-id=GRUB

# 生成grub配置文件
grub-mkconfig -o /boot/grub/grub.cfg
```

### 设置root密码

```bash
passwd
```

## 配置

### 配置静态IP

dhcpcd

```
# /etc/dhcpcd.conf

interface eth0
static ip_address=192.168.0.10/24
static routers=192.168.0.1
static domain_name_servers=192.168.0.1 8.8.8.8
```

### DHCP

dhcpcd

```bash
# 启用dhcpcd服务
systemctl enable dhcpcd
dhcpcd
```

### SSH

```bash
# 安装ssh
pacman -S openssh

# 编辑/etc/ssh/sshd_config
PermitRootLogin yes #允许远程root登陆

# 启用ssh服务
systemctl enable sshd
systemctl start sshd
```

### 添加用户

useradd

## 参考链接

1. [arch安装向导](https://wiki.archlinux.org/index.php/Installation_guide)
2. [mirrors生成器](https://www.archlinux.org/mirrorlist/)
3. [GRUB](https://wiki.archlinux.org/index.php/GRUB)
