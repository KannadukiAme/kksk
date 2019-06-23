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

# 编辑完后需要重新加载
# Super + Shift + R
i3 reload
```

i3status
```bash
# /etc/i3status.conf
```

i3bar透明设置

...

### conky配置

```bash
# /usr/share/conky/*
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
