### 安装

[![Greenkeeper badge](https://badges.greenkeeper.io/ithinco/your-feature.svg)](https://greenkeeper.io/)

1、安装[6.9.1 NodeJS](https://nodejs.org/dist/v6.9.1/)

2、克隆本项目或者下载本项目压缩包到本地

```
git clone https://github.com/ithinco/your-feature.git

```
3、在命令行窗口的项目根目录下执行
```
npm install
```
### 项目结构


```
your-feature/
  README.md 
  node_modules/
  package.json
  .gitignore
  src/               //开发时自己写的资源按分类放到 src 目录下的文件夹中并引用
    js/
    css/
    images/
      sprites/
  build/             //开发完成后执行相应命令压缩资源，在生产文件中引用功能目录下 build 文件夹中的资源
    js/
    css/
    images/
      sprites/
```

### 可用命令

```
npm run uglifyJS //压缩 JS 文件，最终文件在 build 目录中的 js 目录里
npm run images //压缩普通图片资源，最终文件在 build 目录中的 images 目录里
npm run sprites //拼接压缩精灵图，最终生成的 sprites 文件及相应 css 在 src/css 文件夹中，暂时只支持 png 格式
npm run minifyCSS //压缩 CSS 文件，最终压缩的文件在 build 目录中的 css 目录里
```

### 注意事项
1、引进第三方库如 JQuery 时，如果并不需要全部功能，可以按需定制下载相应资源，比如 [JQuery Builder](http://projects.jga.me/jquery-builder/)

2、引入压缩后的 JS 文件时，注意引入顺序，依赖第三方库应该把第三方库放在前面

3、尽量杜绝在 HTML 文件中写 JS 和 CSS
