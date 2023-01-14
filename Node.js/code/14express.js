const express =require('express')

//创建web服务器
const app =express()

//监听GET和POST请求
app.get('/user',(req,res)=>{
    res.send({name:'zhang',age:18,gender:'男'})

})
app.post('/user',(req,res)=>{
    //向客户端发送文本内容
    res.send('请求成功')
})


app.get('/',(req,res)=>{
    //req.query默认是一个空对象，
    //客户端使用 ?name=zs&age=18 这种查询字符串形式，发送到服务器的参数
    //可以通过req.query 对象访问到 例如：
    //req.query.name  req.query.age
    console.log(req.query)
    res.send(req.query)
})

app.get('/user/:id',(req,res)=>{
    console.log(req.params)
    res.send(req.params)

})

app.get('/user/:ids/:name',(req,res)=>{
    //req.params默认是一个空对象
     //里面存放着通过 : 动态匹配到的参数值
     console.log(req.params)
     res.send(req.params)
 })
//调用app.listen端口号，启动成功后的回调函数，启动服务器
app.listen(888,()=>{
    console.log('express server running at http://127.0.0.1:888');
})