# docker

> 记录docker容器的基本操作和镜像配置

## 安装

Windows平台下安装

例如:https://store.docker.com/editions/community/docker-ce-desktop-windows

::: tip Note
Docker CE需要开启Hyper-V，默认Docker会自动帮你开。一旦开启，Vitural Box会无法启用，只能关闭Hyper-V。因此，Dokcer CE和Vitural Box无法同时启动。Hyper-V在【windows功能】选择开启或关闭。
:::

## 配置

需要阿里云加速器

注册登陆申请一个即可

https://zrv2x9z2.mirror.aliyuncs.com

## 运行

以部署node应用为例：

```
# 下载node官方镜像
docker pull node
# 挂载本机node应用(source指定的目录必须是绝对路径)（将容器8080端口映射到本机8080端口)(分配bash)
docker run -it -p 8080:8080 --mount type=bind,source=E:\TestCode\eggvue,target=/app node /bin/bash
# 安装依赖、build、start
yarn
yarn build
yarn start
# 本机访问
http://localhost:8080
```

## 创建容器

```
FROM centos
RUN yum update -y
RUN yum install wget -y
RUN yum -y install gcc

# 安装nodejs
RUN wget https://nodejs.org/dist/v10.14.0/node-v10.14.0-linux-x64.tar.xz
RUN unxz node-v10.14.0-linux-x64.tar.xz
RUN tar xvf node-v10.14.0-linux-x64.tar

# 编译nodejs
yum -y install gcc make gcc-c++ openssl-devel wget
wget https://nodejs.org/dist/v10.14.0/node-v10.14.0.tar.gz
tar -zxf node-v10.14.0.tar.gz
cd node-v10.14.0
./configure
make && make install
```

## 删除镜像和移除容器

remove

## 定制开发环境镜像

两种定制方法：

1.使用commit保存镜像

2.使用dockerfile定制

## 镜像备份与迁移

docker commit 将在运行的容器生成镜像

docker save 将镜像生成tar文件

## 其他

### 获取Docker容器所有IP地址

```
docker inspect -f '{{.Name}} - {{.NetworkSettings.IPAddress }}' $(docker ps -aq)
```