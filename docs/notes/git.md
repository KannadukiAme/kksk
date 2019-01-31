# git

> 记录关于git的常用操作与分支管理、提交信息规范

## 常用操作命令

```
git init
```
初始化git项目（生成.git文件夹）

```
git clone https://xxxxxx
```
克隆远程git项目（一般支持https和ssh两种协议）

```
git pull origin(本地分支) master(远程分支)
```
拉取指定远程分支到本地分支（若本地分支和远程名称一致，可省略）

```
git push origin(本地分支) master(远程分支)
```
推送指定远程分支到本地分支（若本地分支和远程名称一致，可省略）

```
git push origin(本地分支) master(远程分支) --force
```
强制推送（一般用于撤销某些不需要的commit，需谨慎使用）

```
git add -A
```
添加所有文件到工作区

```
git commit -m "提交说明"
```
将工作区的改动提交

```
git reset --hard
```
丢弃当前所有改动，重置到当前最新提交的版本

```
git reset --hard xxxx(commit id)
```
跳回到某次commit版本

```
git log
```
查看当前git的提交记录

```
git diff
```
查看当前的改动

```
git branch
```
查看当前分支

```
git branch -D dev(分支名称)
```
强制删除分支

```
git checkout dev(分支名称)
```
切换分支

```
git checkout -b dev(分支名称)
```
生成并切换分支

```
git merge dev(分支名称)
```
将指定分支合并到当前分支

```
git checkout --orphan gh-pages
```
创建空白分支

## 分支管理

一般远程仓库建立以下分支：

- master
- dev
- pg-pages (可选)

master分支用于大版本更新，开发者一般在dev分支上开发，若要开发新功能或者bug修正则在本地新开分支，然后合并到dev上。dev更新版本则合并到master分支上。pg-pages分支用于github仓库的静态页面展示，一般是文档。

## 提交信息规范

可使用工具[commitizen](https://github.com/commitizen/cz-cli)

全局安装
```
npm install -g commitizen
```

使用npm或者yarn
```
commitizen init cz-conventional-changelog --save-dev --save-exact
```
或者
```
commitizen init cz-conventional-changelog --yarn --dev --exact
```

以后可用git cz代替git commit

## 部署gh-pages

build docs

部署

```
git push -f git地址 master:gh-pages
```