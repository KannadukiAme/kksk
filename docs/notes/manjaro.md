# manjaro

> 记录manjaro-i3安装、配置和使用

## 系统安装

下载manjaro-i3镜像

根据向导提示操作

## 系统配置

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

### 输入法

```bash
# 安装输入法及配置工具
pacman -S fcitx-im fcitx-configtool

# 安装日文输入法
pacman -S fcitx-mozc
```

```bash
# ~/.profile

# 开机启动输入法
fcitx -d
```

### 字体

```bash
# 安装字体
pacman -S adobe-source-han-sans-otc-fonts
```

### 壁纸更换

自带nitrogen有GUI界面无需配置

### uRxvt配置

```bash
# ~/.Xresources

# 英文字体推荐Dejavu

# 中日韩字体推荐Source Han Sans

# 编辑完后需要重新加载
xrdb ~/.Xresources
```

### i3配置

```bash

# 编辑完后需要重新加载
# Super + Shift + R
i3 reload
```

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
