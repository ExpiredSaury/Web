//导入自定义的格式化时间的模块
const TIME=require('./12定义格式化时间')  


const dt=new Date()

const newDT=TIME.dataFormat(dt)
console.log(newDT)