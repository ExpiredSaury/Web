// const http =require('http')
// const server =http.createServer()
// server.on('request',(req,res)=>{
//     //获取请求的Url地址
//     const url=req.url
//     //设置默认的响应内容为404 not found
//     let content='404 not found'
//     //判断用户请i去是否为 / 或 /index.html首页
//     //首页用户请求的是否为 /about.html关于页面
//     if(url == '/' || url=='/index.html'){
//         content ='<h1>首页</h1>'
//     }else if(url=='/about.html'){
//         content ='<h1>关于页面</h1>'
//     }

//     //设置Content-Type 响应头防止中文乱码
//     res.setHeader('Content-Type','text/html; charset=utf-8')
//     //使用res.end(),把内容响应给客户端
//     res.end(content)

// })

// server.listen(888,()=>{
//     console.log('server running at http://127.0.0.1:888')
// })

console.log(module);