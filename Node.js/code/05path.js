const path=require('path')

// const pathStr = path.join('/a','/b/c','../','./d','e')
// console.log(pathStr)

// const pathStr2=path.join(__dirname,'/05.txt')
// console.log(pathStr2)
//定义文件的存放路径
const fpath='/a/b/c/index.html'
// const fullName=path.basename(fpath)
// console.log(fullName)

// const nameResult=path.basename(fpath,'.html')
// console.log(nameResult)
const fext=path.extname(fpath)
console.log(fext)