# Nextcloud

nextcloud提供私人云盘平台的解决方案。

## docker部署

docker-compose配置模板如下，可根据实际情况修改

```yaml
# "/mnt/disk" is a external storage dir.
# You need to mount your hard disk or remove the line.
version: "3"

services:
  db:
    image: mariadb
    command: --transaction-isolation=READ-COMMITTED --binlog-format=ROW
    restart: always
    volumes:
      - ./db:/var/lib/mysql
    environment:
      - MYSQL_ROOT_PASSWORD=root
      - MYSQL_PASSWORD=root
      - MYSQL_DATABASE=nextcloud
      - MYSQL_USER=nextcloud

  app:
    image: nextcloud
    ports:
      - 8080:80
    links:
      - db
    volumes:
      - ./html:/var/www/html
      - /mnt/disk:/downloads
    restart: always
```

::: tip Note
每次修改IP时，需要修改nextcloud的配置文件，否则会出现无法登录的情况
:::

## 挂载外部存储

### 安装插件

### 配置路径

## 参考链接
