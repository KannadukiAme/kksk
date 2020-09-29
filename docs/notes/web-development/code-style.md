# CodeStyle

> 神無月雨的代码风格

## 代码风格

**一律不写分号**

```js
// ✖
const num = 1;

// 〇
const num = 1
```

**一律使用单引号**

```js
// ✖
const str = "abc"

// 〇
const str = 'abc'
```

**一律使用2个键位的空格缩进**

```js
// ✖
function fn1(){
    return 0
}

// 〇
function fn1(){
  return 0
}
```

## ESLint规则

```json
{
  "rules": {
    "semi": [
      "error",
      "never"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "indent": [
      "error",
      2
    ]
  }
}
```

VSCode插件

[vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## EditorConfig

```conf
# .editorconfig
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
insert_final_newline = true
trim_trailing_whitespace = true
```

VSCode插件

[EditorConfig for VSCode](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
