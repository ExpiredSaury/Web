//导入express
const express =require('express')
//创建服务器实例
const app=express()

//配置解析数据的中间件
app.use(express.urlencoded({extended:false}))


//一定要在路由之前，配置cors这个中间件，从而解决接口跨域问题
const cors=require('cors')
app.use(cors())


const router = require('./24路由模块')

//把路由模块注册到app上
app.use('/api',router)

//启动服务器
app.listen(888,()=>{
    console.log('express server running at http://127.0.0.1');
})