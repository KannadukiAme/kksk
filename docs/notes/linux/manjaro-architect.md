# Manjaro-Architect

> 记录manjaro-architect安装、配置和使用

## 安装(CLI版)

启动进入安装界面

![图1](~@source/img/manjaro-1.jpg)

更换镜像

```bash
sudo pacman-mirrors -c China
```

输入setup执行安装

选择语言

![图2](~@source/img/manjaro-2.jpg)

进入安装界面

![图3](~@source/img/manjaro-3.jpg)

### 预安装

进行预安装过程

![图4](~@source/img/manjaro-4.jpg)

1.磁盘分区

选择要分区的磁盘

![图5](~@source/img/manjaro-5.jpg)

选择自动分区

![图6](~@source/img/manjaro-6.jpg)

分区后结果

![图7](~@source/img/manjaro-7.jpg)

2.挂载分区

![图8](~@source/img/manjaro-8.jpg)

选择ROOT的安装目录，即系统的安装目录

![图9](~@source/img/manjaro-9.jpg)

选择文件格式，一般推荐ext4

![图10](~@source/img/manjaro-10.jpg)

保持挂载默认设置，跳过即可

![图11](~@source/img/manjaro-11.jpg)

选择SWAP分区

![图12](~@source/img/manjaro-12.jpg)

预案装基本完成

### 安装CLI系统

安装CLI系统

![图13](~@source/img/manjaro-13.jpg)

1. 安装Base

![图14](~@source/img/manjaro-14.jpg)

选择Linux内核和yay

![图15](~@source/img/manjaro-15.jpg)

选择Linux内核模块

![图16](~@source/img/manjaro-16.jpg)

安装网络驱动

![图17](~@source/img/manjaro-17.jpg)

2. 安装Bootloader

选择BIOS引导器

![图18](~@source/img/manjaro-18.jpg)

选择安装磁盘

![图19](~@source/img/manjaro-19.jpg)

3. 配置Base

![图20](~@source/img/manjaro-20.jpg)

生成FSTAB

![图21](~@source/img/manjaro-21.jpg)

选择标识，推荐UUID

![图22](~@source/img/manjaro-22.jpg)

设置主机名

![图23](~@source/img/manjaro-23.jpg)

输入主机名

![图24](~@source/img/manjaro-24.jpg)

设置系统语言区

![图25](~@source/img/manjaro-25.jpg)

选择语言

![图26](~@source/img/manjaro-26.jpg)

选择Locales

![图27](~@source/img/manjaro-27.jpg)

设置时区和时钟

![图28](~@source/img/manjaro-28.jpg)

选择所在大洲

![图29](~@source/img/manjaro-29.jpg)

选择城市

![图30](~@source/img/manjaro-30.jpg)

设置标准时间

![图31](~@source/img/manjaro-31.jpg)

设置Root用户密码

![图32](~@source/img/manjaro-32.jpg)

输入Root用户密码

![图33](~@source/img/manjaro-33.jpg)

添加用户

![图34](~@source/img/manjaro-34.jpg)

输入用户名

![图35](~@source/img/manjaro-35.jpg)

选择默认shell

![图36](~@source/img/manjaro-36.jpg)

输入用户密码

![图37](~@source/img/manjaro-37.jpg)

至此manjaro系统安装结束
