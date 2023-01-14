//1.导入fs模块
const fs=require('fs')
//2.调用fs.readFile()读取文件
//参数1，读取文件的存放路径
//参数2，读取文件的编码格式，一般默认utf-8
//参数3,回到回调函数，拿到读取失败和成功的结果， err data
fs.readFile('./1.txt','utf-8',function(err,data){
   if(err){
     return console.log('读取失败'+ err.message)
   }else{
    console.log('读取文件成功!'+ data);
   }
})