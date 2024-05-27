const path = require("path")

module.exports ={
    //入口文件配置
    entry:"./src/index.js",
    //出口文件配置
    output:{
        //出口文件夹
        path:path.resolve(__dirname,"./dist"),
        //出口文件
        filename:"main.js",
    },
    //模式
    mode:"production",
    //loader加载器
    module:{
        rules:[],
    },
    //plugin插件
    plugins:[],
}