# Proxmox VE

> 基于Debian Linux的虚拟机解决方案,提供Web UI或CLI管理方式

## 安装PVE

待续...

## 安装lede

将编译后或者下载的img镜像上传到PVE服务器

执行以下命令，将img镜像导入至id为100的虚拟机里

```bash
qm importdisk 100 lede.img local-lvm --format qcow2
```

## 硬盘直通

查看需要直通硬盘的型号，也可以直接在pve的web管理界面上直接查找

```bash
ls /dev/disk/by-id/
```

然后执行以下命令

```bash
# 101为虚拟机id,--sata0指定硬盘类型和序号，/dev/disk/by-id/xxx指定该硬盘
qm set 101 --sata0 /dev/disk/by-id/ata-WDC_WD20SPZX-08UA7_WD-WXL1EC8FYULY
```
