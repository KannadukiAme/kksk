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

字体

```
'Cascadia Code',Microsoft Yahei UI Light, Consolas, 'Courier New', monospace
```

::: tip 提示
Cascadia Code字体需要在[此处](https://github.com/microsoft/cascadia-code)的git仓库下载
:::

Cascadia Code字体配置

```json
{
    "editor.fontFamily": "'Cascadia Code', Microsoft Yahei UI Light, Consolas, 'Courier New', monospace",
    "editor.fontLigatures": true
}
```

## 配置文件

setting.json

```json
{
  "editor.fontFamily": "'Cascadia Code', Microsoft Yahei UI Light, Consolas, 'Courier New', monospace",
  "editor.fontLigatures": true,
  "editor.tabSize": 2,
  "files.autoSave": "off",
  "workbench.colorTheme": "GitHub Dark",
  "editor.renderControlCharacters": true,
  "javascript.format.semicolons": "remove",
  "typescript.format.semicolons": "remove",
  "explorer.confirmDelete": false,
  "vetur.validation.template": false,
  "eslint.validate": [
      "javascript",
      "javascriptreact",
      "vue"
  ],
  "eslint.format.enable": true,
  "eslint.run": "onSave",
  "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
  },
  "debug.javascript.autoAttachFilter": "disabled",
  "[vue]": {
      "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[javascript]": {
      "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[typescript]": {
      "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  }
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
