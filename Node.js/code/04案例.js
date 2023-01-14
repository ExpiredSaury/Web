const fs=require('fs')

fs.readFile('./成绩.txt','utf8',function(err,data){
    if(err){
        return console.log('文件读取失败' + err.message);
    }
    // console.log('文件读取成功',data);
    //先把成绩的数据按照空格分割
    const arrOld=data.split(' ')
    //循环分割后的数组，对每一项数据，进行字符串的替换操作
    const arrNew=[]
    arrOld.forEach(item =>{
        arrNew.push(item.replace('=',':'))
    })
  
    //把新数组中的每一项，进行合并，得到一个新的字符串
    const newStr=arrNew.join('\r\n')
    // console.log(newStr);

    //调用fs.wreiteFile()方法，把处理完毕的数据，存到新文件中
    fs.writeFile('./成绩-ok.txt',newStr,function(err){
        if(err){
            return console.log('文件写入失败'+ err.message);
        }
        console.log('文件写入成功！');
    })

})