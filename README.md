# Webpack5 从0到1 构建一个react + ts + eslint + prettier 脚手架 
> 可参考我的github仓库的每条提交记录 https://github.com/HunterXing/react-cli-next
> 具体内容看 basic分支的提交记录 https://github.com/HunterXing/react-cli-next/tree/basic

# 一、最基础的配置

## 1、安装webpack相关依赖

```javascript
npm install webpack webpack-cli webpack-dev-server webpack-merge -D
```

这是整个脚手架的基础。

## 2、webpack 配置

### 2.1 创建基本的目录结构

```
.
├── build
│   ├── webpack.config.common.js     // webpack公共配置
│   ├── webpack.config.dev.js        // 开发环境配置
│   ├── webpack.config.prod.js       // 生产环境配置
│   └── webpack.config.js            // 所有配置入口
├── public                           // 模版等静态文件
│   └── index.html
└── src                              // 放置开发代码位置
    └── index.tsx
```



### 2.2 配置webpack各个环境的打包配置

#### 2.1.1 公共配置

其中的 `html-webpack-plugin` 需要安装

```
npm i html-webpack-plugin -D
```

`webpack.common.js` 

```js
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // webpack 配置
  // 入口起点
  entry: './src/index.tsx',
  // 输出
  output: {
    // 输出文件名
    filename: 'scripts/[name].[contenthash].js',
    // 输出路径
    path: resolve(__dirname, '../dist'),
    clean: true, // 打包前清理 dist 文件夹
  },
  // loader 配置
  module: {
    rules: [
      
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.jsx', '.js'], 
  },
  // plugins 的配置
  plugins: [
    // 功能：默认会创建一个空的html文件，自动引入打包输出的所有资源（js/css）
    new HtmlWebpackPlugin({
      // 增加一个配置
      // 复制 '../public/index.html' 文件，并自动引入打包输出的所有资源（js/css）
      template: resolve(__dirname, '../public/index.html'),
    }),
  ],
}
```

#### 2.1.2 开发环境配置

`webpack.config.dev.js`

```js
module.exports = {
  mode: 'development',
  module: {
    rules: [
      
    ]
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: '../dist', // 将 ../dist 目录下的文件作为 web 服务的根目录。
    compress: true,
    port : 3000, // 设置端口号
    open : true, // 自动打开本地默认浏览器
    hot: true, // 开启热更新
    proxy: {
      // 代理到后端的服务地址，会拦截所有以 '/api' 开头的请求地址。自行修改此处
      // '/api': {
      //   target: 'http://localhost:3010',
      //   pathRewrite: {
      //     '^/api': ''
      //   }
      // }
    },
    historyApiFallback: true
  }
}
```



#### 2.1.3 生产环境配置

`webpack.config.prod.js`

```js
module.exports = {
  mode: 'production',
  output: {
    filename: 'scripts/[name].[contenthash].js'
  },
  module: {
    rules: [
      
    ]
  },
  plugins: [
      
  ]
}
```



#### 2.1.4 配置入口

`webpack.config.js`

```js
// 所有环境配置的入口文件
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.config.common')
const productionConfig = require('./webpack.config.prod')
const developmentConfig = require('./webpack.config.dev')

module.exports = (env) => {
  switch(true) {
    case env.development:
      return merge(commonConfig, developmentConfig)

    case env.production:
      return merge(commonConfig, productionConfig)

    defult:
      return new Error('No matching configuration was found')
  }
}
```



### 2.3 模板文件

`index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React App</title>
</head>
<body>
  <div id='root'></div>
</body>
</html>
```



### 2.4 修改npm 脚本

```json
{
  ...,
  "scripts": {
    "start": "webpack serve -c ./build/webpack.config.js --env development",
    "build": "webpack -c ./build/webpack.config.js --env production",
  },
}

```



### 2.5 配置 React 和 TypeScript环境

#### 2.5.1  安装 react 相关库及配置

- 安装相关库

  基础库

  ```
  npm i react react-dom
  ```

  类型库
  ```
   npm i @types/react @types/react-dom -D
  ```

- 在`src/index.tsx` 来编写 `React` 组件，此代码将会被展示到`index.html` 文件`id="root"`的 `div` 元素下：

  ```react
  import React from "react";
  import ReactDOM from "react-dom";
  
  const App = () => <h1>Hello World!</h1>;
  
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
  ```

  

