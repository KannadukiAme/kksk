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

待续...