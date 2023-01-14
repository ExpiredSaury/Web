//1.导入fs模块
const fs=require('fs')
const { resolve } = require('path')
//导入path模块
const path=require('path')

//定义正则表达式,分别匹配style和script标签
//  \s匹配空白字符  \S匹配非空白字符   *表示可以出现任意多次
const regStyle=/<style>[\s\S]*<\/style>/
const regScript =/<script>[\s\S]*<\/script>/

//调用fs.readFile(),读取文件
fs.readFile(path.join(__dirname,'./index.html'),'utf8',function(err,data){
    if(err){
        return console.log('读取文件失败！' + err.message)
    }
    //读取文件成功后，调用对应的三个方法，分别拆解出css,js,html文件
    resolveCss(data)
    resolveJS(data)
    resolveHTML(data)
})

//定义处理css样式的方法
function resolveCss(htmlStr){
    const r1=regStyle.exec(htmlStr)
    const newCss=r1[0].replace('<style>','').replace('</style>','')
    //调用fs.writeFile()，提取的样式，写入到block文件中，index.css的文件里面
    fs.writeFile(path.join(__dirname,'./clock/index.css'),newCss,function(err){
        if(err){
            return console.log('写入Css样式失败！'+ err.message)
        }
        console.log('写入CSS样式成功！')
    })

}

//定义处理js脚本的方法
function resolveJS(htmlStr){
    //通过正则提取对应的script标签
    const r2=regScript.exec(htmlStr)
    //将提取出来的内容，做进一步的处理
    const newJS=r2[0].replace('<script>','').replace('</script>','')
    //将处理的结果，写入到block目录中的index.js文件里面
    fs.writeFile(path.join(__dirname,'./clock/index.js'),newJS,function(err){
        if(err){
            return console.log('写入JavaScript脚本失败！'+ err.message)
        }
        console.log('写入JavaScript成功！')
    })
}

// 定义处理HTML的方法
function resolveHTML(htmlStr){
    //将字符串调用replace方法，把内嵌的style方法和script标签，替换为外联的Link和script标签
    const newHTML= htmlStr.replace(regStyle,'<link rel="stylesheet" href="./index.css">').replace(regScript,'<script src="./index.js"></script>')
    //写入index.html文件
    fs.writeFile(path.join(__dirname,'./clock/index.html'),newHTML,function(err){
        if(err){
            return console.log('写入HTML文件失败！'+err.message)
        }
        console.log('写入HTML样式成功！')
    })
}