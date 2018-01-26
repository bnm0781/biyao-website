var path = require("path");
var webpack=require('webpack');
module.exports = {
    entry:"src/script/model1.js",
    output:{
        path:__dirname,
        filename:"bundle.js"
    },
    module:{
        loaders:[
            {
                test:path.join(__dirname,"es2015"),
                loader:"babel-loader",
                query:{
                    presets:["env"]
                }
            },
            {
                test:/\.css/,
                loader:"style-loader!css-loader"
            }
        ]
    },
    plugins:[  
                new webpack.BannerPlugin(`　 ┏┓　　  ┏┓
 　　　　　　　┏┛┻━━━━━┛┻┓
 　　　　　　　┃　　　　　　┃ 　
 　　　　　　　┃　　　━　　 ┃
 　　　　　　　┃　＞　　＜　 ┃
 　　　　　　　┃　　　　　　 ┃
 　　　　　　　┃... ⌒ ... ┃
 　　　　　　　┃　　　　　　┃
 　　　　　　　┗━┓　　　┏━┛
 　　　　　　　　 ┃　　　┃　 Code is far away from bug with the animal protecting　　　　　　　　　　
 　　　　　　　　 ┃　　　┃   神兽保佑,代码无bug
 　　　　　　　　 ┃　　　┃　　　　　　　　　　　
 　　　　　　　　 ┃　　　┃  　　　　　　
 　　　　　　　　 ┃　　　┃
 　　　　　　　　 ┃　　　┃　　　　　　　　　　　
 　　　　　　　　 ┃　　　┗━━━┓
 　　　　　　　　 ┃　　　　　　　┣┓
 　　　　　　　　 ┃　　　　　　　┏┛
 　　　　　　　　 ┗┓┓┏━┳┓┏┛
 　　　　　　　　　┃┫┫　┃┫┫
 　　　　　　　　　┗┻┛　┗┻┛`)    
    ]
}
//console.log(path)