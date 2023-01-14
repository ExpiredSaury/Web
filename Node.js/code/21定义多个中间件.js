const express =require('express')
const app =express()

//定义第一个全局中间件
app.use((req,res,next)=>{

    console.log('调用了第一个全局中间件')
    next()
})
//定义第二个全局中间件
app.use((req,res,next)=>{

    console.log('调用了第二个全局中间件')
    next()
})

//定义一个路由
app.get('/use',(req,res)=>{
    res.send('User page!')
})
//定义一个路由
app.listen(888,()=>{
    console.log('http://127.0.0.1:888');
})
