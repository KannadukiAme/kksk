# Manjaro-i3

> 记录manjaro-i3安装、配置和使用

## 系统安装

下载manjaro-i3镜像

根据向导提示操作

## 系统配置

### 代理配置

```bash
export http_proxy=http://xxxx
export https_proxy=http://xxxx
```

### 源配置

```bash
# 更换China源 并 更新
pacman-mirrors -c China
pacman -Syu
```

### AUR配置

```bash
yay -S xxxx
```

### 语言设置

```bash
# 设置中文
localectl set-locale zh_CN.UTF-8
```

### 输入法

```bash
# 安装输入法及配置工具
pacman -S fcitx-im fcitx-configtool

# 安装中文输入法
pacman -S fcitx-googlepinyin

# 安装日文输入法
pacman -S fcitx-mozc
```

```bash
# ~/.profile

# set fcitx
export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS=@im=fcitx

# start fcitx
fcitx -d

```

### 字体

```bash
# 安装中文字体
pacman -S wqy-microhei
```

### 壁纸

桌面壁纸

* nitrogen

登陆界面壁纸

* lightdm-settings

### uRxvt配置

```bash
# ~/.Xresources

# 英文字体推荐Dejavu

# 中文字体推荐WenQuanYi Micro Hei Mono

# 编辑完后需要重新加载
xrdb ~/.Xresources
```

### i3配置

i3wm

```bash
# ~/.i3/config

# i3bar透明设置
i3bar_command i3bar -t

# 编辑完后需要重新加载
# Super + Shift + R
i3 reload
```

i3status

```bash
# /etc/i3status.conf
```


配置rofi替换dmenu
```bash
#安装rofi
pacman -S rofi

#替换i3dmenu
bindsym $mod+d exec --no-startup-id "rofi -show drun -font \\"WenQuanYi Micro Hei Mono 9\\" -run-shell-command '{terminal} -e \\" {cmd}; read -n 1 -s\\"'"

```
### conky配置

```bash
# /usr/share/conky/*
```

利用conky配置i3bar

```bash
# ~/.conkyrc

conky.config = {
    out_to_x = false,
    own_window = false,
    out_to_console = true,
    background = false,
    max_text_width = 0,

    -- Update interval in seconds
    update_interval = 1.0,

    -- This is the number of times Conky will update before quitting.
    -- Set to zero to run forever.
    total_run_times = 0,

    -- Shortens units to a single character (kiB->k, GiB->G, etc.). Default is off.
    short_units = true,

    -- How strict should if_up be when testing an interface for being up?
    -- The value is one of up, link or address, to check for the interface
    -- being solely up, being up and having link or being up, having link
    -- and an assigned IP address.
    if_up_strictness = 'address',

    -- Add spaces to keep things from moving about?  This only affects certain objects.
    -- use_spacer should have an argument of left, right, or none
    use_spacer = 'left',

    -- Force UTF8? note that UTF8 support required XFT
    override_utf8_locale = true,

    -- number of cpu samples to average
    -- set to 1 to disable averaging
    cpu_avg_samples = 2,
};

conky.text = [[
# JSON for i3bar
[
  { "full_text" : "CPU ${cpu}%", "color" : "\#FFFFFF", "separator": false  },
  { "full_text" : "MEMORY ${mem}/${memmax}",  "color" : "\#FFFFFF", "separator": false  },
  { "full_text" : "HDD ${fs_used /}/${fs_size /}", "separator": false},
  { "full_text" : "IP ${addrs enp0s3}", "separator": false},
  { "full_text" : "Up ${upspeed enp0s3} - Down ${downspeed enp0s3}","separator": false},
  { "full_text": " ${time %Y/%m/%d(%a)}",  "separator": false  },
  { "full_text": " ${time %H:%M:%S}",  "separator": false  },
  ${if_match "${acpiacadapter}" == "on-line" }
  { "full_text": " ${battery_percent BAT1}%", "color": "\#FFBF7F",  "separator": false }
  ${else}
  { "full_text": " ${battery_percent BAT1}%", "color": "\#ffff4c",  "separator": false  }
  ${endif}
],
]]
```

```bash
# ~/.conky_i3bar.sh

#!/bin/sh

# Send the header so that i3bar knows we want to use JSON:
echo '{"version":1}'

# Begin the endless array.
echo '['

# We send an empty first array of blocks to make the loop simpler:
echo '[],'

# Now send blocks with information forever:
exec conky -c /home/madoka/.conkyrc
```

```bash
# ~/.i3/config

bar {
  status_command $HOME/conky_i3bar.sh
}
```

## 网络环境

```bash
# ssr
yay -S electron-ssr
```

## 开发环境

```bash
# VSCode
# Node.js
# Docker
# Firefox
pacman -S code node docker docker-compose firefox
```

## dd写镜像

```bash
dd bs=4M if=~/xxx.img of=/dev/sda
```

::: warning 注意事项
写入的/dev/sda不要挂载分区
:::

## 分区

```bash
# 查看当前挂载分区
df

#挂载
sudo mount /dev/sda1 /data

#卸载
sudo umount -v /dev/sda1

# 查看所有分区
lsblk

# 分区
gdisk /dev/sda

# o新建GPT分区表,n新建分区,w写入分区
```

### 挂载ntfs分区

```bash
sudo pacman -S ntfs-3g

sudo mount -t ntfs-3g /dev/sda1 /mnt/windows
```

### fstab自动挂载ntfs分区
```bash
# 查看ntfs分区所在的uuid
blkid

# /etc/fstab 添加如下配置
UUID=XXXXXXXXXXXXXX    /mnt/disk   ntfs-3g defaults  0 0
```

## Powerline配置

### Install

```bash
pacman -S powerline powerline-fonts
```

### For bash

```bash
# ~/.bashrc
powerline-daemon -q
POWERLINE_BASH_CONTINUATION=1
POWERLINE_BASH_SELECT=1
. /usr/share/powerline/bindings/bash/powerline.sh

# reload bash
source ~/.bashrc
```

***VSCode***

对于VSCode terminal会有乱码，则需要配置字体

添加字体如下:

```bash
# 查看powerline字体
fc-list | grep "Powerline"

# 在VSCode设置中的字体添加PowerlineSymbols即可
```

## Vbox虚拟机共享数据

安装VirtualBox Guest Additions

```bash
pacman -S virtualbox-guest-utils
pacman -S virtualbox-guest-modules-arch
```

此时双向复制粘贴是可用的

然后在VirutalBox设置共享文件夹名称和挂载点后

```bash
#源文件夹名称 挂载点
sudo mount -t vboxsf Share /home/madoka/Share/
```

## ISSUE

1. manjaro的终端链接ssh时，退格键会失效。

如下配置bashrc即可

```bash
# ~/.bashrc

# term
export TERM=ansi
```

## TIP

在终端中输入command时

| 快捷键 | 说明               |
| ------ | ------------------ |
| Ctrl+A | 跳转到第一个字符   |
| Ctrl+E | 跳转到最后一个字符 |



## 参考链接

1. [Rofi](https://wiki.archlinux.org/index.php/Rofi)
2. [Powerline](https://wiki.archlinux.org/index.php/Powerline)
