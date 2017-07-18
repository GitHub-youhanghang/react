var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname + '/src',  // 上下文
    entry: "./js/root.js", // 入口文件
    module: {
        loaders: [
            {
                test: /\.js?$/, //正则表达式，匹配所有的js文件
                exclude: /(node_modules)/, //跳过node_modules文件
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'], //加载react es2015相关的包
                    plugins: ['react-html-attrs']
                }
            },
            // ant-degisn 的配置文件
            {
                test: /\.css$/,
                loader:'style-loader!css-loader'
            }
        ]
    },
    output: {
        path: __dirname + "/src/",
        publicPath:'/build/',
        filename: "bundle.js"
    }
}