#### 2.5.2 安装 typescript 及 babel转义插件

在项目中,我们需要使用 `Babel` 将 `React` 和 `TypeScript` 代码转换为 `JavaScript`。接下来我们安装一些 `Babel` 工具

```bash
npm i babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/plugin-transform-runtime @babel/runtime typescript -D
各个包作用如下：
```

- `babel-loader`通知 `Babel` 将`React` 和 `TypeScript`代码转换为 `JavaScript`
- `@babel/core`: `Babel` 核心库
- `@babel/preset-env`:让我们可以在不支持 `JavaScript` 最新特性的浏览器中使用 `ES6+`语法
- `@babel/preset-react`:将 `React`代码转换为 `JavaScript`
- `@babel/preset-typescript`:将 `TypeScript` 代码转换为 `JavaScript`
- `@babel/plugin-transform-runtime` 和`@babel/runtime`:支持在低版本浏览器使用 `ES6+`语法,如 `async/await`



接下来在 `webpack.config.common.js`的module中添加规则用来处理tsx

```js
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
    ],
  },
```



## 3、 运行

```
npm run start
```

![image-20230730125336772](https://raw.githubusercontent.com/HunterXing/note-images/main/images/image-20230730125336772.png)



# 二、css 处理 和文件处理

## 1、css 处理、css Modules支持

```
npm install css-loader style-loader less less-loader -D
```

webpack.config.common.js中添加如下规则

```js
rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'less-loader', // Add less-loader for processing Less files
        ],
      },
    ],

```



## 2、处理图片等静态资源

过去在 Webpack4 时，我们处理图片资源通过 `file-loader` 和 `url-loader` 进行处理

现在 Webpack5 已经将两个 Loader 功能内置到 Webpack 里了，我们只需要简单配置即可处理图片资源

```js
rules: [
  {
    test: /\.(png|jpe?g|gif|webp)$/,
    type: "asset",
    parser: {
      dataUrlCondition: {
        // 小于10kb的图片会被base64处理
        // 优点：减少请求数量
        // 缺点：体积变得更大
        maxSize: 10 * 1024 
      }
    },
    // 图片生成规则
    generator: {
      // 将图片文件输出到 static/imgs 目录中
      // 将图片文件命名 [hash:8][ext][query]
      // [hash:8]: hash值取8位
      // [ext]: 使用之前的文件扩展名
      // [query]: 添加之前的query参数
      filename: "static/imgs/[hash:8][ext][query]",
    },
  },
  // 字体文件等资源
  {
      test: /\.(ttf|woff2)$/,
      type: "asset/resource",
      generator: {
        filename: "static/media/[hash:8][ext][query]",
      }
  }
]
```

`type: "asset/resource"`和`type: "asset"`的区别：

1. `type: "asset/resource"` 相当于`file-loader`, 将文件转化成 Webpack 能识别的资源，其他不做处理
2. `type: "asset"` 相当于`url-loader`, 将文件转化成 Webpack 能识别的资源，同时小于某个大小的资源会处理成 data URI 形式



# 三、eslint + prettier

## 1、安装相关依赖

```
# For ESLint
npm install eslint eslint-webpack-plugin --save-dev

# For Prettier
npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev

# For TypeScript support in ESLint
npm install typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```



## 2、配置

### 2.1 `.eslintrc.js`

```js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};

```

### 2.2 `.prettierrc`

```js
{
  "singleQuote": true,
  "trailingComma": "es5",
  "semi": true
}

```

### 2.3 `webpack.config.common.js`

```js
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // ... Other Webpack configuration ...
  plugins: [
    // ... Other plugins ...
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
  ],
};

```

## 3、使用

### 3.1 脚本配置

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint": "eslint \"./**/*.{ts,tsx}\"",
    "lint:fix": "eslint \"./**/*.{ts,tsx}\" --fix",
  }
}
```





# 四、配置husky、lint-stadge、commitlint 规范工程

https://github.com/typicode/husky

https://github.com/okonet/lint-staged

https://github.com/conventional-changelog/commitlint

按照上面的三个库配置即可

[可参考此处代码提交记录](https://github.com/HunterXing/react-cli-next/commit/cfb693a81421bb53a489096361f5a73eaed2bc14)
