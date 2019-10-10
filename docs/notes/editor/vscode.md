# VSCode

> 记录vscode编辑器的个人喜好以及习惯设定

## 使用习惯

主题

- Ayu

插件

- Chinese (Simplified) Language Pack for Visual Studio Code (简体中文语言包)
- Vetur (Vue支持)
- language-stylus (stylus支持)
- Manta's Stylus Supremacy (stylus格式化)
- GitLens
- VSC Mikutap (music)
- Debugger for Chrome (调试工具)

## 配置文件

setting.json

```json
{
  "workbench.colorTheme": "Ayu Mirage",
  "files.associations": {
      ".gitignore": "ignore"
  },
  "editor.tabSize": 2,
  "workbench.iconTheme": "ayu",
  "stylusSupremacy.insertColons": false,
  "stylusSupremacy.insertSemicolons": false,
  "stylusSupremacy.insertBraces": false,
  "stylusSupremacy.insertNewLineAroundImports": false,
  "stylusSupremacy.insertNewLineAroundBlocks": false,
  "vetur.format.defaultFormatter.html": "prettier",
}
```

## Remote-SSH

非常适用服务器远程开发，一般推荐使用ssh密钥登录，因为使用密码登录每次都需要输入两次，非常不方便。

vscode提供ssh_config登录配置文件，大致如下配置，注意指定的私钥文件路径即可。

```
Host alias
    HostName 192.168.x.xx
    User xxx
    IdentityFile xxx\.ssh\id_rsa
```

::: warning 注意事项

该插件必须要勾选图中的设置，否则无法输入密码登录ssh

:::

![vscode-remote-ssh-settings](~@source/img/vscode-remote-ssh-settings.jpg)
