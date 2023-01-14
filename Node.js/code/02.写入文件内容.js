//1.导入fs文件系统模块
const fs =require('fs')
 //2.调用 fs.wwrite()，写入文件内容
 //参数1，表示文件的存放路径
 //参数2，表示写入内容
 //参数3.回调函数
 fs.writeFile('./2.txt','12343225432',function(err){
    if(err){
        return console.log('文件写入失败'+err.message)
    }
    console.log('文件写入成功！')
 })