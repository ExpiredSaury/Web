const express =require('express')
const app=express()

//1.导入路由模块
const router=require('./18创建路由模块')
//2.注册路由模块
app.use(router)


app.listen(888,()=>{
    console.log('http://127.0.0.1:888');
})