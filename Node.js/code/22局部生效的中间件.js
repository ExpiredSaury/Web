const express =require('express')
const app =express()

//定义第一个全局中间件

const mw1=(req,res,next)=>{
    console.log('调用了局部生效的中间件')
}

app.get('/',mw1,(req,res)=>{
    res.send('Home page!')
})


app.get('/user',(req,res)=>{
    res.send('User page!')
})

app.listen(888,()=>{
    console.log('http://127.0.0.1:888');
})