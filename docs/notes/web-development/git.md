# Git

> 记录关于git的常用操作与分支管理、提交信息规范

## 常用操作命令

```bash
# 初始化git项目（生成.git文件夹）
git init

# 克隆远程git项目（一般支持https和ssh两种协议）
git clone https://xxxxxx

# 拉取指定远程分支到本地分支（若本地分支和远程名称一致，可省略）
git pull origin(本地分支) master(远程分支)

# 推送指定远程分支到本地分支（若本地分支和远程名称一致，可省略）
git push origin(本地分支) master(远程分支)

# 强制推送（一般用于撤销某些不需要的commit，需谨慎使用）
git push origin(本地分支) master(远程分支) --force

# 添加所有文件到工作区
git add -A

# 将工作区的改动提交
git commit -m "提交说明"

# 重置到某次commit，但保留修改
git reset xxxx(commit id)

# 重置到当前最新提交的版本，丢失当前修改
git reset --hard

# 重置到某次commit，丢失当前修改
git reset --hard xxxx(commit id)

# 查看当前git的提交记录
git log

# 查看当前的改动
git diff

# 查看当前分支
git branch

# 强制删除分支
git branch -D dev(分支名称)

# 切换分支
git checkout dev(分支名称)

# 生成并切换分支
git checkout -b dev(分支名称)

# 将指定分支合并到当前分支
git merge dev(分支名称)

# 创建空白分支
git checkout --orphan gh-pages

# 添加远程仓库
git remote add origin repo(仓库地址)

# 查看git操作历史(用于恢复误删commit)
git reflog

# 新建tag v0.1到当前commit
git tag v0.1

# 新建tag v0.1并标注信息
git tag -a v0.1 -m "0.1 version"

# 删除某一个tag
git tag -d v0.1

# 列出当前所有tag
git tag

# 显示某个tag信息
git show v0.1

# 推送某一个tag
git push origin v0.1

# 推送所有tag
git push origin --tags

# 查看当前用户和邮箱
git config --get user.name
git config --get user.email

# 设置提交用户和邮箱(全局)
git config --global user.name xxx
git config --global user.email xxx

# 设置提交用户和邮箱(当前项目)
git config --local user.name xxx
git config --local user.email xxx
```

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

## Commit Message规范

格式如下

```
feat(xxx): add xxx // Title

this is a new feature // Body

Closes #1 // Footer
```

- feat: 添加新功能
- fix: 修复bug
- docs: 编写文档
- refactor: 重构
- style: 代码格式化
- chore: 构建脚本
- test: 测试相关

#1 为对应issue

## 部署gh-pages

build docs

部署

```
git push -f git地址 master:gh-pages
```

## rebase命令

rebase可以编辑仓库的commit历史，每次rebase后commit的hash都会发生变化。

rebase进入交互模式，编辑区间为左开右闭，（origin/master,commit id]

```bash
git rebase -i origin/master [commit id]
```

进入交互模式，可以对所有commit执行任意操作，如合并commit、编辑commit、更改commit注释等等。

::: tip Note
一般只编辑从上次更新的commit到本地最近的commit历史
:::

git pull的另一种方式，不会产生分叉commit。会将远程仓库新的commit放置在自己的commit之前。

```bash
git pull --rebase
```

## GitHub Flow

git仓库项目开发规范：

| 分支名称 | 分支说明     | 补充                                         |
| -------- | ------------ | -------------------------------------------- |
| master   | 线上发布分支 |                                              |
| dev      | 开发分支     |                                              |
| test     | 测试分支     | 如果没有测试用例或者实际需求可以不设置该分支 |
| gh-pages | 文档分支     | 创建空白分支作为起点，避免污染开发代码       |

本地git项目开发规范

- 开发新特性（功能），创建私有分支feat
- 修复bug，创建私有分支fix
- 重构，创建私有分支refactor

::: tip Note
一次commit尽可能保证只做一件事（开发新特性，修复bug，重构等)，增强代码评审可读性
:::

## 参考链接

1. [GIT团队合作探讨之四--不同工作流优缺辨析](https://www.cnblogs.com/kidsitcn/p/5329163.html)
2. [Git Community Book 中文版-rebase](http://gitbook.liuhui998.com/4_2.html)
3. [Git Commit Msg](http://karma-runner.github.io/4.0/dev/git-commit-msg.html)
