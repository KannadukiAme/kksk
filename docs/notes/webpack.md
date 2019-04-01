# webpack

> 记录webpack常用配置和一些实践

## 安装

```bash
yarn add -D webpack webpack-cli
```

## 配置

新建webpack.config.js

```js
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './es6/main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: path.join(__dirname, 'es6'),
                query: {
                  presets: 'es2015',
                },
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};
```

## webpack-chain插件

### 安装

```
yarn add -D webpack-chain
```

### 配置

webpack.config.js

```js
const path = require('path');
const Config = require('webpack-chain');

const config = new Config();

config
  // Interact with entry points
  .entry('index')
  .add('./src/main.js')
  .end()
  // Modify output settings
  .output
  .path(path.resolve(__dirname, 'static'))
  .filename('[name].bundle.js');

// Export the completed configuration object to be consumed by webpack
module.exports = config.toConfig();
```