const express=require('express')
const app=express()



//常量 mw 所指向的，就是一个中间件函数
const mw =function(req,res,next){
    console.log('这是一个最简单的中间件函数');
    //获取到请求到达服务器的时间
    const time=Date.now()
    // 为req对象，挂载自定义属性，从而把时间共享给后面的所有路由
    req.startTime = time

    
    next()
}



app.get('/',(req,res)=>{
    res.send('Home page' + req.startTime)
})

app.post('/user', (req,res) =>{
    res.send('User Page!'  + req.startTime)
})

app.listen(888,()=>{
    console.log('http://127.0.0.1:888');
})
