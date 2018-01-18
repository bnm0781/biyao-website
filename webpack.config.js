var path =  require（“ path ”）;
var webpack = require（' webpack '）;
模块。exports  = {
    条目：“ src / script / model1.js ”，
    输出： {
        路径：__dirname，
        文件名：“ bundle.js ”
    }，
    模块： {
        装载机： [
            {
                测试：路径。加入（__dirname，“ es2015 ”），
                加载器：“ babel-loader ”，
                查询： {
                    预设： [ “ env ” ]
                }
            }，
            {
                测试：/ \。css /，
                loader ：“ style-loader！css-loader ”
            }
        ]
    }，
    插件： [  
                新的 webpack.BannerPlugin（`　 ┏┓┏┓
 　　　　　　　┏┛┻━━━━━┛┻┓
 　　　　　　　┃┃ 　
 　　　　　　　┃━┃
 　　　　　　　┃> <┃
 　　　　　　　┃┃
 　　　　　　　┃...⌒...┃
 　　　　　　　┃┃
 　　　　　　　┗━┓┏━┛
 　　　　　　　　 ┃┃代码远离动物保护的bug　　　　　　　　　　
 　　　　　　　　 ┃┃神兽保佑，代码无bug
 　　　　　　　　 ┃┃　　　　　　　　　　　
 　　　　　　　　 ┃┃  　　　　　　
 　　　　　　　　 ┃┃
 　　　　　　　　 ┃┃　　　　　　　　　　　
 　　　　　　　　 ┃┗━━━┓
 　　　　　　　　 ┃┣┓
 　　　　　　　　 ┃┏┛
 　　　　　　　　 ┗┓┓┏━┳┓┏┛
 　　　　　　　　　┃┫┫┃┫┫
 　　　　　　　　　┗┻┛┗┻┛ `）    
    ]
}
// console.log（路径）