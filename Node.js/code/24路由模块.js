const express =require('express')

const router=express.Router()

//GET接口
//这里挂载对应的路由
router.get('/get',(req,res)=>{
    //通过req.query获取客户端通过查询字符串，发送到服务器的数据
    const query=req.query
    //调用res.send()，向客户端响应处理的函数
    res.send({
        status:0,//0表示成功，1表示失败
        msg:'GET 请求成功', //状态的描述
        data:query   //需要相应给客户端的数据
    })

})
//POST接口
router.post('/post',(req,res)=>{
    //通过req.query获取客户端通过查询字符串，发送到服务器的数据
    const body=req.body
    //调用res.send()，向客户端响应处理的函数
    res.send({
        status:0,//0表示成功，1表示失败
        msg:'POST 请求成功', //状态的描述
        data:body   //需要相应给客户端的数据
    })

})


module.exports =router


