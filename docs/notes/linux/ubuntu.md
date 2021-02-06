# Ubuntu

## 网络配置

Ubuntu 17.10版本以后，新版的网络管理工具使用netplan命令，配置文件采用yaml格式。

配置文件一般放在以下目录：

/etc/netplan/xxx.yaml

静态ip的配置模板如下：

```yaml
network:
    ethernets:
        enp0s3:
            addresses:
                - 192.168.1.x/24
            gateway4: 192.168.1.1
            nameservers:
                - 223.5.5.5
                - 223.6.6.6
    version: 2
```

```bash
# 修改后使配置生效
netplan apply
```

## 参考链接

1. [Ubuntu Bionic: Netplan](https://ubuntu.com/blog/ubuntu-bionic-netplan)
