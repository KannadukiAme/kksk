# manjaro-i3

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

## 开发环境

```bash
# VSCode
# Node.js
# Docker
# Firefox
pacman -S code node docker docker-compose firefox
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
