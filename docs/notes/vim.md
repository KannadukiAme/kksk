# vim

> 记录一些vim插件安装过程中的坑以及一些配置

## 安装

### YCM

准备安装编译环境，
Ubuntu18.04

```
sudo apt install build-essential cmake python3-dev
```
使用vim-plug管理vim插件，

在.vimrc中添加

```
Plug 'Valloric/YouCompleteMe',{ 'do': './install.py --tern-completer'}
```

保存重启vim，调用:PlugInstall

编译成功后，配置.vimrc

```
" Start autocompletion after 4 chars
let g:ycm_min_num_of_chars_for_completion = 4
let g:ycm_min_num_identifier_candidate_chars = 4
let g:ycm_enable_diagnostic_highlighting = 0

" Don't show YCM's preview window [ I find it really annoying ]
set completeopt-=preview
let g:ycm_add_preview_to_completeopt = 0
```

如果编译失败，排除错误后在~/.vim/plugged/YouCompleteMe/目录下重新编译

```
python3 install.py --tern-completer
```

适用于Vue开发
配置~/.tern-config

```
{
  "libs": [
    "browser",
    "ecmascript"
  ],
    "plugins": {
    "doc_comment": null,
      "es_modules": { },
    "webpack": { }
  }
}
```

## 配置

.vimrc完整的配置已放在git仓库上

[点击此处查看](https://github.com/KannadukiAme/vimconfig)

## 操作

cheat sheet
![vi-vim-cheat-sheet](../img/vi-vim-cheat-sheet.gif)

## 参考链接

1. [YCM github](https://github.com/Valloric/YouCompleteMe)
2. [Autocomplete in VIM for JS developer](https://medium.com/@rahul11061995/autocomplete-in-vim-for-js-developer-698c6275e341)
3. [什么配置适合开发 Vue?](https://emacs-china.org/t/topic/4561)
